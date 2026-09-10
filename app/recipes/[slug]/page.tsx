import Image from "next/image";
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
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                        <Image 
                            src={recipe.image}
                            alt={recipe.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="font-sans text-sm uppercase tracking-widest text-accent">
                            {recipe.category}
                        </p>
                        
                        <h1 className="mt-4 font-display text-5xl text-foreground">
                            {recipe.title}
                        </h1>
                        
                        <p className="mt-6 font-sans text-lg leading-8 text-muted">
                            {recipe.description}
                        </p>

                        <div className="mt-8 flex gap-8 font-sans text-sm text-muted">
                            <div>
                                <span className="block text-foreground">Tid</span>
                                {recipe.prepTime} min
                            </div>

                            <div>
                                <span className="block text-foreground">Portioner</span>
                                {recipe.servings}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_2fr]">
                    <section>
                        <h2 className="font-display text-3xl text-foreground">
                            Ingredienser
                        </h2>
                        
                        <ul className="mt-6 space-y-3 font-sans text-mute">
                            {recipe.ingredients.map((ingredient, index) => (
                                 <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-3xl text-foreground">
                            Gör såhär
                        </h2>

                        <ol className="mt-6 space-y-6 font-sans text-muted">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index} className="flex gap-4">
                                    <span className="font-display text-2xl text-accent">
                                        {index + 1}
                                    </span>

                                    <p className="pt-1 leading-7">{instruction}</p>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>
            </div>
        </main>
    );
    
}