import React from 'react';

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  onChange: (min: number, max: number) => void;
}

export function PriceRangeFilter({
  minPrice,
  maxPrice,
  onChange
}: PriceRangeFilterProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-900">Price Range</h3>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-sm text-gray-600">From</label>
          <input
            type="number"
            min={0}
            value={minPrice || ''}
            onChange={e => onChange(Number(e.target.value), maxPrice)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm text-gray-600">To</label>
          <input
            type="number"
            min={minPrice}
            value={maxPrice || ''}
            onChange={e => onChange(minPrice, Number(e.target.value))}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}