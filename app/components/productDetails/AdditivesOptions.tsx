import { AdditivesOptionsType } from '@/app/types/product';
import React from 'react';

interface AdditivesProp {
  additives: AdditivesOptionsType[],
  selectedAdditives: AdditivesOptionsType[],
  handleAdditivesChange: (additives:AdditivesOptionsType) => void,
}

export const AdditivesOptions = ({additives, selectedAdditives, handleAdditivesChange}:AdditivesProp) => {

  return (
  <div className="flex gap-4">
    {additives.map((additive, index) => (
      <label key={index} className="flex items-center cursor-pointer">
        <input
        type="checkbox"
        name="additives"
        className="hidden"
        checked={selectedAdditives.some((selAdd) => selAdd.name === additive.name)}
        onChange={() => handleAdditivesChange(additive)}
        />
        <div className={`min-w-[120px] p-[5px] flex gap-[10px] border border-lightB rounded-3xl font-bold text-lg 
          ${selectedAdditives.some((selAdd) => selAdd.name === additive.name) ? 'bg-container' : 'text-dark'}`}>
        <div
          className={`w-[36px] h-[36px] flex justify-center items-center rounded-3xl 
            ${selectedAdditives.some((selAdd) => selAdd.name === additive.name) ? 'bg-light':'bg-lightB'}`}
        >
          {index + 1}
        </div>
        <div
          className={`pr-[5px] flex justify-center items-center ${selectedAdditives.some((selAdd) => selAdd.name === additive.name) ? 'text-light':'text-dark'}`}
        >
          {additive.name}
        </div>
      </div>
      </label>  
    ))}
  </div>
  )
}
