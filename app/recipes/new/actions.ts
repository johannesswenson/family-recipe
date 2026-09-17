"use server"

import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma";

export type CreateRecipeState = {
    error?: string;
};

export async function createRecipe(
    _previousState: CreateRecipeState,
    formData: FormData,
):  Promise<CreateRecipeState> {
   const title = String(formData.get("title") ?? "").trim();
   const description = String(formData.get("description") ?? "").trim();
   const category = String(formData.get("category") ?? "").trim();
   const prepTime = Number(formData.get("prepTime"));
   const servings = Number(formData.get("servings"));

   const ingredients = String(formData.get("ingredients") ?? "")
    .split("\n")
    .map((ingredient) => ingredient.trim())
    .filter(Boolean);

   const instructions = String(formData.get("instructions") ?? "")
    .split("\n")
    .map((instruction) => instruction.trim())
    .filter(Boolean);

    if (!title) {
        return { error: "Du måste ange ett namn på receptet." };
    }

    if (!description) {
        return { error: "Du måste ange en beskrivning." };
    }

    if (!category) {
        return { error: "Du måste ange en kategori." };
    }

    if (!Number.isInteger(prepTime) || prepTime <= 0) {
        return { error: "Tillagningstiden måste vara ett positivt heltal." };
    }

    if (!Number.isInteger(servings) || servings <= 0) {
        return { error: "Antal portioner måste vara ett positivt heltal." };
    }

    if (ingredients.length === 0) {
        return { error: "Du måste ange minst en ingrediens." };
    }

    if (instructions.length === 0) {
        return { error: "Du måste ange minst en instruktion." };
    }

    const slug = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const existingRecipe = await prisma.recipe.findUnique({
        where: {
            slug,
        },
    });

    if (existingRecipe) {
        return {
            error: "Det finns redan ett recept med det namnet.",
        };
    }

   let recipe;

    try {
        recipe = await prisma.recipe.create({
            data: {
                title,
                slug,
                description,
                image: "",
                category,
                prepTime,
                servings,
                ingredients,
                instructions,
            },
           });
    } catch {
        return {
            error: "Något gick fel när receptet skulle sparas. Försök igen.",
        };
    }
    redirect(`/recipes/${recipe.slug}`);
}