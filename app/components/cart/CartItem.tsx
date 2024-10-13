import { CartProductType } from '@/app/types/product';
import { useCart } from '@/hooks/useCart';
import formatPrice from '@/utils/formatPrice';
import Image from 'next/image';
import React, { useState } from 'react';
import { SetQuantity } from '../productDetails/SetQuantity';

interface CartItemProps {
  cartItem: CartProductType;
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  const { handleRemoveProductFromCart, handleIncreaseProductQty, handleDecreaseProductQty } = useCart();

  const handleQuantity = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      handleIncreaseProductQty(cartItem);
    }
    if (action === 'decrease') {
      handleDecreaseProductQty(cartItem);
    }
  };

  return (
    <div className="grid grid-cols-[1fr,3fr,3fr,3fr]">
      <div className="max-w-[120px]">
        <Image
          src={cartItem.image}
          alt={cartItem.name}
          width={100}
          height={100}
          className="w-full h-auto rounded-xl"
        />
      </div>
      <div className="pl-[10px]">
        <div>{cartItem.name}</div>
        <div>{cartItem.size}</div>
        <div>{cartItem.additives.join(' ')}</div>
        <div>
          <button className="text-container underline italic" onClick={() => { handleRemoveProductFromCart(cartItem) }}>Remove</button>
        </div>
      </div>
      <div className="justify-self-center">
        <SetQuantity quantity={cartItem.quantity} handleQuantity={handleQuantity} />
      </div>
      <div className="justify-self-end">{formatPrice(cartItem.price)}</div>
    </div>
  );
};
