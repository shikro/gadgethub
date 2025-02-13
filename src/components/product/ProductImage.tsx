import React from "react";
import { ImageOff } from "lucide-react";

interface ProductImageProps {
  src: string;
  alt: string;
  isNew?: boolean;
}

export function ProductImage({ src, alt, isNew }: ProductImageProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  return (
    <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
      {isNew && (
        <span className="absolute top-2 right-2 z-10 bg-green-500 px-2 py-1 rounded-full text-xs font-semibold text-white">
          New
        </span>
      )}
      {error ? (
        <div className="flex h-full items-center justify-center">
          <ImageOff className="h-12 w-12 text-gray-400" />
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-gray-200" />
          )}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => setError(true)}
          />
        </>
      )}
    </div>
  );
}
