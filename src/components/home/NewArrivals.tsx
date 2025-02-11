import React from 'react';
import { NewArrival } from '../../data/newArrivals';
import { formatPrice, isNewArrival } from '../../utils';
import { useCart } from '../../context/CartContext';

interface NewArrivalsProps {
  products: NewArrival[];
}

export function NewArrivals({ products }: NewArrivalsProps) {
  const { addToCart } = useCart();

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {isNewArrival(product.dateAdded) && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    New
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-indigo-600">
                  {formatPrice(product.price)}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}