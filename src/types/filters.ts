export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  priceRange: PriceRange;
  colors: string[];
  categories: string[];
}
