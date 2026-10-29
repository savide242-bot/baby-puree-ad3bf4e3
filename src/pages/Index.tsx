import appRecipes from "@/assets/app-recipes.png";
import appShopping from "@/assets/app-shopping.png";
import meatloavesAsset from "@/assets/recipe-meatloaves.webp.asset.json";
import {
  Check,
  Clock,
  Brain,
  Leaf,
  Heart,
  Sparkles,
  ShieldCheck,
  Flame,
  Snowflake,
  Download,
  Bell,
  CalendarCheck,
  Users,
  ChevronRight,
  MessageCircle,
  Star,
} from "lucide-react";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/INkLCwAKV3zDpg5z5xJZDs?s=cl&p=i&mlu=4&ilr=4&iam=2";

const LAUNCH_DATE = new Date("2026-11-30T00:00:00");

const daysLeft = (() => {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / 86_400_000));
})();

const steps: { title: string; body: string; tip?: string }[] = [
  {
    title: "Grate the vegetables finely",
    body: "Grate the carrot, zucchini and onion on the small holes of a box grater. The finer they are, the sweeter and softer the loaves taste — and the easier they are for little mouths.",
    tip: "No grater? Pulse everything 5–6 times in a food processor.",
  },
  {
    title: "Squeeze out the water",
    body: "Wrap the grated zucchini in a clean kitchen towel and squeeze firmly over the sink for 20–30 seconds. Removing the water is the secret to loaves that hold together instead of turning mushy.",
    tip: "Less water in = loaves that grip perfectly in tiny hands.",
  },
  {
    title: "Build the mixture",
    body: "In a large bowl, combine the ground turkey, squeezed veggies, egg, oats, cheese, parsley, garlic powder and a tiny pinch of salt. Mix with your hands just until everything comes together — about 40 seconds.",
    tip: "Overmixing makes meatloaves dense. Stop as soon as it looks uniform.",
  },
  {
    title: "Rest the mixture",
    body: "Let the bowl sit for 10 minutes so the oats drink up the moisture. This small wait is what keeps the loaves juicy inside and sturdy outside.",
  },
  {
    title: "Shape 12 mini loaves",
    body: "With damp hands, shape the mixture into 12 small oval loaves (about 2 tablespoons each). Mini size means they bake fast, cool fast and fit perfectly in a baby's fist.",
    tip: "Damp hands = no sticking, smoother tops.",
  },
  {
    title: "Bake at 190°C (375°F)",
    body: "Place the loaves on a parchment-lined tray, spacing them a finger apart. Bake for 20–22 minutes until the tops are golden-brown and the centers reach 74°C (165°F).",
  },
  {
    title: "Rest, then serve at the right size",
    body: "Cool 5 minutes — they firm up as they rest. Then serve in the shape your baby's stage needs (see the age guide below). Soft enough to squish between thumb and finger? Then it's ready.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative">
        <div className="relative overflow-hidden">
          <img
            src={meatloavesAsset.url}
            alt="Golden baked turkey and veggie mini meatloaves on a white plate, one broken open showing soft carrot and zucchini flecks inside"
            width={1408}
            height={1920}
            className="w-full h-[300px] object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50 via-transparent to-transparent" />
          <div className="absolute top-3 left-4 right-4 flex justify-between items-center">
            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-700 shadow">
              Savory Finger Food
            </span>
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
              9+ months
            </span>
          </div>
        </div>
        <div className="px-4 pt-3 pb-4 bg-amber-50">
          <h1 className="text-xl font-extrabold text-foreground leading-tight mb-1">
            Turkey Veggie Mini Meatloaves
          </h1>
          <p className="text-xs text-muted-foreground mb-3 leading-snug">
            Tender, protein-packed mini loaves with sweet carrot and zucchini
            baked right in. Golden outside, soft inside — made for little hands.
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { icon: Clock, label: "Prep", value: "10 min" },
              { icon: Flame, label: "Bake", value: "22 min" },
              { icon: Users, label: "Makes", value: "12" },
              { icon: Snowflake, label: "Freezes", value: "Yes" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white rounded-lg border border-amber-200 py-2"
              >
                <Icon className="w-3.5 h-3.5 mx-auto text-amber-600 mb-0.5" />
                <p className="text-[9px] text-muted-foreground uppercase tracking-wide">
                  {label}
                </p>
                <p className="text-[11px] font-bold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="px-4 py-4">
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { icon: Brain, label: "Brain Fats" },
            { icon: Leaf, label: "Hidden Veggies" },
            { icon: Heart, label: "Iron-Rich" },
            { icon: Sparkles, label: "Grab & Go" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-2 rounded-lg border border-amber-200"
            >
              <Icon className="w-4 h-4 mx-auto text-amber-600 mb-1" />
              <p className="text-[9px] text-amber-700 font-medium">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-foreground/80 leading-relaxed mt-3">
          Turkey brings the iron babies need for brain development, while carrot
          and zucchini melt into sweetness — most toddlers never notice the
          vegetables. One batch covers lunch, dinner and a week of freezer
          backups.
        </p>
      </section>

      {/* Ingredients */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">Ingredients</h2>
        <ul className="space-y-1.5">
          {[
            "500 g (1 lb) ground turkey (or chicken)",
            "1 medium carrot, finely grated",
            "1 small zucchini, grated and squeezed dry",
            "½ small onion, finely grated",
            "1 egg (binder)",
            "60 g (½ cup) rolled oats — or 40 g breadcrumbs",
            "30 g (¼ cup) mild grated cheese, e.g. mozzarella",
            "1 tbsp chopped parsley (optional)",
            "¼ tsp garlic powder",
            "Tiny pinch of salt — and that's it",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-[11px] text-foreground/80 flex gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            Egg allergy? Swap the egg for 2 tbsp extra oats plus 2 tbsp milk.
          </span>
        </div>
      </section>

      {/* Step by step */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">
          Step by Step
        </h2>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 shadow-sm">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold text-foreground leading-snug">
                  {step.title}
                </p>
                <p className="text-[11px] text-foreground/75 leading-relaxed mt-0.5">
                  {step.body}
                </p>
                {step.tip && (
                  <p className="text-[10.5px] text-amber-700 bg-amber-50 border border-amber-100 rounded-md px-2 py-1 mt-1.5 leading-snug">
                    💡 {step.tip}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Servings by age */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">
          Serving by Age
        </h2>
        <div className="space-y-2">
          {[
            {
              age: "9–12 mo",
              text: "Cut each loaf into 2–3 thick strips. The rounded shapes are easy to grip and to gum.",
            },
            {
              age: "12–18 mo",
              text: "Serve a whole mini loaf. It's soft enough to take confident bites.",
            },
            {
              age: "6–8 mo",
              text: "Offer mashed or crumbled onto a pre-loaded spoon — the flavor is perfect even before self-feeding.",
            },
          ].map((row) => (
            <div
              key={row.age}
              className="flex gap-3 bg-white border border-amber-100 rounded-lg p-2.5"
            >
              <span className="text-[10px] font-bold text-white bg-amber-500 rounded-full px-2 py-1 h-fit flex-shrink-0">
                {row.age}
              </span>
              <p className="text-[11px] text-foreground/80 leading-snug">
                {row.text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground mt-3 flex gap-2">
          <ShieldCheck className="w-4 h-4 flex-shrink-0" />
          <span>
            Always check the internal temperature has reached 74°C (165°F), and
            let loaves cool until they squish easily — never serve hot from the
            oven.
          </span>
        </p>
      </section>

      {/* Nutrition */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">
          🧡 Why Moms Love It
        </h2>
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3 border border-amber-200">
          <ul className="space-y-2 text-[11px] text-foreground">
            <li>
              <strong>Iron &amp; Protein</strong> — turkey fuels brain growth
              and keeps energy steady between naps
            </li>
            <li>
              <strong>Vitamin A</strong> — carrot supports eyes and immunity
            </li>
            <li>
              <strong>Gentle Fiber</strong> — zucchini and oats keep digestion
              happy
            </li>
            <li>
              <strong>No sugar, no filler</strong> — real food you can see and
              name
            </li>
            <li>
              <strong>Batch-friendly</strong> — one tray becomes four meals
            </li>
          </ul>
        </div>
      </section>

      {/* Storage */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-1">Storage</h2>
        <ul className="space-y-1.5">
          {[
            "Fridge: airtight container, up to 3 days.",
            "Freezer: freeze on a tray, then bag — up to 2 months.",
            "Reheat: steam or microwave until warmed through, then cool to squishy before serving.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[11px] text-muted-foreground"
            >
              <Snowflake className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= APP LAUNCH ================= */}
      <section id="launch" className="px-4 py-5 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-5 shadow-xl border-2 border-orange-400">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-full bg-white/10" />
          <div className="relative text-center">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur px-3 py-1 rounded-full mb-3">
              <Bell className="w-3 h-3 text-white animate-pulse" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-white">
                Big announcement
              </p>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/90 mb-1">
              {daysLeft > 0 ? `${daysLeft} days to go` : "It's here!"}
            </p>
            <h2 className="text-2xl font-extrabold text-white leading-tight mb-2">
              The BabyBites App
              <br />
              launches November 30
            </h2>
            <p className="text-[12px] text-white/90 leading-relaxed mb-4">
              Recipes for babies, snacks and the whole family — with meal plans
              and shopping lists that build themselves. If this mini meatloaf
              won you over, imagine 300+ recipes like it, all in your pocket.
            </p>

            <div className="bg-white/15 backdrop-blur rounded-xl p-3 mb-4 text-left">
              <ul className="space-y-2 text-[11.5px] text-white">
                {[
                  "300+ pediatrician-reviewed recipes, filtered by age",
                  "Weekly meal plans and automatic shopping lists",
                  "Food scanner, allergen tracker and serving-size guides",
                  "From first purées to family dinners — one app for it all",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-3 mb-4 text-left">
              <p className="text-[11px] font-bold text-orange-700 uppercase tracking-wide mb-1">
                Do these 3 things before November 30
              </p>
              <ol className="space-y-1.5 text-[11px] text-foreground/85">
                <li className="flex gap-2">
                  <span className="w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong>Save the date</strong> — set a reminder for Nov 30
                    so you're there when doors open.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong>Get ready to move fast</strong> — founding members
                    who join on day one will lock in the best terms. Put a
                    little aside each week between now and then, so nothing
                    holds you back.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong>Join the WhatsApp group</strong> — every detail,
                    every date and every surprise will be shared there first.
                  </span>
                </li>
              </ol>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-orange-600 font-extrabold rounded-full py-4 shadow-lg flex items-center justify-center gap-2 text-sm hover:bg-orange-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Not in the WhatsApp group yet? Join now
              <ChevronRight className="w-4 h-4" />
            </a>
            <p className="text-[10px] text-white/80 mt-2">
              Screenshots, videos and launch-day news drop in the group first 🔔
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5 mb-2 px-1">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <p className="text-[10px] font-bold uppercase tracking-wider text-orange-700">
              First look inside the app
            </p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { img: appRecipes, label: "300+ recipes by age" },
              { img: appShopping, label: "Auto shopping lists" },
            ].map(({ img, label }) => (
              <div
                key={label}
                className="snap-center flex-shrink-0 w-[260px] rounded-xl overflow-hidden border border-orange-200 bg-white shadow-md"
              >
                <img
                  src={img}
                  alt={label}
                  className="w-full h-[300px] object-cover object-top"
                  loading="lazy"
                />
                <p className="text-[10.5px] font-semibold text-foreground/80 px-3 py-2 flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-orange-500 flex-shrink-0" />
                  {label}
                </p>
              </div>
            ))}
            <div className="snap-center flex-shrink-0 w-[200px] rounded-xl border border-dashed border-orange-300 bg-white/60 p-4 flex flex-col items-center justify-center text-center">
              <CalendarCheck className="w-6 h-6 text-orange-500 mb-2" />
              <p className="text-[11px] font-bold text-foreground/80 mb-1">
                More screens coming
              </p>
              <p className="text-[10px] text-muted-foreground leading-snug">
                New previews will be revealed in the WhatsApp group.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-[10.5px] text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
          <Download className="w-3.5 h-3.5" />
          The app will be free to download on November 30 — details in the group
        </p>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 text-center">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Made with care for busy, loving parents. 🧡
        </p>
      </footer>
    </div>
  );
};

export default Index;
