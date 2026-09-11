import { prisma } from "@/lib/prisma";
import { title } from "process";

async function main() {
    const recipe = await prisma.recipe.create({
      data: {
        slug: "test-recept",
        title: "Testrecept",
        description: "Ett test för att kontrollera databaskopplingen.",
        image: "/recipes/test.jpg",
        category: "Test",
        prepTime: 10,
        servings: 2,
        ingredients: ["1 ingrediens"],
        instructions: ["Gör testreceptet."],
      },
    });

    console.log("Skapat recept", recipe);

    const recipes = await prisma.recipe.findMany();

    console.log("Alla recept: ", recipes);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());