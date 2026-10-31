import type { ArticleData } from "@/lib/config";

// Cross-provider HRT price page - built because Bing AI Performance shows the
// per-provider cost pages are the site's most-cited pages in Copilot answers
// ("how much is winona hrt", midi-cost, winona-cost). Every figure here is
// the same verified figure used on the provider cost pages and documented in
// the pricing notes at the top of src/lib/seeds/hrt.ts (Winona product
// prices; Gala "from $79" advertised + third-party pill/patch figures,
// labelled as such; Midi visit pricing and testosterone range). No pharmacy
// or brand-drug prices are asserted - they vary too much to state honestly.
// Update PRICES_CHECKED and the cost pages together when prices change.

const PRICES_CHECKED = "October 2026";

export const ONLINE_HRT_COST: ArticleData = {
  slug: "online-hrt-cost",
  title: "How Much Does HRT Cost Online? Winona vs Gala vs Midi Prices (2026)",
  description:
    "Online HRT costs about $39-$188/month cash-pay, or about $50 per visit plus pharmacy costs with insurance. Every Winona, Gala and Midi Health price, what's included, and year-one totals.",
  category: "Comparisons",
  readTime: "16 min read",
  publishedAt: "2026-10-25",
  updatedAt: "2026-10-25",
  heroColor: "#F8D7E3",
  author: "HRT Women Editorial Team",
  keyTakeaways: [
    "Online HRT costs roughly $39 to $188 a month on cash-pay services (Winona, Gala), or about $50 per visit on average plus pharmacy costs at an insurance-billed clinic (Midi Health, in-network PPO).",
    "Winona prices per product: progesterone from $39, estradiol tablets $54, body creams and vaginal cream $89, the patch $149 a month - physician, messaging and shipping included.",
    "Gala charges one flat plan advertised from $79 a month (third-party reviews report $69 for pills, $99 for patches) - clinician, check-ins, medication and shipping included.",
    "Midi Health is $250 for a first visit and $150 for follow-ups self-pay, or your usual copay in-network (Midi says about $50 on average); medication is billed through your pharmacy.",
    "For a typical estrogen-plus-progesterone year, expect about $828-$1,188 at Gala, $1,068-$2,256 at Winona, and about $200 in visits plus pharmacy copays at Midi with good insurance.",
  ],
  sections: [
    {
      heading: "How much does HRT cost online?",
      body: `<div class="qa"><strong>The short answer</strong>Online menopause HRT costs about <strong>$39 to $188 a month</strong> on cash-pay services, depending on the provider and products, or about <strong>$50 per visit on average plus pharmacy costs</strong> at an insurance-billed clinic. At the three providers we rank: <strong>Winona</strong> charges per product, from $39/month (progesterone) to $149/month (estrogen patch); <strong>Gala</strong> charges one plan advertised from $79/month; <strong>Midi Health</strong> bills your insurance (about $50 per visit on average in-network, per Midi) or $250/$150 per visit self-pay, with medication through your pharmacy. Prices checked ${PRICES_CHECKED}.</div>
<table><tr><th>Provider</th><th>Pricing model</th><th>Typical monthly cost</th><th>Insurance</th><th>Medication</th></tr><tr><td><a href="/reviews/winona">Winona</a></td><td>Per product, monthly subscription</td><td>$39-$149 per product; about $89-$188 for estrogen + progesterone</td><td>Not billed; HSA/FSA accepted</td><td>Included and shipped</td></tr><tr><td><a href="/reviews/gala">Gala</a></td><td>One flat plan</td><td>Advertised from $79; reported $69 (pill) to $99 (patch)</td><td>Not billed</td><td>Included and shipped</td></tr><tr><td><a href="/reviews/midi">Midi Health</a></td><td>Per visit + your pharmacy</td><td>Visits: about $50 average in-network, or $250 first / $150 follow-up self-pay; plus medication</td><td>Most commercial PPO plans; not HMO, Medicare or Medicaid</td><td>Sent to your pharmacy, priced by your plan</td></tr></table>
<p>This page puts every published price in one place, shows what each price includes, works out realistic first-year totals, and explains which option is usually cheapest for your situation. For the details of each provider, see <a href="/articles/winona-cost">Winona cost</a>, <a href="/articles/gala-cost">Gala cost</a> and <a href="/articles/midi-cost">Midi Health cost</a>.</p>`,
    },
    {
      heading: "What does each HRT product cost at each provider?",
      body: `<p><strong>Winona publishes a price for each product; Gala covers all its HRT products in one plan; Midi doesn't sell medication - your pharmacy does.</strong></p>
<table><tr><th>Product</th><th>Winona</th><th>Gala</th><th>Midi Health</th></tr><tr><td>Estradiol tablets (pill)</td><td>From $54/mo</td><td>Included in plan (reported from $69/mo for pill plans)</td><td>Pharmacy price via your plan</td></tr><tr><td>Estrogen patch</td><td>From $149/mo (FDA-approved)</td><td>Included in plan (reported from $99/mo for patch plans)</td><td>Pharmacy price via your plan</td></tr><tr><td>Estrogen body cream</td><td>From $89/mo (compounded)</td><td>Not listed</td><td>-</td></tr><tr><td>Estrogen + progesterone body cream</td><td>From $89/mo (compounded)</td><td>Not listed</td><td>-</td></tr><tr><td>Progesterone capsules</td><td>From $39/mo (FDA-approved)</td><td>Included in plan</td><td>Pharmacy price via your plan</td></tr><tr><td>Vaginal estrogen</td><td>Vaginal estrogen cream from $89/mo</td><td>Vaginal estradiol included in plan</td><td>Pharmacy price via your plan</td></tr><tr><td>Testosterone</td><td>Not prescribed</td><td>Not listed</td><td>About $45 per 30 days to $100+ per 90 days, self-pay, some states</td></tr><tr><td>Visits / clinician access</td><td>Included</td><td>Included</td><td>About $50 average in-network; $250 / $150 self-pay</td></tr></table>
<p>"From" means the starting price for the lowest dose or plan; higher doses can cost more, and promotions change. Gala's pill and patch figures come from third-party reviews of its checkout, not from Gala's own published pages, so treat them as indicative.</p>`,
    },
    {
      heading: "What is included in the price?",
      body: `<p><strong>Winona and Gala bundle the clinician, follow-up, medication and shipping into one monthly price. Midi charges for visits and leaves medication to your pharmacy - so its headline price never includes the hormones.</strong></p>
<table><tr><th>Included?</th><th>Winona</th><th>Gala</th><th>Midi Health</th></tr><tr><td>Clinician review</td><td>Yes (board-certified physician reviews online intake)</td><td>Yes (US-licensed clinician)</td><td>Per visit (video, about 30 minutes)</td></tr><tr><td>Follow-up and messaging</td><td>Yes - unlimited messaging and follow-ups</td><td>Yes - check-ins and dose adjustments</td><td>Follow-up visits billed per visit</td></tr><tr><td>Medication</td><td>Yes</td><td>Yes</td><td>No - pharmacy</td></tr><tr><td>Shipping</td><td>Free</td><td>Included</td><td>Pharmacy pickup or delivery</td></tr><tr><td>Video visit</td><td>No</td><td>No (message-based)</td><td>Yes</td></tr><tr><td>Labs</td><td>Not usually needed to start</td><td>Not usually needed to start</td><td>Billed separately if ordered</td></tr></table>
<p>When comparing, always compare the full cost of your actual regimen - not just the cheapest headline number.</p>`,
    },
    {
      heading: "How much does a typical estrogen and progesterone regimen cost per month?",
      body: `<p><strong>Most women with a uterus who take estrogen also need progesterone, so the realistic monthly cost is usually a combination: about $89-$188 at Winona, about $69-$99 at Gala, or your pharmacy copays plus visits at Midi.</strong></p>
<table><tr><th>Regimen</th><th>Winona</th><th>Gala</th><th>Midi Health (in-network)</th></tr><tr><td>Estrogen pill + progesterone</td><td>About $54 + $39 = $93/mo</td><td>Reported from $69/mo (pill plan)</td><td>Two pharmacy copays + visits</td></tr><tr><td>Estrogen patch + progesterone</td><td>About $149 + $39 = $188/mo</td><td>Reported from $99/mo (patch plan)</td><td>Two pharmacy copays + visits</td></tr><tr><td>Combined estrogen + progesterone cream</td><td>About $89/mo</td><td>Not listed</td><td>Not applicable</td></tr><tr><td>Estrogen only (after hysterectomy)</td><td>From $54 (pill) or $149 (patch)</td><td>Plan price</td><td>One pharmacy copay + visits</td></tr><tr><td>Vaginal estrogen only</td><td>About $89/mo</td><td>Plan price</td><td>One pharmacy copay + visits</td></tr></table>
<p>We couldn't confirm whether Winona discounts two products bought together, so its combined figures are upper estimates. Note that the progesterone in a body cream isn't interchangeable with progesterone capsules for protecting the uterus - read <a href="/articles/progesterone-side-effects">progesterone for menopause</a> before choosing on price alone.</p>`,
    },
    {
      heading: "How much does online HRT cost in the first year?",
      body: `<p><strong>For a typical estrogen-plus-progesterone first year: about $828-$1,188 at Gala, about $1,068-$2,256 at Winona, and about $200 in visits plus 12 months of pharmacy copays at Midi with in-network insurance (or about $700 in visits plus medication self-pay).</strong></p>
<table><tr><th>Provider and scenario</th><th>First-year cost</th></tr><tr><td>Gala - pill plan at $69/mo</td><td>About $828 (or about $897 on 12-week billing at $207)</td></tr><tr><td>Gala - at the advertised $79/mo</td><td>About $948</td></tr><tr><td>Gala - patch plan at $99/mo</td><td>About $1,188 (or about $1,287 on 12-week billing at $297)</td></tr><tr><td>Winona - estrogen + progesterone body cream</td><td>About $1,068</td></tr><tr><td>Winona - tablets + progesterone capsules</td><td>About $1,116</td></tr><tr><td>Winona - patch + progesterone capsules</td><td>About $2,256</td></tr><tr><td>Midi - in-network, 4 visits at ~$50</td><td>About $200 + 12 months of pharmacy copays</td></tr><tr><td>Midi - self-pay, 4 visits</td><td>About $700 ($250 + 3 × $150) + medication</td></tr></table>
<p>Assumptions: listed starting prices held for 12 months; for Midi, one initial visit plus three follow-ups (your clinician may recommend more or fewer). Real costs depend on dose, promotions, your plan's copays and deductible, and how often you need follow-up.</p>`,
    },
    {
      heading: "Which online HRT option is cheapest for you?",
      body: `<p><strong>With good PPO insurance, Midi is usually cheapest because visits cost a copay and generic hormones are often low-cost through your pharmacy plan. Without insurance, Gala's flat plan is usually the lowest cash price. Winona costs more but offers the widest choice of estrogen forms and no appointments.</strong></p>
<table><tr><th>Your situation</th><th>Usually cheapest</th><th>Why</th></tr><tr><td>Commercial PPO insurance, generic hormones covered</td><td>Midi Health</td><td>Visits at your copay (~$50 average); medication at your pharmacy copay</td></tr><tr><td>No insurance, want estrogen pill + progesterone</td><td>Gala</td><td>Reported from $69/mo all-in vs about $93 at Winona</td></tr><tr><td>No insurance, want a patch</td><td>Gala</td><td>Reported from $99/mo all-in vs about $188 at Winona (patch + capsules)</td></tr><tr><td>Want a body cream</td><td>Winona</td><td>The only one of the three offering estrogen body creams (from $89)</td></tr><tr><td>HMO plan or Medicare</td><td>Gala or Winona (cash), or Midi self-pay</td><td>Midi isn't in-network with HMOs and doesn't bill Medicare</td></tr><tr><td>High deductible not yet met</td><td>Compare Midi's $250/$150 self-pay rate vs Gala's flat plan</td><td>You'd pay Midi's full visit price until the deductible is met</td></tr><tr><td>Want testosterone for low libido</td><td>Midi Health (some states)</td><td>The only one of the three that prescribes it</td></tr></table>
<p>Cheapest isn't always best: weigh the care model (video visits vs messaging), product choice, and whether products are FDA-approved. Our <a href="/articles/best-online-hrt-providers-compared">provider comparison</a> and <a href="/">rankings</a> cover the full picture, and we check each provider's reviews, BBB record and licensing in <a href="/articles/is-winona-legit">is Winona legit?</a>, <a href="/articles/is-gala-legit">is Gala legit?</a> and <a href="/articles/is-midi-legit">is Midi Health legit?</a></p>`,
    },
    {
      heading: "How much does HRT cost without insurance?",
      body: `<p><strong>Without insurance, online HRT typically costs about $69-$188 a month for estrogen plus progesterone on a cash-pay service, or $250 for a first visit and $150 per follow-up at Midi Health plus the pharmacy's cash price for medication.</strong></p>
<p>If you're paying out of pocket, the main choice is between an all-inclusive subscription and paying separately for visits and medication:</p>
<ul><li><strong>All-inclusive subscription</strong> (Winona, Gala) - one predictable monthly price that includes the clinician, follow-up, medication and shipping.</li><li><strong>Pay-per-visit plus pharmacy</strong> (Midi self-pay, or any clinician) - you pay for visits and then for the prescription at your pharmacy's cash price. Generic estradiol and micronized progesterone can be inexpensive with pharmacy discount programs, but prices vary widely by pharmacy, dose and location, so compare before committing.</li></ul>
<p>HSA and FSA funds can usually be used for prescribed hormone therapy and clinician visits, which effectively lowers the cost if you have one of these accounts (see below).</p>`,
    },
    {
      heading: "Does insurance cover online HRT?",
      body: `<p><strong>It depends on the provider. Midi Health is in-network with most commercial PPO plans and sends prescriptions to your pharmacy, so both visits and medication can go through insurance. Winona and Gala don't bill insurance, and because they ship medication themselves, there's no pharmacy claim for your drug plan either.</strong></p>
<table><tr><th></th><th>Winona</th><th>Gala</th><th>Midi Health</th></tr><tr><td>Bills insurance for visits</td><td>No</td><td>No</td><td>Yes - most commercial PPO plans</td></tr><tr><td>Medication covered by your drug plan</td><td>No (shipped by Winona)</td><td>No (shipped by Gala)</td><td>Yes, subject to your formulary</td></tr><tr><td>Out-of-network reimbursement</td><td>You can submit receipts; depends on your plan</td><td>Not confirmed</td><td>Not applicable in-network</td></tr><tr><td>HMO plans</td><td>Cash-pay</td><td>Cash-pay</td><td>Not in-network (self-pay)</td></tr><tr><td>Medicare</td><td>Cash-pay</td><td>Cash-pay</td><td>Not billed (self-pay only)</td></tr><tr><td>Medicaid</td><td>Cash-pay</td><td>Cash-pay</td><td>Cannot treat Medicaid patients</td></tr></table>
<p>Before booking an insurance-billed visit, confirm Midi is in-network for your specific plan, check your deductible, and ask for an estimate - billing surprises are the most common complaint about insurance-based telehealth (see <a href="/articles/is-midi-legit">Is Midi Health legit?</a>).</p>`,
    },
    {
      heading: "Can you pay for online HRT with an HSA or FSA?",
      body: `<p><strong>Generally yes. Prescription medications and care from licensed clinicians are usually qualified medical expenses. Winona accepts HSA and FSA cards; third-party reviews report Gala does too, though we couldn't confirm it on Gala's own pages; Midi visits and pharmacy copays are typically eligible.</strong> Confirm with your plan administrator and keep your receipts. Paying with pre-tax money effectively reduces the cost by your tax rate.</p>`,
    },
    {
      heading: "What hidden costs should you check?",
      body: `<ul><li><strong>Per product vs per regimen:</strong> Winona prices each product - adding progesterone adds about $39/month.</li><li><strong>Billing cycle:</strong> some plans bill every 12 weeks rather than monthly (reported for Gala), which changes the upfront payment.</li><li><strong>Dose changes:</strong> higher doses can cost more on per-product pricing.</li><li><strong>Deductibles:</strong> with insurance, you may pay the full visit price until your deductible is met.</li><li><strong>Labs:</strong> billed separately at insurance-based clinics if ordered.</li><li><strong>Renewals and cancellation:</strong> know how and when to cancel to avoid the next charge; cancel in writing.</li><li><strong>Pharmacy price swings:</strong> brand-name products and some patches can cost much more than generic tablets, and some patches have been in short supply in 2026.</li></ul>`,
    },
    {
      heading: "How much do testosterone and other add-ons cost?",
      body: `<p><strong>Of the three providers, only Midi Health prescribes testosterone for women - in some states, self-pay, at about $45 for a 30-day supply to $100+ for 90 days per Midi, plus any extra labs and visits needed because it's a controlled substance.</strong> Winona sells non-HRT add-ons such as its Blossom arousal cream (listed at about $79 per order) - these aren't hormone therapy and are optional. There is no FDA-approved testosterone product for women in the US; see our <a href="/articles/testosterone-for-women">testosterone for women guide</a> for when it is recommended and how it is monitored.</p>`,
    },
    {
      heading: "Is Gala cheaper than Winona?",
      body: `<p><strong>Usually, yes, for the same regimen. A typical estrogen-plus-progesterone plan is reported from about $69-$99 a month at Gala, versus about $89-$188 at Winona.</strong> Winona's case is choice: it offers estrogen body creams, tablets, patches, vaginal cream and estriol, with a physician reachable by message. Compare them side by side in <a href="/winona-vs-gala">Winona vs Gala</a>.</p>`,
    },
    {
      heading: "Is Midi Health cheaper with insurance?",
      body: `<p><strong>Often, yes. With in-network PPO coverage, Midi says patients pay about $50 per visit on average, and generic hormones through your pharmacy plan are often low-cost - so a year can come to about $200 in visits plus your pharmacy copays.</strong> Without insurance, or before your deductible is met, Midi's $250/$150 self-pay visits plus medication usually cost more than a flat cash plan. See <a href="/articles/midi-cost">Midi Health cost</a> and <a href="/gala-vs-midi">Gala vs Midi Health</a>.</p>`,
    },
    {
      heading: "What is the cheapest way to get an estrogen patch online?",
      body: `<p><strong>With good insurance, a prescription to your own pharmacy through an in-network clinic like Midi is usually cheapest. Cash-pay, Gala's patch plan is reported from about $99 a month all-in, versus about $149 a month for Winona's patch alone (plus about $39 for progesterone if you need it).</strong> Patches have been intermittently hard to find in 2026; services that ship medication handle sourcing for you, while pharmacy prescriptions may need a brand switch. See <a href="/articles/estrogen-patch-vs-pill">estrogen patch vs pill</a>.</p>`,
    },
    {
      heading: "Why do online HRT prices differ so much?",
      body: `<p><strong>Mostly because the providers sell different things: Winona and Gala sell an all-inclusive service with medication, while Midi sells clinical visits and leaves medication to your insurance and pharmacy.</strong> Within cash-pay services, prices also differ by product range (body creams and patches cost more than tablets), by whether pricing is per product or per plan, and by promotions. That's why comparing the full cost of the regimen you'll actually use matters more than headline "from" prices.</p>`,
    },
    {
      heading: "How we gather and check these prices",
      body: `<p>Prices on this page are the same figures used across our provider reviews and cost guides. Winona's come from its product listings; Gala's "from $79" is its advertised price, and its pill and patch figures are from third-party reviews of its checkout, labelled as such; Midi's visit prices and testosterone range come from Midi's published pricing and help pages. Prices were last checked in ${PRICES_CHECKED}. Providers change prices and run promotions, so always confirm at checkout - and if you spot a change, we'll update this page. We may earn a commission from provider links; it doesn't affect the figures we publish or our rankings (<a href="/how-we-rank">how we rank</a>).</p>`,
    },
    {
      heading: "The bottom line on online HRT costs",
      body: `<p>Online HRT doesn't have one price - it has three pricing models. If you have good PPO insurance, an in-network clinic like <a href="/reviews/midi">Midi Health</a> plus generic hormones from your pharmacy is usually the cheapest route. If you're paying cash, <a href="/reviews/gala">Gala</a>'s flat plan is usually the lowest all-in price, while <a href="/reviews/winona">Winona</a> costs more but offers the widest choice of estrogen forms with no appointments. Whichever you choose, compare the full cost of your regimen - including progesterone if you have a uterus - and confirm the price at checkout.</p>
<p>For the step-by-step process, read <a href="/articles/how-to-get-hrt-online">how to get HRT online</a>. <em>This page is general information, not medical or financial advice; prices change, so confirm with each provider.</em></p>`,
    },
  ],
};
