import type { Chapter } from "./types";

export const ch08: Chapter = {
  number: 8,
  title: "Foods to Avoid and Why",
  subtitle: "The short list every parent must know by heart",
  image: "avoid",
  intro:
    "Most of feeding a baby is about generous, joyful yes: yes to new flavors, yes to messy exploration, yes to family meals shared together. But a short, specific list of foods carries real risk in the first year or two, from choking to poisoning to long-term harm, and knowing this list cold matters more than almost anything else in this handbook. This chapter gives you the exact foods, the reason behind each rule, the age it lifts, and a safer swap you can use instead. Keep this page bookmarked; it is worth reading more than once.",
  blocks: [
    {
      type: "heading",
      text: "The non-negotiables: safety risks, not preferences",
      sub: "A handful of foods are restricted for genuine medical reasons",
    },
    {
      type: "paragraph",
      text: "Unlike most feeding decisions, which are flexible and based on your baby's readiness, the foods in this chapter are restricted because of documented risks: bacterial toxins, choking mechanics, or strain on organs that are still maturing. These are not foods to introduce 'a little early to see how it goes.' The rules exist because the consequences, when things go wrong, can be severe.",
    },
    {
      type: "paragraph",
      text: "The good news is that this list is short and the swaps are easy. Once you know the handful of true no-go foods, you can relax about nearly everything else on the table.",
    },
    {
      type: "table",
      title: "Foods to avoid: risk, age limit, and safer swap",
      headers: ["Food", "Risk", "Avoid until", "Safer swap"],
      rows: [
        ["Honey and honey-sweetened foods", "Infant botulism from bacterial spores", "12 months", "Mashed banana or a dab of applesauce for sweetness"],
        ["Whole nuts and seeds", "Choking; small, hard, rounded shape", "4-5 years", "Smooth nut butter thinned with water or milk"],
        ["Whole grapes, cherry tomatoes, olives", "Choking; size and shape blocks the airway", "Quartered until age 4", "Grapes and cherry tomatoes cut into quarters lengthwise"],
        ["Whole sausages and hot dogs", "Choking; cylindrical, plug-shaped", "Quartered/sliced lengthwise until age 4", "Sausage cut lengthwise into thin strips, then chopped"],
        ["Popcorn and hard pretzels", "Choking; hard, irregular pieces", "4 years", "Soft crackers or well-cooked rice"],
        ["Unpasteurized milk, juice, and soft cheeses", "Listeria, salmonella, E. coli", "Avoid unless labeled pasteurized", "Pasteurized dairy and juice only"],
        ["High-mercury fish (shark, swordfish, king mackerel, tilefish)", "Mercury accumulation harms developing brain", "Avoid in early childhood", "Low-mercury options like salmon, cod, or shrimp"],
        ["Cow milk as a main drink", "Low iron, high renal solute load", "12 months", "Breast milk or formula as the primary drink"],
        ["Added salt", "Kidney strain; immature kidneys cannot excrete excess sodium", "Minimize through age 12 months and beyond", "Herbs, mild spices, and unsalted broths for flavor"],
        ["Added sugar and sweetened drinks", "No nutritional benefit; shapes lifelong taste preference", "Avoid before 12 months, limit after", "Plain water, whole fruit, and unsweetened dairy"],
        ["Rice drinks (rice milk) as a main drink", "Naturally occurring arsenic exposure", "Avoid as a milk substitute in early childhood", "Breast milk, formula, or whole cow milk after 12 months"],
      ],
    },
    {
      type: "callout",
      kind: "warning",
      title: "Honey and infant botulism",
      body: "Honey can contain spores of Clostridium botulinum. An adult gut can handle them, but a baby's immature gut cannot, and the spores can germinate and produce a dangerous toxin. This applies to raw honey, cooked honey, and honey baked into foods. Wait until your baby's first birthday, with no exceptions.",
    },
    {
      type: "heading",
      text: "Choking shapes: the geometry that matters more than the food itself",
      sub: "How you cut a food often matters as much as what the food is",
    },
    {
      type: "paragraph",
      text: "Many choking incidents involve otherwise healthy, nutritious foods that were simply the wrong shape or size for a baby's airway. Round, firm foods close to the diameter of a baby's airway are the highest risk. This is why grapes, cherry tomatoes, whole olives, and rounds of sausage all appear on nearly every choking-hazard list, even though none of them are inherently 'bad' foods.",
    },
    {
      type: "paragraph",
      text: "The fix is almost always cutting technique. Quarter small round foods lengthwise so no piece retains a round cross-section. Slice cylindrical foods like sausages and hot dogs lengthwise first, then into small pieces. Grate or cook hard foods like raw carrot and apple until soft enough to squish, rather than serving them as hard chunks or coins.",
    },
    {
      type: "list",
      title: "How to cut common choking-hazard foods safely",
      items: [
        "Grapes and cherry tomatoes: quarter lengthwise, never serve whole or halved",
        "Sausages and hot dogs: slice lengthwise into strips, then chop into small pieces",
        "Hard raw fruit and vegetables (apple, carrot): grate, cook until soft, or cut into thin sticks with soft ends",
        "Whole nuts and seeds: avoid whole; offer as smooth butter or finely ground into other foods",
        "Popcorn, hard candy, chunks of peanut butter on a spoon: avoid altogether until well past toddlerhood",
      ],
    },
    {
      type: "callout",
      kind: "tip",
      title: "Always supervise, always seated",
      body: "Beyond food choice and cutting technique, the single most protective habit is having your baby seated upright in a highchair, supervised by an adult, for every meal and snack. Never let a baby eat while lying down, walking, or riding in a moving car unsupervised.",
    },
    {
      type: "heading",
      text: "Salt, sugar, and the drinks that quietly cause harm",
      sub: "Not every risk is dramatic; some accumulate slowly",
    },
    {
      type: "paragraph",
      text: "Unlike choking or botulism, the risks from excess salt, added sugar, and the wrong milk drinks are slow and cumulative rather than sudden. A baby's kidneys cannot yet excrete excess sodium efficiently, so high-salt foods like many hard cheeses, cured meats, and canned soups should be limited or avoided in the first year. Added sugar offers no nutritional value and can shape a lifelong preference for overly sweet foods, so it is best avoided before 12 months and kept minimal after.",
    },
    {
      type: "paragraph",
      text: "Rice drinks deserve a special mention: rice naturally absorbs arsenic from soil and water more readily than other grains, and concentrated rice drinks used as a milk substitute can push a small body's arsenic exposure higher than is considered safe. This does not mean avoiding rice cereal or rice as a food in reasonable amounts; it means not using rice milk as a baby's primary drink.",
    },
    {
      type: "list",
      title: "Quick reference: drinks that should not replace breast milk, formula, or water",
      items: [
        "Cow milk before 12 months as a main drink",
        "Rice milk or other plant milks as a primary drink in early childhood",
        "Fruit juice in place of whole fruit or water",
        "Any sweetened beverage, including flavored milks and soda",
        "Unpasteurized milk or juice of any kind",
      ],
    },
    {
      type: "callout",
      kind: "myth",
      title: "Myth: a little added salt or sugar for flavor will not hurt",
      body: "A pinch here and there feels harmless, but babies have no baseline for comparison; their taste preferences are being set right now. Consistently offering herbs, mild spices, and the natural flavors of vegetables, meats, and fruits builds a palate that accepts a wider range of foods later, while early sugar and salt exposure tends to narrow it.",
    },
    {
      type: "quote",
      text: "The rules for babies are not about fear; they are about matching food to a body that is still finishing its most important construction work.",
      author: "Common pediatric nutrition guidance",
    },
    {
      type: "callout",
      kind: "note",
      title: "When restrictions loosen",
      body: "Almost every food on this list becomes appropriate with time: honey and whole cow milk at 12 months, whole nuts and hard choking-shape foods by age 4 to 5, and high-mercury fish limited rather than eliminated through early childhood. This chapter is about the first one to two years, not forever.",
    },
    {
      type: "keyfacts",
      items: [
        { label: "Honey", value: "Wait until 12 months, no exceptions" },
        { label: "Whole nuts", value: "Avoid whole until age 4-5" },
        { label: "Choking shapes", value: "Quarter grapes, tomatoes, sausages until age 4" },
        { label: "Unpasteurized foods", value: "Avoid milk, juice, and soft cheeses" },
        { label: "High-mercury fish", value: "Avoid shark, swordfish, king mackerel, tilefish" },
        { label: "Added salt and sugar", value: "Minimize before 12 months, limit after" },
      ],
    },
  ],
  takeaways: [
    "Honey is off-limits until 12 months because of infant botulism risk.",
    "Cut round and cylindrical foods to remove their choking-hazard shape, not just their size.",
    "Avoid whole nuts, unpasteurized foods, and high-mercury fish through early childhood.",
    "Keep cow milk as a drink and rice milk as a main beverage out of the picture before 12 months.",
    "Minimize added salt and sugar; babies' preferences are being shaped by what they taste now.",
  ],
};
