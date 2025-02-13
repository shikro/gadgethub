import React from "react";
import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  reviewCount?: number;
}

export function ProductRating({ rating, reviewCount }: ProductRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < Math.floor(rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">
        {rating.toFixed(1)}
        {reviewCount && ` (${reviewCount})`}
      </span>
    </div>
  );
}
