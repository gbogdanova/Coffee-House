import { CartProductType } from '@/app/types/product'
import formatPrice from '@/utils/formatPrice';
import Image from 'next/image';
import React from 'react'

interface CartItemProps {
  cartItem: CartProductType;
}

export const CartItem = ({cartItem}: CartItemProps) => {
  return (
    <div className="grid grid-cols-4">
      <div className="max-w-[120px]">
        <Image 
          src={cartItem.image}
          alt={cartItem.name}
          width={100} 
          height={100}
          className="w-full h-auto rounded-xl" 
        />
      </div>
      <div>{cartItem.name}</div>
      <div className="justify-self-center">{cartItem.quantity}</div>
      <div className="justify-self-end">{formatPrice(cartItem.price)}</div>
    </div>
  )
}
