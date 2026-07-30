import type { Chapter } from "./types";

export const ch03: Chapter = {
  number: 3,
  title: "Vitamins and Minerals That Matter Most",
  subtitle: "Iron, zinc, vitamin D, omega-3 and the rest, decoded",
  image: "vitamins",
  intro:
    "By the time your baby is six months old, breast milk or formula alone can no longer keep pace with their rapidly growing brain, bones, and blood supply. This is the exact moment when specific vitamins and minerals move from background players to front-line necessities. In this chapter we will walk through the nutrients that pediatric nutritionists worry about most, why each one matters, and exactly which everyday foods deliver them. You will leave with a clear, practical map instead of a list of scary deficiencies to fear.",
  blocks: [
    {
      type: "heading",
      text: "Iron: The Nutrient Babies Cannot Afford to Miss",
      sub: "Why the first food matters more than you think",
    },
    {
      type: "paragraph",
      text: "Babies are born with iron stores that last roughly four to six months, then those reserves drop sharply just as growth accelerates. Iron builds hemoglobin, which carries oxygen to every organ, including the fast-developing brain. This is why pediatricians recommend iron-rich first foods, such as fortified infant cereal, pureed meats, or lentils, starting at six months rather than waiting for a more relaxed approach to solids.",
    },
    {
      type: "paragraph",
      text: "Low iron in infancy has been linked to lasting effects on attention, memory, and motor skills, even after the deficiency is corrected. Watch for subtle signs such as pale skin, unusual tiredness, poor appetite, or slower motor milestones, and mention any concerns at well-child visits so a simple blood test can rule problems out early.",
    },
    {
      type: "table",
      title: "Key Nutrients at a Glance",
      headers: ["Nutrient", "Why It Matters", "Daily Need (6-12mo)", "Best Baby Foods"],
      rows: [
        ["Iron", "Oxygen transport, brain development", "11 mg", "Fortified cereal, pureed beef, lentils, tofu"],
        ["Zinc", "Immune function, growth, wound healing", "3 mg", "Meat, yogurt, mashed beans, egg yolk"],
        ["Vitamin D", "Bone growth, calcium absorption", "400 IU (10 mcg)", "Fortified formula, egg yolk, sunlight-supported synthesis"],
        ["Omega-3 (DHA)", "Brain and eye development", "~70-100 mg DHA", "Salmon, sardines, DHA-fortified foods"],
        ["Vitamin C", "Boosts iron absorption, immune support", "15 mg", "Strawberries, citrus, bell pepper, broccoli"],
        ["Calcium", "Bone mineralization", "260 mg", "Yogurt, cheese, fortified milk products"],
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Pair Iron With Vitamin C",
      body: "Serving a vitamin C food alongside an iron-rich food, such as strawberries with iron-fortified cereal, can significantly boost how much iron your baby actually absorbs from plant sources.",
    },
    {
      type: "callout",
      kind: "warning",
      title: "Tea and Cow's Milk Can Block Absorption",
      body: "Compounds called tannins in tea, and excessive cow's milk before age one, can interfere with iron absorption. Limit cow's milk as a drink until 12 months and avoid tea with meals for toddlers.",
    },
    {
      type: "heading",
      text: "Zinc: The Quiet Growth Regulator",
    },
    {
      type: "paragraph",
      text: "Zinc rarely gets headlines, but it is essential for cell division, immune defense, and taste bud development. A zinc shortfall can show up as poor appetite, frequent infections, or slow growth. Because zinc from plant foods is less bioavailable than from animal sources, babies eating mostly plant-based diets need slightly larger portions of zinc-rich legumes, nuts, or fortified cereals.",
    },
    {
      type: "list",
      title: "Everyday Zinc Sources for Babies",
      items: [
        "Pureed or shredded beef, chicken, or turkey",
        "Mashed chickpeas, lentils, or black beans",
        "Plain full-fat yogurt",
        "Soft-scrambled egg yolk",
        "Finely ground pumpkin seeds mixed into purees",
      ],
    },
    {
      type: "heading",
      text: "Vitamin D and Calcium: Building Strong Bones",
    },
    {
      type: "paragraph",
      text: "Vitamin D allows the body to absorb calcium efficiently, and without enough of it, bones can grow soft or weak, a condition known as rickets. Breastfed infants almost universally need a vitamin D supplement of 400 IU daily starting in the first days of life, since breast milk alone rarely provides enough, regardless of the mother's diet or sun exposure.",
    },
    {
      type: "paragraph",
      text: "Formula-fed babies drinking at least 32 ounces daily usually meet their vitamin D needs through formula alone, but always confirm with your pediatrician. Once solids are established, egg yolks, fortified yogurt, and safely prepared fatty fish can contribute meaningfully to both vitamin D and calcium intake.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: Sunlight Alone Is Enough",
      body: "Pediatric guidelines recommend against relying on sun exposure for vitamin D in infants, both because of skin cancer risk and because the amount of sun needed is unpredictable. A supplement remains the safest, most reliable source.",
    },
    {
      type: "heading",
      text: "Omega-3 Fatty Acids: Fuel for a Growing Brain",
    },
    {
      type: "paragraph",
      text: "DHA, an omega-3 fatty acid, makes up a significant portion of the brain's structural fat and continues accumulating rapidly through the second year of life. Low-mercury fatty fish like salmon and sardines, introduced in small, well-cooked portions from around eight months, are among the richest natural sources, alongside DHA-fortified infant formulas.",
    },
    {
      type: "list",
      title: "Safe Ways to Introduce Omega-3 Foods",
      items: [
        "Offer flaked, boneless, well-cooked salmon two to three times weekly",
        "Choose low-mercury fish: salmon, trout, sardines, and anchovies",
        "Avoid high-mercury fish such as swordfish, shark, and king mackerel",
        "Consider an algae-based DHA supplement if fish intake is minimal",
      ],
    },
    {
      type: "heading",
      text: "Reading Hunger and Recognizing Real Deficiency Signs",
    },
    {
      type: "paragraph",
      text: "Responsive feeding means watching your baby's cues rather than the clock or the plate. Leaning toward food, opening the mouth, and reaching for the spoon signal hunger, while turning away, pushing food out, or closing the lips signal fullness. Nutrient gaps rarely show up overnight; instead, watch for patterns over weeks, such as persistent low energy, frequent illness, or stalled growth on the pediatrician's chart.",
    },
    {
      type: "callout",
      kind: "note",
      title: "Appetite Dips Are Normal",
      body: "Around growth spurts babies may eat voraciously, while during slower growth phases or teething, appetite can drop noticeably for several days. This is typically not a nutrient problem and resolves on its own without intervention.",
    },
    {
      type: "quote",
      text: "Nutrition in the first year is not about perfection at every meal, it is about consistent patterns over weeks that add up to a well-nourished, thriving child.",
      author: "Pediatric Dietetics Consensus Guidance",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Iron need doubles", value: "Around 6 months of age" },
        { label: "Vitamin D dose", value: "400 IU daily from birth if breastfed" },
        { label: "DHA target", value: "70-100 mg daily by 12 months" },
        { label: "Zinc absorption", value: "Higher from animal than plant sources" },
        { label: "Vitamin C pairing", value: "Boosts non-heme iron absorption up to 3x" },
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "When to Call the Pediatrician",
      body: "Persistent paleness, unusual fatigue, recurring infections, or a flattening growth curve deserve a conversation with your pediatrician. A simple blood panel can confirm or rule out iron or vitamin D deficiency quickly and safely.",
    },
  ],
  takeaways: [
    "Iron needs spike around six months, right when milk alone stops being enough, making iron-rich first foods essential.",
    "Pairing vitamin C foods with iron-rich meals meaningfully boosts absorption from plant sources.",
    "Vitamin D supplementation is recommended for nearly all breastfed babies starting in the first days of life.",
    "Zinc supports immunity and growth, and animal sources are more easily absorbed than plant sources.",
    "Appetite naturally fluctuates with growth spurts and teething, so short dips rarely signal a real deficiency.",
  ],
};
