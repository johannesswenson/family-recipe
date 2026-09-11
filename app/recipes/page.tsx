import { RecipeGrid } from "@/components/recipes/recipe-grid";
import { prisma } from "@/lib/prisma";

export default async function RecipesPage() {
    const recipes = await prisma.recipe.findMany({
        orderBy: {
            createdAt: "asc",
        },
    });

    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="max-w-2xl">
                    <p className="font-sans text-sm uppercase tracking-widest text-accent">
                        Alla recept
                    </p>

                    <h1 className="mt-4 font-display text-5xl text-foreground">
                        Något gott?
                    </h1>

                    <p className="mt-4 font-sans text-lg leading-8 text-muted">
                        Familjens samling av recept, favoriter och sånt vi gillar att äta.
                    </p>
                </div>

                <div className="mt-12">
                    <RecipeGrid recipes={recipes}/>
                </div>
            </div>
        </main>
    );
}