'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../Container';
import { IoCartOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { useCart } from '@/hooks/useCart';

export const Header = () => {
  const { cartProducts, cartTotalQty } = useCart();
  return (
    <header>
      <Container>
        <div className="
        flex
        items-center
        justify-between
        text-dark
        ">
          <Link href="/">
           <Image
           src="/logo.png"
           alt="logo"
           width={100}
           height={60}
           />
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/#favorite" className="underline-center text-link-butt">
              Favorite coffee
            </Link>
            <Link href="/#mobile" className="underline-center text-link-butt">
              Mobile app
            </Link><Link href="/#contact" className="underline-center text-link-butt">
              Contact us
            </Link>
          </div>
          <div className="
          flex
          item-center
          gap-4
          ">
            <Link href="/products"><MdMenuBook size={30}/></Link>
            <div className='relative'>
              <Link href="/cart">
                <IoCartOutline size={30}/>
                {cartTotalQty > 0 && (
                  <div className="absolute -top-2 -right-2 bg-dark text-light text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartTotalQty}
                  </div>
                )}
              </Link>
            </div>  
          </div>
        </div>
      </Container>
    </header>
  )
}

