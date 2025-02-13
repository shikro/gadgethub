export interface NewArrival extends Product {
  dateAdded: Date;
}

export const newArrivals: NewArrival[] = [
  {
    id: "new1",
    name: "Smart Home Hub",
    description: "Control your entire home with voice commands",
    price: 149.99,
    rating: 4.7,
    dateAdded: new Date("2024-03-10"),
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    characteristics: {
      Compatibility: "Alexa, Google Assistant",
      Connectivity: "Wi-Fi, Bluetooth",
      Power: "DC 5V",
    },
  },
  {
    id: "new2",
    name: "Portable SSD 2TB",
    description: "Ultra-fast external SSD with USB-C",
    price: 229.99,
    rating: 4.8,
    dateAdded: new Date("2024-03-15"),
    image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=800",
    characteristics: {
      Capacity: "2TB",
      Interface: "USB 3.2",
      Speed: "1050 MB/s",
    },
  },
];
