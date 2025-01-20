import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const { prompt, category, difficulty, timing, image } = await req.json();

    const recipePrompt = `
      Here are some values: ${prompt ? prompt : "No ingredient provided."}. 
      Category: ${category}. 
      Difficulty: ${difficulty}. 
      Cooking Time: ${timing}. 
      Image provided: ${image.length > 0 ? "Yes" : "No"}.

      If the image contains an ingredient, generate 3 different recipes that match the ${category}, ${difficulty}, and ${timing}. 

      Each recipe should be less than 250 words and should include step-by-step instructions. Also mention the nutrition facts of the recipe like calories, protein, carbs ,fats etc. Separate each recipe with '|||'`;


    const result = await model.generateContent(recipePrompt);

    const recipe = result.response.text();
    return NextResponse.json({ recipe });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error generating recipe" }, { status: 500 });
  }
}






