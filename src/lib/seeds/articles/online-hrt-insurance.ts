import type { ArticleData } from "@/lib/config";

// Commercial guide: online HRT that takes insurance. Keyword research
// (KeywordTool, Google + Bing US, 2026-11-17): "online hrt that takes /
// accepts insurance", "online hrt covered by insurance", "best online hrt that
// takes insurance", "what insurance covers hrt", "does bcbs / aetna / anthem
// cover hrt", "does insurance cover hrt for perimenopause / after
// hysterectomy / bioidentical / pellets / compounded", "online hrt that takes
// medicaid", "menopause doctor that takes insurance and medicare".
// Facts checked 2026-11-17: Midi pricing & insurance page (named insurers,
// HSA/FSA, no Medicaid/Medi-Cal, Medicare self-pay); state mandates via
// Stateline, Venable and Ms. Magazine (2026); Medicare Part D formulary
// coverage of generic estradiol/progesterone via Medicare-focused guides;
// IRS Publication 502 (prescriptions as qualified medical expenses). Provider
// facts mirror src/lib/seeds/hrt.ts. Other insurance-billing services
// (Evernow, Gennev, Elektra) are named from their published information only.

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const SRC = {
  midi: "https://www.joinmidi.com/pricing-insurance",
  stateline: "https://stateline.org/2026/05/14/shifting-attitudes-on-menopause-drive-lawmakers-to-push-for-new-protections/",
  venable: "https://www.venable.com/insights/publications/2026/10/menopause-in-the-workplace-new-accommodation",
  msmag: "https://msmagazine.com/2026/01/07/menopause-legislation-law-policy-state/",
  medicarePartD: "https://www.medicare.gov/drug-coverage-part-d",
  planFinder: "https://www.medicare.gov/plan-compare/",
  irs502: "https://www.irs.gov/publications/p502",
  fdaCompounded: "https://www.fda.gov/drugs/human-drug-compounding/compounded-bioidentical-hormone-therapy",
  goodrx: "https://www.goodrx.com/conditions/menopause/treatments-and-supplements",
};

export const ONLINE_HRT_INSURANCE: ArticleData = {
  slug: "online-hrt-insurance",
  title: "Online HRT That Takes Insurance (2026): What's Covered",
  description:
    "Which online HRT services take insurance, what plans usually cover (and don't), Medicare, Medicaid, BCBS and Aetna, state menopause laws, HSA/FSA and how to pay less.",
  category: "Guides",
  readTime: "22 min read",
  publishedAt: "2026-11-17",
  updatedAt: "2026-11-17",
  heroColor: "#FDEEF3",
  author: "HRT Women Editorial Team",
  takeawaysTitle: "⚡ Key takeaways & quick verdict",
  keyTakeaways: [
    "Midi Health is the main online menopause clinic that bills insurance for visits - in-network with many commercial PPO plans, including Aetna, Cigna, Anthem Blue Cross Blue Shield and UnitedHealthcare.",
    "Wisp and LifeMD can send prescriptions to your local pharmacy, so your insurance can cover the medication even though the consult is self-pay.",
    "Insurance usually covers FDA-approved generic estradiol and progesterone - often at a low copay. Compounded hormones and pellets usually aren't covered.",
    "Medicare Part D plans generally cover generic estradiol and progesterone, but most online menopause startups don't bill Medicare for visits, and Medicaid is rarely accepted.",
    "Several states now require state-regulated plans to cover menopause care - Louisiana, Oregon and New Jersey among them, with Maryland from 2027 - but self-funded employer plans are exempt.",
  ],
  sections: [
    {
      heading: "Which online HRT services take insurance?",
      body: `<div class="qa"><strong>The short answer</strong><strong>Midi Health</strong> is the main online menopause clinic that bills insurance for its visits: it's in-network with many commercial PPO plans, including Aetna, Cigna, Anthem Blue Cross Blue Shield and UnitedHealthcare. <strong>Wisp</strong> and <strong>LifeMD</strong> charge for the consult but can send prescriptions to your local pharmacy, where your insurance pays for the medication. <strong>Winona</strong>, <strong>Gala</strong> and <strong>Fem Excel</strong> are self-pay. Whichever you choose, generic estradiol and progesterone are covered by most pharmacy plans.</div>
<table><tr><th>Service</th><th>Visits billed to insurance?</th><th>Medication through your insurance?</th><th>HSA/FSA</th><th>Medicare / Medicaid</th></tr><tr><td><a href="/reviews/midi">Midi Health</a></td><td>Yes - most commercial PPO plans; HMO usually self-pay</td><td>Yes - sent to your pharmacy</td><td>Yes</td><td>Medicare as self-pay only; no Medicaid</td></tr><tr><td><a href="/reviews/wisp">Wisp</a></td><td>No - self-pay consult</td><td>Yes - sent to your pharmacy same day</td><td>Yes</td><td>Pharmacy benefit may apply; consult self-pay</td></tr><tr><td><a href="/reviews/lifemd">LifeMD</a></td><td>HRT program self-pay; some video visits billable</td><td>Yes, if you choose pharmacy pickup</td><td>Ask</td><td>Ask LifeMD</td></tr><tr><td><a href="/reviews/winona">Winona</a></td><td>No</td><td>No - shipped, priced per product</td><td>Yes</td><td>Self-pay</td></tr><tr><td><a href="/reviews/gala">Gala</a></td><td>No</td><td>No - one flat monthly price</td><td>Ask</td><td>Self-pay</td></tr><tr><td><a href="/reviews/femexcel">Fem Excel</a></td><td>No</td><td>No - medications billed by Fem Excel</td><td>Ask</td><td>Self-pay</td></tr></table>
<p>Other insurance-billing menopause services exist too. Evernow, Gennev and Elektra Health say they bill some insurers for visits; we haven't reviewed them, so check their current networks directly. For prices at every service, see <a href="/articles/online-hrt-cost">how much online HRT costs</a>.</p>`,
    },
    {
      heading: "Does insurance cover HRT for menopause?",
      body: `<p><strong>Usually, yes - for FDA-approved products. Most US health plans cover generic estradiol (pills and patches) and generic micronized progesterone, often on their lowest copay tier. Coverage is less certain for brand-name gels and sprays, and compounded "bioidentical" hormones and pellets are usually not covered at all.</strong></p>
<p>Insurance coverage for HRT has two separate parts, and it helps to think about them separately:</p>
<ul><li><strong>The visit</strong> - the appointment with a clinician who assesses you and writes the prescription. This is covered like any other office or telehealth visit, if the clinician is in your plan's network.</li><li><strong>The medication</strong> - covered by your plan's <em>pharmacy</em> benefit, according to its formulary (the list of covered drugs and their tiers).</li></ul>
<p>Many online menopause services are self-pay for the visit but still let you use your pharmacy benefit for the medication. That's why "does this service take insurance?" and "will my insurance pay for my HRT?" can have different answers.</p>
<table><tr><th>Usually covered</th><th>Sometimes covered (may need prior authorization)</th><th>Usually not covered</th></tr><tr><td>Generic estradiol tablets and patches; generic micronized progesterone; generic vaginal estradiol; in-network visits</td><td>Brand-name gels and sprays; some brand patches and combination products; newer non-hormonal drugs</td><td>Compounded hormone creams and troches; hormone pellets; saliva hormone testing; telehealth membership fees</td></tr></table>`,
    },
    {
      heading: "Three ways to use insurance for online HRT",
      body: `<p><strong>You can use an in-network online clinic that bills your plan for visits, pay a low self-pay consult and fill the prescription with your pharmacy insurance, or pay a self-pay service and claim out-of-network reimbursement if your plan allows it.</strong></p>
<table><tr><th>Route</th><th>How it works</th><th>Examples</th><th>Best for</th></tr><tr><td>1. In-network telehealth</td><td>The clinic bills your plan; you pay your copay, coinsurance or deductible; prescriptions go to your pharmacy</td><td>Midi Health</td><td>Commercial PPO plans with good coverage</td></tr><tr><td>2. Self-pay consult + pharmacy insurance</td><td>You pay the consult; the prescription goes to your local pharmacy and your plan covers the drug</td><td>Wisp; LifeMD with pharmacy pickup</td><td>HMO plans, high deductibles, or when you just need a prescription</td></tr><tr><td>3. Self-pay + out-of-network claim</td><td>You pay in full, then submit an itemized receipt to your plan if it has out-of-network benefits</td><td>Any service that gives itemized receipts</td><td>PPO plans with out-of-network benefits</td></tr></table>
<p>Routes 1 and 2 are the most dependable. Route 3 works only if your plan has out-of-network coverage and the service provides the details insurers need (diagnosis and procedure codes and the clinician's information); subscription-style fees are often rejected.</p>`,
    },
    {
      heading: "Midi Health: online menopause care billed to insurance",
      body: `<p><strong>Midi Health is a virtual menopause clinic that is in-network with many major commercial plans. It names Aetna, Cigna, Anthem Blue Cross Blue Shield and UnitedHealthcare among its insurers, though coverage depends on your specific plan and Blue Cross networks vary by state.</strong></p>
<p>At <a href="/reviews/midi">Midi</a>, you see a menopause-trained nurse practitioner or nurse midwife by video, and prescriptions go to your pharmacy. Midi checks your coverage when you register. According to ${ext(SRC.midi, "Midi's pricing and insurance page")}:</p>
<ul><li>Most PPO plans are in-network; HMO plans are usually treated as self-pay.</li><li>With in-network insurance, you pay your plan's usual cost-sharing - Midi says about $50 per visit on average.</li><li>If you haven't met your deductible, a visit can cost up to the self-pay rate of $250 for the first visit and $150 for follow-ups.</li><li>HSA and FSA funds can be used for visits and services.</li><li>Midi doesn't accept Medicaid or Medi-Cal and doesn't bill Medicare; people on Medicare can be seen as self-pay patients.</li></ul>
<p>The most common complaint about Midi is billing - visits patients expected to be covered becoming bills. Ask what your first visit will cost before you book. More in <a href="/articles/midi-cost">Midi Health cost with insurance</a> and <a href="/articles/is-midi-legit">is Midi Health legit?</a></p>`,
    },
    {
      heading: "Using insurance for your medication with Wisp or LifeMD",
      body: `<p><strong>Wisp and LifeMD don't bill insurance for the HRT consult, but they can send your prescription to a local pharmacy, where your insurance covers the medication. For women whose plans cover generic estradiol and progesterone well, this can be one of the cheapest ways to get HRT online.</strong></p>
<ul><li><a href="/reviews/wisp"><strong>Wisp</strong></a> lists menopause consults from about $33/month (some reviews describe $99 for about three months). Prescriptions go to your pharmacy the same day; if your plan doesn't cover the drug, Wisp offers a discount card. HSA and FSA cards are accepted.</li><li><a href="/reviews/lifemd"><strong>LifeMD</strong></a>'s HRT program is self-pay, with plans from about $67/month on six-month billing that include medication. LifeMD says that if you choose to use insurance, your provider can call the prescription in to your local pharmacy for pickup instead, and some of its video visits can be billed to insurance.</li></ul>
<p>Generic estradiol tablets cost as little as about $9 a month with a free discount card, according to ${ext(SRC.goodrx, "GoodRx")}, so even without insurance the medication itself can be cheap. Our <a href="/articles/estradiol">estradiol guide</a> covers prices for each form.</p>`,
    },
    {
      heading: "Self-pay online HRT: Winona, Gala and Fem Excel",
      body: `<p><strong>Winona, Gala and Fem Excel don't bill insurance. They bundle the clinician and (for Winona and Gala) the medication into a monthly price, so your insurance won't lower the cost - but you can usually pay with HSA or FSA funds, and some plans reimburse out-of-network.</strong></p>
<table><tr><th>Service</th><th>How you pay</th><th>Typical cost</th><th>Why choose it despite no insurance</th></tr><tr><td><a href="/reviews/winona">Winona</a></td><td>Per product, monthly; medication shipped</td><td>$39-$149 per product; about $89-$188 for estrogen + progesterone</td><td>No appointments; physician-led; several estrogen forms</td></tr><tr><td><a href="/reviews/gala">Gala</a></td><td>One flat monthly plan; medication shipped</td><td>Advertised from $79/month</td><td>Predictable price; check-ins included</td></tr><tr><td><a href="/reviews/femexcel">Fem Excel</a></td><td>$99/month membership; medications billed separately</td><td>$99/month plus medications</td><td>At-home lab testing; testosterone available</td></tr></table>
<p>Self-pay can still make sense if you have a high-deductible plan, an HMO that won't cover telehealth menopause care, or poor drug coverage - or if you value no-appointment convenience. Compare totals in <a href="/articles/online-hrt-cost">how much online HRT costs</a>.</p>`,
    },
    {
      heading: "Does Medicare cover HRT?",
      body: `<p><strong>Medicare covers HRT medication through Part D drug plans (or Medicare Advantage plans with drug coverage), which generally include generic estradiol and progesterone. Original Medicare Parts A and B don't cover outpatient prescriptions. Visits are covered when the clinician accepts Medicare - which most online menopause startups don't.</strong></p>
<p>${ext(SRC.medicarePartD, "Medicare Part D")} plans each have their own formulary, but generic estradiol tablets and patches and generic micronized progesterone are widely covered, usually on low tiers. Compounded hormones and pellets are generally excluded. You can check your exact plan with Medicare's ${ext(SRC.planFinder, "Plan Finder")}.</p>
<p>For the visit itself, your options on Medicare are:</p>
<ul><li>A local doctor, gynecologist or menopause specialist who accepts Medicare - often the cheapest route overall.</li><li>Midi Health as a self-pay patient ($250 first visit, $150 follow-ups), with prescriptions filled under your Part D plan.</li><li>A low-cost self-pay consult (such as Wisp) with the prescription filled under Part D.</li></ul>
<p>Women starting HRT for the first time after 60 are usually advised to start cautiously, often with a low-dose patch or gel; see <a href="/articles/is-hrt-safe">is HRT safe?</a></p>`,
    },
    {
      heading: "Does Medicaid cover HRT?",
      body: `<p><strong>State Medicaid programs generally cover generic estradiol and progesterone, but online menopause clinics rarely accept Medicaid - Midi, for example, says it can't see Medicaid or Medi-Cal patients. Your best route on Medicaid is usually a Medicaid-enrolled local clinician, with the prescription filled at a Medicaid pharmacy.</strong></p>
<p>Medicaid drug coverage varies by state, but common generic hormones are typically on state formularies. Louisiana's menopause coverage law explicitly includes its Medicaid program. If you can't find a local clinician, community health centers (federally qualified health centers) accept Medicaid and can prescribe HRT.</p>`,
    },
    {
      heading: "Does Blue Cross, Aetna, UnitedHealthcare or Cigna cover HRT?",
      body: `<p><strong>Generally yes - all the major insurers cover FDA-approved generic menopause hormones on most plans, and Midi Health is in-network with many Aetna, Cigna, Anthem Blue Cross Blue Shield and UnitedHealthcare plans. What you pay depends on your specific plan's formulary, deductible and network, not the insurer's name.</strong></p>
<p>An insurer like Blue Cross Blue Shield runs hundreds of different plans, and coverage differs between them - and between states. To check your plan:</p>
<ol><li>Log in to your insurer's member portal or app and search the drug formulary for "estradiol" and "progesterone" to see their tier and copay.</li><li>Check whether brand-name products you're considering need prior authorization.</li><li>Search the provider directory for telehealth menopause care, or ask the online clinic to verify your coverage before your first visit.</li><li>Ask about your deductible: until it's met, you may pay the full negotiated price for visits.</li></ol>`,
    },
    {
      heading: "Does insurance cover HRT for perimenopause?",
      body: `<p><strong>Yes, when treatment is medically necessary. Insurers cover hormone therapy for troublesome perimenopausal symptoms just as for menopause, and some state laws - such as New Jersey's and Louisiana's - explicitly include perimenopause.</strong></p>
<p>Perimenopausal women are often prescribed estradiol with cyclical progesterone or a levonorgestrel IUD, which is usually covered as contraception at no cost under the Affordable Care Act. Some generic oral contraceptives are also used to control perimenopausal symptoms and are generally covered. See <a href="/articles/hrt-for-perimenopause">HRT for perimenopause</a>.</p>`,
    },
    {
      heading: "Does insurance cover HRT after a hysterectomy?",
      body: `<p><strong>Yes. After a hysterectomy, women usually need estrogen alone, and generic estradiol is covered by most plans. If both ovaries were removed before natural menopause, hormone therapy is generally recommended until about 51, which strengthens the medical-necessity case.</strong></p>
<p>Estrogen-only therapy is simpler and usually cheaper, since you don't need a progestogen. If your plan questions coverage, a letter from your clinician explaining surgical menopause typically resolves it.</p>`,
    },
    {
      heading: "Does insurance cover bioidentical hormones, compounded HRT or pellets?",
      body: `<p><strong>FDA-approved bioidentical hormones - estradiol and micronized progesterone - are usually covered. Compounded "bioidentical" creams, troches and hormone pellets usually are not, because they aren't FDA-approved.</strong></p>
<p>This surprises many women, because "bioidentical" is often marketed as if it meant compounded. In fact, generic estradiol and micronized progesterone <em>are</em> bioidentical and FDA-approved. The FDA ${ext(SRC.fdaCompounded, "notes")} that compounded bioidentical hormones haven't been reviewed for safety, effectiveness or quality. Pellets add an extra procedure cost and can't be removed if the dose is too high. If you want insurance to help, ask for FDA-approved products. More in <a href="/articles/bioidentical-hormones-explained">bioidentical hormones explained</a>.</p>`,
    },
    {
      heading: "Which states require insurance to cover menopause care?",
      body: `<p><strong>A growing number of states require state-regulated health plans to cover medically necessary menopause and perimenopause care - including Louisiana, Oregon and New Jersey, with Maryland's law taking effect in 2027. Self-funded employer plans, which cover many workers at large companies, are exempt from state mandates.</strong></p>
<table><tr><th>State</th><th>Status (as reported, 2026)</th><th>Notes</th></tr><tr><td>Louisiana</td><td>In effect since 2024</td><td>Medically necessary menopause and perimenopause care; includes Medicaid</td></tr><tr><td>Oregon</td><td>In effect since January 1, 2026</td><td>State-regulated plans</td></tr><tr><td>New Jersey</td><td>Signed January 2026</td><td>Treatment for perimenopause, menopause and related symptoms</td></tr><tr><td>Maryland</td><td>Takes effect January 1, 2027</td><td>State-regulated plans</td></tr><tr><td>Illinois</td><td>Earlier coverage law (2023)</td><td>Check current scope with your plan</td></tr><tr><td>California</td><td>Mandate bills vetoed in 2024 and 2025</td><td>No mandate</td></tr></table>
<p>More than half of states have considered menopause legislation, according to ${ext(SRC.stateline, "Stateline")}; details and effective dates vary, so check your state's law and your plan. Legal summaries from ${ext(SRC.venable, "Venable")} and coverage in ${ext(SRC.msmag, "Ms. Magazine")} track new bills. A key caveat: if your employer self-insures its health plan (common at large companies), state mandates don't apply - your HR department can tell you which kind of plan you have.</p>`,
    },
    {
      heading: "Can you use an HSA or FSA for HRT?",
      body: `<p><strong>Yes. Prescription medicines and medical care, including telehealth visits, are qualified medical expenses under IRS rules, so you can generally pay for HRT and menopause visits with HSA or FSA funds. Midi and Wisp say they accept those cards, and Winona says its treatments are HSA/FSA-eligible.</strong></p>
<p>${ext(SRC.irs502, "IRS Publication 502")} lists prescribed medicines and payments for medical care as qualified expenses. Using pre-tax money effectively cuts the cost by your tax rate - often 20-30% for many households. Supplements and non-prescription "hormone balance" products generally don't qualify. Keep itemized receipts in case your plan administrator asks for them.</p>`,
    },
    {
      heading: "Can you get reimbursed for self-pay online HRT?",
      body: `<p><strong>Sometimes. If your plan has out-of-network benefits, you can submit an itemized receipt for a self-pay visit and may be reimbursed part of the cost after your out-of-network deductible. Membership and subscription fees are often rejected.</strong></p>
<p>To give a claim the best chance, ask the service for an itemized receipt that lists the date of service, the clinician's name and credentials, the diagnosis code and the visit's procedure code. Many subscription services can't provide these, and HMO and EPO plans usually have no out-of-network benefits at all. Check your plan documents before relying on reimbursement.</p>`,
    },
    {
      heading: "What's the cheapest way to get HRT with insurance?",
      body: `<p><strong>For most insured women, the cheapest route is generic estradiol and progesterone filled at an in-network pharmacy, prescribed either through an in-network clinician (such as Midi or your own doctor) or a low-cost self-pay consult. Brand-name products, compounded hormones and bundled subscriptions cost more.</strong></p>
<table><tr><th>Approach</th><th>What you typically pay</th><th>Notes</th></tr><tr><td>In-network online clinic (Midi) + generic HRT</td><td>Visit copay (Midi says about $50 average) + pharmacy copay</td><td>Deductible can raise early-year costs</td></tr><tr><td>Low-cost consult (Wisp) + generic HRT on insurance</td><td>Consult fee (from about $33/month) + pharmacy copay</td><td>Good for HMO or high-deductible plans</td></tr><tr><td>Your own doctor + generic HRT</td><td>Office copay + pharmacy copay</td><td>Often cheapest if you can get an appointment</td></tr><tr><td>Self-pay bundled service (Winona, Gala)</td><td>About $79-$188/month</td><td>Insurance doesn't lower the price; HSA/FSA works</td></tr><tr><td>Membership + separate medication (Fem Excel)</td><td>$99/month + medications</td><td>Self-pay</td></tr></table>
<p>Even without good drug coverage, a free discount card can bring generic estradiol tablets to about $9 a month. Always compare the discount-card price with your copay: for cheap generics, the cash price is sometimes lower.</p>`,
    },
    {
      heading: "Questions to ask before you book",
      body: `<ul><li>Is the service in-network with my exact plan (not just my insurer)?</li><li>Will my first visit be billed to insurance, and what will it cost if my deductible isn't met?</li><li>Are there any membership or platform fees insurance won't cover?</li><li>Will my prescription go to my local pharmacy so my drug coverage applies?</li><li>Are the products FDA-approved (more likely covered) or compounded (usually not)?</li><li>Can I pay with my HSA or FSA, and will I get itemized receipts?</li><li>If I'm on Medicare or Medicaid, can you see me at all?</li></ul>
<p>For a step-by-step look at the whole process, read <a href="/articles/how-to-get-hrt-online">how to get HRT online</a>, and compare services in our <a href="/articles/best-online-hrt-clinics">5 best online HRT clinics</a>.</p>`,
    },
    {
      heading: "The bottom line",
      body: `<p>If you want online HRT that takes insurance, start with <strong>Midi Health</strong>: it bills many commercial PPO plans for menopause visits and sends prescriptions to your pharmacy. If your plan is an HMO or has a high deductible, a low-cost consult from <strong>Wisp</strong> - or <strong>LifeMD</strong> with pharmacy pickup - lets your insurance cover the medication instead. Either way, ask for FDA-approved generic estradiol and progesterone, which nearly every plan covers. Self-pay services like Winona, Gala and Fem Excel can still be worth it for convenience, and HSA or FSA funds make them cheaper.</p>
<p>Coverage details change and differ plan by plan, so confirm with your insurer before you book. This guide is general information, not insurance or medical advice.</p>`,
    },
  ],
};
