import React from 'react';
import { Star } from 'lucide-react';
import { BestSeller } from '../../data/bestSellers';
import { formatPrice } from '../../utils';

interface BestSellersProps {
  products: BestSeller[];
}

export function BestSellers({ products }: BestSellersProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <div className="flex items-center mt-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-indigo-600">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-gray-500">
                  {product.unitsSold.toLocaleString()} sold
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}