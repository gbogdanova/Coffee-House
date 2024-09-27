import React, { useState } from 'react';

interface QuantityProp {
    quantity: number;
    handleQuantity: (action: 'increase' | 'decrease') => void;
}

export const SetQuantity = ({quantity, handleQuantity}: QuantityProp) => {
  return (
    <div className="flex justify-center gap-4 sm:justify-start">
      <button onClick={() => handleQuantity('decrease')} className="px-4 bg-lightB rounded-2xl border border-lightB active:border-dark">-</button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantity('increase')} className="px-4 bg-lightB rounded-2xl border border-lightB active:border-dark">+</button>
    </div>
  );
};
