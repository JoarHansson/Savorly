import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const joar = await prisma.user.upsert({
    where: { email: "joar@mail.se" },
    update: {},
    create: {
      email: "joar@mail.se",
      name: "Joar",
      password: "123", // add hashing when we are ready to test it
      recipes: {
        create: [
          {
            title: "Macka",
            slug: "macka",
            ingredients: ["bröd", "ost", "smör"],
            instructions: ["Bre macka", "Hyvla ost", "Lägg ost på mackan"],
          },
          {
            title: "Pasta Carbonara",
            slug: "pasta-carbonara",
            ingredients: [
              "spaghetti",
              "bacon",
              "eggs",
              "parmesan cheese",
              "black pepper",
              "salt",
            ],
            instructions: [
              "Cook the spaghetti according to the package instructions.",
              "Fry the bacon until crispy.",
              "Beat the eggs in a bowl and mix in the grated parmesan cheese.",
              "Drain the spaghetti and return it to the pot.",
              "Quickly mix in the egg and cheese mixture, stirring constantly to create a creamy sauce.",
              "Add the crispy bacon and season with black pepper and salt to taste.",
              "Serve immediately.",
            ],
          },
        ],
      },
    },
  });

  const julia = await prisma.user.upsert({
    where: { email: "julia@mail.se" },
    update: {},
    create: {
      email: "julia@mail.se",
      name: "Julia",
      password: "456", // add hashing when we are ready to test it
      recipes: {
        create: [
          {
            title: "Chocolate Cake",
            slug: "chocolate-cake",
            ingredients: [
              "flour",
              "sugar",
              "cocoa powder",
              "baking powder",
              "eggs",
              "milk",
              "butter",
            ],
            instructions: [
              "Preheat the oven to 180°C (350°F).",
              "Mix the dry ingredients together.",
              "Add the eggs, milk, and melted butter to the dry ingredients and mix well.",
              "Pour the batter into a greased baking pan.",
              "Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.",
              "Let the cake cool before serving.",
            ],
          },
          {
            title: "Caesar Salad",
            slug: "caesar-salad",
            ingredients: [
              "romaine lettuce",
              "croutons",
              "parmesan cheese",
              "Caesar dressing",
              "chicken breast",
            ],
            instructions: [
              "Grill the chicken breast and slice it into strips.",
              "Chop the romaine lettuce and place it in a large bowl.",
              "Add the croutons and grated parmesan cheese to the bowl.",
              "Pour the Caesar dressing over the salad and toss to combine.",
              "Top the salad with the grilled chicken strips.",
              "Serve immediately.",
            ],
          },
        ],
      },
    },
  });

  const siri = await prisma.user.upsert({
    where: { email: "siri@mail.se" },
    update: {},
    create: {
      email: "siri@mail.se",
      name: "Siri",
      password: "789", // add hashing when we are ready to test it
      recipes: {
        create: [
          {
            title: "Tomato Soup",
            slug: "tomato-soup",
            ingredients: [
              "tomatoes",
              "onion",
              "garlic",
              "vegetable broth",
              "olive oil",
              "salt",
              "pepper",
            ],
            instructions: [
              "Heat the olive oil in a large pot over medium heat.",
              "Add the chopped onion and garlic and sauté until soft.",
              "Add the chopped tomatoes and vegetable broth to the pot.",
              "Bring to a boil, then reduce the heat and simmer for 20 minutes.",
              "Blend the soup until smooth using an immersion blender.",
              "Season with salt and pepper to taste.",
              "Serve hot.",
            ],
          },
          {
            title: "Grilled Cheese Sandwich",
            slug: "grilled-cheese-sandwich",
            ingredients: ["bread", "cheese", "butter"],
            instructions: [
              "Butter one side of each slice of bread.",
              "Place a slice of cheese between two slices of bread, with the buttered sides facing out.",
              "Heat a skillet over medium heat.",
              "Place the sandwich in the skillet and cook until the bread is golden brown and the cheese is melted, about 2-3 minutes per side.",
              "Serve immediately.",
            ],
          },
        ],
      },
    },
  });

  console.log({ joar, julia, siri });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
