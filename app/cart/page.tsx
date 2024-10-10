'use client';

import React from 'react'
import { Container } from '../components/Container'
import Link from 'next/link';
import { BsCupHot } from "react-icons/bs";
import { useCart } from '@/hooks/useCart';
import { CartItem } from '../components/cart/CartItem';
import formatPrice from '@/utils/formatPrice';


const Cart = () => {
  const { cartProducts, cartSubtotal} = useCart();
  return (
	<Container>
    {cartProducts ?  (
      <div className="flex flex-col text-dark">
        <div className="py-8 text-heading-2 text-center">Shopping Cart</div>
        <div className="grid grid-cols-[1fr,3fr,3fr,3fr]">
          <div className="col-span-2 justify-self-start">PRODUCT</div>
          <div className="justify-self-center">QUANTITY</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        <div>
          {cartProducts.map(product => (
          <React.Fragment key={product.id}>
            <div className="border-t border-lightB my-2"></div>
            <CartItem cartItem={product} />
          </React.Fragment>
          ))}
        </div>
        <div>Subtotal: {formatPrice(cartSubtotal)}</div>  
      </div>
    ) : (
      <div className="my-8 flex flex-col gap-6 text-dark">
        <div className="text-heading-2 text-center">Your Cart is Still Empty!</div>
        <div className="text-center">It looks like you haven&apos;t added any coffee yet. Explore our Menu to find your favorites and start building your perfect order.</div>
        <div className="mt-8 flex justify-center">
          <Link href="/products" className="
          flex
          justify-center
          w-[200px]
          py-[15px]
          rounded-[30px]
          font-link-butt
          text-light
          bg-container
          group
          ">
            <div>Back to the Menu</div>
            <BsCupHot size={16} className="inline-block ml-2 mt-[3px] hidden group-hover:inline-block"/>
          </Link>
        </div>
      </div> 
    )}

	</Container>
  )
}

export default Cart;