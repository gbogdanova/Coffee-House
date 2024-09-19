"use client";

import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';


export const HomeSwiper = () => {
  return (
    <div id="favorite" className="text-dark">
      <h2 className="p-[40px] text-center font-heading-2 text-heading-2 md:text-heading-2-md" >Choose your <span className="text-accent italic">favorite</span> coffee</h2>
      <Swiper
        navigation
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-3 pb-[50px] justify-center items-center w-full">
            <Image src="/coffee-slider-1.png" alt="Slide 1" width={480} height={480} />
            <h3 className="font-heading-3 text-heading-3">S&rsquo;mores Frappuccino</h3>
            <div className="text-center max-w-[480px]">
              This new drink takes an espresso and mixes it with brown sugar
              and cinnamon before being topped with oat milk.
            </div>
            <h3 className="font-heading-3 text-heading-3">$5.50</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 pb-[50px] justify-center items-center h-full w-full">
            <Image src="/coffee-slider-2.png" alt="Slide 1" width={480} height={480}/>
            <h3 className="font-heading-3 text-heading-3">Caramel Macchiato</h3>
            <div className="text-center max-w-[480px]">
              Fragrant and unique classic espresso with rich caramel-peanut syrup, 
              with cream under wripped thick foam.
            </div>
            <h3 className="font-heading-3 text-heading-3">$5.00</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 pb-[50px] justify-center items-center h-full w-full">
            <Image src="/coffee-slider-3.png" alt="Slide 1" width={480} height={480}/>
            <h3 className="font-heading-3 text-heading-3">Ice coffee</h3>
            <div className="text-center max-w-[480px]">
              A popular summer drink that tones and invigorates. 
              Prepared from coffee, milk and ice.
            </div>
            <h3 className="font-heading-3 text-heading-3">$4.50</h3>
          </div> 
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
