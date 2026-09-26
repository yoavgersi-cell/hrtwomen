# HRT Women

Source for [hrtwomen.com](https://www.hrtwomen.com): an independent comparison site for online menopause and perimenopause HRT providers for women.

Built from the same Next.js template as the Top TRT and ED Treatment Hub sites. All site content (providers, rankings, reviews, comparisons, articles, FAQs) lives in `src/lib/seeds/hrt.ts`.

## Development

```bash
npm install
npm run dev
```

## Environment variables (Vercel)

- `ADMIN_PASSWORD`: password for `/admin`
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID (optional)
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta Pixel ID (optional)
