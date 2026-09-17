"use client"

import { RecipeForm } from "@/components/recipes/recipe-form";


export default function NewRecipePage() {

    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-3xl px-6 py-18">
                <div className="max-w-2xl">
                    <p className="font-sans text-sm uppercase tracking-widest text-accent">
                        Nytt recept
                    </p>

                    <h1 className="mt-4 font-display text-5xl text-foreground">
                        Lägg till recept
                    </h1>

                    <p className="mt-4 font-sans text-lg leading-8 text-muted">
                        Lägg till ett recept i familjens kokbok.
                    </p>
                </div>
                <RecipeForm />
            </div>
        </main>
    );
}