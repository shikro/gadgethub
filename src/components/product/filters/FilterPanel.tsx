import React from "react";
import { Filter } from "lucide-react";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { ColorFilter } from "./ColorFilter";
import { CategoryFilter } from "./CategoryFilter";
import { FilterState } from "../../../types/filters";

interface FilterPanelProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
}

export function FilterPanel({
  filters,
  setFilters,
  resetFilters,
}: FilterPanelProps) {
  return (
    <div className="w-full lg:w-72 bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Фильтры
        </h2>
        <button
          onClick={resetFilters}
          className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
        >
          Сбросить
        </button>
      </div>

      <form className="space-y-6">
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
      </form>
    </div>
  );
}
