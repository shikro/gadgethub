import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types';
import { ProductDetails } from './ProductDetails';
import { ProductActions } from './ProductActions';
import { ProductImage } from './ProductImage';
import { ProductRating } from './ProductRating';
import { formatPrice } from '../../utils';

interface ProductCardExpandedProps {
  product: Product;
  onClose: () => void;
  cardRect: DOMRect | null;
}

export function ProductCardExpanded({ product, onClose, cardRect }: ProductCardExpandedProps) {
  const expandedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (expandedRef.current && cardRect) {
      const { top, left, width, height } = cardRect;
      const expandedCard = expandedRef.current;
      
      // Set initial position to match the original card
      expandedCard.style.setProperty('--initial-top', `${top}px`);
      expandedCard.style.setProperty('--initial-left', `${left}px`);
      expandedCard.style.setProperty('--initial-width', `${width}px`);
      expandedCard.style.setProperty('--initial-height', `${height}px`);
      
      // Trigger the animation
      expandedCard.classList.add('animate-expand');
    }
  }, [cardRect]);

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />
      <div
        ref={expandedRef}
        className="fixed bg-white rounded-lg shadow-xl z-50 overflow-hidden expanded-card"
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          width: '800px',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 z-50 transition-colors"
          aria-label="Close product details"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>

        <div className="grid grid-cols-2 h-full">
          <div className="p-6 flex items-center justify-center bg-gray-50">
            <ProductImage
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product.name}
            </h2>
            
            <div className="flex items-center gap-4 mb-4">
              <ProductRating rating={product.rating} reviewCount={50} />
              <span className="text-2xl font-bold text-indigo-600">
                {formatPrice(product.price)}
              </span>
            </div>

            <ProductDetails product={product} />
            <div className="mt-6">
              <ProductActions product={product} expanded />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}