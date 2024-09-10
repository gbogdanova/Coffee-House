import { SizeOption } from '@/app/types/product';
import React from 'react';

interface SizesProp {
  sizes: {
    [key: string]: SizeOption;
  },
  selectedSize: number;
  handleSizeChange: (sizePrice:number) => void;
}

export const SizeOptions = ({sizes, selectedSize, handleSizeChange}:SizesProp) => {
  return (
    <div className="flex gap-4">
    {Object.entries(sizes).map(([key, size]) => (
      <label key={key} className="flex flex-col items-center cursor-pointer">
      <input
        type="radio"
        name="size"
        value={size['add-price']}
        checked={selectedSize === size['add-price']}
        onChange={() => handleSizeChange(size['add-price'])}
        className="hidden"
      />
      <div className={`min-w-[120px] p-[5px] flex gap-[10px] border border-lightB rounded-3xl font-bold text-lg ${selectedSize === size['add-price'] ? 'bg-container' : 'text-dark'}`}>
        <div
          className={`w-[36px] h-[36px] flex justify-center items-center rounded-3xl ${selectedSize === size['add-price'] ? 'bg-light':'bg-lightB'}`}
        >
          {key.toUpperCase()}
        </div>
        <div
          className={`pr-[5px] flex justify-center items-center ${selectedSize === size['add-price'] ? 'text-light':'text-dark'}`}
        >
          ${size.size}
        </div>
      </div>
    </label>
    ))}
  </div>
  )
}
