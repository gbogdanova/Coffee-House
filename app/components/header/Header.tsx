import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../Container';

export const Header = () => {
  return (
    <header>
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
            <Link href="/menu">Menu</Link>
            <div>Cart</div>
          </div>
        </div>
      </Container>
    </header>
  )
}

