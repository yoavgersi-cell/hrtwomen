import { type SiteConfig } from "./config";
import { hrtConfig } from "./seeds/hrt";

// ─────────────────────────────────────────────────────────────────────────────
// Single-vertical config store.
//
// The original TreatmentsHub platform loaded per-vertical config from Vercel
// Blob (a CMS). This site is a single, standalone HRT-for-women vertical whose
// content is code-authoritative (src/lib/seeds/hrt.ts), so config-store
// collapses to a thin accessor: every page calls getConfig() and gets the HRT
// config. The `vertical` argument is accepted (so existing call sites keep
// compiling) but ignored - there is only one vertical here.
// ─────────────────────────────────────────────────────────────────────────────

export async function getConfig(_vertical?: string): Promise<SiteConfig> {
  return hrtConfig;
}

// No-op: content is code-authoritative on this site (no blob CMS). Kept so the
// admin/api routes that import it continue to type-check.
export async function saveConfig(_config: SiteConfig, _vertical?: string): Promise<void> {
  return;
}
