// ───── Medical reviewers ─────
// Code-authoritative reviewer profiles and the page review log. Lives in code,
// not the CMS blob, so a CMS save can never blank a byline, and so the same
// Person entity (same @id) is emitted on every page that names the reviewer.
//
// House rules:
//   - Every credential, degree and employer is as supplied by the reviewer.
//     Nothing is added, upgraded or inferred. No credential letters that the
//     person does not hold.
//   - A page says "reviewed" and emits `reviewedBy` / `lastReviewed` ONLY when
//     REVIEW_LOG has an entry for it. Pages without an entry name the site's
//     medical reviewer as staff - never as having reviewed that page.
//   - The byline wording is "Reviewed for medical accuracy by", not "Medically
//     reviewed by a doctor": our reviewer is a medical laboratory scientist
//     with an MPH, and the wording must not imply a prescribing clinician.

export const SITE_ORIGIN = "https://www.hrtwomen.com";

export interface ReviewerCredential {
  title: string;
  issuer: string;
  detail?: string;
}

export interface ReviewerEducation {
  degree: string;
  school: string;
  location?: string;
  detail: string;
}

export interface ReviewerExperienceGroup {
  area: string;
  items: string[];
}

export interface ReviewerWork {
  title: string;
  outlet: string;
  url: string;
}

export interface Reviewer {
  slug: string;
  /** Plain name, no suffixes. */
  name: string;
  /** Post-nominal letters, in display order. */
  credentials: string[];
  /** Role as shown in bylines and schema jobTitle. */
  jobTitle: string;
  /** One line under the name: what the person is, in plain words. */
  headline: string;
  /** 40-60 words, third person. */
  shortBio: string;
  /** Long bio, one paragraph per entry. */
  longBio: string[];
  image: { src: string; webp: string; thumb: string; width: number; height: number };
  licensure: ReviewerCredential[];
  education: ReviewerEducation[];
  experience: ReviewerExperienceGroup[];
  specialties: string[];
  selectedWork: ReviewerWork[];
  /** Public profile URLs (LinkedIn etc.). Only real, supplied URLs. */
  sameAs: string[];
  linkedin?: string;
  /** What this reviewer checks on a page, in the reviewer's scope statement. */
  scope: string;
  /** Verticals this reviewer covers. */
  verticals: string[];
  /** Month the reviewer joined, YYYY-MM. */
  since: string;
}

export const REVIEWERS: Reviewer[] = [
  {
    slug: "francheska-capistrano",
    name: "Francheska Capistrano",
    credentials: ["RMT", "MPH"],
    jobTitle: "Medical Content Reviewer",
    headline: "Licensed Medical Laboratory Scientist (Registered Medical Technologist) and Master of Public Health graduate",
    shortBio:
      "Francheska Capistrano is a licensed Medical Laboratory Scientist with a Master of Public Health degree. She has coordinated international clinical trials, with a focus on protocol compliance, clinical documentation and data review, and writes and reviews evidence-based health content for patient and physician audiences.",
    longBio: [
      "Francheska Capistrano is a licensed Medical Laboratory Scientist (Registered Medical Technologist) with a Master of Public Health degree. She has experience coordinating international clinical trials, with a focus on protocol compliance, clinical documentation, and data review.",
      "Her medical writing experience includes evidence-based health articles, patient education materials, research summaries, and clinical research content. As a medical content reviewer, she combines scientific accuracy, critical appraisal, and clear communication to ensure content is credible and easy to understand.",
      "At HRT Women she reviews the medical and scientific statements in our menopause and HRT guides, reviews and comparisons: how hormone therapy and non-hormonal options work, what the cited trials, FDA labels and society guidelines actually say, and whether risks and contraindications are stated accurately. She does not choose providers, set prices or rankings, or take part in commercial partnerships.",
    ],
    image: {
      src: "/reviewers/francheska-capistrano.jpg",
      webp: "/reviewers/francheska-capistrano.webp",
      thumb: "/reviewers/francheska-capistrano-160.webp",
      width: 800,
      height: 800,
    },
    licensure: [
      {
        title: "Licensed Medical Laboratory Scientist (Registered Medical Technologist)",
        issuer: "Professional licensure, Philippines",
        detail: "Formal training in clinical laboratory medicine, diagnostic testing, microbiology, hematology, immunology, clinical chemistry, pathology and disease processes.",
      },
    ],
    education: [
      {
        degree: "Master of Public Health (MPH)",
        school: "University of Essex",
        location: "United Kingdom",
        detail: "Advanced training in epidemiology, public health research, health promotion, biostatistics, disease prevention and evidence-based healthcare practice.",
      },
      {
        degree: "Bachelor of Science in Medical Laboratory Science",
        school: "Saint Louis University",
        location: "Baguio City, Philippines",
        detail: "Clinical laboratory medicine, diagnostic testing, microbiology, hematology, immunology, clinical chemistry and pathology.",
      },
    ],
    experience: [
      {
        area: "Clinical research",
        items: [
          "Supporting international clinical trials: protocol compliance monitoring, clinical documentation review, source data verification and data quality checks",
          "Regulatory and ethics documentation support; clinical data review and reconciliation",
          "Good Clinical Practice (GCP)-aligned research processes",
        ],
      },
      {
        area: "Medical writing and content review",
        items: [
          "Evidence-based health articles, patient education materials and clinical research summaries",
          "Medical blogs, healthcare content and SEO/AEO medical content",
          "Physician- and patient-facing educational materials",
        ],
      },
      {
        area: "Medical fact-checking and evidence appraisal",
        items: [
          "Evaluating health information for scientific accuracy, evidence alignment, clinical relevance and correct terminology",
          "Reviewing scientific literature, clinical studies and medical references to assess evidence quality and identify unsupported or outdated claims",
          "Consistency with published research and clinical guidelines; clear communication of complex concepts for general audiences",
        ],
      },
      {
        area: "Healthcare and digital health",
        items: [
          "Work with clinical research teams, telehealth platforms, digital health companies and healthcare content teams",
          "Collaboration with physicians, clinical researchers, healthcare providers, research coordinators and medical content teams",
        ],
      },
    ],
    specialties: [
      "Clinical trial coordination and GCP",
      "Clinical laboratory medicine",
      "Epidemiology and biostatistics",
      "Evidence appraisal and medical fact-checking",
      "Patient education and health communication",
    ],
    selectedWork: [
      { title: "The gap your recruitment forecast can't see", outlet: "83bar", url: "https://www.83bar.com/the-gap-your-recruitment-forecast-cant-see/" },
      { title: "Can AI accelerate patient recruitment?", outlet: "83bar", url: "https://www.83bar.com/can-ai-accelerate-patient-recruitment/" },
      { title: "Why are so many referrals lost before screening really begins?", outlet: "Antidote", url: "https://www.antidote.me/blog/why-are-so-many-referrals-lost-before-screening-really-begins" },
      { title: "Neurology enrollment: why sites miss dates even when willing patients are willing to enroll", outlet: "Antidote", url: "https://www.antidote.me/blog/neurology-enrollment-why-sites-miss-dates-even-if-willing-patients-are-willing-to-enroll" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/francheskacapistrano/",
      "https://www.antidote.me/blog/author/francheska-capistrano",
    ],
    linkedin: "https://www.linkedin.com/in/francheskacapistrano/",
    scope:
      "Reviews the medical and scientific statements on a page: how hormone therapy and non-hormonal treatments work, clinical-trial and FDA-label facts, regulatory status (including FDA label changes), contraindications, side effects and terminology. Does not review prices, rankings, partner selection or provider descriptions, which are editorial.",
    verticals: ["hrt"],
    since: "2026-10",
  },
];

/** The reviewer named sitewide as the site's medical reviewer. */
export const SITE_REVIEWER_SLUG = "francheska-capistrano";

// ───── Review log ─────
// Keyed by the site path (e.g. "/", "/reviews/winona", "/articles/what-is-hrt",
// "/winona-vs-gala", "/online-hrt/texas").
// An entry means the named reviewer actually reviewed that page on that date.
// Entries are added ONLY when the operator confirms she reviewed the page.
// Never backfill dates. Until a page has an entry, its review bar names her as
// the site's medical reviewer without claiming she reviewed that page, and no
// `reviewedBy` / `lastReviewed` is emitted in its structured data.
export interface PageReview {
  reviewer: string; // Reviewer.slug
  reviewedAt: string; // YYYY-MM-DD
}

// 2026-10-04: full-site review by Francheska Capistrano - every content page
// that carried the review bar on that date (operator-confirmed): homepage,
// reviews and articles indexes, /online-hrt and its 51 state pages, How We
// Rank, the 3 provider reviews, 3 comparisons and 8 articles. Pages created
// after this date are NOT covered; add them below when reviewed.
const REVIEWED_2026_10_04: string[] = [
  "/",
  "/reviews",
  "/articles",
  "/online-hrt",
  "/how-we-rank",
  "/reviews/winona",
  "/reviews/gala",
  "/reviews/midi",
  "/winona-vs-gala",
  "/winona-vs-midi",
  "/gala-vs-midi",
  "/articles/perimenopause-symptoms",
  "/articles/is-hrt-safe",
  "/articles/estrogen-patch-vs-pill",
  "/articles/bioidentical-hormones-explained",
  "/articles/best-online-hrt-providers-compared",
  "/articles/what-is-hrt",
  "/articles/hrt-for-perimenopause",
  "/articles/progesterone-side-effects",
  "/online-hrt/alabama",
  "/online-hrt/alaska",
  "/online-hrt/arizona",
  "/online-hrt/arkansas",
  "/online-hrt/california",
  "/online-hrt/colorado",
  "/online-hrt/connecticut",
  "/online-hrt/delaware",
  "/online-hrt/florida",
  "/online-hrt/georgia",
  "/online-hrt/hawaii",
  "/online-hrt/idaho",
  "/online-hrt/illinois",
  "/online-hrt/indiana",
  "/online-hrt/iowa",
  "/online-hrt/kansas",
  "/online-hrt/kentucky",
  "/online-hrt/louisiana",
  "/online-hrt/maine",
  "/online-hrt/maryland",
  "/online-hrt/massachusetts",
  "/online-hrt/michigan",
  "/online-hrt/minnesota",
  "/online-hrt/mississippi",
  "/online-hrt/missouri",
  "/online-hrt/montana",
  "/online-hrt/nebraska",
  "/online-hrt/nevada",
  "/online-hrt/new-hampshire",
  "/online-hrt/new-jersey",
  "/online-hrt/new-mexico",
  "/online-hrt/new-york",
  "/online-hrt/north-carolina",
  "/online-hrt/north-dakota",
  "/online-hrt/ohio",
  "/online-hrt/oklahoma",
  "/online-hrt/oregon",
  "/online-hrt/pennsylvania",
  "/online-hrt/rhode-island",
  "/online-hrt/south-carolina",
  "/online-hrt/south-dakota",
  "/online-hrt/tennessee",
  "/online-hrt/texas",
  "/online-hrt/utah",
  "/online-hrt/vermont",
  "/online-hrt/virginia",
  "/online-hrt/washington",
  "/online-hrt/washington-dc",
  "/online-hrt/west-virginia",
  "/online-hrt/wisconsin",
  "/online-hrt/wyoming",
];

// Pages published and reviewed after the full-site pass.
const REVIEWED_LATER: Record<string, PageReview> = {
  // 2026-10-06: the five provider brand pages (operator-confirmed).
  "/articles/gala-cost": { reviewer: "francheska-capistrano", reviewedAt: "2026-10-06" },
  "/articles/is-gala-legit": { reviewer: "francheska-capistrano", reviewedAt: "2026-10-06" },
  "/articles/winona-cost": { reviewer: "francheska-capistrano", reviewedAt: "2026-10-06" },
  "/articles/winona-products": { reviewer: "francheska-capistrano", reviewedAt: "2026-10-06" },
  "/articles/midi-cost": { reviewer: "francheska-capistrano", reviewedAt: "2026-10-06" },
};

export const REVIEW_LOG: Record<string, PageReview> = {
  ...Object.fromEntries(
    REVIEWED_2026_10_04.map((p) => [p, { reviewer: "francheska-capistrano", reviewedAt: "2026-10-04" }]),
  ),
  ...REVIEWED_LATER,
};

export function getReviewer(slug: string = SITE_REVIEWER_SLUG): Reviewer | undefined {
  return REVIEWERS.find((r) => r.slug === slug);
}

export function reviewerDisplayName(r: Reviewer): string {
  return r.credentials.length ? `${r.name}, ${r.credentials.join(", ")}` : r.name;
}

export function reviewerUrl(r: Reviewer): string {
  return `${SITE_ORIGIN}/reviewers/${r.slug}`;
}

export function reviewerPath(r: Reviewer): string {
  return `/reviewers/${r.slug}`;
}

/** Normalize a path for the log: strip origin, query, trailing slash. */
function logKey(path: string): string {
  let p = path.replace(/^https?:\/\/[^/]+/, "").split("?")[0];
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p || "/";
}

export function getPageReview(path: string): (PageReview & { reviewerProfile: Reviewer }) | null {
  const entry = REVIEW_LOG[logKey(path)];
  if (!entry) return null;
  const reviewerProfile = getReviewer(entry.reviewer);
  if (!reviewerProfile) return null;
  return { ...entry, reviewerProfile };
}

/** Schema.org Person for a reviewer, with a stable @id reused on every page. */
export function reviewerPersonSchema(r: Reviewer) {
  const schema: Record<string, unknown> = {
    "@type": "Person",
    "@id": `${reviewerUrl(r)}#person`,
    name: r.name,
    honorificSuffix: r.credentials.join(", "),
    jobTitle: r.jobTitle,
    description: r.shortBio,
    url: reviewerUrl(r),
    image: `${SITE_ORIGIN}${r.image.src}`,
    worksFor: { "@type": "Organization", name: "HRT Women", url: SITE_ORIGIN },
    knowsAbout: r.specialties,
    alumniOf: r.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    hasCredential: [
      ...r.licensure.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: c.title,
        recognizedBy: { "@type": "Organization", name: c.issuer },
      })),
      ...r.education.map((e) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: e.degree,
        recognizedBy: { "@type": "CollegeOrUniversity", name: e.school },
      })),
    ],
  };
  if (r.sameAs.length) schema.sameAs = r.sameAs;
  return schema;
}

/**
 * Schema fragment for a content page: `reviewedBy` + `lastReviewed` when the
 * page is in the review log, nothing otherwise. Spread into Article/WebPage.
 */
export function pageReviewSchema(path: string): Record<string, unknown> {
  const review = getPageReview(path);
  if (!review) return {};
  return {
    reviewedBy: { "@id": `${reviewerUrl(review.reviewerProfile)}#person` },
    lastReviewed: review.reviewedAt,
  };
}

/** Standalone JSON-LD document for a reviewer Person (adds @context). */
export function reviewerPersonJsonLd(r: Reviewer): Record<string, unknown> {
  return { "@context": "https://schema.org", ...reviewerPersonSchema(r) };
}
