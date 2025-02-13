import React from "react";
import { Filter } from "lucide-react";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { ColorFilter } from "./ColorFilter";
import { CategoryFilter } from "./CategoryFilter";
import { useProductFilters } from "../../../hooks/useProductFilters";
import { FilterState } from "../../../types/filters";

export function FilterPanel() {
  const { filters, setFilters, resetFilters, applyFilters, isLoading } =
    useProductFilters();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  return (
    <div className="w-full lg:w-72 bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filters
        </h2>
        <button
          onClick={resetFilters}
          className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
        >
          Сбросить фильтры
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <PriceRangeFilter
          minPrice={filters.priceRange.min}
          maxPrice={filters.priceRange.max}
          onChange={(min, max) =>
            setFilters((prev) => ({
              ...prev,
              priceRange: { min, max },
            }))
          }
        />

        <ColorFilter
          selectedColors={filters.colors}
          onChange={(colors) => setFilters((prev) => ({ ...prev, colors }))}
        />

        <CategoryFilter
          selectedCategories={filters.categories}
          onChange={(categories) =>
            setFilters((prev) => ({ ...prev, categories }))
          }
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:bg-indigo-300 disabled:cursor-not-allowed"
        >
          {isLoading ? "Applying..." : "Show Results"}
        </button>
      </form>
    </div>
  );
}
