"use-client";

import { useActionState, useState } from "react";
import { createRecipe } from "@/app/recipes/new/actions";

export function RecipeForm() {
   const [state, formAction] = useActionState(createRecipe, {
    values: {
        title: "",
        description: "",
        category: "",
        prepTime: "",
        servings: "",
        ingredients: [""],
        instructions: [""],
    },
   });
   const [ingredients, setIngredients] = useState([""]);
   const [instructions, setInstructions] = useState([""]);

   return (
    <form action={formAction} className="mt-12 space-y-8">

        {state.error && (
            <div
                role="alert"
                className="rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 font-sans text-sm text-red-300"
            >
                {state.error}
            </div>
        )}

        <div>
            <label
                htmlFor="title"
                className="font-sans text-sm font-medium text-foreground"
            >
                Namn på recept
            </label>

            <input
                id="title"
                name="title"
                defaultValue={state.values?.title ?? ""}
                type="text"
                placeholder="T.ex. Kyckling i röd olja"
                className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent"
            />
        </div>

        <div>
            <label
                htmlFor="description"
                className="font-sans text-sm font-medium text-foreground"
            >
                Beskrivning
            </label>

            <textarea 
                id="description"
                name="description"
                defaultValue={state.values?.description ?? ""}
                rows={4}
                placeholder="En kort beskrivning av receptet..."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent"
            />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
            <div>
                <label 
                    htmlFor="category"
                    className="font-sans text-sm font-medium text-foreground"
                >

                    Kategori
                </label>

                <input 
                    id="category"
                    name="category"
                    type="text"
                    defaultValue={state.values?.category ?? ""}
                    placeholder="T.ex. Middag"
                    className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent"
                />
            </div>

            <div>
                <label
                    htmlFor="prepTime"
                    className="font-sans text-sm font-medium text-foreground"
                >
                    Tid (minuter)
                </label>

                <input 
                    id="prepTime"
                    name="prepTime"
                    type="number"
                    defaultValue={state.values?.prepTime ?? ""}
                    min={1}
                    placeholder="30"
                    className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent"
                />
            </div>
        </div>

        <div>
            <label
                htmlFor="servings"
                className="font-sans text-sm font-medium text-foreground"
            >

                Antal portioner
            </label>

            <input 
                id="servings"
                name="servings"
                type="number"
                defaultValue={state.values?.servings ?? ""}
                min={1}
                placeholder="4"
                className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent"
            />
        </div>

        <div className="border border-border pt-8">
            <p className="font-sans text-sm font-medium text-foreground">
                Ingredienser
            </p>

            <input 
                type="hidden"
                name="ingredients"
                value={ingredients.join("\n")}
            />

            <input 
                type="hidden"
                name="instructions"
                value={instructions.join("\n")}
            />
            
            <div className="mt-4 space-y-3">
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex gap-3">
                        <input
                            type="text"
                            value={ingredient}
                            onChange={(event) => {
                                const newIngredients = [...ingredients];
                                newIngredients[index] = event.target.value;
                                setIngredients(newIngredients);
                            }}
                            placeholder="T.ex. 500 gram köttfärs"
                            className="w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent"
                        />

                        <button
                            type="button"
                            onClick={() => {
                                if (ingredients.length === 1) return;

                                setIngredients(
                                    ingredients.filter((_, ingredientIndex) => ingredientIndex !== index),
                                );
                            }}
                            className="hrink-0 px-3 font-sans text-sm text-muted transition-colors hover:text-foreground"
                            aria-label={`Ta bort ingrediens ${index + 1}`}
                        >
                            x
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={() => setIngredients([...ingredients, ""])}
                    className="font-sans text-sm font-medium text-accent transition-opacity hover:opacity-80"
                >
                    + Lägg till ingrediens
                </button>
            </div>
        </div>

        <div>
            <p className="font-sans text-sm font-medium text-foreground">
                Instruktioner
            </p>

            <div className="mt-4 space-y-3">
                {instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-3">
                        <input 
                            type="text"
                            value={instruction}
                            onChange={(event) => {
                                const newInstructions = [...instructions];
                                newInstructions[index] = event.target.value;
                                setInstructions(newInstructions);
                            }}
                            placeholder={`Steg ${index + 1}`}
                            className="w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent"
                        />

                        <button
                            type="button"
                            onClick={() => {
                                if (instructions.length === 1) return;
                                
                                setInstructions(
                                    instructions.filter(
                                        (_, instructionIndex) => instructionIndex !== index,
                                    ),
                                );
                            }}
                            className="shrink-0 px-3 font-sans text-sm text-muted transition-colors hover:text-foreground"
                            aria-label={`Ta bort steg ${index + 1}`}
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => setInstructions([...instructions, ""])}
                className="mt-4 font-sans text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
                + Lägg till steg
            </button>
        </div>

        <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 font-sans font-medium text-background transition-opacity hover:opacity-90"
        >
            Spara recept
        </button>
    </form>
   );
}