import recipeImage from "@/assets/recipe-avocado-banana.jpg";
import appRecipes from "@/assets/app-recipes.png";
import appShopping from "@/assets/app-shopping.png";
import { Check, Clock, Brain, Leaf, Heart, Download, Star, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRecipePdf } from "@/hooks/useRecipePdf";

const Index = () => {
  const { generateRecipePdf } = useRecipePdf();
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full">
          <img 
            src={recipeImage} 
            alt="Creamy Avocado & Banana Purée - First Foods Recipe for Babies 6+ months" 
            className="w-full h-auto object-cover"
            width={1024}
            height={1024}
          />
        </div>
        <div className="px-4 py-4 bg-amber-50">
          <p className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1">First Foods Recipe</p>
          <h1 className="text-lg font-bold text-foreground leading-tight mb-1">
            Creamy Avocado & Banana Brain-Boost Purée
          </h1>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <Clock className="w-3 h-3" />
            5 min • No cooking • 6+ months
          </p>
        </div>
      </section>

      {/* Recipe Benefits */}
      <section className="px-4 py-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-2 rounded-lg border border-amber-200">
            <Brain className="w-4 h-4 mx-auto text-amber-600 mb-1" />
            <p className="text-[9px] text-amber-700 font-medium">Brain Dev</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-2 rounded-lg border border-amber-200">
            <Leaf className="w-4 h-4 mx-auto text-amber-600 mb-1" />
            <p className="text-[9px] text-amber-700 font-medium">Healthy Fats</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-2 rounded-lg border border-amber-200">
            <Heart className="w-4 h-4 mx-auto text-amber-600 mb-1" />
            <p className="text-[9px] text-amber-700 font-medium">Potassium</p>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">Ingredients</h2>
        <ul className="space-y-1.5">
          {[
            "1/2 ripe avocado (healthy fats for brain development)",
            "1/2 ripe banana (natural sweetness + potassium)",
            "1-2 tbsp breast milk or formula (creamy texture)",
            "Tiny squeeze of lemon (keeps color fresh, optional)",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">Instructions</h2>
        <ol className="space-y-2">
          {[
            "Scoop the ripe avocado flesh into a bowl",
            "Peel and slice the banana on top",
            "Add a squeeze of lemon to keep the color bright",
            "Mash with a fork or blend until silky smooth",
            "Add breast milk or formula slowly until creamy",
            "Serve fresh and watch baby smile!",
          ].map((step, i) => (
            <li key={i} className="flex gap-2 text-xs text-foreground">
              <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Why Babies Love It */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">Why Babies Love It</h2>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3 space-y-1.5 border border-amber-100">
          {[
            "Buttery smooth texture babies can't resist",
            "Naturally sweet — zero added sugar",
            "Ready in 5 minutes, no cooking required",
            "Perfect creamy first food for tiny tummies",
          ].map((benefit, i) => (
            <p key={i} className="flex items-center gap-2 text-[11px] text-foreground">
              <Check className="w-3 h-3 text-amber-600 flex-shrink-0" />
              {benefit}
            </p>
          ))}
        </div>
      </section>

      {/* Health Benefits */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-2">🧡 Health Benefits</h2>
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-3 border border-amber-200">
          <ul className="space-y-2 text-[11px] text-foreground">
            <li><strong>Healthy Fats</strong> — Avocado is loaded with brain-building omega fats</li>
            <li><strong>Potassium</strong> — More than a banana alone, supports heart & muscles</li>
            <li><strong>Fiber</strong> — Keeps baby's digestion smooth and gentle</li>
            <li><strong>Vitamin E & K</strong> — Boosts immunity and healthy growth</li>
            <li><strong>Folate</strong> — Essential for rapid cell development</li>
          </ul>
        </div>

        {/* Scroll Indicator - Gift Tease */}
        <div className="mt-4 flex flex-col items-center text-center animate-fade-in">
          <div className="relative bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 text-white rounded-2xl px-4 py-3 shadow-lg max-w-[320px]">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Gift className="w-4 h-4" />
              <p className="text-[11px] font-bold uppercase tracking-wide">Surprise Below!</p>
              <Gift className="w-4 h-4" />
            </div>
            <p className="text-[11px] leading-snug font-medium">
              Keep scrolling to unlock a special little gift we left just for you 🎁
            </p>
          </div>
          <div className="mt-2 flex flex-col items-center">
            <ChevronDown className="w-5 h-5 text-amber-600 animate-bounce" style={{ animationDelay: "0s" }} />
            <ChevronDown className="w-5 h-5 text-amber-500 -mt-3 animate-bounce" style={{ animationDelay: "0.15s" }} />
            <ChevronDown className="w-5 h-5 text-amber-400 -mt-3 animate-bounce" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
      </section>

      {/* Storage Tips */}
      <section className="px-4 py-3">
        <h2 className="text-sm font-bold text-foreground mb-1">Storage</h2>
        <p className="text-[11px] text-muted-foreground">
          Best served fresh! Refrigerate in an airtight container with a squeeze of lemon for up to 24 hours. Not recommended for freezing — texture changes once thawed.
        </p>
      </section>

      {/* Download PDF Button */}
      <section className="px-4 py-4">
        <Button 
          onClick={generateRecipePdf}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm py-5 rounded-full shadow-lg flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download Recipe PDF
        </Button>
      </section>

      {/* Age Guide Section */}
      <section className="px-4 py-5 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="text-center mb-5">
          <p className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1">Feeding Guide</p>
          <h2 className="text-base font-bold text-foreground leading-tight">
            When to Introduce Each Texture
          </h2>
        </div>
        
        <div className="relative">
          <div className="absolute left-[22px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-300 via-green-300 via-blue-300 to-purple-300" />
          
          <div className="space-y-4">
            <div className="relative flex gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-md z-10 flex-shrink-0">
                <span className="text-white text-[10px] font-bold">6+</span>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-orange-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-foreground">Smooth Purees</h3>
                  <div className="flex gap-0.5">
                    <div className="w-6 h-2 rounded-full bg-orange-400" />
                    <div className="w-6 h-2 rounded-full bg-orange-100" />
                    <div className="w-6 h-2 rounded-full bg-orange-100" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  🥑 Avocado, banana, sweet potato, carrot — blended silky smooth
                </p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-md z-10 flex-shrink-0">
                <span className="text-white text-[10px] font-bold">7-8</span>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-green-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-foreground">Soft Mashes</h3>
                  <div className="flex gap-0.5">
                    <div className="w-6 h-2 rounded-full bg-green-400" />
                    <div className="w-6 h-2 rounded-full bg-green-400" />
                    <div className="w-6 h-2 rounded-full bg-green-100" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  🥦 Broccoli, peas, chicken, yogurt — mashed with small soft lumps
                </p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-md z-10 flex-shrink-0">
                <span className="text-white text-[10px] font-bold">9-11</span>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-blue-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-foreground">Finger Foods</h3>
                  <div className="flex gap-0.5">
                    <div className="w-6 h-2 rounded-full bg-blue-400" />
                    <div className="w-6 h-2 rounded-full bg-blue-400" />
                    <div className="w-6 h-2 rounded-full bg-blue-300" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  🍝 Pasta, soft fruits, eggs, cheese — soft chunks for self-feeding
                </p>
              </div>
            </div>

            <div className="relative flex gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-md z-10 flex-shrink-0">
                <span className="text-white text-[10px] font-bold">12+</span>
              </div>
              <div className="flex-1 bg-card rounded-xl p-3 border border-purple-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-foreground">Family Meals</h3>
                  <div className="flex gap-0.5">
                    <div className="w-6 h-2 rounded-full bg-purple-400" />
                    <div className="w-6 h-2 rounded-full bg-purple-400" />
                    <div className="w-6 h-2 rounded-full bg-purple-400" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  🍎 Most foods! Cut small, avoid honey & whole nuts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-amber-200" />

      {/* PERSUASIVE APP PROMO / CTA SECTION */}
      <section className="px-4 py-7 bg-gradient-to-b from-amber-50 via-orange-50 to-orange-100">
        {/* Urgency badge */}
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center gap-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md animate-pulse">
            <Zap className="w-3 h-3" /> Limited Time Offer
          </span>
        </div>

        <div className="text-center mb-4">
          <p className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold mb-1">
            Join 1,000+ Happy Moms
          </p>
          <h2 className="text-xl font-extrabold text-foreground leading-tight">
            Stop Stressing About<br/>What to Feed Your Baby
          </h2>
          <p className="text-[12px] text-foreground/80 mt-2 leading-snug">
            Get <strong className="text-amber-700">300+ pediatrician-approved recipes</strong>, weekly meal plans, and a smart food scanner — all in one app.
          </p>
        </div>

        {/* Star rating social proof */}
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-[11px] text-foreground/70 ml-1 font-medium">4.9/5 — 1,000+ reviews</span>
        </div>

        {/* App Screenshots */}
        <div className="flex gap-2 justify-center mb-4">
          <img 
            src={appRecipes} 
            alt="BabyBites App - Recipes" 
            className="w-[45%] max-w-[160px] h-auto rounded-lg shadow-lg border border-amber-200"
            loading="lazy"
          />
          <img 
            src={appShopping} 
            alt="BabyBites App - Shopping List" 
            className="w-[45%] max-w-[160px] h-auto rounded-lg shadow-lg border border-amber-200"
            loading="lazy"
          />
        </div>

        {/* Testimonial */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 mb-4 border border-amber-200 shadow-sm">
          <div className="flex gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-[11px] text-foreground italic leading-snug mb-1">
            "I used to panic at every meal. Now I open the app, pick a recipe, and my baby actually eats it. Total game changer."
          </p>
          <p className="text-[10px] text-muted-foreground font-medium">— Sarah M., mom of 8-month-old</p>
        </div>

        {/* What you get */}
        <div className="bg-white/60 rounded-xl p-3 mb-4 border border-amber-200">
          <p className="text-[11px] font-bold text-amber-800 mb-2 text-center uppercase tracking-wide">What You Get Today</p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {[
              "300+ healthy recipes",
              "Weekly meal planner",
              "Food safety scanner",
              "Growth tracker",
              "Smart shopping list",
              "Mom community",
              "Allergy tracker",
              "Expert nutrition tips",
            ].map((feature, i) => (
              <p key={i} className="flex items-center gap-1.5 text-[10px] text-foreground font-medium">
                <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                {feature}
              </p>
            ))}
          </div>
        </div>

        {/* Risk reversal */}
        <div className="flex items-center justify-center gap-1.5 mb-3 text-[10px] text-foreground/70">
          <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
          <span><strong>100% free to try</strong> — no credit card required</span>
        </div>

        {/* CTA Button */}
        <a 
          href="https://babybitespage.lovable.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white font-extrabold text-base py-6 rounded-full shadow-2xl flex items-center justify-center gap-2 transform hover:scale-[1.02] transition-all">
            <Sparkles className="w-4 h-4" />
            Get Instant Access — Free
          </Button>
        </a>
        <p className="text-center text-[10px] text-muted-foreground mt-2">
          ⏱ Takes 30 seconds • Join thousands of moms today
        </p>
      </section>

      <footer className="px-4 py-4 text-center bg-amber-50">
        <p className="text-[9px] text-muted-foreground">
          © 2024 BabyBites. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
