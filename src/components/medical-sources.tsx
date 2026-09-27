import { BookOpen } from "lucide-react";

// Authoritative outgoing citations, per vertical. Every entry is a real,
// verifiable source (FDA pages, peer-reviewed papers and position statements
// via DOI, NICE, ACOG, NIH) - never invent or approximate a citation. Newest
// regulatory and research sources are listed first. Rendered as a "Sources"
// section on articles, reviews and comparisons so YMYL pages visibly ground
// their claims.
export interface MedicalSource {
  label: string;
  publisher: string;
  href: string;
}

export const SOURCES_BY_VERTICAL: Record<string, MedicalSource[]> = {
  hrt: [
    {
      label: "FDA Approves Labeling Changes to Menopausal Hormone Therapy Products",
      publisher: "U.S. Food & Drug Administration - February 2026",
      href: "https://www.fda.gov/news-events/press-announcements/fda-approves-labeling-changes-menopausal-hormone-therapy-products",
    },
    {
      label: "FDA Requests Labeling Changes to Clarify the Benefit/Risk Considerations for Menopausal Hormone Therapies",
      publisher: "U.S. Food & Drug Administration - November 2025",
      href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-requests-labeling-changes-related-safety-information-clarify-benefitrisk-considerations",
    },
    {
      label: "The Women's Health Initiative Randomized Trials and Clinical Practice: A Review",
      publisher: "Manson JE et al., JAMA - 2024;331(20):1748-1760",
      href: "https://doi.org/10.1001/jama.2024.6542",
    },
    {
      label: "The 2022 hormone therapy position statement of The North American Menopause Society",
      publisher: "Menopause (journal), The Menopause Society - 2022;29(7):767-794",
      href: "https://doi.org/10.1097/GME.0000000000002028",
    },
    {
      label: "The 2023 nonhormone therapy position statement of The North American Menopause Society",
      publisher: "Menopause (journal), The Menopause Society - 2023",
      href: "https://doi.org/10.1097/GME.0000000000002200",
    },
    {
      label: "Menopause: identification and management (NG23, updated November 2024)",
      publisher: "National Institute for Health and Care Excellence (NICE)",
      href: "https://www.nice.org.uk/guidance/ng23",
    },
    {
      label: "FDA Update on Estradiol Transdermal Patch Availability",
      publisher: "U.S. Food & Drug Administration - 2026",
      href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fda-update-estradiol-transdermal-patch-availability",
    },
    {
      label: "Hormone Therapy for Menopause - patient FAQ",
      publisher: "American College of Obstetricians and Gynecologists (ACOG)",
      href: "https://www.acog.org/womens-health/faqs/hormone-therapy-for-menopause",
    },
    {
      label: "Menopause - overview",
      publisher: "National Institute on Aging (NIA), NIH",
      href: "https://www.nia.nih.gov/health/menopause",
    },
  ],
};

// Compact citation list for the bottom of YMYL content pages. Renders nothing
// for verticals without a curated source list yet.
export function MedicalSources({ vertical }: { vertical: string }) {
  const sources = SOURCES_BY_VERTICAL[vertical];
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
      <div className="mb-3 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-[#A8285E]" strokeWidth={2} />
        <h2 className="text-[15px] font-bold uppercase tracking-[0.05em] text-[#191919]">
          Sources &amp; medical references
        </h2>
      </div>
      <p className="mb-4 text-[13px] leading-relaxed text-gray-500">
        Treatment facts on this page are grounded in regulatory guidance and peer-reviewed research.
        Pricing and plan details come from each provider&apos;s published information. This content
        is for information only and is not medical advice - always consult a licensed clinician
        before starting treatment.
      </p>
      <ol className="space-y-2">
        {sources.map((s, i) => (
          <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
            <span className="shrink-0 font-semibold text-gray-300">{i + 1}.</span>
            <span className="text-gray-600">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#A8285E] underline underline-offset-2 hover:text-[#8E2450]"
              >
                {s.label}
              </a>{" "}
              <span className="text-gray-400">- {s.publisher}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// One-line affiliate disclosure under the byline, above the first affiliate
// link (FTC: clear, conspicuous, before the links). Deliberately compact - the
// "not medical advice" disclaimer lives once at the bottom of these pages
// (SourcesMethodology footer, or the MedicalSources intro below) instead of
// being repeated here.
export function TrustDisclosure({ disclaimerHref }: { disclaimerHref: string }) {
  return (
    <p className="mt-2.5 max-w-[720px] text-[11.5px] leading-[1.55] text-gray-400 sm:mt-3 sm:text-[12px]">
      We may earn a commission from links on this page - it never affects our rankings (
      <a href={disclaimerHref} className="font-medium text-[#A8285E] hover:underline">
        how we stay objective
      </a>
      ).
    </p>
  );
}
