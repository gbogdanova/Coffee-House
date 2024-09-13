import React from 'react'
import { Container } from '../components/Container'
import Link from 'next/link';
import { BsCupHot } from "react-icons/bs";

const Cart = () => {
  return (
	<Container>
	  <div className="my-8 flex flex-col gap-6 text-dark">
			<div className="text-heading-2 text-center">Your Cart is Still Empty!</div>
      <div className="text-center">It looks like you haven&apos;t added any coffee yet. Explore our Menu to find your favorites and start building your perfect order.</div>
      <div className="mt-8 flex justify-center">
        <Link href="/menu" className="
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
	</Container>
  )
}

export default Cart;