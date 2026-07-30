import type { Chapter } from "./types";

export const ch05: Chapter = {
  number: 5,
  title: "Introducing Proteins",
  subtitle: "Meat, fish, eggs, beans and allergens without fear",
  image: "protein",
  intro:
    "Protein-rich foods are some of the most important additions to your baby's diet after six months, supplying iron, zinc and vitamin B12 that breast milk alone can no longer fully provide. Many parents feel nervous about starting meat, fish, eggs and legumes, worrying about choking or allergic reactions, but delaying these foods offers no protection and can even increase allergy risk. This chapter walks through exactly which proteins to offer first, how to prepare them safely for tiny mouths, and how to introduce common allergens with confidence rather than fear. You will also find practical combinations for building complete plant-based proteins, so that every baby, whatever your family's diet, gets what they need to grow and thrive.",
  blocks: [
    {
      type: "heading",
      text: "Why protein matters so early",
      sub: "Iron stores and rapid growth",
    },
    {
      type: "paragraph",
      text: "Babies are born with iron stores that begin to run low around six months of age, right when solid foods typically start. This is not a coincidence; it is precisely why pediatric guidelines emphasize iron-rich foods, especially meat, from the very first weeks of complementary feeding.",
    },
    {
      type: "paragraph",
      text: "Protein also supplies the building blocks for muscle, brain development and immune function during a period of extremely fast growth. Plant proteins can absolutely meet these needs, but they often require thoughtful pairing to deliver the full range of amino acids and enough absorbable iron.",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Best first proteins", value: "Pureed meat, egg yolk or whole egg, well-cooked lentils" },
        { label: "Iron absorption booster", value: "Pair with vitamin C foods like citrus or bell pepper" },
        { label: "Egg introduction", value: "Whole egg, well cooked, from around 6 months" },
        { label: "Fish introduction", value: "Low-mercury fish, boneless and flaked, from 6 months" },
        { label: "Allergen exposure", value: "Introduce common allergens early and keep offering regularly" },
      ],
    },
    {
      type: "heading",
      text: "Meat, poultry and fish: textures by stage",
    },
    {
      type: "paragraph",
      text: "At the very start of solids, meat and fish should be smooth or finely minced and moistened with breast milk, formula or cooking liquid so they are easy to swallow. As your baby gains skill with chewing and gumming, you can move to shredded, minced and eventually small tender chunks.",
    },
    {
      type: "table",
      title: "Protein sources: starting age, texture and prep tips",
      headers: ["Protein source", "Age to start", "Texture", "Prep tip"],
      rows: [
        ["Pureed beef or lamb", "6 months", "Smooth puree with cooking liquid", "Slow-cook until very tender, blend with broth"],
        ["Chicken or turkey", "6 months", "Finely minced or shredded", "Poach or bake, shred against the grain, moisten well"],
        ["White fish (cod, hake)", "6 months", "Flaked, bones fully removed", "Steam or bake, check carefully for tiny bones"],
        ["Egg (whole)", "6 months", "Well-cooked, mashed or scrambled soft", "Cook yolk and white fully until firm, no runny egg"],
        ["Lentils and split peas", "6 months", "Soft, mashed", "Simmer until falling apart, mash with a fork"],
        ["Tofu", "6 months", "Soft cubes or mashed", "Steam briefly, offer soft firm tofu as finger food"],
        ["Beans (kidney, black)", "7-8 months", "Skins removed, mashed", "Cook very soft, squeeze skins off, mash or halve"],
        ["Nut butter (smooth)", "6 months", "Thinned, spread thin", "Mix into puree or yogurt, never offer a spoonful alone"],
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "Choking hazards to avoid",
      body: "Never offer whole nuts, whole grapes, popcorn, hard raw vegetables, hot dog rounds or thick blobs of nut butter to babies and toddlers. Always cut round foods lengthwise and cook proteins until they are soft enough to mash between two fingers.",
    },
    {
      type: "list",
      title: "Safe protein prep checklist",
      items: [
        "Cook meat, poultry and fish until fully done and fork-tender",
        "Remove all bones, skin and gristle before serving",
        "Moisten dry proteins with broth, yogurt or sauce to ease swallowing",
        "Cut cylindrical shapes like sausage into strips, never coins",
        "Cool food to a safe warm temperature before offering",
      ],
    },
    {
      type: "heading",
      text: "Introducing allergens with confidence",
      sub: "Early, often, and one at a time",
    },
    {
      type: "paragraph",
      text: "Current guidance from major pediatric and allergy organizations recommends introducing common allergenic foods, including peanut, egg, dairy, tree nuts, wheat, soy, fish and shellfish, early in the first year rather than delaying them. Regular ongoing exposure, roughly two to three times per week once tolerated, appears to help maintain tolerance.",
    },
    {
      type: "paragraph",
      text: "Introduce one new allergen at a time, ideally in the morning at home, so you can watch for any reaction over the following hours and days. Start with a small amount and gradually increase the quantity if it is well tolerated.",
    },
    {
      type: "table",
      title: "Allergen introduction schedule",
      headers: ["Allergen", "Suggested first form", "Watch-and-wait time", "Ongoing frequency"],
      rows: [
        ["Peanut", "Smooth peanut butter thinned with water, mixed into puree", "2 hours after first taste", "2-3 times per week"],
        ["Egg", "Well-cooked whole egg, mashed", "2 hours after first taste", "Several times per week"],
        ["Cow's milk (dairy)", "Plain full-fat yogurt or cheese", "2 hours after first taste", "Daily to several times weekly"],
        ["Tree nuts", "Smooth nut butter thinned, or nut flour in food", "2 hours after first taste", "2-3 times per week"],
        ["Wheat", "Well-cooked pasta or bread pieces", "2 hours after first taste", "Several times per week"],
        ["Fish and shellfish", "Well-cooked, flaked, boneless fish", "2 hours after first taste", "1-2 times per week"],
      ],
    },
    {
      type: "list",
      title: "Signs of an allergic reaction to watch for",
      items: [
        "Hives, redness or swelling around the mouth or face",
        "Vomiting or persistent coughing shortly after eating",
        "Widespread rash or hives on the body",
        "Swelling of lips, tongue or throat",
        "Difficulty breathing, wheezing, or sudden lethargy (call emergency services immediately)",
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "When to seek urgent help",
      body: "Swelling of the face or throat, persistent vomiting, difficulty breathing, or sudden paleness and floppiness after a new food are signs of a serious reaction. Call emergency services right away rather than waiting to see if symptoms pass.",
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: Delaying allergens prevents allergies",
      body: "Research over the past decade has reversed this old advice. Delaying introduction of allergens like peanut and egg beyond six to twelve months is now linked to a higher, not lower, risk of developing food allergy in most infants.",
    },
    {
      type: "callout",
      kind: "tip",
      title: "High-risk babies",
      body: "If your baby has severe eczema or an existing food allergy, talk to your pediatrician or an allergist before introducing peanut or egg, since they may recommend introducing these allergens even earlier, sometimes with in-office testing first.",
    },
    {
      type: "heading",
      text: "Building complete plant-based proteins",
    },
    {
      type: "paragraph",
      text: "Vegetarian and vegan families can absolutely meet their baby's protein needs by combining foods across meals and days rather than at every single sitting. Legumes paired with grains, and nut or seed butters spread through the diet, together supply a full amino acid profile.",
    },
    {
      type: "list",
      title: "Plant protein pairings that work well",
      items: [
        "Lentils with rice or soft cooked quinoa",
        "Hummus with soft whole-grain pita strips",
        "Tofu cubes with steamed vegetables and a grain",
        "Bean and cheese soft mash on toast fingers",
        "Yogurt with mashed beans or lentils stirred in",
      ],
    },
    {
      type: "quote",
      text: "Feeding a baby is not about perfection at every meal, it is about a pattern of good choices repeated over weeks and months.",
      author: "Pediatric dietitian advice, commonly cited",
    },
    {
      type: "callout",
      kind: "note",
      title: "Iron-rich meat first, not last",
      body: "Many traditional weaning plans start with rice cereal and vegetables and leave meat for later. Newer guidance flips this: offering iron-rich meat or fortified iron cereal from the very start of solids helps protect against iron deficiency, which is common in the second half of infancy.",
    },
  ],
  takeaways: [
    "Offer iron-rich proteins like meat, egg and lentils from the very start of solids, not months later.",
    "Adjust texture to your baby's skill level, moving from smooth purees to minced, shredded and soft chunks.",
    "Introduce common allergens early, one at a time, and keep offering them regularly once tolerated.",
    "Watch closely for two hours after a first allergen taste and know the signs of a serious reaction.",
    "Combine plant proteins like legumes and grains across the day to provide complete amino acid coverage.",
  ],
};
