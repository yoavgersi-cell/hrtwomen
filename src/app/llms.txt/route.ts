import { getConfig } from "@/lib/config-store";
import { NOINDEX_ARTICLE_SLUGS } from "@/lib/config";
import { REVIEWERS, reviewerDisplayName } from "@/data/reviewers";

// /llms.txt - a plain-markdown map of the site for AI assistants and answer
// engines (llmstxt.org convention). Generated from the same config as the
// pages and sitemap, so it can never list a page that doesn't exist.
const SITE_URL = "https://www.hrtwomen.com";

export const revalidate = 3600;

const oneLine = (s: string) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

export async function GET() {
  const cfg = await getConfig();
  const providerName = (id: string) => cfg.providers.find((p) => p.id === id)?.name ?? id;
  const ranked = cfg.providers.map((p) => p.name).join(", ");
  const reviewer = REVIEWERS[0];

  const lines: string[] = [
    "# HRT Women",
    "",
    "> Independent, medically reviewed guides and comparisons of online menopause and perimenopause hormone therapy (HRT) providers for women in the United States.",
    "",
    `HRT Women compares licensed telehealth providers that prescribe menopause hormone therapy. Current ranking: ${ranked}. Rankings are editorial; we may earn a commission from provider links, which does not affect rankings. Content is general information, not medical advice.`,
    ...(reviewer
      ? ["", `Medical content is reviewed for accuracy by ${reviewerDisplayName(reviewer)} (${SITE_URL}/reviewers/${reviewer.slug}).`]
      : []),
    "",
    "## Provider comparison",
    "",
    `- [Best online HRT providers for women](${SITE_URL}/): ranked comparison of ${ranked}`,
    `- [All provider reviews](${SITE_URL}/reviews)`,
    "",
    "## Provider reviews",
    "",
    ...(cfg.reviews ?? []).map(
      (r) => `- [${providerName(r.providerId)} review](${SITE_URL}/reviews/${r.slug}): ${oneLine(r.shortSummary)}`,
    ),
    "",
    "## Head-to-head comparisons",
    "",
    ...(cfg.battles ?? []).map((b) => `- [${b.title}](${SITE_URL}/${b.slug}): ${oneLine(b.description)}`),
    "",
    "## Guides",
    "",
    ...(cfg.articles ?? [])
      .filter((a) => !NOINDEX_ARTICLE_SLUGS.includes(a.slug))
      .map((a) => `- [${a.title}](${SITE_URL}/articles/${a.slug}): ${oneLine(a.description)}`),
    "",
    "## About and editorial standards",
    "",
    `- [How we rank providers](${SITE_URL}/how-we-rank)`,
    `- [Medical review policy](${SITE_URL}/medical-review-policy)`,
    `- [About HRT Women](${SITE_URL}/about)`,
    `- [Affiliate disclaimer](${SITE_URL}/disclaimer)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
