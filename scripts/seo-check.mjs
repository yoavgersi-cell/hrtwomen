#!/usr/bin/env node
// Daily SEO / GEO health check. Crawls every URL in the sitemap of BASE_URL
// and fails loudly on anything that can silently cost search traffic:
// broken pages, accidental noindex, wrong canonicals, missing titles or
// descriptions, broken JSON-LD, a missing medical-review bar, broken internal
// links, and regressions in robots.txt / llms.txt / known redirects.
//
//   node scripts/seo-check.mjs https://www.hrtwomen.com
//   node scripts/seo-check.mjs http://localhost:3000 --canonical-origin https://www.hrtwomen.com
//
// Exit code 1 when any check fails. Writes a markdown report to
// $SEO_REPORT_PATH (default: seo-report.md).
import { writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const BASE = (args.find((a) => !a.startsWith("--")) ?? "https://www.hrtwomen.com").replace(/\/$/, "");
const coIdx = args.indexOf("--canonical-origin");
const CANONICAL_ORIGIN = coIdx >= 0 ? args[coIdx + 1] : "https://www.hrtwomen.com";
const REPORT = process.env.SEO_REPORT_PATH ?? "seo-report.md";

// Paths that must permanently redirect to the homepage (removed thin pages).
const REDIRECTS = [
  ["/online-hrt", "/"],
  ["/online-hrt/texas", "/"],
];
// Content pages must show the medical reviewer (YMYL trust signal).
const needsReviewBar = (p) =>
  p === "/" || p === "/reviews" || p === "/articles" || p === "/how-we-rank" ||
  p.startsWith("/reviews/") || p.startsWith("/articles/") || /^\/[a-z]+-vs-[a-z]+$/.test(p);
const REVIEW_BAR = /Reviewed for medical accuracy by|Medical reviewer:/;

const failures = [];
const warnings = [];
const fail = (where, msg) => failures.push(`\`${where}\` - ${msg}`);
const warn = (where, msg) => warnings.push(`\`${where}\` - ${msg}`);

async function get(path, opts = {}) {
  const url = path.startsWith("http") ? path : BASE + path;
  for (let attempt = 1; ; attempt++) {
    try {
      return await fetch(url, {
        redirect: opts.redirect ?? "follow",
        headers: { "user-agent": "HRTWomen-SEO-Monitor/1.0 (+https://www.hrtwomen.com)" },
        signal: AbortSignal.timeout(30000),
      });
    } catch (e) {
      if (attempt >= 3) throw e;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
}

const toPath = (u) => {
  const x = new URL(u, BASE);
  return x.pathname.replace(/\/$/, "") || "/";
};
const attr = (html, re) => html.match(re)?.[1];

async function checkSiteFiles() {
  const robots = await get("/robots.txt");
  const rt = robots.ok ? await robots.text() : "";
  if (!robots.ok) fail("/robots.txt", `HTTP ${robots.status}`);
  else {
    if (/Disallow:\s*\/\s*$/m.test(rt)) fail("/robots.txt", "contains `Disallow: /` - the whole site is blocked");
    if (!/Sitemap:\s*\S+/i.test(rt)) fail("/robots.txt", "no Sitemap line");
    for (const bot of ["OAI-SearchBot", "PerplexityBot", "ClaudeBot", "Bingbot"])
      if (!rt.includes(bot)) warn("/robots.txt", `${bot} not named explicitly`);
  }
  const llms = await get("/llms.txt");
  if (!llms.ok) fail("/llms.txt", `HTTP ${llms.status}`);
  else if (!(await llms.text()).startsWith("# ")) fail("/llms.txt", "does not start with a markdown H1");

  for (const [from, to] of REDIRECTS) {
    const r = await get(from, { redirect: "manual" });
    const loc = r.headers.get("location");
    if (![301, 308].includes(r.status)) fail(from, `expected permanent redirect, got HTTP ${r.status}`);
    else if (!loc || toPath(loc) !== to) fail(from, `redirects to ${loc}, expected ${to}`);
  }
}

async function sitemapPaths() {
  const r = await get("/sitemap.xml");
  if (!r.ok) {
    fail("/sitemap.xml", `HTTP ${r.status}`);
    return [];
  }
  const locs = [...(await r.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (locs.length < 10) fail("/sitemap.xml", `only ${locs.length} URLs - expected the full site`);
  for (const l of locs) if (!l.startsWith(CANONICAL_ORIGIN)) fail("/sitemap.xml", `URL on wrong origin: ${l}`);
  return locs.map(toPath);
}

async function checkPage(path, linkSet) {
  const r = await get(path, { redirect: "manual" });
  if (r.status !== 200) return fail(path, `HTTP ${r.status} (sitemap URLs must return 200)`);
  const xrt = r.headers.get("x-robots-tag") ?? "";
  if (/noindex/i.test(xrt)) fail(path, `X-Robots-Tag: ${xrt}`);
  const html = await r.text();

  const robots = attr(html, /<meta name="robots" content="([^"]*)"/);
  if (robots && /noindex/i.test(robots)) fail(path, `meta robots is "${robots}"`);

  const title = attr(html, /<title>([^<]*)<\/title>/);
  if (!title) fail(path, "missing <title>");
  else if (title.length > 70) warn(path, `title is ${title.length} chars`);

  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!desc) fail(path, "missing meta description");
  else if (desc.length < 70 || desc.length > 330) warn(path, `meta description is ${desc.length} chars`);

  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const expected = CANONICAL_ORIGIN + (path === "/" ? "" : path);
  if (!canonical) fail(path, "missing canonical");
  else if (canonical.replace(/\/$/, "") !== expected) fail(path, `canonical is ${canonical}, expected ${expected}`);

  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1s !== 1) fail(path, `${h1s} <h1> elements (expected 1)`);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (!blocks.length) fail(path, "no JSON-LD structured data");
  for (const b of blocks) {
    try {
      JSON.parse(b[1]);
    } catch {
      fail(path, "invalid JSON-LD block");
    }
  }

  if (needsReviewBar(path) && !REVIEW_BAR.test(html)) fail(path, "medical reviewer bar missing");

  for (const m of html.matchAll(/<a\s[^>]*href="([^"#?]+)/g)) {
    const href = m[1];
    if (href.startsWith("/") && !href.startsWith("//")) linkSet.add(toPath(href));
    else if (href.startsWith(CANONICAL_ORIGIN)) linkSet.add(toPath(href));
  }
}

async function checkLinks(linkSet, known) {
  const todo = [...linkSet].filter((p) => !known.has(p) && !p.startsWith("/api/"));
  for (const p of todo) {
    const r = await get(p);
    if (r.status >= 400) fail(p, `internal link returns HTTP ${r.status}`);
  }
}

const started = Date.now();
await checkSiteFiles();
const paths = await sitemapPaths();
const links = new Set();
for (const p of paths) await checkPage(p, links);
await checkLinks(links, new Set(paths));

const ok = failures.length === 0;
const report = [
  `## SEO health check: ${ok ? "PASS" : "FAIL"}`,
  "",
  `Site: ${BASE} - ${paths.length} sitemap pages, ${links.size} internal links checked in ${Math.round((Date.now() - started) / 1000)}s.`,
  "",
  ...(failures.length ? ["### Failures", "", ...failures.map((f) => `- ${f}`), ""] : []),
  ...(warnings.length ? ["### Warnings", "", ...warnings.map((w) => `- ${w}`), ""] : []),
  ...(ok && !warnings.length ? ["Everything checked out."] : []),
].join("\n");
writeFileSync(REPORT, report + "\n");
console.log(report);
process.exit(ok ? 0 : 1);
