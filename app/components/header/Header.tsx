import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../Container';

export const Header = () => {
  return (
    <div>
      <Container>
        <div className="
        flex
        items-center
        justify-between
        ">
          <Link href="/">
           <Image
           src="/logo.png"
           alt="logo"
           width={100}
           height={60}
           />
          </Link>
          <div className="hidden md:block">Navigation</div>
          <div className="
          flex
          item-center
          gap-3
          ">
            <div>Menu</div>
            <div>Cart</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

