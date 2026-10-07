import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "**.blob.vercel-storage.com",
      },
    ],
  },
  // Generated OG images live under the (main) route group, so Next serves them
  // at a hashed path (e.g. /articles/<slug>/opengraph-image-1ya3q7). The hash
  // is a djb2 hash of the parent path, so it is stable while these files stay
  // where they are. Rewriting the plain /opengraph-image path keeps the
  // JSON-LD "image" URLs (and any URL Google already discovered) returning
  // the image instead of a 404. Re-check the hashes in the build output
  // ("opengraph-image-xxxxxx") if an opengraph-image.tsx file is ever moved.
  async rewrites() {
    return [
      { source: "/opengraph-image", destination: "/opengraph-image-12jlf3" },
      { source: "/articles/:slug/opengraph-image", destination: "/articles/:slug/opengraph-image-1ya3q7" },
      { source: "/reviews/:slug/opengraph-image", destination: "/reviews/:slug/opengraph-image-xu6hq8" },
      { source: "/:battleSlug/opengraph-image", destination: "/:battleSlug/opengraph-image-hfhm20" },
    ];
  },
  // Duplicate-comparison consolidation (e.g. /embody-vs-altrx → /altrx-vs-embody)
  // is handled in the proxy (see SLUG_ALIASES in src/proxy.ts) so the alias
  // collapses in a single 301 instead of chaining with the migration redirect.
};

export default nextConfig;
