import type { SiteConfig } from "@/lib/config";

// ─────────────────────────────────────────────────────────────────────────────
// Menopause / HRT vertical content - hrtwomen.com
//
// Launch content for the single-vertical HRT Women review site: online
// hormone replacement therapy (HRT) for women in perimenopause and menopause.
// Three providers: Winona (the anchor, async physician-led HRT), Gala (a
// flat-fee HRT + weight-management telehealth brand) and Midi Health (an
// insurance-billed, video-visit menopause clinic). Editorial is original and
// compliance-minded (YMYL): no cure or guarantee claims, no fabricated
// statistics, no "bioidentical is safer" claims, and every review is clear
// that HRT carries real risks and that suitability is a clinician decision.
//
// Facts checked (Sep 2026, via provider pages as surfaced in search results -
// the provider sites themselves could not be fetched directly):
//  - Winona: board-certified physicians; no video visit - online questionnaire
//    plus secure-portal messaging; estradiol (pill, patch, cream), estriol and
//    progesterone, vaginal estrogen cream; does NOT prescribe testosterone;
//    free shipping, unlimited follow-ups/messaging included in subscription;
//    non-HRT add-ons (e.g. sildenafil arousal cream, minoxidil, face cream).
//  - Gala (galaglp1.com/hormone-health - the same brand as Gala GLP-1):
//    US-licensed clinicians; estradiol pill or patch, oral or vaginal
//    progesterone, vaginal estradiol; flat monthly price, no insurance needed,
//    free shipping, messaging / check-ins / dose adjustments included; also
//    runs a GLP-1 weight-management program.
//  - Midi Health: ~30-min video visits with women's-health nurse practitioners
//    / certified nurse midwives; in-network with most major (PPO) insurance,
//    NOT Medicare (Medicare patients may pay self-pay); prescriptions sent to
//    your pharmacy of choice; hormonal and non-hormonal care plans;
//    testosterone out of pocket; also weight management, sexual wellness,
//    hair & skin.
//  - FDA: on Nov 10, 2025 the FDA requested labeling changes to remove the
//    boxed warnings on cardiovascular disease, breast cancer and probable
//    dementia from menopausal hormone therapy products; on Feb 12, 2026 it
//    approved the first six updated labels (Prometrium, Divigel, Cenestin,
//    Enjuvia, Estring, Bijuva), with the rest following product by product.
//    The endometrial-cancer boxed warning for systemic estrogen-alone
//    products stays. Non-hormonal Rx: fezolinetant (Veozah, 2023) and
//    elinzanetant (Lynkuet, approved Oct 24, 2025).
//  - Estradiol patches: demand roughly tripled after the label change and
//    some brands are intermittently hard to find in 2026; the FDA says they
//    remain available and is working with manufacturers on supply.
//
// PLACEHOLDERS / OPERATOR TO VERIFY:
//  - No Trustpilot ratings/reviews are set - operator supplies later.
//  - All pricing is written as APPROXIMATE and clearly flagged; the operator
//    should confirm current figures against each provider's own checkout.
//    Gala's advertised starting price appeared as both ~$69 and ~$79/month in
//    different sources, so no single figure is asserted.
//  - State coverage is NOT asserted for any provider (Winona reportedly
//    excludes some states; Gala and Midi were described as nationwide only by
//    third-party sources). Set `excludedStates` once confirmed.
//  - Which Winona formulations are compounded vs FDA-approved products was not
//    confirmed - copy tells readers to ask their clinician.
// ─────────────────────────────────────────────────────────────────────────────

const UPDATED = "2026-09-26";

export const hrtConfig: SiteConfig = {
  siteName: "HRT Women",
  disclosureText:
    "Some providers featured on this site may compensate us. This may affect the order and placement of listings but does not influence our editorial ratings or reviews.",

  hero: {
    backgroundImageUrl: "",
    imageAlt: "Online hormone replacement therapy for women in menopause",
    updatedLabel: "Last Updated: September 2026",
    h1: "Best Online HRT for Women of 2026",
    h2: "The top online menopause & HRT providers, ranked and reviewed",
    description:
      "Compare licensed online menopause clinics by treatment options, price, insurance and real clinician support.",
  },

  sidebar: {
    socialProofNumber: "9,800+",
    socialProofText: "women compared HRT providers on our platform this month.",
    secureTitle: "Secure & Confidential",
    secureText:
      "Every provider we feature uses secure, private systems to protect your health information.",
    featuredImageUrl: "/sidebar-featured.webp",
    featuredImageAlt: "Winona - online menopause hormone replacement therapy",
    featuredImageLink: "#",
    // Omit "featuredImage" until we have an HRT-specific banner creative (the
    // stock image was inherited from another vertical). Show the content-rich
    // blocks instead.
    blockOrder: ["socialProof", "secureBadge", "editorialReviews", "rankingMethodology", "disclosure"],
  },

  cardSocialProof: {
    number: "9,800+",
    text: "women compared HRT providers this month",
  },

  ranking: {
    providerOrder: ["winona", "gala", "midi"],
    positions: [
      { score: 9.6, starRating: 5, label: "Exceptional", badge: "Our Top Pick" },
      { score: 9.2, starRating: 5, label: "Excellent" },
      { score: 8.9, starRating: 4, label: "Very Good" },
    ],
  },

  providers: [
    {
      id: "winona",
      name: "Winona",
      tagline:
        "Physician-led online menopause care - estrogen, progesterone and vaginal estrogen prescribed without a video visit",
      logo: "/logos/winonahrtlogo.webp",
      smallLogo: "/logos/winonahrtlogo.webp",
      highlights: [
        "Board-certified physicians",
        "No video visit - online intake",
        "Unlimited doctor messaging",
        "Free delivery to your door",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=495&aff_id=12904",
      ctaText: "Visit Site",
    },
    {
      id: "gala",
      name: "Gala",
      tagline:
        "Flat-fee menopause HRT from US-licensed clinicians, with ongoing check-ins and dose adjustments included",
      logo: "/logos/galahrtlogo.png",
      smallLogo: "/logos/galahrtlogo.png",
      highlights: [
        "FDA-approved estradiol & progesterone",
        "One monthly price, no insurance needed",
        "Check-ins & dose adjustments included",
        "Free shipping",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1576&aff_id=12904&url_id=12556",
      ctaText: "Visit Site",
    },
    {
      id: "midi",
      name: "Midi Health",
      tagline:
        "Insurance-billed video visits with menopause-trained clinicians, with prescriptions sent to your own pharmacy",
      logo: "/logos/midihealthhrtlogo.png",
      smallLogo: "/logos/midihealthhrtlogo.png",
      highlights: [
        "In-network with most major insurance",
        "Video visits with menopause specialists",
        "Hormonal & non-hormonal care plans",
        "Rx sent to your pharmacy of choice",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1558&aff_id=12904",
      ctaText: "Visit Site",
    },
  ],

  reviews: [
    {
      slug: "winona",
      providerId: "winona",
      shortSummary:
        "A physician-led online menopause service that prescribes estrogen, progesterone and vaginal estrogen after an online intake - no video visit, with unlimited doctor messaging and free delivery.",
      reviewIntro:
        "Winona is one of the best-known online menopause brands, built around a simple idea: many women want expert HRT care without booking appointments. Instead of a video call, you complete a detailed online health questionnaire, a board-certified physician licensed in your state reviews it, and - if hormone therapy is appropriate for you - a personalized plan ships to your door. Ongoing care happens through secure messaging with your doctor. This review covers what Winona offers, what it costs and who it fits best.",
      keyFeatures: [
        "Board-certified physicians review every intake",
        "No video visit required - online questionnaire and secure messaging",
        "Estradiol in several forms (pill, patch, cream) plus progesterone",
        "Vaginal estrogen cream for dryness and urinary symptoms",
        "Unlimited follow-ups and doctor messaging included",
        "Free delivery to your door",
      ],
      pricingSummary:
        "Approximate only - confirm at checkout. Winona bills treatment as a monthly subscription that bundles the physician review, messaging and shipping. Published figures have started at roughly $39/month for progesterone alone, with common estrogen-plus-progesterone combinations landing higher - often somewhere around $89/month or more depending on the form and dose prescribed (patches tend to cost more than pills). Promotions and plans change, so verify the current price on Winona's own site before subscribing.",
      treatmentOptions: [
        "Estradiol (oral pill, patch or cream - clinician-selected)",
        "Progesterone (for women with a uterus taking estrogen)",
        "Vaginal estrogen cream (localized urogenital symptoms)",
        "Estriol-based options where appropriate",
        "Non-HRT add-ons such as a compounded arousal cream and hair and skin products",
      ],
      pros: [
        "Genuinely appointment-free: no video visit, which many busy women prefer",
        "Physician-led care with unlimited messaging and follow-ups",
        "Several estrogen forms, so the route can be matched to your history and preference",
        "Everything - review, messaging, shipping - bundled into one subscription",
      ],
      cons: [
        "Self-pay only - it does not bill your health insurance",
        "No face-to-face or video contact, which some women want for a first HRT conversation",
        "Does not prescribe testosterone",
        "State availability varies - check your location at sign-up",
      ],
      bestFor: [
        "Women who want expert HRT care without scheduling appointments",
        "Those comfortable communicating with a doctor by secure message",
        "Anyone who wants a choice of estrogen forms delivered to the door",
      ],
      finalVerdict:
        "Winona is our top pick because it removes the biggest barrier to menopause care - getting an appointment - while keeping a board-certified physician in charge of every prescription. The online intake is detailed, messaging is unlimited, and the range of estrogen forms lets your doctor tailor treatment. The trade-offs are that it is self-pay only and never meets you by video, so women who want insurance billing or a live conversation may prefer an insurance-based clinic. Hormone therapy carries real risks - including blood clots, stroke and breast-cancer considerations - and it is not right for everyone, so answer the intake honestly and let the physician decide. Confirm current pricing before subscribing. This review is general information, not medical advice.",
      howItWorks: [
        {
          timing: "Step 1",
          title: "Complete the online intake",
          detail:
            "Answer detailed questions about your symptoms, cycle, health history and medications. Be thorough - personal or family history of clots, stroke or certain cancers matters a great deal for HRT.",
        },
        {
          timing: "Step 2",
          title: "Physician review",
          detail:
            "A board-certified physician licensed in your state reviews your answers and decides whether HRT is appropriate - and which form and dose fits - or whether another approach is better.",
        },
        {
          timing: "Step 3",
          title: "Delivery and ongoing care",
          detail:
            "If prescribed, treatment ships to your door, and you can message your doctor any time to adjust your plan.",
        },
      ],
      trustBadges: ["Board-certified physicians", "No video visit needed", "Free delivery"],
      updatedAt: UPDATED,
    },
    {
      slug: "gala",
      providerId: "gala",
      shortSummary:
        "A flat-fee online menopause program from US-licensed clinicians, prescribing FDA-approved estradiol and progesterone with check-ins, dose adjustments and shipping included.",
      reviewIntro:
        "Gala is a women's telehealth brand that pairs menopause hormone therapy with a separate GLP-1 weight-management program. Its HRT plan is built around simplicity and price transparency: one monthly fee, no insurance paperwork, and a US-licensed clinician who reviews your symptom and health history, builds a plan, and stays involved with check-ins and dose adjustments. Gala highlights that it prescribes FDA-approved bioidentical forms of estradiol and progesterone. This review covers what the plan includes and who it suits.",
      keyFeatures: [
        "US-licensed clinicians build a personalized HRT plan",
        "FDA-approved estradiol (pill or patch) and progesterone",
        "Vaginal estradiol when symptoms call for it",
        "One flat monthly price - no insurance required",
        "Messaging, symptom check-ins and dose adjustments included",
        "Free shipping; separate weight-management program available",
      ],
      pricingSummary:
        "Approximate only - confirm at checkout. Gala advertises a single monthly price for its HRT plan that includes the clinician, check-ins, dose adjustments and medication shipping. Advertised starting prices we have seen fall in the roughly $69-$79/month range, but the figure varies by promotion and plan, so verify the current price on Gala's own site before subscribing.",
      treatmentOptions: [
        "Estradiol - oral pill or transdermal patch",
        "Progesterone - oral or vaginal",
        "Vaginal estradiol for localized symptoms",
        "Clinician check-ins and dose adjustments",
      ],
      pros: [
        "Simple, predictable pricing with the clinician relationship built in",
        "Focus on FDA-approved estradiol and progesterone products",
        "No insurance needed, so no prior authorizations or surprise bills",
        "Useful for women also interested in medically supervised weight management",
      ],
      cons: [
        "Self-pay only - it does not bill your health insurance",
        "Fewer estrogen forms highlighted than our top pick (no cream listed for systemic use)",
        "Newer, less established brand in menopause care than the category leaders",
        "Requires an online medical review - not every applicant will be prescribed",
      ],
      bestFor: [
        "Women who want one predictable monthly price",
        "Those who specifically want FDA-approved estradiol and progesterone",
        "Anyone weighing menopause care and weight management together",
      ],
      finalVerdict:
        "Gala is a strong, straightforward choice: FDA-approved estradiol and progesterone, a clinician who keeps adjusting your plan, and a flat monthly price with no insurance hoops. It ranks just behind Winona, which offers a wider range of estrogen forms and a longer track record in menopause care. As with any HRT, the risks - including blood clots, stroke and breast-cancer considerations - are real and depend on your age, timing and history, so a clinician must decide whether it is right for you. Confirm current pricing on Gala's site. This review is general information, not medical advice.",
      howItWorks: [
        {
          timing: "Step 1",
          title: "Symptom and health assessment",
          detail:
            "Complete an online assessment covering your symptoms, health history and medications.",
        },
        {
          timing: "Step 2",
          title: "Clinician builds your plan",
          detail:
            "A US-licensed clinician reviews your assessment and, if HRT is appropriate, selects the form and dose - pill or patch, plus progesterone if needed.",
        },
        {
          timing: "Step 3",
          title: "Delivery and check-ins",
          detail:
            "Medication ships free, and ongoing messaging, symptom check-ins and dose adjustments are included in the monthly price.",
        },
      ],
      trustBadges: ["US-licensed clinicians", "FDA-approved hormones", "Flat monthly price"],
      updatedAt: UPDATED,
    },
    {
      slug: "midi",
      providerId: "midi",
      shortSummary:
        "A menopause-focused virtual clinic that bills most major insurance, offering video visits with menopause-trained nurse practitioners and prescriptions sent to your own pharmacy.",
      reviewIntro:
        "Midi Health is a virtual women's-health clinic dedicated to perimenopause and menopause. Unlike subscription services, Midi works much like a specialist practice: you book a video visit (about 30 minutes) with a women's-health nurse practitioner or certified nurse midwife trained in menopause care, leave with a personalized Care Plan, and prescriptions are sent to your pharmacy of choice. Its standout feature is insurance - Midi is in-network with most major commercial plans. This review covers how it works, what it costs and who it fits.",
      keyFeatures: [
        "In-network with most major commercial insurance plans",
        "Video visits with menopause-trained NPs and nurse midwives",
        "Care Plans that can include hormonal and non-hormonal options",
        "Prescriptions sent to your pharmacy of choice",
        "Follow-up visits as often as you need",
        "Broader midlife care: weight management, sexual wellness, hair and skin",
      ],
      pricingSummary:
        "Approximate only - confirm with your plan and at booking. With in-network insurance, you typically pay your usual specialist copay, coinsurance or deductible for visits, and your medication cost depends on your pharmacy benefit. Self-pay visits have been listed at roughly $250 for an initial visit and $150 for follow-ups. Midi does not bill Medicare, and some services (such as testosterone) are out of pocket. Check your coverage when you register.",
      treatmentOptions: [
        "Systemic hormone therapy (estrogen with progesterone as appropriate)",
        "Vaginal estrogen for localized symptoms",
        "Non-hormonal prescription options",
        "Testosterone in selected cases (out of pocket)",
        "Weight-management, sexual-wellness and hair and skin care",
      ],
      pros: [
        "Uses your health insurance - often the lowest-cost route for insured women",
        "Live video conversation with a menopause-trained clinician",
        "Prescriptions filled at your own pharmacy, typically through your drug coverage",
        "Broad midlife care beyond HRT, including non-hormonal options",
      ],
      cons: [
        "Requires scheduling a video visit rather than a quick async intake",
        "Not billed to Medicare",
        "Costs vary by plan - deductibles and copays can add up",
        "Medication is not bundled or delivered as part of a single subscription",
      ],
      bestFor: [
        "Women with commercial (e.g. PPO) insurance who want it to cover care",
        "Anyone who prefers a live video conversation with a clinician",
        "Women with more complex histories who want a longer consultation",
      ],
      finalVerdict:
        "Midi Health is the best option on our list for women who want to use their insurance and prefer a real-time conversation with a menopause-trained clinician. It behaves like a specialist practice: longer visits, a full Care Plan that can include non-hormonal options, and prescriptions at your own pharmacy. It ranks third because it is less convenient than an async subscription and costs are harder to predict until you check your plan. HRT carries real risks - including blood clots, stroke and breast-cancer considerations - and is not suitable for everyone, which a live visit is well placed to work through. Confirm your coverage before booking. This review is general information, not medical advice.",
      howItWorks: [
        {
          timing: "Step 1",
          title: "Register and check coverage",
          detail:
            "Create an account and upload your insurance card to see whether you are in-network, or choose self-pay.",
        },
        {
          timing: "Step 2",
          title: "Video visit",
          detail:
            "Meet a menopause-trained nurse practitioner or nurse midwife by video to go over your symptoms, full health history and goals.",
        },
        {
          timing: "Step 3",
          title: "Care Plan and prescriptions",
          detail:
            "Receive a personalized Care Plan; any prescriptions are sent to your pharmacy of choice, with follow-ups available whenever you need them.",
        },
      ],
      trustBadges: ["Accepts major insurance", "Menopause-trained clinicians", "Video visits"],
      updatedAt: UPDATED,
    },
  ],

  battles: [
    {
      slug: "winona-vs-gala",
      provider1Id: "winona",
      provider2Id: "gala",
      title: "Winona vs Gala",
      matchupLabel: "Winona vs Gala",
      subtitle: "Physician-led, appointment-free HRT vs a flat-fee clinician plan",
      description:
        "Compare Winona and Gala for online menopause HRT - treatment options, clinicians, pricing model and which fits you best.",
      intro:
        "Winona and Gala both prescribe menopause hormone therapy online and ship it to your door, and neither bills insurance. Winona is physician-led, skips the video visit entirely and offers several estrogen forms; Gala keeps things simple with FDA-approved estradiol and progesterone and one flat monthly price. Here's how they compare.",
      verdict:
        "Both are legitimate, clinician-led options. Winona is our pick for women who want the widest choice of estrogen forms, physician oversight and appointment-free care. Gala is an excellent choice if you want a single predictable monthly price and a focus on FDA-approved products. Confirm current pricing on each provider's site.",
      verdictWinnerPoints: [
        "Board-certified physicians review every intake",
        "Estradiol as pill, patch or cream, plus vaginal estrogen",
        "Unlimited doctor messaging with no video visit needed",
      ],
      verdictLoserPoints: [
        "One flat monthly price with the clinician included",
        "FDA-approved estradiol and progesterone",
        "Dose adjustments and check-ins built in",
      ],
      winnerId: "winona",
      categories: [
        {
          name: "Treatment range",
          winner: "provider1",
          explanation:
            "Winona offers estradiol in several forms including cream, plus progesterone and vaginal estrogen; Gala focuses on pill or patch estradiol, progesterone and vaginal estradiol.",
          supportingPoints: [
            "Cream option at Winona",
            "Pill and patch at both",
            "Vaginal estrogen at both",
          ],
        },
        {
          name: "Pricing simplicity",
          winner: "provider2",
          explanation:
            "Gala advertises one flat monthly price; Winona's cost varies with the form and combination prescribed.",
          supportingPoints: ["Single monthly fee at Gala", "Tiered pricing at Winona"],
        },
        {
          name: "Clinical oversight",
          winner: "tie",
          explanation:
            "Both require an online assessment and a licensed clinician's decision before prescribing, with ongoing messaging.",
          supportingPoints: ["Clinician review at both", "Ongoing messaging at both"],
        },
        {
          name: "Convenience",
          winner: "provider1",
          explanation:
            "Winona is fully appointment-free with unlimited physician messaging and free delivery.",
          supportingPoints: ["No video visit", "Free delivery"],
        },
      ],
      features: [
        { feature: "Clinicians", provider1Value: "Board-certified physicians", provider2Value: "US-licensed clinicians", highlight: "provider1" },
        { feature: "Estrogen forms", provider1Value: "Pill, patch, cream", provider2Value: "Pill, patch", highlight: "provider1" },
        { feature: "Vaginal estrogen", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Insurance", provider1Value: "Self-pay", provider2Value: "Self-pay", highlight: "none" },
        { feature: "Pricing", provider1Value: "Varies by plan (approx.)", provider2Value: "Flat monthly (approx.)", highlight: "provider2" },
      ],
      updatedAt: UPDATED,
    },
    {
      slug: "winona-vs-midi",
      provider1Id: "winona",
      provider2Id: "midi",
      title: "Winona vs Midi Health",
      matchupLabel: "Winona vs Midi Health",
      subtitle: "Appointment-free HRT delivered vs insurance-billed video visits",
      description:
        "Compare Winona and Midi Health for online menopause care - visit style, insurance, treatments and which fits you best.",
      intro:
        "Winona and Midi Health represent the two main models of online menopause care. Winona is a self-pay subscription: an online intake, a physician review and treatment delivered to your door, with no video visit. Midi is a virtual specialist clinic: video visits with menopause-trained clinicians, billed to your insurance, with prescriptions sent to your own pharmacy. Here's how they compare.",
      verdict:
        "Winona is our overall pick for convenience - physician-led HRT with no appointments and everything bundled. Midi Health is the better choice if you have commercial insurance you want to use, or you want a live video conversation. Confirm current pricing and your coverage before choosing.",
      verdictWinnerPoints: [
        "No appointments - online intake and messaging",
        "Medication, messaging and shipping bundled",
        "Board-certified physicians",
      ],
      verdictLoserPoints: [
        "In-network with most major commercial insurance",
        "Live video visits with menopause-trained clinicians",
        "Hormonal and non-hormonal care plans",
      ],
      winnerId: "winona",
      categories: [
        {
          name: "Insurance coverage",
          winner: "provider2",
          explanation:
            "Midi is in-network with most major commercial plans; Winona is self-pay only. Neither is billed to Medicare.",
          supportingPoints: ["Insurance-billed visits at Midi", "Rx via your drug coverage", "Self-pay at Winona"],
        },
        {
          name: "Convenience",
          winner: "provider1",
          explanation:
            "Winona needs no scheduled visit and delivers treatment to your door; Midi requires a video appointment and a pharmacy pickup or delivery.",
          supportingPoints: ["No video visit at Winona", "Home delivery at Winona"],
        },
        {
          name: "Depth of consultation",
          winner: "provider2",
          explanation:
            "Midi's live, roughly 30-minute video visits suit women who want to talk through a complex history in real time.",
          supportingPoints: ["Live video visits", "Full Care Plan"],
        },
        {
          name: "Clinical oversight",
          winner: "tie",
          explanation:
            "Both put a licensed, menopause-focused clinician in charge of the decision and offer ongoing follow-up.",
          supportingPoints: ["Clinician-led at both", "Ongoing follow-up at both"],
        },
      ],
      features: [
        { feature: "Visit style", provider1Value: "Async intake + messaging", provider2Value: "Video visit", highlight: "none" },
        { feature: "Clinicians", provider1Value: "Board-certified physicians", provider2Value: "Menopause-trained NPs / CNMs", highlight: "both" },
        { feature: "Insurance", provider1Value: "Self-pay", provider2Value: "Most major commercial plans", highlight: "provider2" },
        { feature: "Medication", provider1Value: "Delivered to your door", provider2Value: "Sent to your pharmacy", highlight: "provider1" },
        { feature: "Non-hormonal options", provider1Value: "Limited", provider2Value: "Yes", highlight: "provider2" },
      ],
      updatedAt: UPDATED,
    },
    {
      slug: "gala-vs-midi",
      provider1Id: "gala",
      provider2Id: "midi",
      title: "Gala vs Midi Health",
      matchupLabel: "Gala vs Midi Health",
      subtitle: "A flat-fee HRT plan vs an insurance-based menopause clinic",
      description:
        "Compare Gala and Midi Health for online menopause HRT - pricing, insurance, visit style and which fits you best.",
      intro:
        "Gala and Midi Health both offer clinician-led menopause care online, but they are built for different women. Gala is a flat-fee, self-pay plan with FDA-approved estradiol and progesterone shipped to your door. Midi is a virtual specialist clinic that bills most major insurance and meets you by video. Here's how they compare.",
      verdict:
        "Gala edges this matchup on simplicity: one predictable price, no appointments to schedule and medication delivered. Midi Health wins clearly if you have commercial insurance you want to use or want a longer live consultation. Confirm current pricing and your coverage on each provider's site.",
      verdictWinnerPoints: [
        "One flat monthly price, clinician included",
        "FDA-approved estradiol and progesterone",
        "Medication shipped free to your door",
      ],
      verdictLoserPoints: [
        "In-network with most major commercial insurance",
        "Live video visits",
        "Broader hormonal and non-hormonal care",
      ],
      winnerId: "gala",
      categories: [
        {
          name: "Pricing predictability",
          winner: "provider1",
          explanation:
            "Gala's single monthly price is easy to budget; Midi's cost depends on your plan, deductible and pharmacy benefit.",
          supportingPoints: ["Flat fee at Gala", "Plan-dependent costs at Midi"],
        },
        {
          name: "Insurance coverage",
          winner: "provider2",
          explanation: "Midi bills most major commercial insurance; Gala is self-pay only.",
          supportingPoints: ["In-network at Midi", "No insurance at Gala"],
        },
        {
          name: "Breadth of care",
          winner: "provider2",
          explanation:
            "Midi's Care Plans can include non-hormonal prescriptions and wider midlife care alongside HRT.",
          supportingPoints: ["Non-hormonal options", "Sexual wellness, hair and skin"],
        },
        {
          name: "Clinical oversight",
          winner: "tie",
          explanation: "Both rely on licensed clinicians to decide whether HRT is appropriate and to adjust it over time.",
          supportingPoints: ["Clinician-led at both", "Ongoing follow-up"],
        },
      ],
      features: [
        { feature: "Visit style", provider1Value: "Online assessment + messaging", provider2Value: "Video visit", highlight: "none" },
        { feature: "Insurance", provider1Value: "Self-pay", provider2Value: "Most major commercial plans", highlight: "provider2" },
        { feature: "Pricing", provider1Value: "Flat monthly (approx.)", provider2Value: "Copay / plan-dependent", highlight: "provider1" },
        { feature: "Medication", provider1Value: "Shipped free", provider2Value: "Sent to your pharmacy", highlight: "provider1" },
        { feature: "Non-hormonal options", provider1Value: "See site", provider2Value: "Yes", highlight: "provider2" },
      ],
      updatedAt: UPDATED,
    },
  ],

  articles: [
    {
      slug: "perimenopause-symptoms",
      title: "Perimenopause Symptoms: What's Normal and When to Get Help",
      description:
        "Hot flashes, poor sleep, mood changes, irregular periods and more - here's what perimenopause really looks like, why it happens and when treatment is worth discussing.",
      category: "Guides",
      readTime: "7 min read",
      publishedAt: "2026-09-26",
      updatedAt: "2026-09-26",
      heroColor: "#FCE4EC",
      author: "HRT Women Editorial Team",
      keyTakeaways: [
        "Perimenopause is the transition before menopause, when hormone levels - especially estrogen - fluctuate unpredictably, often for several years.",
        "Common symptoms include irregular periods, hot flashes and night sweats, sleep problems, mood changes, brain fog and vaginal dryness.",
        "Menopause itself is confirmed after 12 consecutive months without a period; symptoms can start well before that.",
        "Effective treatments exist - hormonal and non-hormonal - and a licensed clinician can help you decide what fits your history.",
      ],
      sections: [
        {
          heading: "What is perimenopause?",
          body: `<p><strong>Perimenopause</strong> means "around menopause" - the transition years before your final period. During this time the ovaries' output of estrogen and progesterone becomes erratic rather than simply declining in a straight line. Some months levels swing high, others low, and that unpredictability is behind many of the symptoms women notice.</p><p>Perimenopause most often begins in a woman's 40s, though it can start earlier, and it can last anywhere from a few years to longer. <strong>Menopause</strong> is the point confirmed once you have gone 12 consecutive months without a period; everything after that is postmenopause.</p>`,
        },
        {
          heading: "The most common symptoms",
          body: `<p>Every woman's experience is different, but the symptoms clinicians hear about most include:</p><ul><li><strong>Irregular periods</strong> - cycles that become shorter, longer, heavier, lighter or skipped.</li><li><strong>Hot flashes and night sweats</strong> - sudden waves of heat, flushing and sweating (known as vasomotor symptoms).</li><li><strong>Sleep problems</strong> - trouble falling or staying asleep, often worsened by night sweats.</li><li><strong>Mood changes</strong> - irritability, anxiety or low mood, sometimes new for women who never experienced them before.</li><li><strong>Brain fog</strong> - trouble concentrating or finding words.</li><li><strong>Vaginal dryness and discomfort</strong> - and related urinary symptoms, which tend to persist or worsen over time.</li><li><strong>Changes in libido, joint aches and weight distribution</strong>.</li></ul><p>Because many of these overlap with other conditions - thyroid problems, anemia, depression - it is worth having a clinician look at the whole picture rather than assuming everything is hormonal.</p>`,
        },
        {
          heading: "Why hormone levels matter",
          body: `<p>Estrogen affects far more than reproduction. It plays a role in temperature regulation, sleep, mood, bone density, and the health of vaginal and urinary tissue. When levels fluctuate and then fall, those systems feel it. Progesterone also declines, which can contribute to heavier or irregular bleeding and sleep changes.</p><p>One practical point: because hormones fluctuate so much in perimenopause, a single blood test is often not very useful for diagnosing it. Clinicians typically rely mainly on your age, symptoms and cycle history.</p>`,
        },
        {
          heading: "When to talk to a clinician",
          body: `<p>You don't need to wait until symptoms are unbearable. It is reasonable to seek care if symptoms are affecting your sleep, work, relationships or quality of life. And some changes should always be checked promptly, including <strong>very heavy bleeding, bleeding between periods, bleeding after sex, or any bleeding after menopause</strong>.</p><p>A menopause-literate clinician can talk you through options ranging from lifestyle changes to <strong>hormone replacement therapy (HRT)</strong> and <strong>non-hormonal prescriptions</strong>. If you are weighing hormone therapy, our guide to <a href="/articles/is-hrt-safe">whether HRT is safe</a> explains the current evidence on risks and benefits.</p>`,
        },
        {
          heading: "Getting care online",
          body: `<p>Many women now get menopause care through licensed telehealth services. Some, like <a href="/reviews/winona">Winona</a>, work through a detailed online intake reviewed by a physician; others, like <a href="/reviews/midi">Midi Health</a>, offer insurance-billed video visits. You can see how they stack up in our <a href="/articles/best-online-hrt-providers-compared">comparison of online HRT providers</a> or on our <a href="/">HRT provider rankings</a>.</p><p><em>This article is general information, not medical advice. A licensed clinician should decide what treatment, if any, is right for you.</em></p>`,
        },
      ],
    },
    {
      slug: "is-hrt-safe",
      title: "Is HRT Safe? What the Evidence Says in 2026",
      description:
        "Hormone therapy's reputation swung sharply after 2002 and has shifted again since. Here's a balanced look at HRT's benefits, its real risks and who should - and shouldn't - consider it.",
      category: "Safety",
      readTime: "8 min read",
      publishedAt: "2026-09-26",
      updatedAt: "2026-09-27",
      heroColor: "#F8D7E3",
      author: "HRT Women Editorial Team",
      keyTakeaways: [
        "HRT is the most effective treatment for hot flashes and night sweats, but it carries real risks, including blood clots, stroke and breast-cancer considerations.",
        "Risk depends heavily on age, time since menopause, the type and route of hormones, and your personal and family history.",
        "The FDA began removing the boxed warnings on heart disease, breast cancer and dementia in November 2025 and approved the first updated labels in February 2026 - but kept the endometrial-cancer warning for estrogen-alone products.",
        "HRT is not for everyone - a licensed clinician should weigh your individual history before prescribing.",
      ],
      sections: [
        {
          heading: "Why HRT got a bad reputation",
          body: `<p>For many women, the word "HRT" still comes with a warning attached. That largely traces back to the <strong>Women's Health Initiative (WHI)</strong>, a large set of US trials whose early results, published in 2002, reported increased risks of breast cancer, heart disease, stroke and blood clots in women taking hormone therapy. Prescriptions fell dramatically afterward, and boxed warnings were added to product labels.</p><p>In the years since, researchers have re-examined that data. An important nuance: the WHI participants were, on average, in their 60s and many years past menopause - older than most women who start HRT for symptoms today. Later analyses suggested that the balance of risks and benefits looks different for younger women who start treatment closer to menopause.</p>`,
        },
        {
          heading: "What changed: the FDA's 2025-2026 labeling decision",
          body: `<p>In <strong>November 2025</strong>, the FDA asked manufacturers to remove the boxed warnings about cardiovascular disease, breast cancer and probable dementia from menopausal hormone therapy products, and to add more age-specific context about starting therapy. On <strong>February 12, 2026</strong> it approved the first six updated labels - including Prometrium (progesterone), Divigel (estradiol gel) and Estring (vaginal estradiol) - with other products following as their manufacturers' changes are reviewed. The agency pointed to evidence that HRT started within about 10 years of menopause, generally before age 60, has a more favorable balance of benefits and risks.</p><p>That matches the long-term findings of the Women's Health Initiative itself: a 2024 review of the trials in <em>JAMA</em> concluded that women who start hormone therapy in early menopause have lower absolute risks than women who start it later.</p><p>Two important caveats: the FDA did <strong>not</strong> remove the boxed warning about <strong>endometrial cancer</strong> for systemic estrogen-alone products (which is why women with a uterus are generally prescribed a progestogen alongside estrogen), and removing a boxed warning does <strong>not</strong> mean the risks disappeared. They remain part of the prescribing information and part of the conversation with your clinician.</p>`,
        },
        {
          heading: "The real risks to understand",
          body: `<p>Hormone therapy is a real medication with real risks. The main ones clinicians weigh include:</p><ul><li><strong>Blood clots (venous thromboembolism)</strong> - the risk is associated particularly with oral estrogen; transdermal routes (patch, gel) are thought to carry a lower clot risk, which is one reason route matters.</li><li><strong>Stroke</strong> - a small increased risk, especially with oral estrogen and in older women.</li><li><strong>Breast cancer</strong> - combined estrogen-plus-progestogen therapy has been associated with a small increase in risk with longer use; the picture differs for estrogen alone.</li><li><strong>Endometrial cancer</strong> - estrogen alone in a woman with a uterus raises this risk, which progestogen protects against.</li><li><strong>Gallbladder disease</strong> and common side effects such as breast tenderness, bloating or bleeding.</li></ul><p>These risks are why an honest, complete medical intake matters so much - and why dosing and route are clinician decisions.</p>`,
        },
        {
          heading: "Who usually should not take HRT",
          body: `<p>HRT is not suitable for everyone. Clinicians are generally cautious or will avoid systemic hormone therapy in women with a history of:</p><ul><li>Breast cancer or other estrogen-sensitive cancers</li><li>Blood clots, stroke or heart attack</li><li>Unexplained vaginal bleeding</li><li>Active liver disease</li><li>Certain clotting disorders</li></ul><p>This list is not exhaustive. Some women in these groups may still be candidates for <strong>low-dose vaginal estrogen</strong> or <strong>non-hormonal treatments</strong>, but that is a decision for a specialist who knows your full history.</p>`,
        },
        {
          heading: "The benefits side of the ledger",
          body: `<p>For appropriate candidates, HRT is the most effective treatment available for <strong>hot flashes and night sweats</strong>, and it can improve sleep disrupted by those symptoms. Vaginal estrogen is highly effective for dryness and related urinary symptoms. Systemic estrogen also helps prevent bone loss. Major professional bodies, including The Menopause Society, support hormone therapy as an appropriate option for many healthy women with bothersome symptoms who start it before age 60 or within 10 years of menopause - while emphasizing individualized decisions.</p>`,
        },
        {
          heading: "Making a safe decision",
          body: `<p>The safest path is a clinician who takes a full history, explains your personal risk, chooses the route and dose deliberately, and reviews your treatment over time. Licensed online services can do this well - compare how <a href="/reviews/winona">Winona</a>, <a href="/reviews/gala">Gala</a> and <a href="/reviews/midi">Midi Health</a> handle it, or see our head-to-head of <a href="/winona-vs-midi">Winona vs Midi Health</a>.</p><p><em>This article is general information, not medical advice. Only a licensed clinician can determine whether hormone therapy is appropriate for you.</em></p>`,
        },
      ],
    },
    {
      slug: "estrogen-patch-vs-pill",
      title: "Estrogen Patch vs Pill: Which Form of HRT Is Right for You?",
      description:
        "Estradiol comes as pills, patches, gels, creams and vaginal products. Here's how the main forms differ in convenience, side effects and clot-risk considerations.",
      category: "Treatments",
      readTime: "7 min read",
      publishedAt: "2026-09-26",
      updatedAt: "2026-09-27",
      heroColor: "#FBE9F0",
      author: "HRT Women Editorial Team",
      keyTakeaways: [
        "Estradiol can be taken by mouth (pill), through the skin (patch, gel, spray or cream) or vaginally for local symptoms.",
        "Oral estrogen passes through the liver first, which is associated with a higher risk of blood clots than transdermal routes.",
        "Pills are simple and inexpensive; patches avoid daily dosing and first-pass liver metabolism but can irritate skin or fall off.",
        "Women with a uterus taking systemic estrogen generally also need a progestogen to protect the uterine lining.",
      ],
      sections: [
        {
          heading: "The main ways to take estrogen",
          body: `<p>Most modern HRT uses <strong>estradiol</strong>, the same estrogen the ovaries produce. What differs is how it gets into your body:</p><ul><li><strong>Oral (pill)</strong> - swallowed daily.</li><li><strong>Transdermal</strong> - absorbed through the skin via a <strong>patch</strong> (changed once or twice a week), <strong>gel</strong>, <strong>spray</strong> or <strong>cream</strong>.</li><li><strong>Vaginal</strong> - low-dose creams, tablets or rings aimed at local symptoms like dryness and urinary discomfort.</li></ul><p>Pills and transdermal products are "systemic" - they treat whole-body symptoms like hot flashes. Low-dose vaginal products work mainly locally.</p>`,
        },
        {
          heading: "Estrogen pills: pros and cons",
          body: `<p><strong>Pros:</strong> pills are familiar, easy to take, widely available as generics and usually inexpensive. There's nothing to stick on or rub in.</p><p><strong>Cons:</strong> oral estrogen is processed by the liver first ("first-pass metabolism"). That is associated with changes in clotting factors, and oral estrogen has been linked to a <strong>higher risk of blood clots</strong> and possibly stroke compared with transdermal estrogen. For women with certain risk factors, clinicians often prefer a transdermal route for that reason.</p>`,
        },
        {
          heading: "Estrogen patches: pros and cons",
          body: `<p><strong>Pros:</strong> patches deliver estradiol steadily through the skin and bypass first-pass liver metabolism, which is why transdermal estrogen is thought to carry a <strong>lower clot risk</strong> than pills. Changing a patch once or twice a week also suits women who forget daily pills.</p><p><strong>Cons:</strong> patches can cause skin irritation, sometimes loosen with heat, sweat or swimming, and can cost more than generic pills. Gels and sprays are alternatives for women who don't get on with patches.</p>`,
        },
        {
          heading: "Creams, gels and vaginal estrogen",
          body: `<p>Transdermal <strong>gels and creams</strong> offer flexible dosing without a patch. Note that some creams sold online are <strong>compounded</strong> - prepared by a pharmacy rather than manufactured as an FDA-approved product - so it's worth asking your clinician which you are getting and why.</p><p><strong>Vaginal estrogen</strong> is in a category of its own: low-dose and aimed at dryness, pain with sex and urinary symptoms. Because very little is absorbed into the bloodstream, clinicians consider it for some women who aren't candidates for systemic HRT - but that is an individual decision.</p>`,
        },
        {
          heading: "Don't forget progesterone",
          body: `<p>If you still have a uterus, taking systemic estrogen on its own raises the risk of endometrial (uterine lining) cancer. That's why women with a uterus are generally prescribed a <strong>progestogen</strong> - often micronized progesterone - alongside estrogen. Women who have had a hysterectomy typically don't need it. Your clinician will decide on the right combination and schedule.</p>`,
        },
        {
          heading: "A note on patch availability in 2026",
          body: `<p>Demand for estradiol patches rose sharply after the FDA's 2025-2026 boxed-warning changes, and some women have had trouble finding their usual brand or strength at the pharmacy. The FDA says estradiol patches remain available and that manufacturers have been expanding production, but availability can still vary by pharmacy and brand.</p><p>If your patch is hard to find, don't switch products or doses on your own - ask your clinician or pharmacist. Options can include a different patch brand, a gel or spray, or another route your clinician thinks suits you.</p>`,
        },
        {
          heading: "How to choose - and where to get it",
          body: `<p>The right form depends on your health history, clot and stroke risk, symptoms, skin and preferences - a clinician should make the call with you. Online providers differ in what they offer: <a href="/reviews/winona">Winona</a> offers estradiol as pill, patch or cream; <a href="/reviews/gala">Gala</a> focuses on FDA-approved pill or patch estradiol; and <a href="/reviews/midi">Midi Health</a> prescribes through your own pharmacy and insurance. See <a href="/winona-vs-gala">Winona vs Gala</a> for a closer look.</p><p><em>This article is general information, not medical advice. A licensed clinician should decide which form of HRT, if any, is right for you.</em></p>`,
        },
      ],
    },
    {
      slug: "bioidentical-hormones-explained",
      title: "Bioidentical Hormones Explained: FDA-Approved vs Compounded",
      description:
        "\"Bioidentical\" is one of the most confusing words in menopause care. Here's what it actually means, how FDA-approved and compounded hormones differ, and what the evidence says about safety.",
      category: "Treatments",
      readTime: "7 min read",
      publishedAt: "2026-09-26",
      updatedAt: "2026-09-26",
      heroColor: "#F6DCE7",
      author: "HRT Women Editorial Team",
      keyTakeaways: [
        "\"Bioidentical\" means a hormone is chemically identical to what the body makes - estradiol and progesterone are common examples.",
        "FDA-approved bioidentical products exist, including estradiol pills, patches and gels and micronized progesterone.",
        "Compounded \"bioidentical\" hormones are custom-mixed by pharmacies and are not FDA-approved; evidence does not show they are safer or more effective.",
        "Any estrogen - bioidentical or not - carries the same class of risks, so the clinician review matters either way.",
      ],
      sections: [
        {
          heading: "What \"bioidentical\" actually means",
          body: `<p>A <strong>bioidentical hormone</strong> has the same chemical structure as the hormone your body produces. In menopause care that usually means <strong>17-beta estradiol</strong> (the main estrogen made by the ovaries) and <strong>progesterone</strong>. By contrast, some older therapies used conjugated estrogens derived from other sources or synthetic progestins with different structures.</p><p>The term has become a marketing phrase, and it's often used as if "bioidentical" automatically means "natural," "custom" or "safer." None of those follow from the definition.</p>`,
        },
        {
          heading: "FDA-approved bioidentical hormones exist",
          body: `<p>A common misconception is that you need a specialty pharmacy to get bioidentical hormones. In fact, many <strong>FDA-approved</strong> products are bioidentical - including estradiol pills, patches, gels and sprays, vaginal estradiol products, and oral micronized progesterone. These are manufactured to consistent standards, tested for safety and effectiveness, and come with standardized prescribing information.</p>`,
        },
        {
          heading: "What compounded hormones are",
          body: `<p><strong>Compounded bioidentical hormones</strong> are mixed by a compounding pharmacy for an individual prescription - sometimes in doses or combinations not available commercially, or in forms like custom creams or pellets. Compounding has legitimate uses, such as for someone allergic to an ingredient in an approved product.</p><p>However, compounded hormones are <strong>not FDA-approved</strong>. That means they haven't gone through the same review of safety, effectiveness and manufacturing consistency, and dose strength can vary more from batch to batch.</p>`,
        },
        {
          heading: "Is bioidentical safer?",
          body: `<p>This is the key question - and the honest answer is that <strong>the evidence does not show compounded bioidentical hormones are safer or more effective</strong> than FDA-approved hormone therapy. Major professional bodies, including The Menopause Society and the American College of Obstetricians and Gynecologists, generally recommend FDA-approved products over compounded ones for most women.</p><p>It is also worth being clear that estradiol is estradiol: being bioidentical does not remove the class risks of estrogen therapy - blood clots, stroke, breast-cancer considerations and, without a progestogen, endometrial cancer for women with a uterus. Be skeptical of any provider claiming otherwise, and be cautious about saliva-test-based "custom" dosing, which is not considered reliable for guiding therapy.</p>`,
        },
        {
          heading: "Questions to ask any provider",
          body: `<p>Before starting HRT online or in person, it's reasonable to ask:</p><ul><li>Is this an FDA-approved product or a compounded one - and if compounded, why?</li><li>Which estrogen and which progestogen am I getting, in what form and dose?</li><li>How will my treatment be monitored and adjusted?</li><li>What should prompt me to stop and seek care?</li></ul><p>Among the providers we review, <a href="/reviews/gala">Gala</a> emphasizes FDA-approved estradiol and progesterone, <a href="/reviews/winona">Winona</a> offers a range of forms including creams, and <a href="/reviews/midi">Midi Health</a> prescribes through your own pharmacy. Compare them in <a href="/gala-vs-midi">Gala vs Midi Health</a>.</p><p><em>This article is general information, not medical advice. A licensed clinician should decide which hormone products, if any, are right for you.</em></p>`,
        },
      ],
    },
    {
      slug: "best-online-hrt-providers-compared",
      title: "Best Online HRT Providers Compared: Winona vs Gala vs Midi Health",
      description:
        "A side-by-side look at three leading online menopause providers - how they work, what they prescribe, how you pay and which fits your situation.",
      category: "Comparisons",
      readTime: "8 min read",
      publishedAt: "2026-09-26",
      updatedAt: "2026-09-26",
      heroColor: "#FDEEF3",
      author: "HRT Women Editorial Team",
      keyTakeaways: [
        "Winona: physician-led, no video visit, several estrogen forms, self-pay subscription with free delivery.",
        "Gala: US-licensed clinicians, FDA-approved estradiol and progesterone, one flat self-pay monthly price.",
        "Midi Health: insurance-billed video visits with menopause-trained NPs and nurse midwives; prescriptions go to your own pharmacy.",
        "All three require a clinician's decision - HRT carries real risks and isn't right for everyone.",
      ],
      sections: [
        {
          heading: "Two models of online menopause care",
          body: `<p>Online HRT providers generally follow one of two models. <strong>Subscription services</strong> use an online intake reviewed by a clinician and ship medication to your door for a monthly fee, usually without billing insurance. <strong>Virtual clinics</strong> work more like a specialist practice: you book a video visit, your insurance may be billed, and prescriptions go to your own pharmacy.</p><p>Winona and Gala follow the subscription model; Midi Health is a virtual clinic. Neither model is inherently better - the right one depends on your insurance, budget and how you like to communicate with a clinician.</p>`,
        },
        {
          heading: "Winona: our top pick",
          body: `<p><a href="/reviews/winona">Winona</a> is physician-led: board-certified doctors review a detailed online intake, and there is <strong>no video visit</strong> - ongoing care happens through unlimited secure messaging. It offers estradiol as a pill, patch or cream, plus progesterone and vaginal estrogen, with free delivery.</p><p><strong>Watch-outs:</strong> self-pay only, no testosterone, and state availability varies. Pricing varies by the form prescribed - approximate only, so confirm at checkout.</p>`,
        },
        {
          heading: "Gala: flat-fee simplicity",
          body: `<p><a href="/reviews/gala">Gala</a> focuses on <strong>FDA-approved</strong> estradiol (pill or patch), oral or vaginal progesterone and vaginal estradiol, prescribed by US-licensed clinicians. Its selling point is one monthly price that includes the clinician, check-ins, dose adjustments and shipping. Gala also runs a separate weight-management program.</p><p><strong>Watch-outs:</strong> self-pay only, and a narrower list of estrogen forms than Winona. Advertised pricing varies - approximate only, confirm at checkout.</p>`,
        },
        {
          heading: "Midi Health: best for insurance",
          body: `<p><a href="/reviews/midi">Midi Health</a> is a virtual menopause clinic that is <strong>in-network with most major commercial insurance</strong>. You meet a menopause-trained nurse practitioner or certified nurse midwife by video, receive a Care Plan that can include hormonal and non-hormonal options, and prescriptions are sent to your pharmacy of choice.</p><p><strong>Watch-outs:</strong> it requires scheduled visits, it is not billed to Medicare, and your cost depends on your plan. Check your coverage when you register.</p>`,
        },
        {
          heading: "Head-to-head at a glance",
          body: `<ul><li><strong>Most convenient:</strong> Winona - no appointments, delivered to your door. See <a href="/winona-vs-gala">Winona vs Gala</a>.</li><li><strong>Most predictable price:</strong> Gala - one flat monthly fee.</li><li><strong>Best if you have insurance:</strong> Midi Health. See <a href="/winona-vs-midi">Winona vs Midi Health</a> and <a href="/gala-vs-midi">Gala vs Midi Health</a>.</li><li><strong>Want a live conversation:</strong> Midi Health's video visits.</li><li><strong>Want FDA-approved products specifically:</strong> Gala highlights this; you can ask any provider which products they prescribe.</li></ul>`,
        },
        {
          heading: "Whichever you choose",
          body: `<p>A legitimate provider will always take a full history and let a licensed clinician decide whether HRT is appropriate. Hormone therapy carries real risks - including blood clots, stroke and breast-cancer considerations - and women with a history of certain cancers, clots or stroke may not be candidates. Read our guide to <a href="/articles/is-hrt-safe">whether HRT is safe</a>, and see the full <a href="/">HRT provider rankings</a>.</p><p><em>This article is general information, not medical advice. A licensed clinician should decide what treatment, if any, is right for you.</em></p>`,
        },
      ],
    },
  ],

  faqs: [
    {
      question: "What is HRT for menopause?",
      answer:
        "Hormone replacement therapy (HRT), also called menopausal hormone therapy, replaces some of the estrogen - and, for women with a uterus, progesterone - that the body makes less of during perimenopause and menopause. It is the most effective treatment for hot flashes and night sweats and can also help with sleep, vaginal dryness and bone health. Whether it is right for you depends on your age, symptoms and health history, so a licensed clinician should decide.",
    },
    {
      question: "Is HRT safe?",
      answer:
        "For many healthy women who start it before age 60 or within about 10 years of menopause, major medical societies consider HRT an appropriate option for bothersome symptoms. It does carry real risks, including blood clots, stroke and breast-cancer considerations, and it is generally not recommended for women with a history of certain cancers, blood clots, stroke or unexplained bleeding. The FDA began removing several boxed warnings from menopausal HRT labels in November 2025 (the first updated labels were approved in February 2026), but the risks remain part of the prescribing information.",
    },
    {
      question: "Can I get HRT online?",
      answer:
        "Yes. Licensed telehealth providers can evaluate you and prescribe HRT online. Some use a detailed online questionnaire reviewed by a physician; others use video visits. A legitimate service always has a licensed clinician review your health history before prescribing - a site that skips that step is a red flag.",
    },
    {
      question: "Does insurance cover online HRT?",
      answer:
        "It depends on the provider. Some online menopause clinics, such as Midi Health, are in-network with many commercial insurance plans for visits, with medication costs depending on your pharmacy benefit. Subscription services such as Winona and Gala are self-pay. Medicare coverage for telehealth menopause care varies by provider, so check before booking.",
    },
    {
      question: "What's the difference between an estrogen patch and a pill?",
      answer:
        "Both deliver estradiol, but pills pass through the liver first, which is associated with a higher risk of blood clots than transdermal forms like patches and gels. Patches avoid daily dosing but can irritate skin. Your clinician will recommend a route based on your health history and preferences.",
    },
    {
      question: "Are bioidentical hormones safer?",
      answer:
        "\"Bioidentical\" means chemically identical to the hormones your body makes, and FDA-approved bioidentical estradiol and progesterone are widely available. Compounded bioidentical hormones are custom-mixed and not FDA-approved, and the evidence does not show they are safer or more effective than FDA-approved products. Any estrogen carries the same class of risks.",
    },
    {
      question: "Do I need progesterone with estrogen?",
      answer:
        "If you have a uterus and take systemic estrogen, you generally need a progestogen such as progesterone to protect the uterine lining, because estrogen alone increases the risk of endometrial cancer. Women who have had a hysterectomy usually don't need it. Your clinician will decide what's appropriate.",
    },
    {
      question: "Are there non-hormonal options for menopause symptoms?",
      answer:
        "Yes. FDA-approved non-hormonal prescriptions for hot flashes include fezolinetant (Veozah) and, since October 2025, elinzanetant (Lynkuet), and clinicians also use other medicines such as certain antidepressants (SSRIs/SNRIs) and gabapentin. Cognitive behavioral therapy also has good evidence, as do vaginal moisturizers and lubricants for dryness. Non-hormonal options can be especially relevant for women who can't or prefer not to take hormones. A menopause-trained clinician can help you compare them.",
    },
  ],

  quiz: {
    welcomeTitle: "Find Your Best Online HRT Match",
    welcomeSubtitle:
      "Answer a few quick questions and we'll compare trusted online menopause and HRT providers based on your preferences, priorities and location.",
    welcomeTrustPoints: [
      "Takes less than 1 minute",
      "Personalized provider recommendations",
      "Completely free and confidential",
    ],
    welcomeCta: "Find My Match",
    midFlowMessage: "Great - we're narrowing down the best options for you.",
    pageTitle: "Find Your HRT Provider Match",
    pageSubtitle:
      "Answer a few quick questions to help us compare menopause providers based on your symptoms, insurance, budget and preferred visit style.",
    resultsTitle: "Your Best Match",
    resultsSubtitle:
      "Based on your answers, this provider is the strongest fit for your preferences.",
    resultsOthersTitle: "Other Providers You May Want to Consider",
    trustStrip: [
      "Updated Monthly",
      "Editorially Reviewed",
      "Independent Provider Comparison",
    ],
    loadingMessages: [
      "Comparing trusted providers...",
      "Reviewing treatment options...",
      "Finding your best match...",
      "Preparing your recommendation...",
    ],
    questions: [],
    providerProfiles: [],
  },

  reviewTestimonials: [
    {
      text: "I'd been putting off dealing with night sweats because I couldn't get an appointment for months. Comparing the online options here helped me find one that fit my schedule, and a doctor reviewed everything properly.",
      name: "Karen M.",
      state: "CO",
    },
    {
      text: "I wanted to use my insurance, and this comparison made it obvious which provider did that. The side-by-side breakdown saved me hours of research.",
      name: "Lisa G.",
      state: "NC",
    },
    {
      text: "What I appreciated most was the honesty about risks as well as benefits. No hype, just clear information that helped me go into my consultation with better questions.",
      name: "Denise R.",
      state: "AZ",
    },
  ],

  experts: [
    {
      id: "editorial",
      name: "HRT Women Editorial Team",
      role: "Editorial & Research",
      bio: "Our editorial team researches and compares online menopause and HRT providers, reads the clinical evidence and guidance behind each option, and writes plain-English, compliance-minded guides. We prioritize accuracy and honesty over hype - including being clear about the risks of hormone therapy and who it is not suitable for.",
      specialties: [
        "Provider comparison and research",
        "Telehealth and online prescribing",
        "Evidence-based health writing",
        "Consumer education",
      ],
    },
    // "Reviewed by" (medical reviewer) intentionally omitted for now - re-add a
    // real, credentialed clinician here to restore the "Reviewed by" byline.
  ],

  landingPages: [],
  sidebars: [],
};
