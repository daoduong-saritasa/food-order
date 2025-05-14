// src/api/mockGroups.ts

const NAMES = [
  "Engineering Team Lunch",
  "Marketing Team Lunch",
  "Company Lunch",
  "Design Team Lunch",
  "Sales Team Gathering",
  "Support Team Meetup",
];

const RESTAURANTS = [
  "Italian Delights",
  "Sushi Express",
  "Burger Joint",
  "Taco Tuesday",
  "Pho House",
  "Vegan Bites",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export type ActiveGroup = {
  id: string;
  name: string;
  restaurant: string;
  deadline: string;
  timeRemaining: string;
  members: number;
  status: "active";
};

export type PastGroup = {
  id: string;
  name: string;
  restaurant: string;
  date: string;
  members: number;
  status: "completed";
};

export function getActiveGroups(count = 7): ActiveGroup[] {
  const baseDeadlines = ["11:30 AM", "11:00 AM", "12:00 PM"];
  const baseTimes = ["25 min", "5 min", "15 min", "10 min"];
  const baseMembers = [3, 5, 6, 12];
  return Array.from({ length: count }).map((_, i) => ({
    id: `g${i + 1}`,
    name: getRandomItem(NAMES),
    restaurant: getRandomItem(RESTAURANTS),
    deadline: getRandomItem(baseDeadlines),
    timeRemaining: getRandomItem(baseTimes),
    members: getRandomItem(baseMembers),
    status: "active",
  }));
}

export function getPastGroups(count = 8): PastGroup[] {
  const baseDates = ["Yesterday", "May 10, 2023", "Last Friday", "May 5, 2023"];
  const baseMembers = [3, 5, 6, 12];
  return Array.from({ length: count }).map((_, i) => ({
    id: `g${i + 100}`,
    name: getRandomItem(NAMES),
    restaurant: getRandomItem(RESTAURANTS),
    date: getRandomItem(baseDates),
    members: getRandomItem(baseMembers),
    status: "completed",
  }));
}
