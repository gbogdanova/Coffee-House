import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../Container';
import { IoCartOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";

export const Header = () => {
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
            <Link href="/cart"><IoCartOutline size={30}/></Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

