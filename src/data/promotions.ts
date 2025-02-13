import { Promotion } from "../types/product";

export const promotions: Promotion[] = [
  {
    id: "1",
    title: "Крутые наушники",
    description: "Звук бомба",
    originalPrice: 29900,
    currentPrice: 19900,
    validFrom: new Date("2024-03-01"),
    validUntil: new Date("2024-03-31"),
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: "2",
    title: "Теливизор мечты",
    description: '65" Ultra HD Smart TV с HDR',
    originalPrice: 129900,
    currentPrice: 99900,
    validFrom: new Date("2024-03-15"),
    validUntil: new Date("2024-04-15"),
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
  },
];
