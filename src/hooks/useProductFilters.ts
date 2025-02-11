import { useState, useCallback } from 'react';
import { FilterState } from '../types/filters';
import { Product } from '../types/product';

const initialFilters: FilterState = {
  priceRange: { min: 0, max: 0 },
  colors: [],
  categories: [],
  brands: [],
  inStock: false
};

export function useProductFilters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isLoading, setIsLoading] = useState(false);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const applyFilters = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
  }, []);

  const filterProducts = useCallback((products: Product[]) => {
    return products.filter(product => {
      // Price range filter
      const priceInRange =
        (!filters.priceRange.min || product.price >= filters.priceRange.min) &&
        (!filters.priceRange.max || product.price <= filters.priceRange.max);

      // Color filter
      const colorMatch =
        filters.colors.length === 0 ||
        filters.colors.includes(product.color) ||
        (product.variants && product.variants.some(v => filters.colors.includes(v.color)));

      // Category filter
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);

      // Brand filter
      const brandMatch =
        filters.brands.length === 0 ||
        filters.brands.includes(product.brand);

      // Stock filter
      const stockMatch = !filters.inStock || product.stock > 0;

      return priceInRange && colorMatch && categoryMatch && brandMatch && stockMatch;
    });
  }, [filters]);

  return {
    filters,
    setFilters,
    resetFilters,
    applyFilters,
    filterProducts,
    isLoading
  };
}