import React, { useState } from 'react';

interface QuantityProp {
    quantity: number;
    handleQuantity: (action: 'increase' | 'decrease') => void;
}

export const SetQuantity = ({quantity, handleQuantity}: QuantityProp) => {
  return (
    <div className="flex justify-center gap-4 sm:justify-start">
      <button onClick={() => handleQuantity('decrease')} 
      className={`px-4 rounded-2xl border border-lightB ${quantity === 1 ? 'bg-light' : 'bg-lightB active:border-dark'}`}
      disabled={quantity===1}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantity('increase')} 
      className={`px-4 rounded-2xl border border-lightB ${quantity === 10 ? 'bg-light' : 'bg-lightB active:border-dark'}`}
      disabled={quantity===10}>+</button>
    </div>
  );
};
