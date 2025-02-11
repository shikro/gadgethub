import React from 'react';
import { Product } from '../../types';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
      <p className="text-gray-600">{product.description}</p>
      
      <h4 className="font-semibold text-gray-900 mt-4 mb-2">Specifications</h4>
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(product.characteristics).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-500">{key}:</span>
            <span className="text-gray-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}