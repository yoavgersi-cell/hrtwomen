import type { ArticleData } from "@/lib/config";

// Trend pillar: GLP-1 medicines (semaglutide, tirzepatide, orforglipron) in
// perimenopause and menopause, including combining them with HRT. Facts
// checked 2026-10-26 and linked inline: Mayo Clinic semaglutide+HT study
// (Menopause 2024) and tirzepatide+HT research (Menopause Society 2025;
// Mayo 2026), FDA approvals of the Wegovy pill (Dec 22, 2025) and Foundayo
// (Apr 1, 2026), Zepbound oral-contraceptive labeling, FDA compounding
// policy, Medicare GLP-1 Bridge (Medicare.gov), SWAN body-composition data,
// STEP 1 / SURMOUNT-1 lean-mass substudies. Where sources disagree on a
// number, the copy says so rather than picking one.

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const SRC = {
  mayoSema: "https://healio.com/news/womens-health-ob-gyn/20240318/hormone-therapy-may-boost-weight-loss-for-postmenopausal-women-on-semaglutide",
  mayoTirz:
    "https://newsnetwork.mayoclinic.org/discussion/new-study-links-combination-of-hormone-therapy-and-tirzepatide-to-greater-weight-loss-after-menopause",
  tmsTirz: "https://www.ajmc.com/view/tirzepatide-plus-hormone-therapy-boosts-weight-loss-in-menopause-regina-castaneda-md",
  wegovyPill: "https://www.biopharmadive.com/news/novo-nordisk-oral-wegovy-fda-approve-glp-1/808578/",
  foundayo: "https://www.drugs.com/history/foundayo.html",
  lillyOc:
    "https://medical.lilly.com/us/products/answers/can-zepbound-tirzepatide-be-used-with-oral-contraceptives-or-hormone-replacement-therapy-211019",
  fdaCompounding:
    "https://www.fda.gov/drugs/drug-safety-and-availability/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize",
  medicare: "https://www.medicare.gov/coverage/weight-loss-drugs",
  swan: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6483504",
  leanMass: "https://www.e-dmj.org/upload/pdf/dmj-2026-0702.pdf",
  nams2022: "https://doi.org/10.1097/GME.0000000000002028",
};

export const GLP1_MENOPAUSE: ArticleData = {
  slug: "glp1-menopause",
  title: "GLP-1s and Menopause (2026): Ozempic, Wegovy, Zepbound and HRT",
  description:
    "Do GLP-1 medicines work in menopause, and can you take them with HRT? What the 2024-2026 research shows, the new Wegovy and Foundayo pills, muscle and bone, side effects, costs, Medicare and how to decide.",
  category: "Treatments",
  readTime: "55 min read",
  publishedAt: "2026-10-26",
  updatedAt: "2026-10-26",
  heroColor: "#F8D7E3",
  author: "HRT Women Editorial Team",
  keyTakeaways: [
    "GLP-1 medicines - semaglutide (Ozempic, Wegovy), tirzepatide (Mounjaro, Zepbound) and the newer pills - work for weight loss in midlife women as in other adults; menopause doesn't block them.",
    "Mayo Clinic research found postmenopausal women taking HRT lost more weight on semaglutide (2024) and on tirzepatide (2025-2026) than women not on HRT - but these were observational studies, and HRT is not prescribed for weight loss.",
    "Two GLP-1 pills are now FDA-approved for weight management: the Wegovy pill (oral semaglutide, December 22, 2025) and Foundayo (orforglipron, April 1, 2026).",
    "Muscle and bone matter more after menopause: a meaningful share of weight lost on GLP-1s can be lean mass, so protein, resistance training and bone-health checks are essential.",
    "Tirzepatide can reduce the effectiveness of oral contraceptives around starting and dose increases; HRT is not contraception, and transdermal estrogen avoids gut-absorption questions entirely.",
  ],
  sections: [
    {
      heading: "Do GLP-1 medications work during menopause?",
      body: `<p><strong>Yes. GLP-1 medicines such as semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound) produce meaningful weight loss in perimenopausal and postmenopausal women, as they do in other adults. Menopause doesn't stop them from working - and early research suggests women who also take hormone therapy may lose more weight.</strong></p>
<p>Few health topics have grown as fast in 2025 and 2026 as the overlap between GLP-1 medicines and menopause. Midlife weight gain - especially around the waist - is one of the most common complaints women bring to menopause appointments, and the arrival of highly effective weight medicines, new pills, falling self-pay prices and Medicare coverage has made "should I take a GLP-1?" a real question for millions of women in their 40s, 50s and 60s.</p>
<p>At the same time, the FDA's 2025-2026 changes to hormone therapy labels have brought many women back to considering HRT. That's created a third question: <strong>can you take a GLP-1 and HRT together - and does one help the other?</strong></p>
<p>This guide answers all of it, based on published research and regulatory documents, linked throughout:</p>
<ul><li>Why weight and body shape change around menopause</li><li>How GLP-1 medicines work, and the options available in 2026 - injections and pills</li><li>What the research shows about combining GLP-1s with hormone therapy</li><li>Muscle, bone and other issues that matter more after menopause</li><li>Side effects, safety, interactions and who shouldn't take them</li><li>Costs, insurance, Medicare and compounded versions</li><li>How to decide, and how to work with your clinician</li></ul>
<h3>GLP-1s and menopause at a glance</h3>
<table><tr><th>Question</th><th>Short answer</th></tr><tr><td>Do GLP-1s work in menopause?</td><td>Yes - weight loss in trials included many midlife women</td></tr><tr><td>Can you take them with HRT?</td><td>Yes, commonly - there's no known reason they can't be combined, and studies suggest more weight loss with both</td></tr><tr><td>Does HRT cause weight loss on its own?</td><td>No - HRT isn't a weight-loss treatment, though it doesn't cause weight gain on average</td></tr><tr><td>Do GLP-1s treat hot flashes?</td><td>They're not approved or established for hot flashes</td></tr><tr><td>Biggest midlife-specific concern</td><td>Preserving muscle and bone while losing weight</td></tr><tr><td>Newest options</td><td>Wegovy pill (Dec 2025) and Foundayo pill (Apr 2026)</td></tr></table>`,
    },
    {
      heading: "Why do women gain weight around menopause?",
      body: `<p><strong>Midlife weight gain has several causes - ageing, loss of muscle, lower activity, poorer sleep and stress - but the menopause transition itself specifically shifts body composition: fat gain speeds up and lean (muscle) mass starts to fall, with more fat stored around the abdomen.</strong></p>
<p>The clearest evidence comes from the Study of Women's Health Across the Nation (SWAN). An analysis published in <em>JCI Insight</em> in 2019, which measured body composition with DXA scans, found that ${ext(SRC.swan, "fat gain roughly doubled at the start of the menopause transition while lean mass began to decline")}, with both trends continuing until about two years after the final menstrual period before levelling off. Interestingly, total body weight rose steadily through midlife without a sudden jump at the transition - the change was in <em>what</em> the weight was made of.</p>
<h3>Why the shift matters</h3>
<ul><li><strong>Abdominal (visceral) fat</strong> is more closely linked to insulin resistance, type 2 diabetes and cardiovascular disease than fat on the hips and thighs.</li><li><strong>Muscle loss</strong> lowers resting metabolism, strength and blood-sugar control, and raises the risk of falls and frailty later in life.</li><li><strong>Bone loss</strong> accelerates in the same years, compounding the importance of muscle and strength.</li></ul>
<h3>Other contributors</h3>
<ul><li>Night sweats and insomnia - poor sleep increases appetite and cravings.</li><li>Mood changes and stress.</li><li>Joint pain reducing activity.</li><li>Medications, including some antidepressants.</li><li>Life changes - caring responsibilities, work pressure.</li></ul>
<p>This is why the best plans for midlife weight focus on body composition and health markers - muscle, waist, blood pressure, blood sugar - not just the number on the scale. See our <a href="/articles/menopause-complete-guide">complete menopause guide</a> for the broader picture.</p>`,
    },
    {
      heading: "What are GLP-1 medications and how do they work?",
      body: `<p><strong>GLP-1 medicines mimic glucagon-like peptide-1, a gut hormone released after eating. They reduce appetite and food intake, slow stomach emptying, and improve blood-sugar control. Tirzepatide also acts on a second hormone receptor, GIP.</strong></p>
<p>GLP-1 receptor agonists were first developed for type 2 diabetes. Their effect on appetite led to higher-dose versions approved specifically for chronic weight management.</p>
<ul><li><strong>In the brain:</strong> they act on appetite centres, increasing fullness and reducing hunger and "food noise."</li><li><strong>In the gut:</strong> they slow stomach emptying, so you feel full longer.</li><li><strong>In the pancreas:</strong> they boost insulin release when blood sugar is high and lower glucagon.</li></ul>
<h3>Approved medicines in 2026</h3>
<table><tr><th>Medicine</th><th>Ingredient</th><th>Form</th><th>Approved for</th></tr><tr><td><strong>Wegovy</strong></td><td>Semaglutide</td><td>Weekly injection; daily pill (approved Dec 22, 2025)</td><td>Chronic weight management; also cardiovascular risk reduction in eligible adults</td></tr><tr><td><strong>Ozempic</strong></td><td>Semaglutide</td><td>Weekly injection</td><td>Type 2 diabetes (used off-label for weight)</td></tr><tr><td><strong>Zepbound</strong></td><td>Tirzepatide</td><td>Weekly injection (pens and vials)</td><td>Chronic weight management; also obstructive sleep apnea in adults with obesity</td></tr><tr><td><strong>Mounjaro</strong></td><td>Tirzepatide</td><td>Weekly injection</td><td>Type 2 diabetes</td></tr><tr><td><strong>Foundayo</strong></td><td>Orforglipron</td><td>Daily pill (approved Apr 1, 2026)</td><td>Chronic weight management</td></tr></table>
<p>Weight-management approvals generally apply to adults with obesity (BMI of 30 or more) or overweight (BMI of 27 or more) with at least one weight-related condition, such as high blood pressure, type 2 diabetes or high cholesterol. Your clinician will check whether you qualify.</p>`,
    },
    {
      heading: "How much weight do women lose on GLP-1 medications?",
      body: `<p><strong>In the major clinical trials, average weight loss was roughly 15% of body weight with weekly semaglutide 2.4 mg over 68 weeks, and roughly 20% or more with the highest doses of tirzepatide over 72 weeks. Results vary widely between individuals.</strong></p>
<table><tr><th>Trial</th><th>Medicine</th><th>Duration</th><th>Average weight loss</th></tr><tr><td>STEP 1</td><td>Semaglutide 2.4 mg weekly (Wegovy)</td><td>68 weeks</td><td>About 15%</td></tr><tr><td>SURMOUNT-1</td><td>Tirzepatide up to 15 mg weekly (Zepbound)</td><td>72 weeks</td><td>About 16% at 5 mg up to about 22% at 15 mg</td></tr><tr><td>OASIS 4</td><td>Oral semaglutide (Wegovy pill)</td><td>-</td><td>About 14% overall; about 17% among those who stayed on treatment, per the FDA approval coverage</td></tr></table>
<p>These trials enrolled many women in midlife, though they weren't designed specifically to study menopause. A few practical points:</p>
<ul><li>Weight loss typically continues for a year or more before plateauing.</li><li>Stopping the medicine is commonly followed by weight regain for many people - these are generally long-term treatments.</li><li>Lifestyle changes - eating pattern, protein, activity - remain part of the plan and affect what kind of weight is lost.</li></ul>`,
    },
    {
      heading: "Can you take a GLP-1 and HRT at the same time?",
      body: `<p><strong>Yes. Many women take a GLP-1 medicine and menopausal hormone therapy together, and there's no known reason the two can't be combined. Each is prescribed for its own reasons: HRT for menopause symptoms (and bone protection), a GLP-1 for weight management or type 2 diabetes.</strong></p>
<p>The two medicines work through different pathways and aren't known to make each other more dangerous. A few practical points apply:</p>
<ul><li><strong>Tell every prescriber about both.</strong> If your HRT and GLP-1 come from different clinicians - for example, an online menopause service and a separate weight clinic - make sure each knows about the other.</li><li><strong>Oral medicines and stomach emptying:</strong> GLP-1s slow stomach emptying, which can affect how some pills are absorbed, especially early in treatment and after dose increases. This matters most for oral contraceptives with tirzepatide (see below). Transdermal estrogen - patches, gels, sprays - bypasses the gut altogether.</li><li><strong>Nausea and pills:</strong> if GI side effects make it hard to keep pills down, tell your clinician - missing progesterone doses matters if you have a uterus.</li><li><strong>Bleeding changes:</strong> report any new or unusual bleeding, as you would on HRT alone.</li></ul>
<p>Lilly, the maker of tirzepatide, addresses this question in its ${ext(SRC.lillyOc, "medical information on using Zepbound with oral contraceptives or hormone replacement therapy")}; non-oral hormonal products aren't expected to be affected by the stomach-emptying effect.</p>`,
    },
    {
      heading: "Does HRT boost weight loss on GLP-1 medications?",
      body: `<p><strong>Early research suggests it might. Mayo Clinic studies found that postmenopausal women taking hormone therapy lost more weight on semaglutide, and on tirzepatide, than women who weren't. But these were observational studies, so they show an association, not proof that HRT causes the extra weight loss.</strong></p>
<h3>Semaglutide plus hormone therapy (2024)</h3>
<p>A Mayo Clinic study published in <em>Menopause</em> in 2024 reviewed the records of 106 postmenopausal women with overweight or obesity who took semaglutide for at least three months (average age about 58, average BMI about 38.5). Women also using hormone therapy had ${ext(SRC.mayoSema, "greater total body weight loss over 12 months")} than those not using it, and a larger share reached 10% or more weight loss. Cardiometabolic markers improved in both groups.</p>
<h3>Tirzepatide plus hormone therapy (2025-2026)</h3>
<p>Mayo Clinic researchers then looked at tirzepatide. At The Menopause Society's 2025 annual meeting, Dr. Regina Castaneda presented findings that ${ext(SRC.tmsTirz, "postmenopausal women on tirzepatide plus hormone therapy lost around 20% of body weight over roughly 18 months, compared with around 15% for those not on hormone therapy")}. Mayo Clinic later reported a study of 120 women in which ${ext(SRC.mayoTirz, "hormone therapy users lost about 35% more weight on tirzepatide")}. Reported figures differ between presentations and publications, so treat the exact numbers with caution - the consistent finding is the direction of the effect.</p>
<h3>Why might HRT help?</h3>
<p>Researchers have proposed several explanations, none proven:</p>
<ul><li><strong>Better symptom control:</strong> women whose hot flashes and night sweats are treated may sleep better and find it easier to stick with eating and exercise changes.</li><li><strong>Biology:</strong> animal studies suggest estrogen may amplify GLP-1 signalling in the brain.</li><li><strong>Body composition:</strong> estrogen influences where fat is stored and may help preserve lean mass.</li><li><strong>"Healthy user" effect:</strong> women who take HRT may differ in other ways - health engagement, access to care - that also affect weight loss.</li></ul>
<h3>The caveats</h3>
<ul><li>All the studies so far are observational and relatively small.</li><li>They didn't separate types, doses or routes of hormone therapy.</li><li>The researchers themselves have emphasized that hormone therapy should not be prescribed for weight loss alone.</li></ul>
<p>The practical takeaway: if you're a good candidate for HRT for menopause symptoms, the possibility of better weight results on a GLP-1 is a potential bonus - not a reason to start HRT on its own.</p>`,
    },
    {
      heading: "GLP-1 vs HRT: what does each one actually treat?",
      body: `<p><strong>HRT treats menopause symptoms - hot flashes, night sweats, vaginal dryness, some sleep and mood symptoms - and prevents bone loss. GLP-1 medicines treat obesity and related conditions such as type 2 diabetes, and some reduce cardiovascular risk or sleep apnea severity. They overlap very little, which is why many women use both.</strong></p>
<p>A common source of confusion online is the idea that one could replace the other. They work on different systems: HRT replaces the estrogen (and, if needed, progestogen) the ovaries stop making; GLP-1 medicines act on gut-hormone pathways that regulate appetite, fullness and blood sugar.</p>
<table><tr><th>Concern</th><th>HRT</th><th>GLP-1 medicines</th></tr><tr><td>Hot flashes and night sweats</td><td>Most effective treatment</td><td>Not approved or established</td></tr><tr><td>Vaginal dryness, painful sex</td><td>Yes (systemic or vaginal estrogen)</td><td>No</td></tr><tr><td>Bone loss and fractures</td><td>Prevents bone loss; reduces fractures</td><td>No; rapid weight loss may lower bone density</td></tr><tr><td>Weight and waist</td><td>Not a weight-loss treatment</td><td>Substantial average weight loss</td></tr><tr><td>Type 2 diabetes</td><td>Not a diabetes treatment</td><td>Yes (specific products)</td></tr><tr><td>Cardiovascular risk</td><td>Not prescribed to prevent heart disease</td><td>Wegovy approved to reduce risk in established heart disease</td></tr><tr><td>Sleep</td><td>Can improve sleep disrupted by night sweats</td><td>Zepbound approved for obstructive sleep apnea with obesity</td></tr><tr><td>Mood</td><td>May help perimenopausal mood symptoms</td><td>Not a mood treatment</td></tr><tr><td>Main risks to discuss</td><td>Blood clots (lower with transdermal), breast cancer (combined therapy, longer use), stroke in older starters</td><td>GI effects, gallbladder, pancreatitis, muscle and bone loss, thyroid C-cell warning</td></tr></table>
<p>For women who have both bothersome symptoms and weight-related health concerns, the treatments are complementary rather than competing - and research so far suggests they may work better together.</p>`,
    },
    {
      heading: "Should you start HRT to lose weight?",
      body: `<p><strong>No. Hormone therapy isn't a weight-loss treatment and isn't prescribed for that purpose. It's prescribed for menopause symptoms such as hot flashes, night sweats and vaginal symptoms, and to prevent bone loss in women at higher risk.</strong></p>
<p>The Menopause Society's ${ext(SRC.nams2022, "2022 position statement")} supports HRT for bothersome symptoms in appropriate candidates - generally healthy women under 60 or within 10 years of menopause - and notes it does not cause weight gain on average and may modestly reduce the shift of fat to the abdomen. That's useful, but it's not the same as weight loss.</p>
<p>If you have bothersome menopause symptoms <em>and</em> you're considering a GLP-1, it's reasonable to discuss both - and the emerging research on combining them - with a clinician. Read <a href="/articles/is-hrt-safe">Is HRT safe?</a> and <a href="/articles/hrt-black-box-warning-removed">the 2025-2026 HRT label changes</a> for the current evidence on HRT itself.</p>`,
    },
    {
      heading: "Do GLP-1 medications help hot flashes?",
      body: `<p><strong>They aren't approved or established as a treatment for hot flashes. Some women report fewer hot flashes as they lose weight - higher body weight is associated with more hot flashes in some research - but GLP-1s shouldn't be used in place of proven hot flash treatments.</strong></p>
<p>The Menopause Society lists weight loss among the strategies that may help hot flashes in women with excess weight, but the effect is modest compared with dedicated treatments. For hot flashes, the evidence-based options are hormone therapy and the non-hormonal medicines fezolinetant (Veozah), elinzanetant (Lynkuet), certain antidepressants, gabapentin and oxybutynin, along with CBT and clinical hypnosis. Our <a href="/articles/menopause-complete-guide">complete menopause guide</a> covers them in detail.</p>`,
    },
    {
      heading: "Can GLP-1 medications affect birth control or HRT pills?",
      body: `<p><strong>Tirzepatide (Mounjaro, Zepbound) can reduce the effectiveness of oral hormonal contraceptives, particularly after starting and after each dose increase. Its labeling advises switching to a non-oral method or adding a barrier method for four weeks after starting and four weeks after each dose increase.</strong></p>
<p>The cause is the slowing of stomach emptying, which is greatest after the first doses and tends to lessen over time. Lilly's ${ext(SRC.lillyOc, "medical information")} notes that non-oral hormonal contraceptives - such as IUDs, implants, patches and rings - aren't expected to be affected.</p>
<h3>Why this matters in perimenopause</h3>
<ul><li>Women in perimenopause can still get pregnant, and GLP-1 medicines are not recommended during pregnancy.</li><li>Menopausal hormone therapy is <strong>not</strong> contraception - its doses don't reliably prevent ovulation.</li><li>A levonorgestrel IUD is a popular perimenopause option because it provides contraception and can serve as the progestogen part of HRT, and it isn't affected by stomach emptying.</li></ul>
<h3>What about oral HRT?</h3>
<p>The tirzepatide contraceptive warning is specifically about preventing pregnancy, where small changes in absorption matter. For oral estrogen or progesterone taken for menopause symptoms, any effect would show up as symptoms - for example, hot flashes returning - and your clinician can adjust. If you want to avoid the question entirely, transdermal estrogen (patch, gel or spray) doesn't depend on gut absorption. See <a href="/articles/estrogen-patch-vs-pill">estrogen patch vs pill</a>.</p>`,
    },
    {
      heading: "Do GLP-1 medications cause muscle loss in women over 50?",
      body: `<p><strong>Some of the weight lost on GLP-1 medicines is lean mass, which includes muscle. In trial substudies, lean mass made up roughly 40% of the weight lost on semaglutide and roughly 25% on tirzepatide. For midlife women - already losing muscle through the menopause transition - protecting muscle is a priority.</strong></p>
<p>Body composition substudies using DXA scans, summarised in a ${ext(SRC.leanMass, "2026 review")}, found:</p>
<ul><li><strong>STEP 1 (semaglutide):</strong> lean mass accounted for roughly 40% of total weight lost, though fat mass fell more, so the <em>proportion</em> of the body made up of lean tissue increased.</li><li><strong>SURMOUNT-1 (tirzepatide):</strong> lean mass accounted for roughly a quarter of weight lost.</li></ul>
<p>Any significant weight loss - including from diet alone - involves some lean mass loss, and "lean mass" includes organs and water as well as muscle. Researchers caution against direct comparisons between trials with different populations. But the practical message for women after menopause is consistent:</p>
<h3>How to protect muscle on a GLP-1</h3>
<ul><li><strong>Resistance training</strong> two to three times a week - weights, bands or bodyweight exercises - is the most effective protection.</li><li><strong>Enough protein</strong> spread across meals, even when appetite is low; ask your clinician or a dietitian what target suits you.</li><li><strong>Avoid very rapid loss:</strong> slower dose increases and adequate nutrition help.</li><li><strong>Track strength and waist</strong> as well as weight.</li><li><strong>Consider HRT if you're a candidate:</strong> estrogen's role in body composition is one hypothesis for the better results seen in HRT users.</li></ul>`,
    },
    {
      heading: "Do GLP-1 medications affect bone density after menopause?",
      body: `<p><strong>Weight loss of any kind can reduce bone density, particularly at weight-bearing sites like the hip, and postmenopausal women are already losing bone. The research on GLP-1s specifically is still developing, but exercise - especially resistance and weight-bearing exercise - appears to help preserve bone during weight loss.</strong></p>
<p>What's known so far:</p>
<ul><li>Bone loss during weight loss tends to track with how much weight is lost, rather than being a unique effect of GLP-1 drugs.</li><li>In exercise trials with the earlier GLP-1 medicine liraglutide, combining the drug with supervised exercise was reported to preserve hip and spine bone density, while the drug alone led to losses.</li><li>Long-term data on semaglutide and tirzepatide and bone in postmenopausal women are limited; studies are ongoing.</li></ul>
<h3>Protecting bone on a GLP-1</h3>
<ul><li>Resistance and weight-bearing exercise.</li><li>Adequate calcium (ideally from food) and vitamin D.</li><li>Ask about a bone density (DXA) scan if you're 65 or older, or younger with risk factors - the US Preventive Services Task Force recommends screening for all women 65+ and younger postmenopausal women at increased fracture risk.</li><li><strong>Hormone therapy prevents bone loss</strong> and reduces fractures - another reason HRT may be worth discussing if you're a candidate.</li></ul>`,
    },
    {
      heading: "How much protein do you need on a GLP-1 after menopause?",
      body: `<p><strong>Most experts suggest roughly 1.0 to 1.5 grams of protein per kilogram of body weight per day for older adults losing weight - higher than the basic adult minimum of 0.8 g/kg - spread across meals, together with resistance training at least twice a week. Your clinician or a dietitian can set a personal target, especially if you have kidney disease.</strong></p>
<p>GLP-1 medicines work partly by making you less hungry and fuller sooner. That's the point - but it also means many women simply eat less of everything, including protein. After menopause, when muscle is already harder to keep, under-eating protein during rapid weight loss is the most common avoidable mistake.</p>
<h3>Why the usual protein minimum isn't enough</h3>
<p>The standard recommended dietary allowance of 0.8 g/kg was set to prevent deficiency in healthy adults eating enough calories - not to protect muscle in a 55-year-old eating 500-800 fewer calories than before. Geriatric and obesity-medicine experts commonly recommend more for older adults, and more still during weight loss. For a woman weighing 80 kg (about 176 lb), 1.2 g/kg is roughly 96 grams of protein a day.</p>
<h3>Practical ways to hit protein when you're not hungry</h3>
<ul><li><strong>Protein first:</strong> eat the protein part of each meal before the rest, while appetite is highest.</li><li><strong>Spread it out:</strong> aim for around 25-30 g at each of three meals rather than one large serving - muscle responds better to regular doses.</li><li><strong>Dense sources:</strong> Greek yogurt, cottage cheese, eggs, fish, chicken, tofu, tempeh, lentils, edamame, milk or soy milk.</li><li><strong>Liquid protein:</strong> a protein shake is often easier than a full plate when nausea or fullness are an issue.</li><li><strong>Small, frequent meals:</strong> these also reduce nausea, a common GLP-1 side effect.</li><li><strong>Don't drink your fullness:</strong> big glasses of water right before eating take up room that protein needs - sip between meals instead.</li></ul>
<h3>A sample protein day (illustrative only)</h3>
<table><tr><th>Meal</th><th>Example</th><th>Approx. protein</th></tr><tr><td>Breakfast</td><td>Greek yogurt (200 g) with berries and a spoon of nuts</td><td>20-25 g</td></tr><tr><td>Lunch</td><td>Tuna or chickpea salad with whole-grain crackers</td><td>25-30 g</td></tr><tr><td>Snack</td><td>Protein shake or two eggs</td><td>15-25 g</td></tr><tr><td>Dinner</td><td>Salmon or tofu with vegetables and quinoa</td><td>25-35 g</td></tr><tr><td><strong>Total</strong></td><td></td><td><strong>about 85-115 g</strong></td></tr></table>
<p>Amounts vary by product and portion; this is an example, not a prescription.</p>
<h3>Resistance training: the non-negotiable</h3>
<p>Protein supplies the building blocks, but muscle only holds on if you use it. Resistance training - weights, machines, resistance bands or body-weight exercises - signals the body to keep muscle while fat is lost. Current physical activity guidelines recommend muscle-strengthening activities on two or more days a week for adults, plus balance training for older adults. For women on GLP-1s after menopause, those two sessions are arguably as important as the medication itself.</p>
<ul><li>Start with large muscle groups: legs (squats, sit-to-stands, step-ups), back (rows), chest (push-ups against a wall or counter), hips (bridges).</li><li>Progress gradually: add weight or repetitions when the last few reps start to feel easy.</li><li>Include weight-bearing activity such as brisk walking, stairs or dancing for bone.</li><li>If you're new to exercise, have joint problems or osteoporosis, ask for a physical therapist referral or work with a qualified trainer.</li></ul>
<h3>Other nutrients to watch when you're eating less</h3>
<ul><li><strong>Fiber and fluids:</strong> constipation is common on GLP-1s; vegetables, fruit, legumes, whole grains and steady fluids help.</li><li><strong>Calcium and vitamin D:</strong> important for bone after menopause.</li><li><strong>Iron and B12:</strong> intake can drop when portions shrink; your clinician may check levels if you're tired.</li><li><strong>A general multivitamin:</strong> some clinicians recommend one during significant calorie restriction - ask yours.</li></ul>`,
    },
    {
      heading: "What are the side effects of GLP-1 medications for women in midlife?",
      body: `<p><strong>The most common side effects are digestive: nausea, diarrhea, constipation, vomiting, bloating, reflux and stomach pain. They're usually worst when starting or increasing the dose and often ease over weeks. Less common but serious risks include pancreatitis, gallbladder problems, dehydration-related kidney injury and, for people on insulin or sulfonylureas, low blood sugar.</strong></p>
<p>The side-effect profile of GLP-1 medicines is the same for women in midlife as for other adults, but some effects interact with menopause in ways worth knowing.</p>
<h3>Common side effects</h3>
<table><tr><th>Side effect</th><th>What helps</th></tr><tr><td>Nausea</td><td>Smaller meals, eating slowly, stopping at the first sign of fullness, avoiding greasy or very rich foods, slower dose increases</td></tr><tr><td>Constipation</td><td>Fiber, fluids, movement; ask about a stool softener or osmotic laxative</td></tr><tr><td>Diarrhea</td><td>Fluids and electrolytes; avoid high-fat meals; tell your clinician if severe or persistent</td></tr><tr><td>Reflux and burping</td><td>Avoid lying down after eating, smaller evening meals, limit alcohol and fizzy drinks</td></tr><tr><td>Fatigue</td><td>Often from eating too little - check protein, calories and fluids</td></tr><tr><td>Headache, dizziness</td><td>Often linked to dehydration or low intake</td></tr><tr><td>Injection-site reactions</td><td>Rotate sites (abdomen, thigh, upper arm)</td></tr></table>
<h3>Where menopause and GLP-1 side effects overlap</h3>
<ul><li><strong>Fatigue and brain fog</strong> are both menopause symptoms and possible results of eating very little on a GLP-1. If they worsen after starting, look at intake first.</li><li><strong>Constipation</strong> can be aggravated by oral progesterone (some women notice this) and by iron supplements.</li><li><strong>Sleep:</strong> night-time reflux or nausea can add to menopause-related sleep problems; eating earlier in the evening helps.</li><li><strong>Hair shedding:</strong> rapid weight loss of any kind can trigger temporary shedding, which may be confused with menopausal hair thinning - see the hair-loss section below.</li><li><strong>Mood:</strong> both menopause and dramatic diet changes can affect mood; tell your clinician about any new low mood or anxiety.</li></ul>
<h3>When to call a clinician promptly</h3>
<ul><li>Severe, persistent stomach pain, especially spreading to the back, with or without vomiting - possible pancreatitis.</li><li>Pain in the upper right abdomen, fever, yellowing of skin or eyes, or clay-colored stools - possible gallbladder problems.</li><li>Vomiting or diarrhea that stops you keeping fluids down - risk of dehydration and kidney injury.</li><li>A lump or swelling in the neck, trouble swallowing, hoarseness or shortness of breath.</li><li>Signs of an allergic reaction: swelling of the face, lips, tongue or throat, trouble breathing, severe rash.</li><li>Sudden vision changes.</li><li>New or worsening depression or thoughts of self-harm.</li></ul>
<p>In an emergency, call 911. In the US, the 988 Suicide &amp; Crisis Lifeline is available by call or text.</p>`,
    },
    {
      heading: "Who should not take GLP-1 medications?",
      body: `<p><strong>GLP-1 receptor agonist medicines should not be used by people with a personal or family history of medullary thyroid carcinoma (MTC) or multiple endocrine neoplasia syndrome type 2 (MEN 2), people who've had a serious allergic reaction to the drug, or during pregnancy. Extra caution is needed with a history of pancreatitis, gallbladder disease, severe digestive disease, diabetic eye disease or an eating disorder.</strong></p>
<h3>The boxed warning on injectable GLP-1s</h3>
<p>Semaglutide and tirzepatide products carry an FDA boxed warning about thyroid C-cell tumors. These tumors occurred in rodent studies; whether they occur in humans isn't known. Because of that uncertainty, the medicines are contraindicated in people with a personal or family history of MTC or MEN 2. Tell your prescriber about any family history of thyroid cancer, and report a neck lump, trouble swallowing, hoarseness or persistent shortness of breath.</p>
<p>Note that this warning concerns medullary thyroid cancer specifically - a rare type. Many women in midlife have thyroid nodules or hypothyroidism (Hashimoto's); these are not the same thing, and your clinician can explain whether your history matters.</p>
<h3>Situations needing extra care</h3>
<ul><li><strong>History of pancreatitis:</strong> GLP-1 medicines haven't been studied in people with prior pancreatitis; your clinician will weigh risks.</li><li><strong>Gallbladder disease:</strong> rapid weight loss and GLP-1s are both linked to gallstones.</li><li><strong>Severe gastrointestinal disease</strong>, such as gastroparesis: GLP-1s slow stomach emptying and generally aren't recommended.</li><li><strong>Diabetic retinopathy:</strong> rapid improvement in blood sugar has been linked to temporary worsening; eye monitoring may be needed.</li><li><strong>Kidney disease:</strong> dehydration from vomiting or diarrhea can worsen kidney function.</li><li><strong>Current or past eating disorder:</strong> appetite-suppressing medicines can be harmful; this needs specialist input.</li><li><strong>Upcoming surgery or procedures with sedation:</strong> because of slowed stomach emptying, labels now mention a risk of pulmonary aspiration during anesthesia. Tell your surgeon and anesthesiologist you take a GLP-1; they may give instructions about holding doses or fasting.</li><li><strong>Low body weight:</strong> the medicines are approved for people with obesity, or overweight plus a weight-related condition - not for losing a few pounds.</li></ul>
<h3>Pregnancy and planning</h3>
<p>GLP-1 medicines should not be used in pregnancy. Semaglutide's labeling advises stopping at least two months before a planned pregnancy because of how long it stays in the body. That matters in perimenopause, when pregnancy is still possible - see the next section.</p>
<h3>Vision: a rare reported effect</h3>
<p>In 2025, the European Medicines Agency concluded that non-arteritic anterior ischemic optic neuropathy (NAION), a condition that can cause sudden vision loss in one eye, is a very rare side effect of semaglutide. Anyone with sudden vision loss on a GLP-1 should seek urgent care.</p>`,
    },
    {
      heading: "Can you take a GLP-1 during perimenopause?",
      body: `<p><strong>Yes. GLP-1 medicines can be prescribed in perimenopause if you meet the criteria, but perimenopause has one extra issue: you can still get pregnant. GLP-1s shouldn't be used in pregnancy, weight loss can improve fertility, and tirzepatide can reduce the effectiveness of birth control pills - so reliable contraception matters.</strong></p>
<p>Perimenopause - the years of changing hormones before your final period - often starts in the 40s and can last several years. Weight and waist changes, sleep disruption and cravings often begin here, so many women first consider a GLP-1 in perimenopause rather than after menopause. Not sure whether your symptoms are perimenopause? See <a href="/articles/perimenopause-symptoms">perimenopause symptoms explained</a>.</p>
<h3>Why contraception comes first</h3>
<ul><li><strong>Pregnancy is possible</strong> until 12 months without a period (generally longer advice applies under 50 - ask your clinician).</li><li><strong>Weight loss can restore ovulation</strong> in women with irregular cycles, including those with PCOS. Reports of unplanned pregnancies in women on GLP-1s (sometimes called "Ozempic babies" in the media) reflect this.</li><li><strong>Tirzepatide and the pill:</strong> Zepbound and Mounjaro labeling advises women using oral hormonal contraceptives to switch to a non-oral method or add a barrier method for four weeks after starting and for four weeks after each dose increase (${ext(SRC.lillyOc, "Lilly medical information")}).</li><li><strong>Semaglutide</strong> hasn't shown the same labeled interaction with the pill, but vomiting or severe diarrhea can reduce absorption of any oral contraceptive.</li></ul>
<p>Options that avoid the gut entirely - a hormonal or copper IUD, implant, injection, ring or patch - sidestep the absorption question. A hormonal IUD can also provide the progestogen part of HRT for women who later add estrogen, which is why it's popular in perimenopause.</p>
<h3>HRT in perimenopause on a GLP-1</h3>
<p>Perimenopausal women with symptoms can use hormone therapy too; it's often transdermal estrogen with progesterone or a levonorgestrel IUD. Standard HRT doses are not contraception. For a full guide, see <a href="/articles/hrt-for-perimenopause">HRT for perimenopause</a>.</p>
<h3>Periods may change</h3>
<p>Cycle changes are normal in perimenopause anyway, but significant weight loss can also change cycles. Heavy, very frequent or prolonged bleeding, or bleeding after 12 months without a period, should always be checked.</p>`,
    },
    {
      heading: "Wegovy pill vs Foundayo vs injections: which is better for women over 50?",
      body: `<p><strong>No option is "best" for everyone. Injections (Zepbound, Wegovy) have the largest average weight loss in trials. The Wegovy pill (oral semaglutide 25 mg) produced weight loss close to injectable Wegovy in its main trial but must be taken on an empty stomach with strict timing. Foundayo (orforglipron) is a once-daily pill without food or water restrictions, with somewhat smaller average weight loss in trials.</strong></p>
<p>The arrival of GLP-1 pills is one of the biggest changes of the past year. For women who dislike needles or want simpler storage and travel, pills are a real alternative.</p>
<h3>The 2026 options compared</h3>
<table><tr><th></th><th>Zepbound (tirzepatide)</th><th>Wegovy injection (semaglutide)</th><th>Wegovy pill (oral semaglutide)</th><th>Foundayo (orforglipron)</th></tr><tr><td>Form</td><td>Weekly injection</td><td>Weekly injection</td><td>Daily tablet</td><td>Daily tablet</td></tr><tr><td>FDA approval for weight</td><td>Nov 2023</td><td>June 2021</td><td>Dec 22, 2025 (${ext(SRC.wegovyPill, "BioPharma Dive")})</td><td>Apr 1, 2026 (${ext(SRC.foundayo, "Drugs.com")})</td></tr><tr><td>How it works</td><td>GIP + GLP-1</td><td>GLP-1</td><td>GLP-1</td><td>GLP-1 (non-peptide small molecule)</td></tr><tr><td>Average weight loss in main trials</td><td>Up to about 21% at highest dose (SURMOUNT-1)</td><td>About 15% (STEP 1)</td><td>About 14% overall; about 17% in those who took it as directed (OASIS 4)</td><td>About 12% at highest dose (ATTAIN-1)</td></tr><tr><td>Food rules</td><td>None</td><td>None</td><td>Empty stomach, small sip of water, wait 30 minutes before eating or other medicines</td><td>None reported</td></tr><tr><td>Other approved uses (brand)</td><td>Obstructive sleep apnea with obesity</td><td>Cardiovascular risk reduction with established heart disease</td><td>Check current label</td><td>Check current label</td></tr></table>
<p>Trial results are averages from different studies with different populations, so they can't be compared head-to-head precisely. Your result may be higher or lower.</p>
<h3>Things that matter more after 50</h3>
<ul><li><strong>Other morning pills:</strong> the Wegovy pill's empty-stomach routine can clash with other morning medicines - levothyroxine, for instance, also needs an empty stomach. Your clinician or pharmacist can help plan timing.</li><li><strong>Oral HRT:</strong> women on oral estradiol already take a daily pill; adding another daily pill may be easy, or switching to transdermal estrogen may simplify absorption questions.</li><li><strong>Joint or hand problems:</strong> arthritis can make some injection pens harder to use; pills avoid this.</li><li><strong>Muscle preservation:</strong> greater weight loss isn't automatically better if it outpaces your protein and strength training.</li><li><strong>Cost and coverage:</strong> pills have launched with lower self-pay starting prices than pens, and Medicare's 2026 bridge program covers specific products - see the cost sections below.</li></ul>
<h3>A note on Rybelsus and levothyroxine</h3>
<p>Rybelsus (oral semaglutide for diabetes) raised levothyroxine levels in a study, and its labeling suggests monitoring thyroid levels. Hypothyroidism is common in midlife women, so if you take thyroid medication and start any oral GLP-1, ask whether your thyroid levels should be rechecked.</p>`,
    },
    {
      heading: "How much do GLP-1 medications cost without insurance in 2026?",
      body: `<p><strong>Self-pay prices fell sharply in 2025-2026. Reported manufacturer direct prices are roughly $149-$299 a month for the Wegovy pill depending on dose, about $349 a month for Wegovy pens, and about $299-$449 a month for Zepbound vials depending on dose and program. Prices change often, so always check NovoCare Pharmacy and LillyDirect for current figures.</strong></p>
<p>Until 2024, brand-name GLP-1s cost over $1,000 a month at list price, which is why so many people turned to compounded versions. Since then, both manufacturers have launched direct-to-patient self-pay channels, and the US government's TrumpRx site lists the same manufacturer prices.</p>
<h3>Reported self-pay prices (check before you buy)</h3>
<table><tr><th>Medicine</th><th>Reported self-pay price</th><th>Where</th></tr><tr><td>Wegovy pill</td><td>About $149/month at the starting dose, up to about $299 at higher doses</td><td>NovoCare Pharmacy and partners</td></tr><tr><td>Wegovy injection</td><td>About $349/month</td><td>NovoCare Pharmacy and partners</td></tr><tr><td>Zepbound vials</td><td>From about $299/month (lowest dose); about $449/month for higher doses with on-time refills under Lilly's Self Pay Journey program</td><td>LillyDirect</td></tr><tr><td>Foundayo</td><td>Self-pay pricing announced at launch - check LillyDirect</td><td>LillyDirect</td></tr></table>
<p>These are reported figures from manufacturer announcements and news coverage, not quotes. They exclude the cost of the prescribing visit, which varies by clinic or telehealth service, and some introductory prices have conditions or end dates.</p>
<h3>What women in midlife often forget to budget</h3>
<ul><li><strong>Ongoing cost:</strong> most people regain weight if they stop, so think in years, not months.</li><li><strong>Clinician visits and labs</strong> - baseline bloodwork, follow-ups, possibly a DXA scan.</li><li><strong>HRT costs,</strong> if you're also using hormone therapy - see our <a href="/articles/online-hrt-cost">online HRT cost comparison</a>.</li><li><strong>Protein and strength training</strong> - a gym membership, trainer or bands are part of doing this safely.</li></ul>
<h3>FSA and HSA</h3>
<p>Prescription medicines, including GLP-1s prescribed for a medical condition, are generally eligible expenses for flexible spending and health savings accounts. Check your plan's rules.</p>`,
    },
    {
      heading: "Does insurance cover GLP-1 medications for weight loss?",
      body: `<p><strong>Sometimes. Coverage for weight management depends on your plan: many employer plans exclude weight-loss drugs or require prior authorization, Medicaid coverage varies by state, and Medicare Part D historically couldn't cover drugs for weight loss alone - though it can cover them for other approved uses, and a new Medicare GLP-1 Bridge began in July 2026.</strong></p>
<h3>Commercial and employer insurance</h3>
<ul><li>Plans that cover anti-obesity medicines usually require prior authorization showing your BMI and any weight-related conditions.</li><li>Some employers dropped coverage in 2024-2025 because of cost; others added it. Check your plan's formulary or call the number on your card.</li><li>Coverage is often easier when the medicine is prescribed for an approved non-weight use - for example, Ozempic or Mounjaro for type 2 diabetes, Wegovy to reduce cardiovascular risk in people with established heart disease, or Zepbound for moderate-to-severe obstructive sleep apnea with obesity.</li><li>Manufacturer savings cards can lower copays for commercially insured patients if their plan covers the drug; they can't be used with government insurance.</li></ul>
<h3>Medicaid</h3>
<p>Medicaid coverage of weight-management medicines varies by state and has changed as states weigh costs. Check your state's Medicaid formulary.</p>
<h3>Questions to ask your insurer</h3>
<ul><li>Is the medicine on the formulary for my diagnosis?</li><li>Is prior authorization or step therapy required?</li><li>What's my copay or coinsurance after the deductible?</li><li>Are there quantity limits or required programs (such as a lifestyle program)?</li></ul>`,
    },
    {
      heading: "Does Medicare cover GLP-1 medications in 2026?",
      body: `<p><strong>Yes, for some people. Starting July 1, 2026, Medicare's GLP-1 Bridge lets eligible people with Medicare drug coverage get certain GLP-1 medicines for weight management for a $50 monthly copay, with eligibility criteria and prior authorization. Medicare can also cover GLP-1s for approved uses such as diabetes, cardiovascular risk reduction and sleep apnea.</strong></p>
<p>This matters enormously for women after menopause: many are 65 or older, and Medicare had long been barred from covering drugs used only for weight loss.</p>
<h3>What Medicare.gov says about the GLP-1 Bridge</h3>
<ul><li><strong>Start date:</strong> July 1, 2026.</li><li><strong>Cost:</strong> $50 per month copay for covered GLP-1s used for weight management.</li><li><strong>Who:</strong> people with Medicare drug coverage (Part D or a Medicare Advantage plan with drug coverage) who meet the program's eligibility criteria.</li><li><strong>Approval:</strong> prior authorization is required.</li><li><strong>Medicines named:</strong> Foundayo, Wegovy (injection and tablet) and Zepbound KwikPen.</li></ul>
<p>Source: ${ext(SRC.medicare, "Medicare.gov - weight loss drugs")}. Reports differ on how long the bridge program runs (some coverage describes it through the end of 2027), so check Medicare.gov or call 1-800-MEDICARE for current details before relying on it.</p>
<h3>Other ways Medicare covers GLP-1s</h3>
<table><tr><th>Use</th><th>Example medicine</th></tr><tr><td>Type 2 diabetes</td><td>Ozempic, Mounjaro, Rybelsus</td></tr><tr><td>Reducing heart attack and stroke risk in people with established cardiovascular disease and obesity or overweight</td><td>Wegovy</td></tr><tr><td>Moderate-to-severe obstructive sleep apnea with obesity</td><td>Zepbound</td></tr></table>
<p>Coverage still depends on your specific Part D plan's formulary and rules.</p>
<h3>Medicare and HRT</h3>
<p>Medicare drug plans commonly cover generic estradiol and micronized progesterone. If you're 65 or older and considering HRT too, see our guide on <a href="/articles/is-hrt-safe">whether HRT is safe</a>, since age and time since menopause shape the decision.</p>`,
    },
    {
      heading: "Are compounded semaglutide and tirzepatide safe?",
      body: `<p><strong>Compounded GLP-1s are not FDA-approved, meaning the FDA hasn't reviewed their safety, effectiveness or quality. They were widely sold during the official shortages of 2022-2025, but those shortages have ended, and the FDA has said compounders generally may no longer make essentially copies of the approved drugs. With brand-name self-pay prices now lower, most women have little reason to take on that uncertainty.</strong></p>
<h3>What changed</h3>
<ul><li>The FDA declared the tirzepatide shortage resolved, and its enforcement discretion for compounding copies ended on February 18, 2025 for state-licensed pharmacies (503A) and March 19, 2025 for outsourcing facilities (503B).</li><li>The FDA declared the semaglutide shortage resolved on February 21, 2025, with discretion ending April 22, 2025 (503A) and May 22, 2025 (503B).</li></ul>
<p>Source: ${ext(SRC.fdaCompounding, "FDA - compounding policies as GLP-1 supply stabilizes")}.</p>
<h3>The concerns the FDA has raised</h3>
<ul><li>Dosing errors, including people drawing up the wrong amount from multi-dose vials.</li><li>Use of salt forms (such as semaglutide sodium or acetate) that differ from the active ingredient in approved products.</li><li>Counterfeit and unapproved products sold online.</li><li>Misleading marketing: the FDA has issued warning letters to companies over claims about compounded GLP-1s.</li></ul>
<h3>"Personalized" doses</h3>
<p>Some companies continue to offer compounded GLP-1s described as personalized - for example, with added ingredients or unusual doses - arguing they're not copies of the approved drug. Whether a particular product meets the legal standard is a regulatory question, but either way the product is still not FDA-approved.</p>
<h3>What this means for menopause telehealth</h3>
<p>Several menopause telehealth companies also run weight-loss programs. If a program offers a GLP-1, ask plainly: <em>is this an FDA-approved brand-name product dispensed by a pharmacy, or a compounded version?</em> The same question applies to hormone therapy: FDA-approved and compounded hormones are different categories, as explained in our guide to <a href="/articles/bioidentical-hormones-explained">bioidentical hormones</a>.</p>`,
    },
    {
      heading: "What happens when you stop a GLP-1 medication?",
      body: `<p><strong>Most people regain much of the weight they lost after stopping a GLP-1. In the STEP 1 extension, people regained about two-thirds of their lost weight within a year of stopping semaglutide; in SURMOUNT-4, people switched from tirzepatide to placebo regained a substantial part of their loss while those who continued kept losing. Obesity is treated as a long-term condition, and GLP-1s work while you take them.</strong></p>
<h3>Why weight comes back</h3>
<p>When the medicine stops, appetite and fullness signals return toward where they were. The body also defends its previous weight through hormonal and metabolic changes that make regain easier. None of this is a failure of willpower.</p>
<h3>Why this matters more after menopause</h3>
<p>Weight regained after a period of loss tends to come back with proportionally more fat than muscle - especially if strength training wasn't maintained. For a postmenopausal woman, a cycle of losing muscle and regaining fat can leave her with less muscle than when she started. That's one more reason to protect muscle throughout and to plan for the long term before starting.</p>
<h3>Options people discuss with clinicians</h3>
<ul><li>Continuing at the lowest dose that maintains results.</li><li>Gradually reducing the dose rather than stopping suddenly - an approach some clinicians use, though evidence on the best taper is still developing.</li><li>Switching between options (for example, from injection to pill) for cost or convenience.</li><li>Keeping strength training and protein habits going regardless.</li></ul>
<h3>Plateaus</h3>
<p>Weight loss on GLP-1s usually slows and plateaus after about a year to 18 months. A plateau isn't necessarily a sign the medicine stopped working - the body reaches a new balance. Your clinician can review dose, health markers and goals; the aim is health, not a number.</p>`,
    },
    {
      heading: "Do GLP-1 medications cause hair loss or \"Ozempic face\"?",
      body: `<p><strong>Hair loss was reported in a small percentage of people in GLP-1 weight-loss trials, more often than placebo, and is generally thought to be linked to rapid weight loss rather than the drug directly. "Ozempic face" is a media term for facial volume loss after substantial weight loss - it reflects lost fat, not a unique drug effect, and is more noticeable with age.</strong></p>
<h3>Hair shedding vs menopausal thinning</h3>
<table><tr><th></th><th>Shedding after rapid weight loss</th><th>Menopause-related thinning</th></tr><tr><td>Timing</td><td>Usually 2-4 months after a big change</td><td>Gradual, over years</td></tr><tr><td>Pattern</td><td>Diffuse shedding all over</td><td>Often widening part, thinning at the crown</td></tr><tr><td>Course</td><td>Usually temporary; regrows over months</td><td>Ongoing without treatment</td></tr></table>
<p>Both can happen at once. Low protein, iron deficiency and thyroid problems can add to hair loss, so persistent shedding is worth a check-up with labs.</p>
<h3>Facial changes</h3>
<p>Facial fat naturally declines with age, and estrogen loss affects skin collagen. Rapid weight loss in midlife can make those changes more visible. Slower, steadier weight loss, adequate protein and avoiding unnecessary extra loss may help; some women seek dermatology advice. There's no evidence that GLP-1s damage skin in a way separate from weight loss itself.</p>`,
    },
    {
      heading: "Do GLP-1 medications affect mood, anxiety or depression?",
      body: `<p><strong>Reviews by the FDA and the European Medicines Agency in 2024 did not find evidence that GLP-1 medicines cause suicidal thoughts or actions, though labels for weight-management products still advise monitoring for depression and suicidal thoughts. Mood changes in midlife have many causes, including perimenopause itself, so any new low mood deserves attention.</strong></p>
<p>Some people describe feeling calmer around food or less preoccupied with eating on a GLP-1 - sometimes called reduced "food noise." Others report low mood or reduced enjoyment, though it isn't clear how much is due to the drug, rapid diet change or other life factors.</p>
<h3>Untangling mood in midlife</h3>
<ul><li><strong>Perimenopause</strong> is a time of higher risk for depressive symptoms, especially in women with a history of depression or premenstrual mood problems.</li><li><strong>Poor sleep</strong> from night sweats worsens mood and makes weight management harder.</li><li><strong>Eating very little</strong> can cause irritability, fatigue and low mood.</li><li><strong>Life stressors</strong> - caregiving, work, relationships - often peak at the same time.</li></ul>
<p>Hormone therapy can improve mood symptoms linked to perimenopause in some women, and it treats night sweats that disrupt sleep. It isn't a treatment for clinical depression, which needs its own care.</p>
<p>If you're struggling, tell your clinician. In the US, call or text 988 for the Suicide &amp; Crisis Lifeline.</p>`,
    },
    {
      heading: "Can you drink alcohol on a GLP-1 medication?",
      body: `<p><strong>There's no absolute ban, but alcohol can worsen nausea, reflux and dehydration, and it adds calories with no protein. Many people find they want less alcohol on a GLP-1 - an effect researchers are studying - but GLP-1s aren't approved to treat alcohol use disorder.</strong></p>
<ul><li>Alcohol can trigger hot flashes and disrupt sleep - both already common in menopause.</li><li>Drinking on an empty stomach or after a very small meal raises the risk of feeling unwell.</li><li>People with diabetes on insulin or sulfonylureas have extra risk of low blood sugar when drinking.</li><li>Alcohol is a known risk factor for breast cancer, which matters in HRT decisions too; limiting it is generally recommended for women in midlife.</li></ul>`,
    },
    {
      heading: "Do GLP-1 medications help blood sugar, heart health and sleep apnea after menopause?",
      body: `<p><strong>Yes, in specific approved ways. GLP-1s lower blood sugar in type 2 diabetes; Wegovy is approved to reduce the risk of heart attack, stroke and cardiovascular death in adults with established cardiovascular disease and obesity or overweight; Ozempic has an approval related to kidney disease in type 2 diabetes; and Zepbound is approved for moderate-to-severe obstructive sleep apnea in adults with obesity.</strong></p>
<p>These benefits are especially relevant after menopause, when cardiovascular risk rises and when type 2 diabetes and sleep apnea become more common in women.</p>
<h3>Menopause and cardiometabolic risk</h3>
<ul><li><strong>Heart disease</strong> is the leading cause of death for women in the US, and risk rises after menopause as LDL cholesterol, blood pressure and visceral fat tend to increase.</li><li><strong>Insulin resistance</strong> tends to worsen with the shift to central fat.</li><li><strong>Sleep apnea</strong> becomes more common in women after menopause, and is often missed because women's symptoms (insomnia, fatigue, morning headaches) can differ from the classic loud snoring.</li></ul>
<h3>What the key trials showed</h3>
<table><tr><th>Trial</th><th>Medicine</th><th>Finding</th></tr><tr><td>SELECT</td><td>Semaglutide 2.4 mg (Wegovy)</td><td>About 20% lower risk of major cardiovascular events in people with established cardiovascular disease and overweight or obesity, without diabetes</td></tr><tr><td>SURMOUNT-OSA</td><td>Tirzepatide (Zepbound)</td><td>Large reductions in sleep apnea severity in adults with obesity, leading to the 2024 approval</td></tr><tr><td>FLOW</td><td>Semaglutide 1 mg (Ozempic)</td><td>Slower kidney disease progression in type 2 diabetes with chronic kidney disease</td></tr></table>
<h3>Where HRT fits</h3>
<p>Hormone therapy isn't prescribed to prevent heart disease. Current guidance from The Menopause Society notes that for healthy women under 60 or within 10 years of menopause, the benefits of HRT for symptoms generally outweigh the risks, and transdermal estrogen carries a lower blood-clot risk than oral estrogen. For women with heart disease or high cardiovascular risk, the HRT decision needs individual review. See ${ext(SRC.nams2022, "The Menopause Society's 2022 position statement")}.</p>`,
    },
    {
      heading: "How do you combine a GLP-1 and HRT safely? A step-by-step plan",
      body: `<p><strong>Treat them as two separate decisions with two different goals: HRT for menopause symptoms and bone protection, a GLP-1 for weight-related health. Start one at a time so you can tell which is causing any side effects, prefer non-oral options where absorption matters, and build in protein, strength training and follow-up checks.</strong></p>
<p>There's no official protocol for combining them, and plans should be individualized. This is the approach many menopause and obesity-medicine clinicians describe.</p>
<h3>Step 1: Get a baseline</h3>
<ul><li>Weight, waist circumference and blood pressure.</li><li>Labs your clinician recommends - often blood sugar or HbA1c, lipids, kidney and liver function, and possibly thyroid function.</li><li>Bone density (DXA) if you're due for screening or at risk.</li><li>A symptom log: hot flashes, sleep, mood, joint pain, vaginal symptoms.</li><li>Family history, including thyroid cancer, blood clots, breast cancer and heart disease.</li></ul>
<h3>Step 2: Decide what to start first</h3>
<ul><li><strong>Bothersome hot flashes, night sweats or poor sleep?</strong> Many clinicians start HRT first. Better sleep and fewer symptoms can make diet and exercise changes more manageable.</li><li><strong>Weight-related health problems are the urgent issue?</strong> Starting the GLP-1 first may make sense.</li><li>Leave a gap of several weeks between starts when possible so side effects can be attributed.</li></ul>
<h3>Step 3: Choose formulations thoughtfully</h3>
<ul><li><strong>Transdermal estrogen</strong> (patch, gel or spray) bypasses the gut and liver - useful when a GLP-1 is affecting digestion, and lower clot risk than oral estrogen. See our <a href="/articles/estrogen-patch-vs-pill">patch vs pill comparison</a>.</li><li><strong>Progestogen:</strong> if you have a uterus, you need one with estrogen. Oral micronized progesterone is common; a levonorgestrel IUD is an alternative that avoids the gut. Read more in our <a href="/articles/progesterone-side-effects">progesterone guide</a>.</li><li><strong>Contraception</strong> if you're in perimenopause - especially with tirzepatide.</li></ul>
<h3>Step 4: Titrate slowly and protect muscle</h3>
<ul><li>Increase GLP-1 doses only as tolerated; staying on a lower dose longer is fine if it's working.</li><li>Set a daily protein target and do resistance training twice a week or more from day one.</li><li>Aim for steady weight loss rather than the fastest possible.</li></ul>
<h3>Step 5: Follow up</h3>
<ul><li>Review at regular intervals (often monthly while adjusting doses, then every few months).</li><li>Recheck relevant labs and consider repeat bone density in the future if you've lost a lot of weight or have risk factors.</li><li>Report any unexpected vaginal bleeding on HRT - it always needs evaluation.</li><li>Reassess HRT yearly: dose, type and whether it's still right for you.</li></ul>`,
    },
    {
      heading: "What questions should you ask your doctor about GLP-1s and menopause?",
      body: `<p><strong>Ask whether you meet the criteria, which option suits your health and budget, how it interacts with your other medicines including HRT or birth control, how to protect muscle and bone, what monitoring you'll need and what the long-term plan is.</strong></p>
<h3>About the GLP-1</h3>
<ul><li>Do I meet the criteria for a weight-management medicine, or for another approved use?</li><li>Would an injection or a pill suit me better - and why?</li><li>Is anything in my history (thyroid, pancreas, gallbladder, eyes, kidneys, eating) a concern?</li><li>How will we adjust the dose, and what side effects should I report?</li><li>Is the product FDA-approved or compounded?</li><li>What happens if I stop - and what's the long-term plan?</li></ul>
<h3>About menopause and HRT</h3>
<ul><li>Are my symptoms likely related to perimenopause or menopause?</li><li>Am I a good candidate for HRT, and which type?</li><li>Should my estrogen be transdermal given that I'm starting a GLP-1?</li><li>Do I need contraception, and does my GLP-1 affect my pill?</li><li>Do I need a bone density scan?</li></ul>
<h3>About the rest of my health</h3>
<ul><li>How much protein should I aim for, and should I see a dietitian?</li><li>Can you refer me to physical therapy or a strength program?</li><li>Which labs will we monitor, and how often?</li><li>Should my thyroid or other medication doses be rechecked as I lose weight?</li></ul>`,
    },
    {
      heading: "Can you get GLP-1s and HRT online?",
      body: `<p><strong>Yes. Licensed US telehealth services can prescribe HRT, and many also prescribe GLP-1 medicines after an online assessment, often with lab work. Check that the service uses licensed clinicians in your state, explains whether medicines are FDA-approved or compounded, and offers ongoing follow-up.</strong></p>
<h3>Menopause-focused telehealth</h3>
<p>The three menopause providers we review focus mainly on hormone therapy:</p>
<ul><li><strong>Winona</strong> offers estrogen and progesterone, including FDA-approved tablets, patches and progesterone capsules, plus compounded body creams. See our <a href="/reviews/winona">Winona review</a> and <a href="/articles/is-winona-legit">is Winona legit?</a></li><li><strong>Midi Health</strong> provides menopause care from clinicians, often billed through insurance, covering HRT and broader midlife health. See our <a href="/reviews/midi">Midi review</a> and <a href="/articles/is-midi-legit">is Midi Health legit?</a></li><li><strong>Gala</strong> offers menopause HRT and also runs a weight-loss program. As with any provider, ask whether a GLP-1 offered is a brand-name FDA-approved product or a compounded version before you sign up. See our <a href="/reviews/gala">Gala review</a> and <a href="/articles/is-gala-legit">is Gala legit?</a></li></ul>
<p>For a side-by-side view, see our <a href="/articles/best-online-hrt-providers-compared">comparison of online HRT providers</a> and <a href="/articles/how-to-get-hrt-online">how to get HRT online</a>.</p>
<h3>Red flags with online GLP-1 sellers</h3>
<ul><li>No clinician assessment or prescription required.</li><li>Prices that look too good to be true, or "research use only" products.</li><li>No clarity on which pharmacy dispenses the medicine.</li><li>Pressure to commit to long subscriptions before you've been assessed.</li><li>No access to a clinician for side effects.</li></ul>
<p>You can check a pharmacy's license through your state board of pharmacy, and the FDA's BeSafeRx resource explains how to spot unsafe online pharmacies.</p>`,
    },
    {
      heading: "Do GLP-1 medications reduce menopause belly fat?",
      body: `<p><strong>GLP-1 medicines reduce total body fat, including the deep visceral fat around the organs that tends to increase after menopause. They don't target the belly specifically, but because visceral fat is metabolically active, losing it is linked to better blood sugar, blood pressure and cholesterol.</strong></p>
<p>Many women describe the menopause change not as a big jump on the scale but as a shift in shape: a thicker waist and more fat around the middle, even at the same weight. This reflects lower estrogen and the relative rise in androgens, which push fat storage from hips and thighs toward the abdomen - a pattern documented in the ${ext(SRC.swan, "Study of Women's Health Across the Nation (SWAN)")}.</p>
<h3>What helps the waist specifically</h3>
<ul><li><strong>Overall fat loss</strong> - from a GLP-1, diet or both - reduces visceral fat.</li><li><strong>Exercise</strong>, especially a mix of aerobic and strength training, reduces visceral fat even with modest weight change.</li><li><strong>Sleep and alcohol</strong>: short sleep and heavy drinking are linked to more abdominal fat.</li><li><strong>Hormone therapy</strong> has been associated in some studies with less central fat accumulation, but it's not prescribed for this purpose.</li></ul>
<p>Measuring your waist (at the level of your belly button, after breathing out) is a useful way to track progress alongside weight.</p>`,
    },
    {
      heading: "Are GLP-1 medications safe after age 65?",
      body: `<p><strong>GLP-1 medicines are used in older adults, and trials included people over 65. But older women have higher risks from muscle and bone loss, dehydration, falls and interactions with other medicines, so slower titration, close follow-up and a strong focus on protein, strength and hydration are especially important.</strong></p>
<h3>Extra considerations over 65</h3>
<ul><li><strong>Sarcopenia and frailty:</strong> intentional weight loss is still beneficial for many older adults with obesity, but it should be combined with exercise to protect muscle and function.</li><li><strong>Dehydration:</strong> thirst sensation declines with age; vomiting or diarrhea can quickly lead to dehydration and kidney problems.</li><li><strong>Multiple medicines:</strong> blood pressure medicines may need adjusting as weight falls; diabetes medicines may need lowering to avoid low blood sugar.</li><li><strong>Falls:</strong> dizziness from dehydration or low blood pressure raises fall risk, and falls are especially dangerous with osteoporosis.</li><li><strong>Coverage:</strong> Medicare's 2026 GLP-1 Bridge has made access more realistic for many - see the Medicare section above.</li></ul>
<h3>HRT over 65</h3>
<p>Starting HRT for the first time after 65 is generally approached more cautiously because of age-related risks, though continuing it can be reasonable for some women after individual review. See our <a href="/articles/is-hrt-safe">HRT safety guide</a> and the 2025-2026 <a href="/articles/hrt-black-box-warning-removed">FDA label changes</a>.</p>`,
    },
    {
      heading: "Do GLP-1s or HRT affect breast cancer risk?",
      body: `<p><strong>Obesity after menopause is an established risk factor for breast cancer, so weight loss could plausibly lower risk, but whether GLP-1 medicines themselves change breast cancer risk isn't established and is still being studied. For HRT, combined estrogen plus progestogen is linked to a small increase in breast cancer risk with longer use, while estrogen alone (for women without a uterus) did not show an increase in the Women's Health Initiative trial.</strong></p>
<ul><li>After menopause, fat tissue is the main source of estrogen, which helps explain why higher body weight is linked to higher risk of hormone-receptor-positive breast cancer.</li><li>Observational studies on GLP-1s and cancer are ongoing; no firm conclusions can be drawn yet.</li><li>Women with a history of breast cancer generally aren't candidates for systemic HRT; decisions about GLP-1s for them should involve their oncology team.</li><li>Regular breast screening should continue regardless of treatment.</li></ul>
<p>Risk depends on personal and family history, so this is a conversation to have with your clinician, using absolute numbers rather than percentages alone. Our <a href="/articles/is-hrt-safe">HRT safety guide</a> explains the numbers in more detail.</p>`,
    },
    {
      heading: "Real-world scenarios: how women combine GLP-1s and HRT",
      body: `<p><strong>These are illustrative examples, not real patients or medical advice. They show how the factors in this guide can shape different decisions.</strong></p>
<h3>Scenario 1: Perimenopause, 46, night sweats and weight gain</h3>
<p>A woman with irregular periods, night sweats, poor sleep and a BMI of 31 with prediabetes. Her clinician suggests starting with an estrogen patch and a levonorgestrel IUD (providing both endometrial protection and contraception). Once sleep improves, they add a GLP-1. Because she has an IUD, the oral-contraceptive caution with tirzepatide isn't an issue.</p>
<h3>Scenario 2: Postmenopause, 54, already on HRT</h3>
<p>A woman on an estradiol patch and oral micronized progesterone for three years, with a BMI of 33, high blood pressure and knee pain. She starts the Wegovy pill because she dislikes injections. She plans her morning around the empty-stomach rule, takes progesterone at bedtime as before, and begins twice-weekly strength training with a physical therapist.</p>
<h3>Scenario 3: Age 67, osteopenia, on Medicare</h3>
<p>A woman with type 2 diabetes, osteopenia and a BMI of 34 who isn't on HRT. Her clinician focuses on a GLP-1 covered by her Part D plan for diabetes, a protein target, resistance and balance training, calcium and vitamin D, and a repeat bone density scan. Starting HRT for the first time is discussed but not pursued given her age and risk profile.</p>
<h3>Scenario 4: 51, family history of medullary thyroid cancer</h3>
<p>A woman whose sister had medullary thyroid carcinoma. GLP-1 receptor agonists are contraindicated for her. Her clinician discusses other weight-management options, and HRT for her hot flashes, which isn't affected by this history.</p>`,
    },
    {
      heading: "GLP-1s and menopause: myths vs facts",
      body: `<p><strong>The most common myths are that GLP-1s don't work after menopause, that HRT causes weight gain, that HRT is a weight-loss drug, and that compounded versions are the same as brand-name ones. The evidence says otherwise on all four.</strong></p>
<table><tr><th>Myth</th><th>Fact</th></tr><tr><td>GLP-1s don't work after menopause</td><td>They produce substantial weight loss in midlife and older women</td></tr><tr><td>HRT makes you gain weight</td><td>Studies haven't shown HRT causes weight gain on average; midlife weight gain happens with or without it</td></tr><tr><td>HRT is a weight-loss treatment</td><td>HRT treats menopause symptoms and prevents bone loss; it isn't prescribed for weight loss</td></tr><tr><td>You can't take a GLP-1 with HRT</td><td>They're commonly combined, and research suggests more weight loss with both</td></tr><tr><td>Compounded semaglutide is the same as Wegovy</td><td>Compounded versions aren't FDA-approved and may differ in ingredients and quality</td></tr><tr><td>All weight lost on a GLP-1 is fat</td><td>A meaningful share can be lean mass, which is why protein and strength training matter</td></tr><tr><td>You can stop once you reach your goal</td><td>Most people regain much of the weight after stopping</td></tr><tr><td>GLP-1 pills are much weaker than injections</td><td>The Wegovy pill's trial results were close to injectable Wegovy; Foundayo's were somewhat lower</td></tr><tr><td>GLP-1s treat hot flashes</td><td>They aren't approved or established for hot flashes; HRT is the most effective treatment</td></tr></table>`,
    },
    {
      heading: "GLP-1 and menopause glossary",
      body: `<p><strong>Key terms used in this guide, in plain language.</strong></p>
<ul><li><strong>GLP-1 (glucagon-like peptide-1):</strong> a gut hormone that helps regulate blood sugar, slows stomach emptying and signals fullness to the brain.</li><li><strong>GLP-1 receptor agonist:</strong> a medicine that mimics GLP-1, such as semaglutide.</li><li><strong>GIP:</strong> another gut hormone; tirzepatide acts on both GIP and GLP-1 receptors.</li><li><strong>Semaglutide:</strong> the active ingredient in Ozempic, Wegovy (injection and pill) and Rybelsus.</li><li><strong>Tirzepatide:</strong> the active ingredient in Mounjaro and Zepbound.</li><li><strong>Orforglipron:</strong> the active ingredient in Foundayo, a non-peptide GLP-1 pill.</li><li><strong>Titration:</strong> gradually increasing a dose to reduce side effects.</li><li><strong>Perimenopause:</strong> the years of changing hormones before the final period.</li><li><strong>Menopause:</strong> 12 months in a row without a period; postmenopause is the time after.</li><li><strong>HRT / MHT:</strong> hormone replacement therapy or menopausal hormone therapy - estrogen, with a progestogen if you have a uterus. See <a href="/articles/what-is-hrt">what is HRT?</a></li><li><strong>Transdermal:</strong> absorbed through the skin, as with a patch, gel or spray.</li><li><strong>Visceral fat:</strong> deep abdominal fat around the organs.</li><li><strong>Lean mass:</strong> everything that isn't fat, including muscle, organs, bone and water.</li><li><strong>Sarcopenia:</strong> age-related loss of muscle mass and strength.</li><li><strong>DXA scan:</strong> a low-dose X-ray that measures bone density (and can measure body composition).</li><li><strong>Compounded drug:</strong> a medicine mixed by a pharmacy for an individual patient; not FDA-approved.</li><li><strong>MTC and MEN 2:</strong> medullary thyroid carcinoma and multiple endocrine neoplasia type 2 - conditions that make GLP-1 receptor agonists unsuitable.</li></ul>`,
    },
    {
      heading: "What should you expect month by month on a GLP-1?",
      body: `<p><strong>Most people notice reduced appetite within the first weeks, have the most digestive side effects during dose increases in the first few months, see steady weight loss through the first year, and reach a plateau somewhere around 12 to 18 months. Individual experiences vary widely.</strong></p>
<table><tr><th>Period</th><th>What's typical</th><th>Focus for women in midlife</th></tr><tr><td>Weeks 1-4</td><td>Starting dose; appetite often drops; nausea or constipation possible</td><td>Set protein and fluid habits; start or keep strength training</td></tr><tr><td>Months 2-5</td><td>Dose increases every few weeks as tolerated; side effects may flare after each increase</td><td>Don't rush titration; contraception check if perimenopausal and on tirzepatide</td></tr><tr><td>Months 6-12</td><td>Steady weight loss on a maintenance dose; side effects often settle</td><td>Track waist and strength, not only weight; recheck labs as advised</td></tr><tr><td>Months 12-18</td><td>Weight loss slows and plateaus</td><td>Discuss long-term dose, bone health and maintenance plan</td></tr><tr><td>Beyond</td><td>Maintenance</td><td>Annual review of both the GLP-1 and HRT</td></tr></table>
<h3>How fast is too fast?</h3>
<p>There's no single safe speed, but faster loss generally means more muscle lost alongside fat and a higher risk of gallstones. Many clinicians are comfortable with steady loss and prefer slowing titration over pushing for speed, especially in older women. Feeling weak, dizzy or exhausted is a signal to review intake and dose.</p>`,
    },
    {
      heading: "What are the alternatives to GLP-1s for midlife weight gain?",
      body: `<p><strong>Alternatives include lifestyle programs focused on nutrition, strength training and sleep; other FDA-approved weight medicines such as phentermine-topiramate, naltrexone-bupropion and orlistat; and bariatric surgery for people who meet the criteria. HRT treats menopause symptoms and can make lifestyle changes easier but isn't a weight-loss treatment.</strong></p>
<table><tr><th>Option</th><th>Notes</th></tr><tr><td>Nutrition, activity and sleep changes</td><td>The foundation for everyone, with or without medicine; strength training is especially valuable after menopause</td></tr><tr><td>Phentermine-topiramate (Qsymia)</td><td>Oral; not suitable for some people with heart disease or certain other conditions; birth-defect risk requires contraception</td></tr><tr><td>Naltrexone-bupropion (Contrave)</td><td>Oral; can raise blood pressure; carries a boxed warning about suicidal thoughts</td></tr><tr><td>Orlistat (Xenical, Alli)</td><td>Reduces fat absorption; modest effect; digestive side effects</td></tr><tr><td>Metabolic and bariatric surgery</td><td>Largest and most durable weight loss; for people meeting BMI and health criteria; requires lifelong follow-up including bone health</td></tr><tr><td>Treating sleep problems</td><td>Night sweats, sleep apnea and insomnia all affect appetite and energy</td></tr></table>
<p>The best choice depends on your health, preferences, cost and access. A clinician experienced in obesity medicine can compare options with you.</p>`,
    },
    {
      heading: "Do GLP-1s help PCOS symptoms in perimenopause?",
      body: `<p><strong>GLP-1 medicines can help with weight and insulin resistance in women with polycystic ovary syndrome (PCOS), and weight loss may make cycles more regular - which can also increase the chance of pregnancy. They're not specifically approved for PCOS.</strong></p>
<p>PCOS doesn't simply disappear at menopause; the metabolic risks - insulin resistance, type 2 diabetes and heart disease - continue. Women with PCOS in their 40s often face overlapping perimenopause symptoms, irregular cycles and weight concerns, which can make it harder to tell what's causing what. If you have PCOS and are considering a GLP-1, discuss contraception, endometrial health (long gaps between periods can need evaluation) and long-term cardiometabolic monitoring with your clinician.</p>`,
    },
    {
      heading: "Can GLP-1 medications help joint pain in menopause?",
      body: `<p><strong>Joint aches are common in perimenopause and menopause, and excess weight adds load to knees and hips. In the STEP 9 trial, semaglutide 2.4 mg reduced knee osteoarthritis pain more than placebo in adults with obesity, largely alongside weight loss. GLP-1s aren't a treatment for menopausal joint pain itself.</strong></p>
<p>Many women are surprised by how much their joints ache in their late 40s and 50s. Estrogen affects cartilage, tendons and inflammation, and joint pain is one of the most frequently reported menopause symptoms. At the same time, osteoarthritis becomes more common with age, and every extra kilogram of body weight increases the force on the knees during walking.</p>
<h3>How the pieces fit</h3>
<ul><li><strong>Weight loss</strong> - from any method - reduces mechanical load and often improves knee pain and function.</li><li><strong>Strength training</strong> around the hips and knees supports joints and protects muscle during weight loss.</li><li><strong>Hormone therapy</strong> has been associated with less joint pain in some research, though it isn't prescribed specifically for joint pain.</li><li><strong>New, hot, swollen joints</strong> or morning stiffness lasting over an hour should be checked for inflammatory arthritis, which also often starts in midlife.</li></ul>
<p>Less pain can make exercise easier, and more exercise helps protect muscle - a helpful cycle when combining treatments.</p>`,
    },
    {
      heading: "Do GLP-1s help bladder leaks and pelvic floor symptoms?",
      body: `<p><strong>Weight loss is a proven way to reduce stress urinary incontinence - leaks when coughing, sneezing or exercising - in women with overweight or obesity. A GLP-1 can contribute through weight loss, but pelvic floor training remains first-line treatment, and vaginal estrogen helps genitourinary symptoms of menopause.</strong></p>
<p>Bladder leaks become more common in midlife because of childbirth history, lower estrogen in the tissues of the vagina and bladder, and extra abdominal pressure from weight. Randomized trials of lifestyle weight-loss programs have shown fewer incontinence episodes with modest weight loss.</p>
<ul><li><strong>Pelvic floor muscle training</strong>, ideally guided by a pelvic floor physical therapist, is the first-line treatment.</li><li><strong>Vaginal estrogen</strong> treats genitourinary syndrome of menopause - dryness, irritation, urgency and recurrent urinary infections - and is low-dose and local.</li><li><strong>Constipation from a GLP-1</strong> can strain the pelvic floor; managing it helps.</li><li><strong>Strength training</strong> should include breathing and pelvic floor awareness; a physical therapist can tailor exercises if you leak during lifting.</li></ul>`,
    },
    {
      heading: "Do GLP-1s help fatty liver disease after menopause?",
      body: `<p><strong>Yes, in some cases. Fatty liver disease (now called MASLD, or MASH when there's inflammation) becomes more common in women after menopause. Weight loss improves it, and in August 2025 the FDA granted accelerated approval to Wegovy for adults with MASH and moderate to advanced liver fibrosis, alongside diet and exercise.</strong></p>
<p>Before menopause, women have lower rates of fatty liver disease than men; after menopause the gap narrows, likely reflecting estrogen loss and the shift to visceral fat. Fatty liver often causes no symptoms and is picked up through blood tests or imaging.</p>
<ul><li>Ask whether your liver enzymes and a fibrosis risk score (such as FIB-4) should be checked if you have obesity, diabetes or high triglycerides.</li><li>Alcohol worsens fatty liver; cutting back is important.</li><li>If you have liver disease and are considering HRT, transdermal estrogen avoids first-pass liver metabolism; discuss options with your clinician.</li></ul>`,
    },
    {
      heading: "How we researched this guide",
      body: `<p><strong>This guide is based on FDA labeling and announcements, peer-reviewed research, Medicare.gov and manufacturer medical information, checked on October 26, 2026. We link to primary or authoritative sources wherever possible, label prices as reported figures, and say so when sources conflict.</strong></p>
<h3>Key sources</h3>
<ul><li>${ext(SRC.mayoSema, "Hormone therapy and semaglutide in postmenopausal women (Menopause, 2024) - Healio coverage")}</li><li>${ext(SRC.mayoTirz, "Mayo Clinic: hormone therapy and tirzepatide after menopause")}</li><li>${ext(SRC.tmsTirz, "AJMC: tirzepatide plus hormone therapy (Menopause Society 2025 presentation)")}</li><li>${ext(SRC.wegovyPill, "BioPharma Dive: FDA approves oral Wegovy")}</li><li>${ext(SRC.foundayo, "Drugs.com: Foundayo (orforglipron) FDA approval history")}</li><li>${ext(SRC.lillyOc, "Lilly Medical: Zepbound with oral contraceptives or HRT")}</li><li>${ext(SRC.fdaCompounding, "FDA: compounding policies as GLP-1 supply stabilizes")}</li><li>${ext(SRC.medicare, "Medicare.gov: weight loss drugs")}</li><li>${ext(SRC.swan, "SWAN: body composition across the menopause transition")}</li><li>${ext(SRC.leanMass, "Review: lean mass changes with GLP-1-based therapies")}</li><li>${ext(SRC.nams2022, "The Menopause Society: 2022 hormone therapy position statement")}</li></ul>
<h3>What we don't do</h3>
<ul><li>We don't recommend specific doses or tell anyone to start or stop a medicine.</li><li>We don't promote compounded GLP-1 products.</li><li>We don't invent statistics; trial numbers are averages from the named studies.</li></ul>
<p>Read our <a href="/medical-review-policy">medical review policy</a> and <a href="/how-we-rank">how we rank providers</a>. HRT Women earns affiliate commissions from some providers; this doesn't change our editorial conclusions.</p>`,
    },
    {
      heading: "The bottom line on GLP-1s and menopause",
      body: `<p><strong>GLP-1 medicines work for weight loss during and after menopause, and they can be taken alongside HRT - research suggests women on hormone therapy may lose more weight. But HRT and GLP-1s do different jobs, and midlife women need a plan that protects muscle and bone, considers contraception in perimenopause, avoids compounded products and accounts for long-term use.</strong></p>
<ul><li><strong>For menopause symptoms</strong> - hot flashes, night sweats, sleep, vaginal dryness - hormone therapy remains the most effective treatment for suitable women.</li><li><strong>For weight-related health</strong> - GLP-1s are the most effective medicines available, now including two pills.</li><li><strong>Together</strong>, they can be complementary, ideally started one at a time with a clinician who understands both.</li><li><strong>Protect your future self:</strong> protein, strength training, bone checks and a long-term plan matter as much as the prescription.</li><li><strong>Check prices and coverage</strong> directly with manufacturers, your insurer or Medicare.gov - they've changed rapidly and will likely change again.</li></ul>
<p>Ready to explore hormone therapy? Compare licensed providers in our <a href="/">online HRT comparison</a>, or start with our <a href="/articles/menopause-complete-guide">complete guide to menopause</a>.</p>
<p><em>This article is for general information and isn't medical advice. Talk to a licensed clinician about your own situation.</em></p>`,
    },
  ],
};
