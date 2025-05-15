import { type Dish, ITALIAN_POPULAR, JAPANESE_POPULAR, PASTA, PIZZA, RAMEN, SALADS, SUSHI } from "./mockDishes";

export type Restaurant = {
  id: number;
  name: string;
  image: string;
  categories: string[];
  orderDeadline: string;
  groupOrderMinimum: number;
  menu: {
    popular: Dish[];
    pasta?: Dish[];
    pizza?: Dish[];
    sushi?: Dish[];
    ramen?: Dish[];
    salads?: Dish[];
  };
}

export const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: "Italian Delights",
    image:
      "https://images.squarespace-cdn.com/content/v1/62fe6e3c0caa6b5fa067b8e3/b68add82-87b7-451e-935d-30db793312d4/PIA_151_La_Jolla_Restaurant_Remodel28891.jpg",
    categories: ["pasta", "pizza", "salads"],
    orderDeadline: "11:30 AM",
    groupOrderMinimum: 5,
    menu: {
      popular: ITALIAN_POPULAR,
      pasta: PASTA,
      pizza: PIZZA,
      salads: SALADS,
    },
  },
  {
    id: 2,
    name: "Sushi Express",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/26/58/b1/sushi-hokkaido-sachi.jpg?w=600&h=400&s=1",
    categories: ["sushi", "bento", "ramen"],
    orderDeadline: "11:00 AM",
    groupOrderMinimum: 3,
    menu: {
      popular: JAPANESE_POPULAR,
      sushi: SUSHI,
      ramen: RAMEN,
    },
  },
]

export const getRestaurant = (id: number): Promise<Restaurant | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(RESTAURANTS.find(restaurant => restaurant.id === id));
    }, 2000);
  });
};

export const getRestaurants = (): Promise<Restaurant[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(RESTAURANTS);
    }, 2000);
  });
};
