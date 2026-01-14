import { jsPDF } from "jspdf";

interface RecipeData {
  title: string;
  subtitle: string;
  time: string;
  age: string;
  ingredients: string[];
  instructions: string[];
  benefits: string[];
  brainBoostBenefits: { title: string; description: string }[];
  storage: string;
}

const recipeData: RecipeData = {
  title: "Brain Boost Recipe",
  subtitle: "Exotic Mango Mind Purée",
  time: "15 min",
  age: "6+ months",
  ingredients: [
    "1 ripe mango, peeled and cubed (vitamin A + antioxidants)",
    "2 tbsp fresh passion fruit pulp (vitamin C + fiber)",
    "2 tbsp coconut cream (healthy MCT fats)",
    "1 tsp ground flaxseed (omega-3 for brain)",
    "Tiny pinch of vanilla (optional)"
  ],
  instructions: [
    "Cut ripe mango into small cubes",
    "Scoop fresh passion fruit pulp (strain seeds if desired)",
    "Add mango cubes to blender",
    "Add passion fruit and coconut cream",
    "Blend until silky smooth",
    "Stir in ground flaxseed and vanilla",
    "Serve immediately at room temperature"
  ],
  benefits: [
    "Sweet tropical flavor - like a vacation in a bowl!",
    "Vibrant golden color attracts baby's eyes",
    "Ultra-smooth, silky texture from ripe mango",
    "No cooking - fresh and full of enzymes"
  ],
  brainBoostBenefits: [
    { title: "Omega-3 (ALA)", description: "Neural development" },
    { title: "Vitamin A", description: "Brain cell growth & vision" },
    { title: "MCT Fats", description: "Quick brain energy" },
    { title: "Vitamin C", description: "Neuron protection" }
  ],
  storage: "Best fresh! Fridge: 24h. Freezer: 1 month in ice cube trays."
};

export const generateRecipePdf = () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = 12;

  // Header background
  doc.setFillColor(254, 243, 199); // amber-100
  doc.rect(0, 0, pageWidth, 42, "F");

  // Decorative circles
  doc.setFillColor(251, 191, 36); // amber-400
  doc.circle(pageWidth - 10, 8, 15, "F");
  doc.setFillColor(245, 158, 11); // amber-500
  doc.circle(12, 38, 10, "F");

  // Small brain icon circle
  doc.setFillColor(217, 119, 6); // amber-600
  doc.circle(pageWidth / 2, 10, 6, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("B", pageWidth / 2, 12, { align: "center" });

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(217, 119, 6); // amber-600
  y = 22;
  doc.text("BRAIN BOOST RECIPE", pageWidth / 2, y, { align: "center" });

  doc.setFontSize(18);
  doc.setTextColor(55, 65, 81); // gray-700
  y += 9;
  doc.text(recipeData.subtitle, pageWidth / 2, y, { align: "center" });

  // Time & Age badges
  doc.setFontSize(9);
  doc.setTextColor(107, 114, 128);
  y += 7;
  doc.text(recipeData.time + " • No cooking • " + recipeData.age, pageWidth / 2, y, { align: "center" });

  y = 48;

  // Benefits bar
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(margin, y, contentWidth, 12, 2, 2, "F");
  
  const benefitLabels = ["Brain Power", "Vitamin Rich", "Omega-3"];
  const benefitWidth = contentWidth / 3;
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(180, 83, 9); // amber-700
  benefitLabels.forEach((benefit, i) => {
    const x = margin + benefitWidth * i + benefitWidth / 2;
    doc.setFillColor(245, 158, 11);
    doc.circle(x - 14, y + 6, 2, "F");
    doc.text(benefit, x, y + 7.5, { align: "center" });
  });

  y += 18;

  // Two column layout for Ingredients and Instructions
  const colWidth = (contentWidth - 6) / 2;
  const leftColX = margin;
  const rightColX = margin + colWidth + 6;

  // Ingredients Section (Left Column)
  doc.setFillColor(255, 251, 235); // amber-50
  doc.roundedRect(leftColX, y, colWidth, 52, 3, 3, "F");
  doc.setDrawColor(253, 230, 138); // amber-200
  doc.setLineWidth(0.3);
  doc.roundedRect(leftColX, y, colWidth, 52, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(55, 65, 81);
  doc.text("Ingredients", leftColX + 5, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(75, 85, 99);
  
  let ingredientY = y + 15;
  recipeData.ingredients.forEach((ingredient) => {
    doc.setFillColor(245, 158, 11);
    doc.circle(leftColX + 6, ingredientY - 0.5, 1, "F");
    const lines = doc.splitTextToSize(ingredient, colWidth - 14);
    doc.text(lines, leftColX + 10, ingredientY);
    ingredientY += lines.length * 4 + 3;
  });

  // Instructions Section (Right Column)
  doc.setFillColor(255, 251, 235);
  doc.roundedRect(rightColX, y, colWidth, 52, 3, 3, "F");
  doc.setDrawColor(253, 230, 138);
  doc.setLineWidth(0.3);
  doc.roundedRect(rightColX, y, colWidth, 52, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(55, 65, 81);
  doc.text("Instructions", rightColX + 5, y + 8);

  doc.setFontSize(8);
  let instructY = y + 15;
  recipeData.instructions.forEach((instruction, i) => {
    doc.setFillColor(245, 158, 11);
    doc.circle(rightColX + 6, instructY - 0.5, 2.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6);
    doc.text(String(i + 1), rightColX + 6, instructY + 0.5, { align: "center" });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(75, 85, 99);
    const lines = doc.splitTextToSize(instruction, colWidth - 16);
    doc.text(lines, rightColX + 12, instructY);
    instructY += lines.length * 4 + 2;
  });

  y += 58;

  // Why Babies Love It Section
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(margin, y, contentWidth, 28, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(55, 65, 81);
  doc.text("Why Babies Love It", margin + 5, y + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(75, 85, 99);
  
  let benefitY = y + 13;
  const halfBenefits = Math.ceil(recipeData.benefits.length / 2);
  
  // Left column benefits
  recipeData.benefits.slice(0, halfBenefits).forEach((benefit) => {
    doc.setFillColor(34, 197, 94);
    doc.circle(margin + 6, benefitY, 1, "F");
    doc.text(benefit, margin + 10, benefitY + 1);
    benefitY += 5;
  });
  
  // Right column benefits
  benefitY = y + 13;
  recipeData.benefits.slice(halfBenefits).forEach((benefit) => {
    doc.setFillColor(34, 197, 94);
    doc.circle(margin + colWidth + 8, benefitY, 1, "F");
    doc.text(benefit, margin + colWidth + 12, benefitY + 1);
    benefitY += 5;
  });

  y += 33;

  // Brain Boost Benefits Section
  doc.setFillColor(255, 237, 213); // orange-100
  doc.roundedRect(margin, y, contentWidth, 22, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(55, 65, 81);
  doc.text("Brain Boost Benefits", margin + 5, y + 7);

  doc.setFontSize(8);
  const brainColWidth = contentWidth / 2 - 5;
  let brainY = y + 13;
  
  recipeData.brainBoostBenefits.slice(0, 2).forEach((benefit) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(180, 83, 9);
    doc.text(benefit.title + ": ", margin + 5, brainY);
    const titleWidth = doc.getTextWidth(benefit.title + ": ");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(75, 85, 99);
    doc.text(benefit.description, margin + 5 + titleWidth, brainY);
    brainY += 5;
  });
  
  brainY = y + 13;
  recipeData.brainBoostBenefits.slice(2).forEach((benefit) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(180, 83, 9);
    doc.text(benefit.title + ": ", margin + brainColWidth + 10, brainY);
    const titleWidth = doc.getTextWidth(benefit.title + ": ");
    doc.setFont("helvetica", "normal");
    doc.setTextColor(75, 85, 99);
    doc.text(benefit.description, margin + brainColWidth + 10 + titleWidth, brainY);
    brainY += 5;
  });

  y += 27;

  // Storage Section (compact)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(55, 65, 81);
  doc.text("Storage: ", margin, y);
  const storageTitle = doc.getTextWidth("Storage: ");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(107, 114, 128);
  doc.text(recipeData.storage, margin + storageTitle, y);

  y += 10;

  // ========== PROMOTIONAL CTA SECTION ==========
  doc.setFillColor(255, 237, 213); // orange-100
  doc.roundedRect(margin, y, contentWidth, 42, 5, 5, "F");
  
  doc.setDrawColor(251, 146, 60); // orange-400
  doc.setLineWidth(0.8);
  doc.roundedRect(margin, y, contentWidth, 42, 5, 5, "S");

  // Decorative circle
  doc.setFillColor(251, 191, 36);
  doc.circle(margin + 10, y + 8, 5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("+", margin + 10, y + 10, { align: "center" });

  // Main CTA text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(180, 83, 9);
  doc.text("Loved this recipe?", pageWidth / 2, y + 10, { align: "center" });

  doc.setFontSize(10);
  doc.setTextColor(55, 65, 81);
  doc.text("Get 300+ recipes in the best baby nutrition app!", pageWidth / 2, y + 18, { align: "center" });

  // CTA Button
  const buttonWidth = 70;
  const buttonHeight = 10;
  const buttonX = (pageWidth - buttonWidth) / 2;
  const buttonY = y + 26;

  // Button shadow
  doc.setFillColor(217, 119, 6);
  doc.roundedRect(buttonX + 1, buttonY + 1, buttonWidth, buttonHeight, 5, 5, "F");
  
  // Button background
  doc.setFillColor(245, 158, 11);
  doc.roundedRect(buttonX, buttonY, buttonWidth, buttonHeight, 5, 5, "F");

  // Button text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text("LEARN MORE >>", pageWidth / 2, buttonY + 7, { align: "center" });

  // Clickable links
  doc.link(buttonX, buttonY, buttonWidth, buttonHeight, { url: "https://babybitespage.lovable.app/" });
  doc.link(margin, y, contentWidth, 42, { url: "https://babybitespage.lovable.app/" });

  // Footer
  doc.setFillColor(254, 243, 199);
  doc.rect(0, pageHeight - 12, pageWidth, 12, "F");
  
  doc.setFontSize(7);
  doc.setTextColor(180, 83, 9);
  doc.text("Made with love by BabyBites | babybitespage.lovable.app", pageWidth / 2, pageHeight - 5, { align: "center" });

  // Download
  doc.save("exotic-mango-mind-puree.pdf");
};

export const useRecipePdf = () => {
  return { generateRecipePdf };
};