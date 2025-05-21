export const PASTA = [
  {
    id: "pa1",
    name: "Spaghetti Bolognese",
    description: "Rich meat sauce with tomatoes and herbs",
    price: 13.99,
    image:
      "https://images.ctfassets.net/uexfe9h31g3m/6QtnhruEFi8qgEyYAICkyS/ab01e9b1da656f35dd1a721c810162a0/Spaghetti_bolognese_4x3_V2_LOW_RES.jpg?q=90&w=1200&h=600",
  },
  {
    id: "pa2",
    name: "Fettuccine Alfredo",
    description: "Creamy parmesan sauce",
    price: 12.99,
    image:
      "https://cookingwithcassandra.com/wp-content/uploads/2022/10/Copy-of-Copy-of-DSC03750-2-scaled.jpg",
  },
  {
    id: "pa3",
    name: "Lasagna",
    description: "Layered pasta with meat sauce and cheese",
    price: 15.99,
    image:
      "https://cafedelites.com/wp-content/uploads/2018/01/Mamas-Best-Lasagna-IMAGE-43.jpg",
  },
];

export const PIZZA = [
  {
    id: "pi1",
    name: "Pepperoni Pizza",
    description: "Tomato sauce, mozzarella, and pepperoni",
    price: 13.99,
    image:
      "https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
  },
  {
    id: "pi2",
    name: "Vegetarian Pizza",
    description: "Tomato sauce, mozzarella, and assorted vegetables",
    price: 14.99,
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg",
  },
  {
    id: "pi3",
    name: "Hawaiian Pizza",
    description: "Tomato sauce, mozzarella, ham, and pineapple",
    price: 14.99,
    image:
      "https://dinnerthendessert.com/wp-content/uploads/2023/06/Hawaiian-Pizza-7.jpg",
  },
];

export const SALADS = [
  {
    id: "s1",
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan, and Caesar dressing",
    price: 9.99,
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
  },
];

export const SUSHI = [
  {
    id: "su1",
    name: "Eel Avocado Roll",
    description: "Grilled eel, avocado, rice, and seaweed",
    price: 11.99,
    image:
      "https://www.thespruceeats.com/thmb/8g6Xv5D8XQw2qzG6eVw4F6nJQZk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eel-avocado-roll-2031457-hero-01-5b6a2a0b46e04e7a8e5b6e2e6c0a0f2a.jpg",
  },
  {
    id: "su2",
    name: "California Roll",
    description: "Imitation crab, avocado, cucumber, rice, and seaweed",
    price: 9.99,
    image:
      "https://www.thespruceeats.com/thmb/3pQ8jFQe1Kk6xkXw4f5G8hQZk8k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/california-roll-recipe-2031458-hero-01-5b6a2a0b46e04e7a8e5b6e2e6c0a0f2a.jpg",
  },
];

export const RAMEN = [
  {
    id: "r1",
    name: "Shoyu Ramen",
    description: "Soy sauce-based broth with noodles, pork, and egg",
    price: 13.99,
    image:
      "https://www.justonecookbook.com/wp-content/uploads/2021/06/Shoyu-Ramen-3261-I.jpg",
  },
];

export const BENTO = [
  {
    id: "b1",
    name: "Shoyu Ramen",
    description: "Soy sauce-based broth with noodles, pork, and egg",
    price: 13.99,
    image:
      "https://www.justonecookbook.com/wp-content/uploads/2021/06/Shoyu-Ramen-3261-I.jpg",
  },
];

export const ITALIAN_POPULAR = [PASTA[0], PIZZA[0], SALADS[0]];
export const JAPANESE_POPULAR = [SUSHI[0], RAMEN[0]];

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};