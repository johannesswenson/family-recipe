import { createRecipe } from "./actions";

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

                <form action={createRecipe} className="mt-12 space-y-8">
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
                            min={1}
                            placeholder="4"
                            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent"
                        />
                    </div>

                    <div className="border border-border pt-8">
                        <p className="font-sans text-sm font-medium text-foreground">
                            Ingredienser
                        </p>

                        <p className="mt-1 font-sans text-sm text-muted">
                            MVP textfält
                        </p>

                        <textarea 
                            name="ingredients"
                            rows={6}
                            placeholder={"400g Kyckling lårfilé\nEm massa chiliolja\nEn hel del socker"}
                            className="mt-4 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent" 
                        />
                    </div>

                    <div>
                        <p className="font-sans text-sm font-medium text-foreground">
                            Instruktioner
                        </p>

                        <p className="mt-1 font-sans text-sm text-muted">
                            Skriv ett steg per rad.
                        </p>

                        <textarea 
                            name="instructions"
                            rows={8}
                            placeholder={
                                "Hacka kycklingen i små kuber\nSalta och peppra\nStek de små kuberna hårt till de blir krispiga.\nBlanda med olja och socker"
                            }
                            className="mt-4 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 font-sans text-foreground outline-none placeholder:text-muted focus:border-accent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-full bg-accent px-6 py-3 font-sans font-medium text-background transition-opacity hover:opacity-90"
                    >
                        Spara recept
                    </button>
                </form>
            </div>
        </main>
    );
}