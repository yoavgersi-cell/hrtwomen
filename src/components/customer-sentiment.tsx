import { ThumbsUp, ThumbsDown, Building2 } from "lucide-react";

// ───── "What customers say" summary ─────
// A dated, counted summary of review themes per provider - the format answer
// engines quote ("most reviewers praise X; the most common complaint is Y").
// Counts are taken from the Trustpilot reviews transcribed into each
// provider's record in src/lib/seeds/hrt.ts (operator screenshots, Oct 4,
// 2026) - each theme lists how many reviews in that sample mention it.
// BBB figures are as listed on each BBB profile when researched on Oct 19,
// 2026 (same data as the is-<provider>-legit articles). Refresh both when the
// Trustpilot sample or BBB profile is re-checked; never estimate a count.

type Theme = { theme: string; count: number; example: string };

type Sentiment = {
  sampleSize: number;
  sampleDate: string;
  rating: string;
  ratingCount: string;
  praised: Theme[];
  complaints: Theme[];
  bbb: { grade: string; accredited: boolean; complaints: string; themes: string; checked: string };
  bottomLine: string;
};

export const CUSTOMER_SENTIMENT: Record<string, Sentiment> = {
  winona: {
    sampleSize: 11,
    sampleDate: "Oct 4, 2026",
    rating: "4.6",
    ratingCount: "8,631",
    praised: [
      {
        theme: "Symptom relief",
        count: 6,
        example: "\"No more night sweats. No more vaginal dryness.\" - Jamie Wilkins",
      },
      {
        theme: "Responsive doctors and messaging",
        count: 4,
        example: "\"The doctor is super responsive and helpful!!\" - Nichole",
      },
      {
        theme: "Easy process and home delivery",
        count: 4,
        example: "\"The intake process was simple... having my HRT medication shipped directly to my door made everything effortless.\" - Gianna Bellusci",
      },
    ],
    complaints: [
      {
        theme: "Not every symptom improved quickly",
        count: 1,
        example: "Crying spells eased, but libido and mood swings hadn't yet improved (3 stars).",
      },
      {
        theme: "Shipping and packaging in heat",
        count: 1,
        example: "Estradiol tablets arrived stuck together in Texas humidity (4 stars).",
      },
    ],
    bbb: {
      grade: "B",
      accredited: false,
      complaints: "19 complaints in 3 years (7 in the last 12 months)",
      themes: "billing and cancellations, how much medication a charge covers, expectations about doctor contact, packaging discretion",
      checked: "Oct 19, 2026",
    },
    bottomLine:
      "Reviewers mostly praise fast symptom relief and responsive physicians; the complaints that do appear are about billing, cancellations and shipping rather than the quality of care.",
  },
  gala: {
    sampleSize: 12,
    sampleDate: "Oct 4, 2026",
    rating: "4.6",
    ratingCount: "4,199",
    praised: [
      {
        theme: "Quick, easy sign-up and process",
        count: 6,
        example: "\"The new patient intake process was quick.\" - Kennetito",
      },
      {
        theme: "Support and communication",
        count: 4,
        example: "\"Communication with the team was excellent.\" - Kennetito",
      },
      {
        theme: "Price",
        count: 3,
        example: "\"Great pricing... Easy to complete.\" - Anna Bracey",
      },
      {
        theme: "Easy-to-use app",
        count: 2,
        example: "\"Nice app user friendly\" - Theresa",
      },
    ],
    complaints: [
      {
        theme: "Slow shipping",
        count: 1,
        example: "\"The oil a long time to ship\" (3 stars).",
      },
    ],
    bbb: {
      grade: "C-",
      accredited: false,
      complaints: "37 complaints in 3 years",
      themes: "shipping delays, slow replies, cancellation and refund disputes (the profile also covers Gala's larger weight-loss business)",
      checked: "Oct 19, 2026",
    },
    bottomLine:
      "Recent reviewers like how quick and simple Gala is and its price; shipping speed is the recurring friction, and its BBB record is weaker than Winona's or Midi's.",
  },
  midi: {
    sampleSize: 8,
    sampleDate: "Oct 4, 2026",
    rating: "4.1",
    ratingCount: "1,695",
    praised: [
      {
        theme: "Feeling listened to",
        count: 7,
        example: "\"They listened to me! I felt heard and seen! My concerns were not dismissed.\" - Terri Wilson",
      },
      {
        theme: "Knowledgeable clinicians who explain options",
        count: 6,
        example: "\"Explaining different treatment options thoroughly, including possible side effects.\" - Karen Reynolds Mohme",
      },
      {
        theme: "Easy scheduling",
        count: 2,
        example: "\"Scheduling with Midi was easy and I quickly had my appointment.\" - Marcy Wofford",
      },
      {
        theme: "Treatment that works with insurance",
        count: 1,
        example: "\"She made sure to provide a treatment that my insurance covers.\" - Julie Harris",
      },
    ],
    complaints: [],
    bbb: {
      grade: "B",
      accredited: true,
      complaints: "about 175 complaints closed in 3 years",
      themes: "billing - visits patients thought were covered becoming bills, copay changes, deductibles",
      checked: "Oct 19, 2026",
    },
    bottomLine:
      "Patients overwhelmingly praise being heard by knowledgeable clinicians; the complaints, mostly on the BBB, are about insurance billing - which also explains its lower 4.1 Trustpilot score.",
  },
};

export function CustomerSentiment({ providerId, providerName }: { providerId: string; providerName: string }) {
  const s = CUSTOMER_SENTIMENT[providerId];
  if (!s) return null;
  return (
    <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7" aria-labelledby={`sentiment-${providerId}`}>
      <h2 id={`sentiment-${providerId}`} className="text-[20px] font-bold text-[#191919]">
        What do {providerName} customers say?
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-gray-700">
        <strong>{s.bottomLine}</strong> {providerName} is rated <strong>{s.rating} out of 5 on Trustpilot</strong> across{" "}
        {s.ratingCount} reviews. Below, the themes in the {s.sampleSize} most recent reviews we read in full (as of{" "}
        {s.sampleDate}), with how many mention each.
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 flex items-center gap-2 text-[14px] font-bold text-emerald-800">
            <ThumbsUp className="h-4 w-4" strokeWidth={2.2} /> Most praised
          </h3>
          <ul className="space-y-2.5">
            {s.praised.map((t) => (
              <li key={t.theme} className="text-[13.5px] leading-snug text-gray-700">
                <span className="font-semibold text-[#191919]">{t.theme}</span>{" "}
                <span className="text-gray-500">
                  ({t.count} of {s.sampleSize} reviews)
                </span>
                <br />
                <span className="text-[12.5px] italic text-gray-500">{t.example}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 flex items-center gap-2 text-[14px] font-bold text-amber-800">
            <ThumbsDown className="h-4 w-4" strokeWidth={2.2} /> Most common complaints
          </h3>
          {s.complaints.length > 0 ? (
            <ul className="space-y-2.5">
              {s.complaints.map((t) => (
                <li key={t.theme} className="text-[13.5px] leading-snug text-gray-700">
                  <span className="font-semibold text-[#191919]">{t.theme}</span>{" "}
                  <span className="text-gray-500">
                    ({t.count} of {s.sampleSize} reviews)
                  </span>
                  <br />
                  <span className="text-[12.5px] italic text-gray-500">{t.example}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[13.5px] leading-snug text-gray-700">
              None of the {s.sampleSize} recent Trustpilot reviews in our sample were negative - so the complaints below
              come from the Better Business Bureau.
            </p>
          )}
          <div className="mt-3 rounded-lg bg-gray-50 p-3 text-[12.5px] leading-snug text-gray-700">
            <span className="flex items-center gap-1.5 font-semibold text-[#191919]">
              <Building2 className="h-3.5 w-3.5" strokeWidth={2.2} /> Better Business Bureau
            </span>
            Rated <strong>{s.bbb.grade}</strong>, {s.bbb.accredited ? "BBB-accredited" : "not BBB-accredited"}, with{" "}
            {s.bbb.complaints}. Complaint themes: {s.bbb.themes}. (Checked {s.bbb.checked}.)
          </div>
        </div>
      </div>
      <p className="mt-4 text-[11.5px] text-gray-500">
        Trustpilot figures as shown on {s.sampleDate}; BBB figures as shown on {s.bbb.checked}. Ratings change - check
        Trustpilot and bbb.org for the latest. We don&apos;t edit or select reviews to change the picture: the sample is the
        most recent menopause-related reviews at the time, including low-star ones.
      </p>
    </section>
  );
}
