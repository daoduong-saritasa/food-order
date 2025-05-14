// src/api/mockCart.ts

export type CartItem = {
  id: string;
  name: string;
  restaurant: string;
  price: number;
  quantity: number;
  image: string;
};

const MOCK_CART_ITEMS: CartItem[] = [
  {
    id: "p1",
    name: "Margherita Pizza",
    restaurant: "Italian Delights",
    price: 12.99,
    quantity: 1,
    image:
      "https://images.squarespace-cdn.com/content/v1/62fe6e3c0caa6b5fa067b8e3/b68add82-87b7-451e-935d-30db793312d4/PIA_151_La_Jolla_Restaurant_Remodel28891.jpg",
  },
  {
    id: "p2",
    name: "Spaghetti Carbonara",
    restaurant: "Italian Delights",
    price: 14.99,
    quantity: 2,
    image:
      "https://images.squarespace-cdn.com/content/v1/62fe6e3c0caa6b5fa067b8e3/b68add82-87b7-451e-935d-30db793312d4/PIA_151_La_Jolla_Restaurant_Remodel28891.jpg",
  },
];

export function getCartItems(): CartItem[] {
  // In a real API, this could be async
  return MOCK_CART_ITEMS;
}
