import React from 'react';
import Link from 'next/link';
import { BsCupHot } from "react-icons/bs";

export const HomeBanner = () => {
  return (
    <section className="
    mt-[20px]
    bg-cover
    bg-center
    bg-[url('/img-hero.jpg')]
    rounded-[40px]
    text-light
    ">
      <div className="
      w-full md:w-[800px]
      flex
      flex-col
      gap-[20px] md:gap-[40px]
      p-[40px] lg:p-[100px]
      ">
        <h1 className="font-heading-1 text-heading-1 md:text-heading-1-md">
            <span className="text-accent italic">Enjoy</span> premium coffee at our charming
            cafe
        </h1>
        <p>
            With its inviting atmosphere and delicious coffee options, the
            Coffee House Resource is a popular destination for coffee lovers
            and those seeking a warm and inviting space to enjoy their
            favorite beverage.
        </p>
        <Link href="/menu" className="
        flex
        justify-center
        w-[200px]
        py-[15px]
        rounded-[30px]
        font-link-butt
        text-dark
        bg-light
        group
        ">
            <div>Menu</div>
            <BsCupHot size={16} className="inline-block ml-2 mt-[3px] hidden group-hover:inline-block"/>
        </Link>
      </div>
  </section>
  );
}
