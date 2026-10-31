// ───── Article topic map ─────
// Drives the "Related Articles" block: articles sharing the most topics are
// linked first, so every guide links to its true neighbours instead of the
// first few articles in the seed array. Add a new article here when it ships.

const TOPICS: Record<string, string[]> = {
  "menopause-complete-guide": ["basics", "safety", "treatments", "perimenopause", "weight", "pillar"],
  "what-is-hrt": ["basics", "treatments", "safety"],
  "perimenopause-symptoms": ["basics", "perimenopause"],
  "hrt-for-perimenopause": ["perimenopause", "treatments", "basics"],
  "is-hrt-safe": ["safety", "basics"],
  "hrt-black-box-warning-removed": ["safety", "news"],
  "bioidentical-hormones-explained": ["treatments", "safety", "products"],
  "estrogen-patch-vs-pill": ["treatments", "products", "safety"],
  "progesterone-side-effects": ["treatments", "products", "perimenopause"],
  "testosterone-for-women": ["treatments", "safety", "news", "products"],
  "vaginal-estrogen": ["treatments", "products", "safety"],
  "glp1-menopause": ["weight", "treatments", "perimenopause", "news"],
  "how-to-get-hrt-online": ["providers", "online", "cost", "pillar"],
  "best-online-hrt-providers-compared": ["providers", "online", "legit", "cost"],
  "online-hrt-cost": ["providers", "cost", "online"],
  "winona-cost": ["winona", "cost", "providers"],
  "winona-products": ["winona", "products", "providers"],
  "is-winona-legit": ["winona", "legit", "providers"],
  "gala-cost": ["gala", "cost", "providers"],
  "is-gala-legit": ["gala", "legit", "providers"],
  "midi-cost": ["midi", "cost", "providers"],
  "is-midi-legit": ["midi", "legit", "providers"],
};

const BRANDS = new Set(["winona", "gala", "midi"]);

export function relatedArticleSlugs(slug: string, allSlugs: string[], limit = 4): string[] {
  const mine = new Set(TOPICS[slug] ?? []);
  return allSlugs
    .filter((s) => s !== slug)
    .map((s, i) => {
      const theirs = TOPICS[s] ?? [];
      // A shared provider brand (winona/gala/midi) outweighs a generic topic,
      // so brand clusters link to each other first.
      const shared = theirs
        .filter((t) => mine.has(t))
        .reduce((n, t) => n + (BRANDS.has(t) ? 2 : 1), 0);
      // Pillars get a small boost so every cluster feeds the hub pages.
      const pillar = theirs.includes("pillar") ? 0.5 : 0;
      return { s, score: shared + pillar, i };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .slice(0, limit)
    .map((x) => x.s);
}
