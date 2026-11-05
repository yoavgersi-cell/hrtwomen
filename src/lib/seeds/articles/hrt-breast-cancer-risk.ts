import type { ArticleData } from "@/lib/config";

// Safety pillar: HRT and breast cancer risk, in absolute numbers. Facts
// checked 2026-11-05 against primary sources, linked inline: WHI estrogen
// plus progestin trial (JAMA 2002) and estrogen-alone trial (JAMA 2004);
// WHI 20-year follow-up (Chlebowski, JAMA 2020); Collaborative Group on
// Hormonal Factors in Breast Cancer meta-analysis (Lancet 2019); MHRA Drug
// Safety Update (Aug/Sep 2019); E3N cohort (Fournier, Breast Cancer Res
// Treat 2008); ACS Cancer Statistics 2026; Women's Health Concern risk
// leaflet (based on NICE NG23); USPSTF 2024 screening recommendation; FDA
// 2025-2026 labeling changes. Relative and absolute risks are labelled as
// such, and observational findings are called observational.

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const SRC = {
  lancet2019: "https://doi.org/10.1016/S0140-6736(19)31709-X",
  whi2002: "https://doi.org/10.1001/jama.288.3.321",
  whi2004: "https://doi.org/10.1001/jama.291.14.1701",
  whi2020: "https://doi.org/10.1001/jama.2020.9482",
  mhra: "https://www.gov.uk/drug-safety-update/hormone-replacement-therapy-hrt-further-information-on-the-known-increased-risk-of-breast-cancer-with-hrt-and-its-persistence-after-stopping",
  e3n: "https://link.springer.com/doi/10.1007/s10549-007-9523-x",
  acs: "https://www.cancer.org/cancer/types/breast-cancer/about/how-common-is-breast-cancer.html",
  whc: "https://themenopausedirectory.com/wp-content/uploads/2020/06/WHC-UnderstandingRisksofBreastCancer-MARCH2017-1.pdf",
  fdaLabels: "https://www.pharmacytimes.com/view/fda-approves-drug-labeling-changes-to-6-menopausal-hormone-therapy-products",
  fdaOct: "https://www.hhs.gov/press-room/fda-advances-menopause-care-hormone-therapy-labeling-access.html",
  uspstf: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening",
  nams2022: "https://doi.org/10.1097/GME.0000000000002028",
};

export const HRT_BREAST_CANCER_RISK: ArticleData = {
  slug: "hrt-breast-cancer-risk",
  title: "HRT and Breast Cancer Risk (2026): The Real Numbers",
  description:
    "Does HRT cause breast cancer? The absolute numbers from the WHI trials and the 2019 Lancet meta-analysis, estrogen-only vs combined HRT, progesterone type, how long is safe, family history, mammograms and what the FDA's 2026 label change did and didn't change.",
  category: "Safety",
  readTime: "30 min read",
  publishedAt: "2026-11-05",
  updatedAt: "2026-11-05",
  heroColor: "#FDEEF3",
  author: "HRT Women Editorial Team",
  takeawaysTitle: "⚡ Key takeaways & quick verdict",
  keyTakeaways: [
    "Combined HRT (estrogen plus a progestogen) slightly raises breast cancer risk with longer use. In the 2019 Lancet meta-analysis, five years of daily combined HRT from age 50 led to about one extra breast cancer for every 50 users over the following 20 years.",
    "Estrogen alone - used by women without a uterus - carries far less risk: about one extra case per 200 users in the Lancet analysis, and fewer breast cancers and breast cancer deaths than placebo in the WHI randomized trial.",
    "Low-dose vaginal estrogen has not been linked to higher breast cancer risk.",
    "The FDA removed breast cancer from HRT's boxed warning in 2025-2026, but the risk is still described in the label. The honest summary: a real but small increase, mostly tied to combined therapy and duration - smaller than the risk linked to obesity in most comparisons.",
  ],
  sections: [
    {
      heading: "Does HRT cause breast cancer?",
      body: `<p><strong>HRT doesn't cause most breast cancers, but combined HRT - estrogen with a progestogen - slightly increases the chance of being diagnosed, and the increase grows the longer it's used. Estrogen-only HRT carries little or no added risk, and low-dose vaginal estrogen carries none that studies have detected.</strong></p>
<p>Breast cancer is the reason many women never start hormone therapy, and the reason many stop it early. That fear is understandable. For two decades it was printed in a black box on every package. But fear is a poor guide to a decision, and "HRT causes breast cancer" is too blunt to be useful. Which hormones, for how long, starting when, and compared with what? Those details change the answer by a factor of ten.</p>
<p>This guide gives you the numbers, in absolute terms, from the two bodies of evidence that matter most: the Women's Health Initiative randomized trials and the 2019 Lancet meta-analysis of 58 studies. We explain what each one can and can't tell you, where they disagree, and how to use them in a real conversation with your clinician.</p>
<h3>HRT and breast cancer at a glance</h3>
<table><tr><th>Type of HRT</th><th>Effect on breast cancer risk</th><th>Strength of evidence</th></tr><tr><td>Estrogen + progestogen (combined), daily</td><td>Small increase that grows with duration</td><td>Randomized trial and large meta-analysis</td></tr><tr><td>Estrogen + progestogen, cyclical</td><td>Small increase, somewhat lower than daily combined</td><td>Meta-analysis (observational)</td></tr><tr><td>Estrogen alone (no uterus)</td><td>Little or no increase; fewer cases than placebo in the WHI trial</td><td>Randomized trial and meta-analysis disagree on direction; both show low risk</td></tr><tr><td>Estrogen + micronized progesterone</td><td>Possibly lower than with synthetic progestins</td><td>Observational only</td></tr><tr><td>Low-dose vaginal estrogen</td><td>No increase detected</td><td>Meta-analysis and cohort studies</td></tr></table>`,
    },
    {
      heading: "Why is HRT and breast cancer in the news in 2026?",
      body: `<p><strong>Because the FDA changed the label. In November 2025 it asked manufacturers to remove breast cancer, heart disease and dementia from the boxed warning on menopausal hormone therapy. It approved the first six updated labels on February 12, 2026, and three more estradiol patches on October 30, 2026. The breast cancer information stays in the label's warnings section - it moved out of the box, not out of the label.</strong></p>
<p>The change followed an FDA expert panel in July 2025 and a review of the evidence (${ext(SRC.fdaLabels, "Pharmacy Times on the February 2026 labels")}; ${ext(SRC.fdaOct, "HHS on the October 2026 approvals")}). For many women, the most visible effect is that the scariest words on the leaflet are gone. That's prompting a fair question: was the risk overstated all along, or has something been quietly downplayed?</p>
<p>The answer is a bit of both. The original 2002 headlines lumped every woman and every type of hormone together and reported relative risks without context, which overstated the danger for most women. But the risk with combined HRT is real, it is measurable, and it should be part of the decision. Our full explainer on the label change is <a href="/articles/hrt-black-box-warning-removed">HRT's black box warning removed</a>.</p>`,
    },
    {
      heading: "What is a woman's breast cancer risk without HRT?",
      body: `<p><strong>About 1 in 8 US women will be diagnosed with invasive breast cancer in her lifetime. The American Cancer Society estimates about 321,910 new cases of invasive breast cancer in US women in 2026. Any extra risk from HRT sits on top of this baseline, which rises with age.</strong></p>
<p>Starting with the baseline matters, because an increase only means something when you know what it's increasing. According to the ${ext(SRC.acs, "American Cancer Society")}:</p>
<table><tr><th>Measure (US, 2026 estimates)</th><th>Figure</th></tr><tr><td>Lifetime risk of invasive breast cancer</td><td>About 1 in 8 women (roughly 13%)</td></tr><tr><td>New invasive breast cancers in women</td><td>About 321,910</td></tr><tr><td>New ductal carcinoma in situ (DCIS) cases</td><td>About 60,730</td></tr><tr><td>Breast cancer deaths in women</td><td>About 42,140</td></tr></table>
<p>In the 2019 Lancet analysis, women in high-income countries who never used HRT had about a 6.3% chance of being diagnosed with breast cancer between ages 50 and 69. Keep that 6.3 in mind - it's the number the HRT figures below are compared with.</p>`,
    },
    {
      heading: "What did the Women's Health Initiative actually find?",
      body: `<p><strong>The WHI ran two randomized trials. In the combined trial (estrogen plus a synthetic progestin), women on hormones had about 8 more invasive breast cancers per 10,000 women per year than women on placebo. In the estrogen-alone trial (women without a uterus), the hormone group had fewer breast cancers than placebo - and after 20 years of follow-up, fewer breast cancer deaths.</strong></p>
<p>The WHI is the only large randomized trial of HRT and breast cancer, which is why it carries so much weight. Randomization means the hormone and placebo groups were alike in every other way, so differences can be attributed to the hormones themselves.</p>
<table><tr><th>WHI trial</th><th>Hormones</th><th>Breast cancer finding</th><th>Source</th></tr><tr><td>Combined, stopped 2002</td><td>Conjugated equine estrogens + medroxyprogesterone acetate</td><td>Higher risk: about 38 vs 30 invasive cases per 10,000 women per year (hazard ratio about 1.26)</td><td>${ext(SRC.whi2002, "JAMA 2002")}</td></tr><tr><td>Estrogen alone, stopped 2004</td><td>Conjugated equine estrogens</td><td>Fewer cases than placebo during the trial (not statistically significant at the time)</td><td>${ext(SRC.whi2004, "JAMA 2004")}</td></tr><tr><td>20-year follow-up, combined</td><td>As above</td><td>More breast cancers: 0.45% vs 0.36% per year (HR 1.28); breast cancer deaths not significantly different (HR 1.35, 95% CI 0.94-1.95)</td><td>${ext(SRC.whi2020, "JAMA 2020")}</td></tr><tr><td>20-year follow-up, estrogen alone</td><td>As above</td><td>Fewer breast cancers: 0.30% vs 0.37% per year (HR 0.78); fewer breast cancer deaths: 30 vs 46 (HR 0.60)</td><td>${ext(SRC.whi2020, "JAMA 2020")}</td></tr></table>
<h3>What the WHI can't tell you</h3>
<ul><li><strong>The hormones are older types.</strong> Most women today use estradiol and, if they need it, micronized progesterone - not conjugated equine estrogens and medroxyprogesterone acetate.</li><li><strong>Participants were older.</strong> The average age at enrollment was 63, about a decade past the typical start of menopause.</li><li><strong>Route:</strong> everyone took pills; patches and gels weren't studied.</li></ul>
<p>Even with those limits, the WHI's two-trial design gives one of the clearest findings in this field: the progestogen component, not estrogen alone, drives most of the excess breast cancer risk.</p>`,
    },
    {
      heading: "What did the 2019 Lancet study find about HRT and breast cancer?",
      body: `<p><strong>The 2019 Lancet meta-analysis pooled 58 studies including more than 100,000 women with breast cancer. For women of average weight who used HRT for five years starting at age 50, it estimated one extra breast cancer between ages 50 and 69 for every 50 users of daily combined HRT, every 70 users of cyclical combined HRT, and every 200 users of estrogen-only HRT. Vaginal estrogen showed no increase.</strong></p>
<p>The ${ext(SRC.lancet2019, "Collaborative Group on Hormonal Factors in Breast Cancer")} reanalysed individual data from 58 epidemiological studies worldwide, with 143,887 women with invasive breast cancer and 424,972 without. It is the largest analysis ever done on this question, and it prompted the UK medicines regulator to issue new guidance (${ext(SRC.mhra, "MHRA Drug Safety Update")}).</p>
<table><tr><th>5 years of HRT from age 50 (average-weight women)</th><th>Breast cancers per 100 women, ages 50-69</th><th>Extra cases</th></tr><tr><td>Never used HRT</td><td>6.3</td><td>-</td></tr><tr><td>Estrogen only</td><td>about 6.8</td><td>about 1 in 200 users</td></tr><tr><td>Estrogen + progestogen on some days of the month (cyclical)</td><td>about 7.7</td><td>about 1 in 70 users</td></tr><tr><td>Estrogen + progestogen every day (continuous)</td><td>about 8.3</td><td>about 1 in 50 users</td></tr><tr><td>Low-dose vaginal estrogen</td><td>No increase detected</td><td>-</td></tr></table>
<p>The study also found that:</p>
<ul><li><strong>Risk rose with duration.</strong> Ten years of use carried roughly twice the excess risk of five years.</li><li><strong>Some excess risk persisted for more than 10 years</strong> after stopping, although it fell after use ended.</li><li><strong>Relative risks were similar whether women started in their 40s or 50s.</strong></li><li><strong>Tablets and patches showed similar risks.</strong></li></ul>
<h3>Why the Lancet and WHI disagree on estrogen alone</h3>
<p>The Lancet analysis found a small increase with estrogen alone; the WHI randomized trial found a decrease. The most likely reasons are design (observational studies can't fully separate the effect of hormones from the kind of women who choose to take them), the type of estrogen (WHI used conjugated equine estrogens), and the timing of start. Either way, both sources agree that estrogen-only risk is small - and much smaller than the risk with combined therapy.</p>`,
    },
    {
      heading: "What is the difference between relative and absolute risk?",
      body: `<p><strong>Relative risk tells you how much a risk changes in percentage terms; absolute risk tells you how many people are actually affected. "HRT raises breast cancer risk by 30%" and "HRT causes about 2 extra cases per 100 women over 20 years" can describe the same data. For decisions, absolute risk is the number that matters.</strong></p>
<p>A worked example using the Lancet figures:</p>
<table><tr><th></th><th>No HRT</th><th>5 years of daily combined HRT from 50</th></tr><tr><td>Women diagnosed with breast cancer by 69, out of 100</td><td>6.3</td><td>8.3</td></tr><tr><td>Women not diagnosed, out of 100</td><td>93.7</td><td>91.7</td></tr><tr><td>Relative increase</td><td colspan="2">About 30% (8.3 / 6.3)</td></tr><tr><td>Absolute increase</td><td colspan="2">About 2 extra cases per 100 women</td></tr></table>
<p>Both numbers are true. The relative figure sounds alarming; the absolute one shows the scale. When a headline gives you only a percentage increase, ask "out of how many?"</p>
<h3>Different studies, different frames</h3>
<p>You'll see numbers expressed per 10,000 women per year (WHI), per 100 women over 20 years (Lancet), or per 1,000 women over 5 years (UK patient leaflets). They aren't directly comparable, so compare within one source rather than mixing them.</p>`,
    },
    {
      heading: "Is estrogen-only HRT safer for the breast than combined HRT?",
      body: `<p><strong>Yes. Across both the WHI trials and the Lancet meta-analysis, estrogen-only HRT carries much less breast cancer risk than estrogen combined with a progestogen. But estrogen-only HRT is only appropriate for women who have had a hysterectomy - with a uterus, estrogen alone raises the risk of endometrial cancer.</strong></p>
<p>This is the single most important distinction in the whole topic. If you've had a hysterectomy, your breast cancer picture on HRT is very different from that of a woman taking combined therapy. If you still have a uterus, you need a progestogen to protect the uterine lining - and the choice of progestogen may matter (next section).</p>
<p>The ${ext(SRC.nams2022, "Menopause Society's 2022 position statement")} notes that estrogen alone has a more favorable breast profile, while combined therapy's risk appears to rise after about three to five years of use.</p>`,
    },
    {
      heading: "Does the type of progesterone affect breast cancer risk?",
      body: `<p><strong>Possibly. In the large French E3N cohort, women using estrogen with micronized progesterone had no increase in breast cancer risk (relative risk 1.00), while those using estrogen with synthetic progestins had a 69% higher relative risk (1.69). These findings are observational, so they suggest - but don't prove - that micronized progesterone is gentler on the breast.</strong></p>
<table><tr><th>Regimen in E3N (2008 analysis)</th><th>Relative risk of breast cancer vs never-users</th></tr><tr><td>Estrogen + micronized progesterone</td><td>1.00 (0.83-1.22)</td></tr><tr><td>Estrogen + dydrogesterone</td><td>1.16 (0.94-1.43)</td></tr><tr><td>Estrogen + other synthetic progestins</td><td>1.69 (1.50-1.91)</td></tr></table>
<p>Source: ${ext(SRC.e3n, "Fournier et al., Breast Cancer Research and Treatment, 2008")}. Most participants used progesterone for relatively short durations, and some later analyses suggest the advantage may narrow with longer use, so it isn't a free pass.</p>
<p>In practice, micronized progesterone (Prometrium and generics) is the most commonly prescribed progestogen in US menopause care today, and many clinicians prefer it partly for this reason. A levonorgestrel IUD is another option for protecting the uterus; its breast data are mixed. Our <a href="/articles/progesterone-side-effects">progesterone guide</a> covers the choices in detail.</p>`,
    },
    {
      heading: "Do HRT patches carry less breast cancer risk than pills?",
      body: `<p><strong>No clear difference has been shown. The 2019 Lancet analysis found similar breast cancer risks for oral and transdermal estrogen. Patches and gels do have a real advantage for blood clots and stroke, but not, as far as current evidence shows, for the breast.</strong></p>
<p>This is a common misunderstanding. Transdermal estrogen bypasses the liver, which is why it carries a lower risk of clots than pills. But breast tissue responds to circulating estrogen whichever way it gets into the blood. If breast cancer risk is your main concern, the more important choices are whether you need a progestogen, which one, and for how long - see <a href="/articles/estrogen-patch-vs-pill">estrogen patch vs pill</a> for the full comparison.</p>`,
    },
    {
      heading: "Does vaginal estrogen increase breast cancer risk?",
      body: `<p><strong>No increase has been found. Low-dose vaginal estrogen - creams, tablets and rings used for dryness, painful sex and urinary symptoms - wasn't associated with higher breast cancer risk in the Lancet meta-analysis or in large cohort studies, and the UK regulator says low-dose vaginal estrogens do not appear to increase risk.</strong></p>
<p>Very little estrogen reaches the bloodstream at low vaginal doses. That's why medical societies welcomed removing the boxed warning from these products in particular. Women with a history of breast cancer are a special case and should involve their oncologist; see our <a href="/articles/vaginal-estrogen">vaginal estrogen guide</a>.</p>`,
    },
    {
      heading: "How long can you take HRT before breast cancer risk goes up?",
      body: `<p><strong>There's no safe-or-unsafe cutoff. With combined HRT, the excess risk is small in the first few years and grows the longer it's used - the Lancet analysis estimated roughly twice the excess risk for ten years of use as for five. With estrogen alone, the increase over time is much smaller. Guidelines don't set a mandatory stop date; they recommend reviewing the decision at least once a year.</strong></p>
<table><tr><th>Duration of daily combined HRT from age 50</th><th>Approximate extra breast cancers by age 69 (Lancet 2019)</th></tr><tr><td>Under 1 year</td><td>Little or no excess</td></tr><tr><td>5 years</td><td>About 1 in 50 users</td></tr><tr><td>10 years</td><td>Roughly double the 5-year excess</td></tr></table>
<p>The Menopause Society does not recommend routinely stopping HRT at a particular age, such as 60 or 65. Duration is a personal decision that weighs ongoing symptoms, bone health and individual risk. Some women choose the lowest effective dose; others switch to estrogen-only where possible (after hysterectomy) or to non-hormonal options for hot flashes. See <a href="/articles/is-hrt-safe">is HRT safe?</a> for the other risks and benefits in the balance.</p>`,
    },
    {
      heading: "What happens to breast cancer risk after stopping HRT?",
      body: `<p><strong>Risk falls after stopping, but according to the 2019 Lancet analysis some of the excess persists for more than 10 years in women who used HRT for longer than a year. That persistence is one reason the Lancet figures were higher than earlier estimates.</strong></p>
<p>This finding surprised many clinicians when it was published, because earlier studies suggested the excess disappeared within about five years of stopping. It's based on observational data and remains debated, but it's the reason regulators asked prescribers to explain to women that some risk can outlast use. It doesn't mean stopping is pointless - risk is still lower after stopping than during continued use.</p>
<p>Stopping HRT can also bring hot flashes back for about half of women. If that happens, non-hormonal treatments are an option; see <a href="/articles/hot-flashes-treatment">how to stop hot flashes</a>.</p>`,
    },
    {
      heading: "Does starting HRT in your 40s or 50s change breast cancer risk?",
      body: `<p><strong>The Lancet analysis found similar relative risks whether women started HRT at 40-44, 45-49, 50-54 or 55-59. But the absolute numbers depend on the background risk, which rises with age. Women with early or premature menopause are different: replacing hormones until the average age of menopause isn't thought to raise breast cancer risk above that of women who go through menopause naturally around 51.</strong></p>
<p>For women whose periods stop before 40 (premature ovarian insufficiency) or before 45, hormone therapy is generally recommended until around the natural age of menopause, both for symptoms and to protect bones and the heart. The breast cancer data from older women don't straightforwardly apply to them, because they're replacing hormones their bodies would otherwise still be making.</p>`,
    },
    {
      heading: "How does HRT compare with other breast cancer risk factors?",
      body: `<p><strong>For most women, combined HRT's added risk is in the same range as drinking two or more alcoholic drinks a day and smaller than the risk linked to obesity after menopause. Regular exercise lowers risk by a similar amount.</strong></p>
<p>The UK charity Women's Health Concern, using figures from NICE menopause guidance, illustrates this for women aged 50 to 59 over five years (${ext(SRC.whc, "WHC risk leaflet")}):</p>
<table><tr><th>Factor (women aged 50-59, over about 5 years)</th><th>Change in breast cancer cases per 1,000 women</th></tr><tr><td>Overweight or obese (BMI 30 or more)</td><td>About 24 extra</td></tr><tr><td>Drinking 2 or more units of alcohol a day</td><td>About 5 extra</td></tr><tr><td>At least 2.5 hours of moderate exercise a week</td><td>About 7 fewer</td></tr></table>
<p>For HRT itself, use the Lancet and WHI figures above. Because these sources use different time frames, the comparison is illustrative rather than exact - but the point holds: HRT is one modest factor among several, and some of the larger ones are within your control.</p>
<h3>Other established risk factors</h3>
<ul><li>Age (the biggest single factor)</li><li>Inherited mutations such as BRCA1 and BRCA2</li><li>Family history of breast or ovarian cancer</li><li>Dense breast tissue on mammogram</li><li>Previous chest radiation</li><li>Early first period, late menopause, no pregnancies or a first pregnancy after 30</li></ul>`,
    },
    {
      heading: "Can you take HRT with a family history of breast cancer?",
      body: `<p><strong>Often, yes. A family history of breast cancer is not by itself a reason to avoid HRT, according to major menopause societies. It does raise your baseline risk, so the decision deserves a careful conversation - and women with BRCA mutations or very strong family histories should involve a genetics or high-risk breast specialist.</strong></p>
<ul><li><strong>One relative diagnosed after 50:</strong> generally a modest increase in baseline risk; HRT is usually still an option.</li><li><strong>Several relatives, relatives diagnosed young, or ovarian cancer in the family:</strong> consider genetic counseling and a formal risk assessment first.</li><li><strong>BRCA carriers who have had their ovaries removed before natural menopause:</strong> observational studies suggest short-term HRT until around the average age of menopause doesn't appear to raise breast cancer risk meaningfully, and it protects bones and the heart. This is a specialist decision.</li></ul>`,
    },
    {
      heading: "Should you have mammograms while taking HRT?",
      body: `<p><strong>Yes. Keep up with routine screening. The US Preventive Services Task Force recommends mammograms every two years for women aged 40 to 74. Combined HRT can make breast tissue denser on mammograms, which can make them slightly harder to read and lead to more callbacks.</strong></p>
<ul><li>Tell the imaging center you're on HRT.</li><li>Since September 2024, US mammography reports must tell you whether your breasts are dense; if they are, ask whether additional imaging makes sense for you.</li><li>New lumps, skin changes, nipple discharge or a change in breast shape should be checked promptly whether or not you use HRT.</li></ul>
<p>Source: ${ext(SRC.uspstf, "USPSTF breast cancer screening recommendation (2024)")}.</p>`,
    },
    {
      heading: "Can breast cancer survivors take HRT?",
      body: `<p><strong>Systemic HRT is generally not recommended after breast cancer. The randomized HABITS trial was stopped early (results published in 2004) after women with a history of breast cancer who took HRT had more recurrences. Non-hormonal treatments are the usual first choice; low-dose vaginal estrogen may be considered for severe vaginal symptoms with the oncology team's agreement.</strong></p>
<p>Good options exist for survivors. For hot flashes: SNRIs such as venlafaxine, gabapentin, CBT, clinical hypnosis and - with oncology input - newer non-hormonal drugs. Women taking tamoxifen should avoid paroxetine and fluoxetine, which interfere with tamoxifen. See <a href="/articles/hot-flashes-treatment">hot flash treatments ranked</a> and the breast cancer section of our <a href="/articles/vaginal-estrogen">vaginal estrogen guide</a>.</p>`,
    },
    {
      heading: "Does HRT increase the risk of dying from breast cancer?",
      body: `<p><strong>The best randomized evidence says no for estrogen alone - the WHI found fewer breast cancer deaths with estrogen alone than placebo after 20 years (30 vs 46 deaths). For combined therapy, the WHI found more diagnoses but no statistically significant difference in breast cancer deaths over 20 years.</strong></p>
<p>Being diagnosed and dying from breast cancer are different outcomes, and studies that only count diagnoses can't tell you about the second. Breast cancer mortality has fallen substantially in the US over recent decades thanks to screening and better treatment, which also affects how these numbers play out today. For the full WHI picture, including heart disease and other outcomes, see <a href="/articles/is-hrt-safe">is HRT safe?</a></p>`,
    },
    {
      heading: "Are bioidentical or compounded hormones safer for the breast?",
      body: `<p><strong>There's no evidence that compounded "bioidentical" hormones are safer for the breast than FDA-approved products. FDA-approved estradiol and micronized progesterone are themselves bioidentical. Compounded creams and pellets haven't been studied for breast safety, and pellets can produce hormone levels well above the normal range.</strong></p>
<p>Some clinics market compounded hormones as "natural" and therefore lower-risk. Estradiol is estradiol, whatever the pharmacy. The difference with compounded products is uncertainty: doses vary more, and there's no safety data. If breast cancer risk is a concern, an FDA-approved regimen with a known dose is the more conservative choice. See <a href="/articles/bioidentical-hormones-explained">bioidentical hormones explained</a>.</p>`,
    },
    {
      heading: "What do the numbers mean for real women? Three examples",
      body: `<p><strong>These illustrative examples apply the published averages to three common situations. They're not personal risk predictions - your clinician can estimate your own baseline using validated tools.</strong></p>
<table><tr><th></th><th>Example A</th><th>Example B</th><th>Example C</th></tr><tr><td>Situation</td><td>Age 51, hysterectomy, severe hot flashes</td><td>Age 52, has uterus, hot flashes and poor sleep</td><td>Age 50, has uterus, mother had breast cancer at 72</td></tr><tr><td>Likely regimen</td><td>Estradiol alone (patch or pill)</td><td>Estradiol + micronized progesterone</td><td>Estradiol + micronized progesterone, or non-hormonal options</td></tr><tr><td>Breast evidence that applies</td><td>Estrogen alone: about 1 extra case per 200 users over 5 years (Lancet); fewer cases than placebo in the WHI</td><td>Combined: about 1 extra case per 50 users over 5 years with daily progestogen (Lancet); possibly lower with micronized progesterone (E3N, observational)</td><td>Same as B, applied to a somewhat higher baseline</td></tr><tr><td>Practical approach</td><td>Breast risk is a minor factor; decision mostly about symptoms and other health</td><td>Reasonable for symptom relief; review yearly, aim for the lowest effective dose and duration</td><td>A family history after 70 is usually only a modest increase; a careful discussion and regular screening, with genetic counseling if more relatives are affected</td></tr></table>`,
    },
    {
      heading: "What kind of breast cancer is linked to HRT?",
      body: `<p><strong>The extra breast cancers linked to HRT are mainly hormone-receptor-positive (estrogen-receptor-positive) tumors, which generally respond well to treatment. Combined HRT has also been linked to lobular breast cancer, a type that can be harder to see on mammograms.</strong></p>
<p>The Lancet analysis found the excess risk was concentrated in estrogen-receptor-positive cancers. That fits the biology: these tumors grow in response to hormones. It also explains why women with a history of hormone-receptor-positive breast cancer are generally advised against systemic HRT. Knowing the tumor type doesn't make a diagnosis less serious, but it is part of why breast cancer deaths in the WHI weren't significantly increased with combined therapy.</p>`,
    },
    {
      heading: "Does HRT affect the risk of other cancers?",
      body: `<p><strong>Yes, in different directions. Estrogen without a progestogen raises endometrial (uterine) cancer risk in women with a uterus, which is why combined therapy exists. Ovarian cancer risk may rise slightly with use. Colorectal cancer was less common with combined HRT in the WHI.</strong></p>
<table><tr><th>Cancer</th><th>Effect of HRT</th></tr><tr><td>Endometrial (uterine)</td><td>Increased with estrogen alone in women with a uterus; prevented by an adequate progestogen</td></tr><tr><td>Breast</td><td>Small increase with combined HRT; little or none with estrogen alone</td></tr><tr><td>Ovarian</td><td>Possible small increase in observational studies</td></tr><tr><td>Colorectal</td><td>Lower with combined HRT in the WHI</td></tr></table>
<p>This is why any bleeding after menopause, or unexpected bleeding on HRT, should be checked. More on the whole risk-benefit picture is in <a href="/articles/is-hrt-safe">is HRT safe?</a></p>`,
    },
    {
      heading: "Why did the 2002 WHI headlines scare so many women?",
      body: `<p><strong>Because the first results were reported mainly as a relative increase - about 26% more breast cancer - without the absolute numbers, and applied to every woman and every hormone. In absolute terms, the difference was about 8 extra cases per 10,000 women per year, in older women using one specific combination.</strong></p>
<p>After July 2002, HRT use in the US fell sharply, and for many years women and clinicians avoided it even for severe symptoms. Later analyses showed that the trial's average participant was 63, that estrogen alone behaved differently, and that the overall balance looks more favorable for healthy women who start near menopause. The breast cancer finding for combined therapy has held up; the way it was communicated is what changed. Our full history is in <a href="/articles/hrt-black-box-warning-removed">the black box warning guide</a>.</p>`,
    },
    {
      heading: "Is breast tenderness on HRT a sign of breast cancer?",
      body: `<p><strong>Usually not. Breast tenderness or swelling is a common side effect when starting HRT or changing dose, especially in the first few months, and it often settles. It isn't a known early sign of breast cancer. A new lump, skin dimpling, nipple changes or tenderness in one specific spot that doesn't go away should be checked.</strong></p>
<p>If tenderness persists, clinicians often lower the estrogen dose or change the progestogen. Report it rather than stopping on your own - there's usually a simple adjustment.</p>`,
    },
    {
      heading: "What exactly did the FDA change about breast cancer on HRT labels?",
      body: `<p><strong>The FDA removed the breast cancer statement from the boxed warning - the most prominent warning on a drug label - on menopausal hormone therapy products. It did not remove breast cancer information from the label: it remains in the warnings and precautions section. Systemic estrogen-only products keep a boxed warning about endometrial cancer.</strong></p>
<table><tr><th>Before</th><th>After (2026 labels)</th></tr><tr><td>Boxed warning listed breast cancer, cardiovascular disease and probable dementia, based largely on WHI results in older women</td><td>Those three removed from the box; breast cancer described in the warnings section with context</td></tr><tr><td>Same boxed language on low-dose vaginal products</td><td>Boxed language removed; medical societies singled this out as overdue</td></tr><tr><td>Endometrial cancer boxed warning for estrogen alone</td><td>Unchanged</td></tr></table>
<p>Labels are being updated product by product; the first six were approved on February 12, 2026, and three more estradiol patches on October 30, 2026. Not every product's leaflet will look the same yet.</p>`,
    },
    {
      heading: "How can you lower your breast cancer risk if you take HRT?",
      body: `<p><strong>Use the lowest dose that controls your symptoms, use estrogen alone if you've had a hysterectomy, consider micronized progesterone if you need a progestogen, review the decision every year, keep up with mammograms, and work on the lifestyle factors that affect breast cancer risk at least as much as HRT does.</strong></p>
<ol><li><strong>Match the regimen to your body:</strong> no uterus, no progestogen needed.</li><li><strong>Discuss the progestogen:</strong> micronized progesterone, or a levonorgestrel IUD in some cases.</li><li><strong>Use the lowest effective dose,</strong> and don't increase it for marginal benefit.</li><li><strong>Review yearly:</strong> symptoms, bone health and risk change over time.</li><li><strong>Screen:</strong> mammograms every two years from 40 to 74, more often if advised.</li><li><strong>Limit alcohol:</strong> regular drinking raises breast cancer risk independently of HRT.</li><li><strong>Stay active and manage weight:</strong> post-menopausal obesity is one of the larger modifiable risk factors.</li><li><strong>Know your family history,</strong> and ask about genetic counseling if it's strong.</li></ol>`,
    },
    {
      heading: "Who should not take HRT because of breast cancer risk?",
      body: `<p><strong>Systemic HRT is generally avoided by women who have had breast cancer or another estrogen-sensitive cancer, and approached with specialist input by women at very high inherited risk. For most other women, breast cancer risk is one factor to weigh, not an automatic reason to say no.</strong></p>
<ul><li><strong>Generally avoid systemic HRT:</strong> personal history of breast cancer; current suspected breast cancer.</li><li><strong>Specialist input first:</strong> BRCA1/2 or other high-risk mutations (unless after risk-reducing surgery, as above), very strong family history, prior atypical hyperplasia or lobular carcinoma in situ.</li><li><strong>Weigh carefully:</strong> long planned duration of combined therapy, starting HRT for the first time after 60, high breast density with other risk factors.</li></ul>
<p>Women who can't take HRT have effective alternatives for hot flashes and vaginal symptoms - see <a href="/articles/hot-flashes-treatment">every hot flash treatment ranked</a>.</p>`,
    },
    {
      heading: "What should you ask your doctor about HRT and breast cancer?",
      body: `<p><strong>Ask what your personal baseline risk is, how much a specific HRT regimen would change it in absolute numbers, whether you need a progestogen and which one, how long you're likely to use it, and what screening you need.</strong></p>
<ul><li>What is my estimated breast cancer risk without HRT, given my age and family history?</li><li>How would this regimen change that, in actual numbers?</li><li>Do I need a progestogen? Would micronized progesterone or an IUD suit me?</li><li>What's the lowest dose likely to work for my symptoms?</li><li>How often will we review this, and what would make you suggest stopping?</li><li>Are my breasts dense, and do I need extra imaging?</li><li>Should I see a genetic counselor?</li></ul>
<p>If you'd like to talk this through with a menopause clinician online, compare providers in our <a href="/articles/best-online-hrt-providers-compared">online HRT comparison</a>.</p>`,
    },
    {
      heading: "HRT and breast cancer: myths vs facts",
      body: `<table><tr><th>Myth</th><th>Fact</th></tr><tr><td>HRT causes breast cancer in most women who take it</td><td>Most women who use HRT never develop breast cancer; combined HRT adds about 2 cases per 100 women over 20 years after 5 years of use</td></tr><tr><td>All HRT carries the same risk</td><td>Combined HRT carries more risk than estrogen alone; vaginal estrogen shows none</td></tr><tr><td>The FDA said HRT doesn't affect breast cancer</td><td>The FDA moved the warning out of the box; the risk is still described in the label</td></tr><tr><td>Patches are safer for the breast than pills</td><td>Patches are safer for clots; breast risk looks similar</td></tr><tr><td>Bioidentical compounded hormones are safer</td><td>No evidence; FDA-approved estradiol and progesterone are already bioidentical</td></tr><tr><td>Any family history rules out HRT</td><td>Family history alone usually doesn't; very high inherited risk needs specialist advice</td></tr><tr><td>Risk disappears the moment you stop</td><td>Risk falls after stopping, but some excess may persist for years</td></tr><tr><td>HRT increases breast cancer deaths</td><td>In the WHI, estrogen alone was linked to fewer deaths; combined therapy showed no significant difference in deaths</td></tr></table>`,
    },
    {
      heading: "HRT and breast cancer glossary",
      body: `<ul><li><strong>Absolute risk:</strong> the chance of something happening, such as 6 in 100.</li><li><strong>Relative risk / hazard ratio:</strong> how much a risk changes compared with another group; 1.28 means 28% higher.</li><li><strong>Combined HRT:</strong> estrogen plus a progestogen, for women with a uterus.</li><li><strong>Estrogen-only HRT:</strong> estrogen without a progestogen, for women without a uterus.</li><li><strong>Continuous vs cyclical:</strong> progestogen taken every day vs on some days of each month.</li><li><strong>Micronized progesterone:</strong> progesterone identical to the body's own (e.g., Prometrium).</li><li><strong>Synthetic progestin:</strong> lab-made progestogens such as medroxyprogesterone acetate.</li><li><strong>Randomized controlled trial:</strong> participants are assigned to treatment or placebo by chance, the strongest test of cause and effect.</li><li><strong>Meta-analysis:</strong> a combined analysis of many studies.</li><li><strong>WHI:</strong> Women's Health Initiative, the largest US randomized trials of HRT.</li><li><strong>Dense breasts:</strong> more glandular and fibrous tissue relative to fat, which can hide tumors on mammograms and is itself a risk factor.</li></ul>`,
    },
    {
      heading: "How we researched this guide",
      body: `<p><strong>We built this guide from the original publications - the WHI trial reports in JAMA (2002, 2004, 2020), the 2019 Lancet meta-analysis, the E3N cohort, American Cancer Society statistics, UK regulator guidance and FDA labeling decisions - checked on November 5, 2026.</strong> Where studies disagree, we show both. We state whether each finding comes from a randomized trial or an observational study, and we give absolute numbers wherever the source allows. We don't tell anyone to start or stop a medicine. HRT Women earns commissions from some providers; that doesn't change the evidence or how we report it. See our <a href="/medical-review-policy">medical review policy</a>.</p>`,
    },
    {
      heading: "The bottom line on HRT and breast cancer",
      body: `<p><strong>HRT's effect on breast cancer is real but smaller and more specific than its reputation. Combined estrogen-progestogen therapy adds a small, duration-dependent risk; estrogen alone adds little or none; vaginal estrogen adds none that studies have found. For most healthy women in their 50s with bothersome symptoms, that risk is one factor in a decision that also includes hot flashes, sleep, bone health and quality of life.</strong></p>
<ul><li>Ask for absolute numbers, not percentages.</li><li>Know which type you'd be taking - estrogen alone or combined, and which progestogen.</li><li>Use the lowest effective dose and review every year.</li><li>Keep screening, limit alcohol, stay active.</li><li>If you've had breast cancer or carry a high-risk mutation, decide with a specialist.</li></ul>
<p>For the wider picture, read <a href="/articles/is-hrt-safe">is HRT safe?</a>, <a href="/articles/what-is-hrt">what is HRT?</a> and our <a href="/articles/menopause-complete-guide">complete menopause guide</a>.</p>
<p><em>This article is general information, not medical advice. A licensed clinician should help you weigh the risks and benefits of any treatment for your situation.</em></p>`,
    },
    {
      heading: "References",
      body: `<ul><li>${ext(SRC.whi2002, "Writing Group for the WHI Investigators. Risks and benefits of estrogen plus progestin in healthy postmenopausal women. JAMA. 2002;288(3):321-333")}</li><li>${ext(SRC.whi2004, "WHI Steering Committee. Effects of conjugated equine estrogen in postmenopausal women with hysterectomy. JAMA. 2004;291(14):1701-1712")}</li><li>${ext(SRC.whi2020, "Chlebowski RT, et al. Association of menopausal hormone therapy with breast cancer incidence and mortality during long-term follow-up of the WHI randomized clinical trials. JAMA. 2020;324(4):369-380")}</li><li>${ext(SRC.lancet2019, "Collaborative Group on Hormonal Factors in Breast Cancer. Type and timing of menopausal hormone therapy and breast cancer risk. Lancet. 2019;394:1159-1168")}</li><li>${ext(SRC.mhra, "MHRA Drug Safety Update: HRT and the known increased risk of breast cancer and its persistence after stopping (2019)")}</li><li>${ext(SRC.e3n, "Fournier A, et al. Unequal risks for breast cancer associated with different hormone replacement therapies: results from the E3N cohort study. Breast Cancer Res Treat. 2008")}</li><li>${ext(SRC.acs, "American Cancer Society: How common is breast cancer? (2026 estimates)")}</li><li>${ext(SRC.whc, "Women's Health Concern: Understanding the risks of breast cancer")}</li><li>${ext(SRC.uspstf, "US Preventive Services Task Force: Breast cancer screening recommendation (2024)")}</li><li>${ext(SRC.nams2022, "The 2022 hormone therapy position statement of The North American Menopause Society. Menopause. 2022")}</li><li>${ext(SRC.fdaLabels, "FDA approves labeling changes to six menopausal hormone therapy products (Feb 2026)")}</li><li>${ext(SRC.fdaOct, "HHS: FDA advances menopause care with hormone therapy labeling updates (Oct 2026)")}</li><li>Holmberg L, Anderson H. HABITS (hormonal replacement therapy after breast cancer - is it safe?), a randomised comparison: trial stopped. Lancet. 2004;363:453-455.</li></ul>`,
    },
  ],
};
