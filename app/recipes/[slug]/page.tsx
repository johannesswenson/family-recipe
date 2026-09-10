import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "@/data/recipes";

type RecipePageProps = {
    params: Promise<{
      slug: string;
    }>;
  };

export default async function RecipePage({ params }:RecipePageProps) {
    const { slug } = await params;

    const recipe = recipes.find((recipe) => recipe.slug === slug);

    if (!recipe) {
        notFound();
    }

    return (
        <main className="in-h-screen bg-background">
            <div>
                <Link
                    href="/recipes"
                    className="font-sans text-sm text-muted transition-colors hover:text-foreground"
                >
                    ← Alla recept
                </Link>
            </div>
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
                    <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-surface">
                        <Image 
                            src={recipe.image}
                            alt={recipe.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="max-w-xl">
                        <p className="ont-sans text-sm uppercase tracking-[0.2em] text-accent">
                            {recipe.category}
                        </p>
                        
                        <h1 className="mt-5 font-display text-5xl leading-tight text-foreground lg:text-6xl">
                            {recipe.title}
                        </h1>
                        
                        <p className="mt-6 font-sans text-lg leading-8 text-muted">
                            {recipe.description}
                        </p>

                        <div className="mt-10 flex gap-10 border-y border-border py-6">
                            <div>
                                <p className="font-sans text-xs uppercase tracking-widest text-muted">
                                    Tid
                                </p>
                                <p className="mt-2 font-sans text-base text-foreground">
                                    {recipe.prepTime} min
                                </p>
                            </div>

                            <div>
                                <p className="font-sans text-xs uppercase tracking-widest text-muted">
                                    Portioner
                                </p>
                                <p className="mt-2 font-sans text-base text-foreground">
                                    {recipe.servings}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 border-t border-border pt-16 lg:mt-32 lg:pt-20">
                    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <section>
                            <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent">
                                Du behöver
                            </p>
                            <h2 className="mt-3 font-display text-4xl text-foreground">
                                Ingredienser
                            </h2>
                            
                            <ul className="mt-8 divide-y divide-border">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index} className="py-4 font-sans text-base leading-7 text-muted">{ingredient}</li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent">
                                Såhär gör du
                            </p>
                            <h2 className="mt-3 font-display text-4xl text-foreground">
                                Instruktioner
                            </h2>

                            <ol className="mt-8 space-y-8">
                                {recipe.instructions.map((instruction, index) => (
                                    <li key={index} className="flex gap-6">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border font-display text-lg text-accent">
                                            {index + 1}
                                        </span>

                                        <p className="pt-2 font-sans text-base leading-8 text-muted">{instruction}</p>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
    
}