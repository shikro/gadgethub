import { useState, useCallback } from "react";
import { FilterState } from "../types/filters";
import { Product } from "../types/";

const initialFilters: FilterState = {
  priceRange: { min: 0, max: 0 },
  colors: [],
  categories: [],
};

export function useProductFilters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const filterProducts = useCallback(
    (products: Product[]) => {
      return products.filter((product) => {
        // Price range filter
        const priceInRange =
          (!filters.priceRange.min ||
            product.price >= filters.priceRange.min) &&
          (!filters.priceRange.max || product.price <= filters.priceRange.max);

        // Color filter
        const colorMatch =
          filters.colors.length === 0 || filters.colors.includes(product.color);

        // Category filter
        const categoryMatch =
          filters.categories.length === 0 ||
          filters.categories.includes(product.category);

        return priceInRange && colorMatch && categoryMatch;
      });
    },
    [filters]
  );

  return {
    filters,
    setFilters,
    resetFilters,
    filterProducts,
  };
}
