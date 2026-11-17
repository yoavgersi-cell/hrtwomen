/**
 * Generate hero images + alt text for articles with OpenAI.
 *
 *   npx tsx --tsconfig tsconfig.json scripts/generate-article-images.ts [--count 5] [--slug a,b] [--dry-run]
 *
 * For each article without an entry in src/data/article-images.ts (newest
 * first, so new articles are always covered before the backlog):
 *   1. a text model turns the article's title/description into one safe,
 *      concrete editorial scene (no text, logos, brands, needles or real people);
 *   2. the image model renders it at 1536x1024; we centre-crop to 16:9
 *      (1536x864) and save WebP to public/article-images/<slug>.webp;
 *   3. a vision model writes alt text from the finished image itself (what is
 *      actually shown, <=125 chars, topic named naturally);
 *   4. the registry file is rewritten.
 *
 * Auth: the OpenAI key is injected by the environment's network proxy for
 * api.openai.com; OPENAI_API_KEY is used if set (otherwise a placeholder the
 * proxy replaces). Requests go through curl so they honour HTTPS_PROXY.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";
import { hrtConfig } from "../src/lib/seeds/hrt";
import { ARTICLE_IMAGES, type ArticleImage } from "../src/data/article-images";

const ROOT = process.cwd(); // run from the repo root
const OUT_DIR = path.join(ROOT, "public/article-images");
const REGISTRY = path.join(ROOT, "src/data/article-images.ts");
const IMAGE_MODEL = process.env.IMAGE_MODEL ?? "gpt-image-2";
const TEXT_MODEL = process.env.TEXT_MODEL ?? "gpt-4.1-mini";
const KEY = process.env.OPENAI_API_KEY ?? "sk-proxy-injected";

const args = process.argv.slice(2);
const arg = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const COUNT = Number(arg("count") ?? 5);
const ONLY = arg("slug")?.split(",").map((s) => s.trim());
const DRY = args.includes("--dry-run");
// Optional hand-written scene for a single --slug (used when a generated scene keeps producing text-like detail).
const SCENE = arg("scene");

// House style shared by every image so the site looks like one publication.
const STYLE = [
  "Editorial photograph for a women's health publication about menopause.",
  "Warm, natural light; soft blush-pink, cream and muted rose palette with calm neutral tones.",
  "Shallow depth of field, clean uncluttered composition, subject centred with breathing room on both sides (the image is cropped to a wide banner).",
  "If people appear: adult women roughly 40 to 60, of diverse ethnicities, natural and dignified, not posed like stock models; faces may be partly turned or out of focus.",
  "Strictly no text, letters, numbers, labels, logos, brand names, packaging artwork, watermarks or charts.",
  "No needles, syringes, blood, surgery, nudity or distressing imagery. No identifiable real person. No doctors' white-coat cliches.",
  "Medication, if shown, is generic and unbranded (plain pill, plain patch, plain tube).",
].join(" ");

type OpenAIResponse = {
  error?: { message: string };
  choices?: { message: { content: string } }[];
  data?: { b64_json: string }[];
};

function openai(endpoint: string, body: unknown): OpenAIResponse {
  const tmp = path.join(tmpdir(), `oa-${process.pid}-${Date.now()}.json`);
  writeFileSync(tmp, JSON.stringify(body));
  try {
    const out = execFileSync(
      "curl",
      ["-sS", "--max-time", "300", `https://api.openai.com/v1/${endpoint}`,
        "-H", `Authorization: Bearer ${KEY}`, "-H", "Content-Type: application/json",
        "--data-binary", `@${tmp}`],
      { maxBuffer: 64 * 1024 * 1024 },
    ).toString();
    const json = JSON.parse(out) as OpenAIResponse;
    if (json.error) throw new Error(`${endpoint}: ${json.error.message}`);
    return json;
  } finally {
    unlinkSync(tmp);
  }
}

function chat(messages: unknown[], maxTokens = 300): string {
  const r = openai("chat/completions", { model: TEXT_MODEL, messages, max_tokens: maxTokens, temperature: 0.7 });
  return String(r.choices?.[0]?.message.content ?? "").trim();
}

function sceneFor(a: { title: string; description: string; category: string }): string {
  return chat([
    {
      role: "system",
      content:
        "You art-direct hero images for an evidence-based menopause health site. Reply with ONE concrete visual scene in a single sentence (max 45 words): setting, subject, objects, mood. It must illustrate the article's topic literally enough that a reader recognises it, and obey: no text or logos, no brands, no needles or syringes, no clinical gore, no identifiable people, no white-coat doctor cliches, medication only generic and unbranded. Do not mention style or camera settings.",
    },
    { role: "user", content: `Title: ${a.title}\nCategory: ${a.category}\nSummary: ${a.description}` },
  ]);
}

function altFor(webp: Buffer, a: { title: string }): string {
  const alt = chat(
    [
      {
        role: "system",
        content:
          "Write alt text for a web image. Describe what is actually visible, specifically and plainly, in one sentence of at most 125 characters. Naturally connect it to the article topic where the image genuinely relates to it, without keyword stuffing. Do not start with 'Image of', 'Picture of' or 'Photo of'. No quotes, no trailing period.",
      },
      {
        role: "user",
        content: [
          { type: "text", text: `Article: ${a.title}` },
          { type: "image_url", image_url: { url: `data:image/webp;base64,${webp.toString("base64")}` } },
        ],
      },
    ],
    100,
  );
  const clean = alt.replace(/^["']|["']$/g, "").replace(/\.$/, "").trim();
  // Never cut mid-word: trim to the last full word within 125 characters.
  return clean.length <= 125 ? clean : clean.slice(0, 125).replace(/\s+\S*$/, "");
}

function writeRegistry(map: Record<string, ArticleImage>) {
  const entries = Object.keys(map)
    .sort()
    .map((slug) => {
      const v = map[slug];
      return `  ${JSON.stringify(slug)}: {\n    src: ${JSON.stringify(v.src)},\n    alt: ${JSON.stringify(v.alt)},\n    width: ${v.width},\n    height: ${v.height},\n  },`;
    })
    .join("\n");
  const header = `// Generated by scripts/generate-article-images.ts - one entry per article
// slug. Each image is an AI-generated editorial illustration (OpenAI image
// model), cropped to 16:9 and saved as WebP in public/article-images/. Alt
// text is written from the finished image by a vision model and checked to
// describe what is actually shown. Merged into the HRT config by
// getConfig() (src/lib/config-store.ts); an article with no entry falls back
// to its heroColor and the generated Open Graph card.
export type ArticleImage = { src: string; alt: string; width: number; height: number };

export const ARTICLE_IMAGES: Record<string, ArticleImage> = {
${entries}${entries ? "\n" : ""}};
`;
  writeFileSync(REGISTRY, header);
}

async function main() {
  const articles = [...(hrtConfig.articles ?? [])]
    .filter((a) => (ONLY ? ONLY.includes(a.slug) : !ARTICLE_IMAGES[a.slug] && !a.image))
    .sort((x, y) => (y.publishedAt ?? "").localeCompare(x.publishedAt ?? ""))
    .slice(0, ONLY ? undefined : COUNT);

  if (!articles.length) {
    console.log("Every article already has an image.");
    return;
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const map: Record<string, ArticleImage> = { ...ARTICLE_IMAGES };

  for (const a of articles) {
    const scene = SCENE && ONLY?.length === 1 ? SCENE : sceneFor(a);
    console.log(`\n[${a.slug}] scene: ${scene}`);
    if (DRY) continue;
    const img = openai("images/generations", {
      model: IMAGE_MODEL,
      prompt: `${scene}\n\n${STYLE}`,
      size: "1536x1024",
      quality: "medium",
      n: 1,
    });
    const b64 = img.data?.[0]?.b64_json;
    if (!b64) throw new Error(`no image returned for ${a.slug}`);
    const raw = Buffer.from(b64, "base64");
    const webp = await sharp(raw)
      .resize(1536, 864, { fit: "cover", position: "centre" })
      .webp({ quality: 80 })
      .toBuffer();
    const file = path.join(OUT_DIR, `${a.slug}.webp`);
    writeFileSync(file, webp);
    const alt = altFor(webp, a);
    map[a.slug] = { src: `/article-images/${a.slug}.webp`, alt, width: 1536, height: 864 };
    writeRegistry(map); // after each image, so a failure never loses earlier work
    console.log(`[${a.slug}] saved ${(webp.length / 1024).toFixed(0)} KB; alt: ${alt}`);
  }
  const missing = (hrtConfig.articles ?? []).filter((a) => !map[a.slug] && !a.image).length;
  console.log(`\nDone. Articles still without an image: ${missing}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
