"use server"

import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma";

export async function createRecipe(formData: FormData) {
   const title = formData.get("title") as string;
   const description = formData.get("description") as string;
   const category = formData.get("category") as string;
   const prepTime = Number(formData.get("prepTime"));
   const servings = Number(formData.get("servings"));
   const ingredients = String(formData.get("ingredients"))
    .split("\n")
    .map((ingredient) => ingredient.trim())
    .filter(Boolean);
   const instructions = String(formData.get("instructions"))
    .split("\n")
    .map((instruction) => instruction.trim())
    .filter(Boolean);

   console.log({
    title,
    description,
    category,
    prepTime,
    servings,
    ingredients,
    instructions,
   });

   const recipe = await prisma.recipe.create({
    data: {
        title,
        slug: title.toLowerCase().replaceAll(" ", "-"),
        description,
        image: "",
        category,
        prepTime,
        servings,
        ingredients,
        instructions,
    },
   });

   redirect(`/recipes/${recipe.slug}`);
}