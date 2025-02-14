export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  characteristics: {
    [key: string]: string;
  };
  availability: {
    status: "in-stock" | "out-of-stock" | "low-stock";
    quantity: number;
  };
  color: string;
  category: string;
  isHit: boolean;
}

export interface User {
  email: string;
  password: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  image: string;
  name: string;
}
