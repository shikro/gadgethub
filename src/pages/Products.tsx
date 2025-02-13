import React, { useState } from "react";
import { Grid, List } from "lucide-react";
import { ProductCard } from "../components/product/ProductCard";
import { FilterPanel } from "../components/product/filters/FilterPanel";
import { useExpandedCard } from "../hooks/useExpandedCard";
import { useProductFilters } from "../hooks/useProductFilters";
import { products } from "../data/products";

export function Products() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const { expandedCardId, handleExpand, handleCollapse } = useExpandedCard();
  const { filterProducts } = useProductFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Каталог товаров</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setLayout("grid")}
            className={`p-2 rounded-md ${
              layout === "grid"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-500"
            }`}
            aria-label="Сетка"
          >
            <Grid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={`p-2 rounded-md ${
              layout === "list"
                ? "bg-indigo-100 text-indigo-600"
                : "text-gray-500"
            }`}
            aria-label="Список"
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:order-2">
          <FilterPanel />
        </div>

        <div className="flex-1 lg:order-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Не найдено подходящих товаров</p>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                layout === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  layout={layout}
                  isExpanded={expandedCardId === product.id}
                  onExpand={handleExpand}
                  onCollapse={handleCollapse}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
