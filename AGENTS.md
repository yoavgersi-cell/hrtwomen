<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Article images

Every new article must go live with a hero image and alt text. Generate them with
`npm run images -- --slug <slug>` (or `--count 5` for the backlog, newest articles first).
The script calls the OpenAI API (key injected by the environment's network proxy),
saves `public/article-images/<slug>.webp` and updates `src/data/article-images.ts`.
Look at each image before committing it: no text, logos, brands, needles or anything
that misrepresents the article. `scripts/seo-check.mjs` fails for articles published
from 2026-11-16 without a hero image.
