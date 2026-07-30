import type { Chapter } from "./types";

export const ch01: Chapter = {
  number: 1,
  title: "Nutritional Needs by Age",
  subtitle: "What your baby's body actually needs, month by month",
  image: "needs",
  intro:
    "Every parent asks the same quiet question at 2am: is my baby getting enough? The honest answer is that your baby's needs change dramatically in the first two years, faster than at almost any other stage of life. Understanding the actual numbers behind energy, protein, iron, and fluid needs takes the guesswork out of feeding and replaces anxiety with confidence. This chapter walks through exactly what your baby needs at each stage, in plain language backed by pediatric nutrition science. By the end, you will be able to look at a plate or a bottle and know whether it is doing its job.",
  blocks: [
    {
      type: "heading",
      text: "0 to 6 Months: Milk Does It All",
      sub: "The foundation stage",
    },
    {
      type: "paragraph",
      text: "For the first six months, breast milk or formula supplies everything a baby needs: energy, protein, fat, vitamins, and fluid. No water, juice, or solid food is required or recommended during this window. This is not a limitation, it is biological efficiency, since milk is precisely calibrated to a young infant's immature gut and kidneys.",
    },
    {
      type: "paragraph",
      text: "Babies typically take in about 25 to 35 ounces (750 to 1050 ml) of milk per day by 4 to 6 months, spread across 5 to 8 feeds. Growth is the best proxy for adequacy: steady weight gain along a consistent growth curve tells you more than any single feed ever could.",
    },
    {
      type: "callout",
      kind: "note",
      title: "Why we wait until around 6 months",
      body: "An infant's gut lining, kidney filtration, and oral motor skills (tongue thrust reflex, head control) all mature around this window, making it the safest point to introduce solids without displacing essential milk calories.",
    },
    {
      type: "heading",
      text: "6 to 8 Months: Solids Begin, Milk Still Leads",
      sub: "Complementary, not replacement",
    },
    {
      type: "paragraph",
      text: "At this stage solids are called 'complementary foods' for a reason: they complement milk rather than replace it. Milk should still provide roughly 70 to 80 percent of total calories. A baby this age needs about 650 to 750 kcal per day total, with solids contributing only 100 to 200 kcal initially, often just a tablespoon or two of iron-rich puree at first.",
    },
    {
      type: "paragraph",
      text: "Iron becomes a priority now because a baby's prenatal iron stores, built up during the third trimester, begin to run low around 6 months. This is why pediatricians recommend iron-fortified cereal, pureed meats, or lentils as some of the very first foods, well before fruits or vegetables become the main focus.",
    },
    {
      type: "table",
      title: "Daily Energy and Protein Needs by Age",
      headers: ["Age", "Energy (kcal/day)", "Protein (g/day)", "Milk contribution"],
      rows: [
        ["0-6 months", "500-600", "9-11", "100%"],
        ["6-8 months", "650-750", "11", "70-80%"],
        ["9-11 months", "750-900", "11", "50-60%"],
        ["12-24 months", "900-1000", "13", "30-40%"],
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Watch the baby, not just the plate",
      body: "Hunger and fullness cues (leaning in, opening the mouth, versus turning away or pushing the spoon) are more reliable guides to portion size than any chart. Let your baby's appetite fluctuate day to day without forcing extra bites.",
    },
    {
      type: "heading",
      text: "9 to 11 Months: Texture and Iron Take Center Stage",
      sub: "Building chewing skills and stores",
    },
    {
      type: "paragraph",
      text: "By 9 months, most babies are ready for mashed and soft finger foods rather than smooth purees exclusively. This is a critical window for developing chewing skills; delaying texture progression past 10 months is associated with later feeding difficulties. A typical day might include oatmeal with mashed banana, shredded chicken with soft-cooked carrots, and yogurt with mashed berries.",
    },
    {
      type: "paragraph",
      text: "Iron needs remain high at 11 mg per day, hard to meet through milk alone, so meals should regularly include iron sources: beef, chicken, lentils, beans, or fortified cereal, ideally paired with vitamin C foods like citrus or tomato to boost absorption.",
    },
    {
      type: "list",
      title: "Good iron-rich first and second foods",
      items: [
        "Pureed or shredded beef, chicken, or turkey",
        "Iron-fortified infant cereal",
        "Lentils and split peas, well mashed",
        "Pureed beans (black, kidney, or white)",
        "Egg yolk, then whole egg once tolerated",
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "Common gap: iron deficiency",
      body: "Iron deficiency remains one of the most common nutrient gaps in babies over 9 months, particularly for those who are still heavily reliant on milk or fruit-only purees. If your baby eats mostly fruits and starchy vegetables, add a protein-rich, iron source at every meal.",
    },
    {
      type: "heading",
      text: "12 to 24 Months: Joining Family Meals",
      sub: "Smaller body, surprisingly high needs",
    },
    {
      type: "paragraph",
      text: "After the first birthday, toddlers transition to whole cow's milk (if not breastfeeding) and eat mostly family foods, cut and cooked appropriately. Total energy needs rise only modestly to about 900 to 1000 kcal per day, but because toddlers are small, this concentrated need means every meal counts more than it did for an adult.",
    },
    {
      type: "paragraph",
      text: "Fat is especially important now: toddlers need about 30 to 40 percent of calories from fat to support rapid brain development, so this is not the age for low-fat dairy or diet foods. Whole milk, avocado, olive oil, nut butters (thinned to avoid choking), and full-fat yogurt all belong on the plate.",
    },
    {
      type: "table",
      title: "Milk and Fluid Guidance by Age",
      headers: ["Age", "Milk type", "Typical daily volume", "Water needed?"],
      rows: [
        ["0-6 months", "Breast milk or formula", "24-32 oz (720-950 ml)", "No"],
        ["6-11 months", "Breast milk or formula", "24-30 oz (720-900 ml)", "A few sips with meals"],
        ["12-24 months", "Whole cow's milk", "16-20 oz (475-590 ml)", "Yes, with meals and play"],
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: toddlers need low-fat milk to avoid weight gain",
      body: "Whole milk (3.25 percent fat) is recommended until age 2 for most toddlers because dietary fat fuels the brain growth spurt happening right now. Switching to skim or low-fat milk early can unintentionally shortchange calorie and fatty acid needs.",
    },
    {
      type: "quote",
      text: "Feed the child in front of you, not the chart. The numbers are a compass, not a rulebook.",
      author: "Pediatric dietitian saying, widely echoed in feeding clinics",
    },
    {
      type: "list",
      title: "Signs your toddler is getting enough overall",
      items: [
        "Steady growth along their own curve at checkups",
        "Consistent energy for play throughout the day",
        "Regular wet diapers or bathroom trips",
        "Interest in food most of the time, even if portions vary",
        "Normal sleep patterns without excessive night waking from hunger",
      ],
    },
    {
      type: "keyfacts",
      items: [
        { label: "Iron RDA, 7-12 months", value: "11 mg/day" },
        { label: "Iron RDA, 1-3 years", value: "7 mg/day" },
        { label: "Calcium RDA, 12-24 months", value: "700 mg/day" },
        { label: "Vitamin D RDA, all infants", value: "400 IU/day" },
        { label: "Fat, percent of calories at 12-24 months", value: "30-40%" },
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Vitamin D is the one nearly everyone needs to supplement",
      body: "Breastfed babies typically need a 400 IU vitamin D supplement daily starting in the first days of life, since breast milk alone rarely provides enough. Formula-fed babies drinking at least 32 oz per day usually get sufficient vitamin D from formula alone.",
    },
  ],
  takeaways: [
    "Milk supplies 100 percent of calories for the first 6 months, no exceptions needed.",
    "Iron needs spike at 6 months just as prenatal stores run low, making iron-rich foods a priority.",
    "Total energy needs rise gradually, from about 600 kcal/day as a newborn to about 1000 kcal/day by age 2.",
    "Fat should not be restricted in toddlers; it is essential fuel for brain development.",
    "Growth curves and hunger cues are more reliable guides than rigid portion charts.",
  ],
};
