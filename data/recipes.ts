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
    
    ingredients: [
      "500 g nötfärs",
      "1 gul lök",
      "2 vitlöksklyftor",
      "400 g krossade tomater",
      "2 msk tomatpuré",
      "9 lasagneplattor",
      "5 dl béchamelsås",
      "150 g riven ost",
    ],

    instructions: [
      "Hacka lök och vitlök.",
      "Stek färsen tills den fått fin färg.",
      "Tillsätt lök, vitlök och tomatpuré. Stek några minuter.",
      "Tillsätt krossade tomater och låt såsen sjuda i cirka 15 minuter.",
      "Varva köttfärssås, béchamelsås och lasagneplattor i en ugnsform.",
      "Toppa med riven ost.",
      "Grädda i 200°C i cirka 30–35 minuter.",
    ],
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

    ingredients :[
      "25g jäst",
      "50g smör",
      "3 dl mjölk",
      "1/2 dl socker",
      "1 krm salt",
      "8 dl vetemjöl",
      "100 rumsvarmt smör",
      "1 msk malen kanel",
      "1 dl socker",
      "ägg",
      "pärlsocker",
    ],

    instructions:[
      "Smula jästen i en bunke. Smält matfettet i en kastrull eller i en skål i mikrovågsugnen på full effekt (max 800 W) ca 30 sek. Tillsätt mjölken och värm till fingervarmt (37°C). Häll lite av degvätskan över jästen och rör tills den löst sig.",
      "Tillsätt resten av degvätskan, socker, salt och nästan allt vetemjölet, spara lite till utbakningen. Arbeta degen smidig för hand eller i maskin tills degen släpper bunkens kanter. Låt degen jäsa övertäckt ca 30 min.",
      "Rör matfettet smidigt med kanel och socker.",
      "Ta upp degen på arbetsbänk och knåda den smidig med resterande mjöl. Kavla ut degen till en platta, ca 30x40 cm (för 20 st). Bred på fyllningen och rulla ihop från långsidan. Skär rullen i ca 2 cm breda bitar. Lägg bitarna med snittytan uppåt på en bakplåtspappersklädd plåt eller i bullformar av papper.",
      "Låt bullarna jäsa under bakduk ca 20 min.",
      "Pensla bullarna med uppvispat ägg och strö över lite pärlsocker. Grädda bullarna mitt i ugnen i 250°C, ca 8 min. Låt kallna på galler under bakduk innan de packas i påse eller burk med lock.",
    ],
  },
  {
    id: "3",
    slug: "rak-tacos",
    title: "Räktacos",
    description: "Klassiskt påhitt",
    image: "/recipes/tacos.png",
    category: "Middag",
    prepTime: 30,
    servings: 4,

    ingredients:[
      "Räkor",
      "Rödlök",
      "Lime",
      "Chili",
      "Spiskummin",
      "Små tortillabröd",
      "Riven ost",
      "Guacamole",
      "Sriracha-majonäs",
      "Koriander",
    ],
    instructions:[
      "Lägg räkorna i en bunke och blanda ned limejuice och spiskummin.",
      "Finhacka lök och chili och fräs i lite olja tills löken är genomskinlig.",
      "Släng i räkorna och låt snabbt bli varma.",
      "Dressa tacon med räkblandning, ost, guacamole, koriander och avsluta med att ringla srirachamajonäs över den.",
      "Servera med nachos och resten av guacamolen."
    ],
  },
];