import { CartProductType } from '@/app/types/product'
import { useCart } from '@/hooks/useCart';
import React, { useState } from 'react'

interface AddToCartButtProps {
    cartProduct: CartProductType;
    className?: string;
    btnTextDis: string;
    btnText: string;
}

export const AddToCartButt = ({cartProduct, className, btnTextDis, btnText}: AddToCartButtProps) => {
    const { handleAddProductToCart } = useCart();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleAddProduct = () => {
        if (isButtonDisabled) return;
        handleAddProductToCart(cartProduct);
        setIsButtonDisabled(true);
        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 2000);
      };

  return (
    <button 
    className={`w-[100%] py-2 rounded-3xl border border-dark font-medium text-heading-3 
      ${isButtonDisabled ? 'border-lightB text-lightB' : 'hover:bg-container hover:text-light'} ${className}`}  
    onClick={handleAddProduct}
    disabled={isButtonDisabled}
    >{isButtonDisabled ? btnTextDis : btnText}
  </button>
  )
}
