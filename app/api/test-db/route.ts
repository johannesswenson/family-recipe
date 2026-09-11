import { prisma } from "@/lib/prisma";
import { recipes } from "@/data/recipes";
import { NextResponse } from "next/server";

export async function GET() {
    for (const recipe of recipes) {
        await prisma.recipe.upsert({
            where: {
                slug: recipe.slug,
            },
            update: recipe,
            create: recipe,
        });
    }

    const savedRecipes = await prisma.recipe.findMany({
        orderBy: {
            createdAt: "asc",
        },
    });

    return NextResponse.json(savedRecipes);
}