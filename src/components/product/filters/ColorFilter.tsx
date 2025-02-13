import React from "react";
import { productColors } from "../../../data/filters";

interface ColorFilterProps {
  selectedColors: string[];
  onChange: (colors: string[]) => void;
}

export function ColorFilter({ selectedColors, onChange }: ColorFilterProps) {
  const handleColorToggle = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    onChange(newColors);
  };

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-900">Цвет</h3>
      <div className="flex flex-wrap gap-2">
        {productColors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorToggle(color.value)}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              selectedColors.includes(color.value)
                ? "border-indigo-600 scale-110"
                : "border-gray-200 hover:border-gray-300"
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.label}
            aria-label={`Select ${color.label} color`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
