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
