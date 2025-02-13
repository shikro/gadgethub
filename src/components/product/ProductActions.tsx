import React from "react";
import { Product } from "../../types";
import { useCart } from "../../context/CartContext";

interface ProductActionsProps {
  product: Product;
  expanded?: boolean;
}

export function ProductActions({ product, expanded }: ProductActionsProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product);
      }}
      className={`${
        expanded ? "w-full" : ""
      } py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      aria-label={`Add ${product.name} to cart`}
    >
      Add to Cart
    </button>
  );
}
