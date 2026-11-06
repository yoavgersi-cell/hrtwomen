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
  /** Omitted when no BBB profile could be found for the business. */
  bbb?: { grade: string; accredited: boolean; complaints: string; themes: string; checked: string };
  bottomLine: string;
  /** Replaces the default "most recent menopause-related reviews" footnote
   *  when the sample isn't menopause-specific. */
  sampleNote?: string;
};

export const CUSTOMER_SENTIMENT: Record<string, Sentiment> = {
  winona: {
    sampleSize: 40,
    sampleDate: "Nov 3, 2026",
    rating: "4.6",
    ratingCount: "9,008",
    praised: [
      {
        theme: "Symptom relief",
        count: 26,
        example: "\"Within 3 weeks I felt so much better - my hot flashes gone, brain fog gone.\" - Sheryl Shifflett",
      },
      {
        theme: "Easy process, refills and home delivery",
        count: 21,
        example: "\"Telehealth and refills are so easy and the fact it's shipped right to my door makes the process seamless.\" - Emily",
      },
      {
        theme: "Responsive doctors",
        count: 15,
        example: "\"I sent a message and the dr. got back to me right away and had me try something new and it really works.\" - Cheryl Vogt",
      },
      {
        theme: "Felt dismissed elsewhere first",
        count: 3,
        example: "\"The doctor just wanted to put me on antidepressants and nothing I tried was helping.\" - Lana Herald",
      },
    ],
    complaints: [
      {
        theme: "Side effects mentioned",
        count: 2,
        example: "Breast tenderness in the first weeks that went away quickly; persistent itchy ears (both 5 stars).",
      },
      {
        theme: "No difference yet",
        count: 1,
        example: "\"Don't feel so much difference, will see in the next few months\" (4 stars).",
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
      "39 of the 40 newest reviews gave 5 stars, mostly for symptom relief and responsive physicians; complaints show up at the BBB instead, about billing, cancellations and shipping. The profile is claimed, Winona pays for a Trustpilot subscription and replies to most reviews, and very recent reviews skew toward early, positive experiences.",
  },
  gala: {
    sampleSize: 40,
    sampleDate: "Nov 3, 2026",
    rating: "4.6",
    ratingCount: "4,258",
    praised: [
      {
        theme: "Quick, easy sign-up and process",
        count: 22,
        example: "\"The process was easy and fast; shipping was here in 2 days.\" - Michele",
      },
      {
        theme: "Responsive support and follow-up",
        count: 7,
        example: "\"Fast answer to my request. Also great prices!\" - Terri",
      },
      {
        theme: "Price",
        count: 4,
        example: "\"It's a good price and looks like there is plenty of support.\" - EC",
      },
      {
        theme: "Results described",
        count: 5,
        example: "\"No more night sweats alone has been a big help and my edgy attitude has calmed down.\" - Rachel",
      },
    ],
    complaints: [
      {
        theme: "Pressure to leave a review",
        count: 2,
        example: "\"Stop asking me questions to get a positive review, you have not done anything yet?\" (4 stars)",
      },
      {
        theme: "App update confusion",
        count: 1,
        example: "\"The updated one is hard. I cannot find the shot and weight history\" (a weight-loss customer).",
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
      "Recent reviewers like how quick and simple Gala is, fast delivery and the price - but 34 of the 40 newest reviews were invited by Gala, several came before treatment started, and some are about its weight-loss program. Its BBB record is weaker than Winona's or Midi's.",
  },
  midi: {
    sampleSize: 46,
    sampleDate: "Nov 3, 2026",
    rating: "4.1",
    ratingCount: "1,795",
    praised: [
      {
        theme: "Feeling heard by the clinician",
        count: 31,
        example: "\"I never felt rushed or dismissed... she took the time to understand what I've been experiencing.\" - Carissa Woleslagle",
      },
      {
        theme: "Dismissed by other doctors first",
        count: 11,
        example: "\"I have been dismissed for years... too young to be going through perimenopause at 39.\" - Arri",
      },
      {
        theme: "Feeling better on treatment",
        count: 9,
        example: "\"In the two years since first coming under their care my life has improved in every single way possible.\" - Kat",
      },
      {
        theme: "Easy scheduling, fast prescriptions, insurance help",
        count: 9,
        example: "\"My prescription was sent to my pharmacy after the appointment and I was able to start the recommended treatment that same day!\" - Sarah",
      },
    ],
    complaints: [
      {
        theme: "Still working on some symptoms",
        count: 1,
        example: "Sleep and energy improved, but brain fog and fatigue were still being adjusted for (5 stars).",
      },
      {
        theme: "Bumpy first weeks on HRT",
        count: 1,
        example: "A few emotional ups and downs in the first couple of weeks before things settled (5 stars).",
      },
    ],
    bbb: {
      grade: "B",
      accredited: true,
      complaints: "about 175 complaints closed in 3 years",
      themes: "billing - visits patients thought were covered becoming bills, copay changes, deductibles",
      checked: "Oct 19, 2026",
    },
    bottomLine:
      "All 46 of the newest reviews were 5 stars, overwhelmingly for being heard by knowledgeable clinicians - often after being dismissed elsewhere. The lower 4.1 overall reflects older reviews and BBB complaints that are mostly about insurance billing.",
  },
  // LifeMD: operator screenshot of the Trustpilot profile on 2026-11-06
  // (3.9, 4,293 reviews; claimed Jul 2021; paid subscription; category
  // Doctor) plus the 20 newest reviews the operator shared: 19 five-star,
  // 1 four-star. None was explicitly about menopause care (3 about weight
  // loss). BBB profile exists (LifeMD Inc., New York) but its letter grade
  // could not be confirmed, so no BBB box.
  lifemd: {
    sampleSize: 20,
    sampleDate: "Nov 6, 2026",
    rating: "3.9",
    ratingCount: "4,293",
    praised: [
      {
        theme: "Clinicians who listen and explain",
        count: 8,
        example: "\"Kelly P. listened to me and did not rush the appointment. We discussed symptoms and medication options as a team.\" - Kelly B",
      },
      {
        theme: "Quick, easy appointments",
        count: 7,
        example: "\"I got an appointment with a doctor the day after my subscription began. My provider was on time, professional...\" - verified customer",
      },
      {
        theme: "Patient, helpful support staff",
        count: 6,
        example: "\"I was having a hard time understanding the charges on my credit card and she was nice enough to really make sure that I understood.\" - MahalohaMaulix",
      },
    ],
    complaints: [
      {
        theme: "Slow first contact after signing up",
        count: 1,
        example: "\"I signed up on 9/24/2026 but never received any communication from LifeMD until yesterday.\" (5 stars - refund given)",
      },
    ],
    bottomLine:
      "The 20 newest reviews we read were all 4 or 5 stars, praising attentive clinicians, fast appointments and helpful support - but none was explicitly about menopause care, and the 3.9 overall score means lower-rated reviews exist beyond this sample, so read a few recent 1-star reviews before you sign up.",
    sampleNote:
      "the sample is the 20 most recent reviews across all of LifeMD's services shared with us on Nov 6, 2026 - all were 4 or 5 stars, so it does not represent the lower-rated reviews behind the 3.9 overall score.",
  },
  // Wisp: operator screenshots of the Trustpilot profile on 2026-11-06 (4.1,
  // 11,616 reviews; claimed Dec 2018; paid subscription). 60 newest reviews
  // read: 41 five-star, 1 four, 1 three, 4 two, 13 one. None was about
  // menopause care (UTI, birth control, emergency contraception, testing,
  // skincare). No BBB profile for Wisp (hellowisp) could be found.
  wisp: {
    sampleSize: 60,
    sampleDate: "Nov 6, 2026",
    rating: "4.1",
    ratingCount: "11,616",
    praised: [
      {
        theme: "Fast, easy prescriptions",
        count: 38,
        example: "\"Was able to input my symptoms, have a doc review and get a prescription all within a couple of hours.\" - Sha'dana Jenkins",
      },
      {
        theme: "Cheaper than urgent care or a doctor's visit",
        count: 7,
        example: "\"Since my insurance doesn't cover this medication, Wisp provided a GoodRx card... My out of pocket cost went from $120 to $45.\" - Nathalie Deoliveira Hoffman",
      },
    ],
    complaints: [
      {
        theme: "Slow or no reply from the care team",
        count: 5,
        example: "\"I have messaged 4 times in the app since 2:30pm (it is now 5:30) and have not received a response.\" (1 star)",
      },
      {
        theme: "Prescription not sent, incomplete or wrong",
        count: 5,
        example: "\"Only one of my prescriptions were actually sent to the pharmacy.\" (1 star)",
      },
      {
        theme: "Billing, refunds or charges without approval",
        count: 5,
        example: "\"I wasn't approved for my prescription with no explanation but still charged the consult review.\" (1 star)",
      },
    ],
    bottomLine:
      "Reviewers mostly praise how quickly a prescription reaches their local pharmacy - but none of the 60 newest reviews were about menopause care (most concern UTIs, birth control and testing), and about 3 in 10 gave 1 or 2 stars, mostly over slow replies, prescriptions that didn't reach the pharmacy and billing.",
    sampleNote:
      "the sample is the 60 most recent reviews across all of Wisp's services, including low-star ones - none of them was about menopause care.",
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
          {s.bbb && (
            <div className="mt-3 rounded-lg bg-gray-50 p-3 text-[12.5px] leading-snug text-gray-700">
              <span className="flex items-center gap-1.5 font-semibold text-[#191919]">
                <Building2 className="h-3.5 w-3.5" strokeWidth={2.2} /> Better Business Bureau
              </span>
              Rated <strong>{s.bbb.grade}</strong>, {s.bbb.accredited ? "BBB-accredited" : "not BBB-accredited"}, with{" "}
              {s.bbb.complaints}. Complaint themes: {s.bbb.themes}. (Checked {s.bbb.checked}.)
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-[11.5px] text-gray-500">
        Trustpilot figures as shown on {s.sampleDate}
        {s.bbb ? `; BBB figures as shown on ${s.bbb.checked}` : ""}. Ratings change - check Trustpilot
        {s.bbb ? " and bbb.org" : ""} for the latest. We don&apos;t edit or select reviews to change the picture:{" "}
        {s.sampleNote ?? "the sample is the most recent menopause-related reviews at the time, including low-star ones."}
      </p>
    </section>
  );
}
