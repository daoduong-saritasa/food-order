// src/api/mockRecentOrders.ts

export type RecentOrder = {
  id: string;
  name: string;
  restaurant: string;
  image: string;
  date: string;
};

const MOCK_RECENT_ORDERS: RecentOrder[] = [
  {
    id: "o1",
    name: "Margherita Pizza",
    restaurant: "Italian Delights",
    image: "https://images.squarespace-cdn.com/content/v1/62fe6e3c0caa6b5fa067b8e3/b68add82-87b7-451e-935d-30db793312d4/PIA_151_La_Jolla_Restaurant_Remodel28891.jpg",
    date: "Ordered on May 10, 2023",
  },
  {
    id: "o2",
    name: "Spaghetti Carbonara",
    restaurant: "Italian Delights",
    image: "https://images.squarespace-cdn.com/content/v1/62fe6e3c0caa6b5fa067b8e3/b68add82-87b7-451e-935d-30db793312d4/PIA_151_La_Jolla_Restaurant_Remodel28891.jpg",
    date: "Ordered on May 10, 2023",
  },
];

export function getRecentOrders(): RecentOrder[] {
  // In a real API, this could be async
  return MOCK_RECENT_ORDERS;
}
