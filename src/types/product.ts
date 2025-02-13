export interface Promotion {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  validFrom: Date;
  validUntil: Date;
  image: string;
}

export interface ProductSpecification {
  name: string;
  value: string;
  unit?: string;
}

export interface ProductVariant {
  id: string;
  color: string;
  price: number;
  stock: number;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  brand: string;
  color: string;
  model: string;
  releaseDate: Date;
  stock: number;
  image: string;
  images: string[];
  variants?: ProductVariant[];
  specifications: ProductSpecification[];
  features: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
    weight: number;
  };
  warranty: string;
  characteristics: {
    [key: string]: string;
  };
}