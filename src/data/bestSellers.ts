export interface BestSeller extends Product {
  unitsSold: number;
}

export const bestSellers: BestSeller[] = [
  {
    id: "bs1",
    name: "Wireless Earbuds Pro",
    description: "True wireless earbuds with active noise cancellation",
    price: 199.99,
    rating: 4.8,
    unitsSold: 15420,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800",
    characteristics: {
      "Battery Life": "24 hours",
      "Noise Cancellation": "Active",
      "Water Resistance": "IPX4",
    },
  },
  {
    id: "bs2",
    name: "Smart Watch Series X",
    description: "Advanced fitness tracking and health monitoring",
    price: 299.99,
    rating: 4.9,
    unitsSold: 12350,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    characteristics: {
      "Battery Life": "5 days",
      "Water Resistance": "50m",
      Display: "AMOLED",
    },
  },
];
