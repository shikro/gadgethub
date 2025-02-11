import React from 'react';
import { productCategories } from '../../../data/filters';

interface CategoryFilterProps {
  selectedCategories: string[];
  onChange: (categories: string[]) => void;
}

export function CategoryFilter({
  selectedCategories,
  onChange
}: CategoryFilterProps) {
  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    onChange(newCategories);
  };

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-900">Categories</h3>
      <div className="space-y-1">
        {productCategories.map(category => (
          <label
            key={category.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.value)}
              onChange={() => handleCategoryToggle(category.value)}
              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">{category.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}