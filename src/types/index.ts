export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  characteristics: {
    [key: string]: string;
  };
  availability?: {
    status: "in-stock" | "out-of-stock" | "low-stock";
    quantity?: number;
  };
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
