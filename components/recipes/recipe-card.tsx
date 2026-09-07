import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../../app/types/recipe";

type RecipeCardProps = {
    recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <Link href={`/recipes/${recipe.slug}`} className="group block">
            <article>
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-surface">
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="mt-4">
                    <div className="flex items-center gap-3 font-sans text-sm text-muted">
                        <span>{recipe.category}</span>
                        <span>.</span>
                        <span>{recipe.prepTime} min</span>
                    </div>

                    <h2 className="mt-2 font-display text-2xl text-foreground">
                        {recipe.title}
                    </h2>

                    <p className="mt-2 font-sans text-sm leading-6 text-muted">
                        {recipe.description}
                    </p>
                </div>
            </article>
        </Link>
    );
}