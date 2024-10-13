import { CartProductType } from '@/app/types/product'
import { useCart } from '@/hooks/useCart';
import React, { useState } from 'react'

interface AddToCartButtProps {
    cartProduct: CartProductType;
    className: string;
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
    className={`${className} ${isButtonDisabled ? 'border-lightB text-lightB' : 'hover:bg-container hover:text-light'} `}  
    onClick={handleAddProduct}
    disabled={isButtonDisabled}
    >{isButtonDisabled ? btnTextDis : btnText}
  </button>
  )
}
