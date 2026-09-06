import { Recipe } from "../types/recipe";

export const recipes: Recipe[] = [
  {
    id: "1",
    slug: "klassisk-lasagne",
    title: "Klassisk lasagne",
    description: "En riktigt god och krämig lasagne för hela familjen.",
    image: "/recipes/lasagne.png",
    category: "Middag",
    prepTime: 60,
    servings: 4,
  },
  {
    id: "2",
    slug: "kanelbullar",
    title: "Kanelbullar",
    description: "Saftiga kanelbullar med mycket smör och kanel.",
    image: "/recipes/kanelbullar.png",
    category: "Bakning",
    prepTime: 90,
    servings: 12,
  },
  {
    id: "3",
    slug: "familjens-tacos",
    title: "Familjens tacos",
    description: "Fredagsfavoriten som alltid går hem.",
    image: "/recipes/tacos.png",
    category: "Middag",
    prepTime: 30,
    servings: 4,
  },
];