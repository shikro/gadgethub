import React, { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Product } from "../../types";
import { formatPrice } from "../../utils";
import { ProductImage } from "./ProductImage";
import { ProductRating } from "./ProductRating";
import { ProductAvailability } from "./ProductAvailability";
import { ProductCardExpanded } from "./ProductCardExpanded";
import { ProductActions } from "./ProductActions";

interface ProductCardProps {
  product: Product;
  layout?: "grid" | "list";
  isNew?: boolean;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  onCollapse: () => void;
  addToCartButton: boolean;
}

export function ProductCard({
  product,
  layout = "grid",
  isNew,
  isExpanded,
  onExpand,
  onCollapse,
  addToCartButton = true,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardRect, setCardRect] = React.useState<DOMRect | null>(null);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      setCardRect(cardRef.current.getBoundingClientRect());
    }
  }, [isExpanded]);

  const containerClasses = layout === "grid" ? "w-full" : "flex gap-6";

  return (
    <>
      <div
        ref={cardRef}
        className={`relative bg-white rounded-lg shadow-md transition-all duration-300 ${
          isExpanded ? "" : ""
        } ${containerClasses}`}
        onClick={() => !isExpanded && onExpand(product.id)}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        aria-label={`Product details for ${product.name}`}
      >
        <div className={`relative ${layout === "grid" ? "w-full" : "w-1/3"}`}>
          <ProductImage
            src={"http://localhost:8000/images/" + product.id}
            alt={product.name}
            isNew={isNew}
          />
        </div>

        <div className={`${layout === "grid" ? "p-4" : "flex-1 p-4"}`}>
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <ProductRating rating={product.rating} reviewCount={50} />
          <ProductAvailability
            status={product.availability.status}
            quantity={product.availability.quantity}
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xl font-bold text-indigo-600">
              {formatPrice(product.price)}
            </span>
          </div>
          {product.availability.quantity > 0 && addToCartButton && (
            <div className="mt-5">
              <ProductActions product={product} expanded />
            </div>
          )}
        </div>
      </div>

      {isExpanded && (
        <ProductCardExpanded
          product={product}
          onClose={onCollapse}
          cardRect={cardRect}
        />
      )}
    </>
  );
}
