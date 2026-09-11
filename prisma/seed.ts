import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"
import { recipes } from "@/data/recipes";
import { prismaVersion } from "@/lib/generated/prisma/internal/prismaNamespace";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
    console.log(`Seeding ${recipes.length} recipes...`);

    for (const recipe of recipes) {
        await prisma.recipe.upsert({
          where: {
            slug: recipe.slug,
          },
          update: recipe,
          create: recipe,
        });
      }

      console.log("Seeding complete");
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });