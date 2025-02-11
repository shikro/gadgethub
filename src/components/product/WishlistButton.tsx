import React from 'react';
import { Heart } from 'lucide-react';

interface WishlistButtonProps {
  productId: string;
  isWishlisted: boolean;
  onToggle: (productId: string) => void;
}

export function WishlistButton({ productId, isWishlisted, onToggle }: WishlistButtonProps) {
  return (
    <button
      onClick={() => onToggle(productId)}
      className="absolute top-2 left-2 z-10 rounded-full bg-white p-1.5 shadow-md transition-colors hover:bg-gray-100"
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        className={`h-5 w-5 transition-colors ${
          isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
        }`}
      />
    </button>
  );
}