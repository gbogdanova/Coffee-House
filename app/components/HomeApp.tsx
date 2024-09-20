import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaApple, FaGooglePlay } from "react-icons/fa";

export const HomeApp = () => {
  return (
    <div id="mobile" className="
    flex
    flex-col md:flex-row
    text-dark
    ">
      <div className="
      w-full md:w-1/2
      flex
      flex-col
      justify-center
      gap-[20px] md:gap-[40px]
      ">
        <h2 className="font-heading-2 text-heading-2 md:text-heading-2-md">
            <span className="text-accent italic">Download</span> our apps to start ordering
        </h2>
        <p>
          Download the Resource app today and experience the comfort of
          ordering your favorite coffee from wherever you are
        </p>
        <div className="flex gap-[20px]">
          <Link 
          href="https://www.apple.com/store"
          target="_blank" 
          className="
          flex
          w-[200px]
          py-[8px]
          pl-[18px]
          gap-[10px]
          rounded-[30px]
          font-link-butt
          border border-dark border-1
          bg-light hover:bg-container
          hover:text-light
          ">
              <FaApple size={35}/>
              <div>
                <div  className="text-caption">Available on the</div>
                <div className="font-heading-1">App Store</div>
              </div>
          </Link>
          <Link 
          href="https://play.google.com/store/games?hl=en_US&gl=US&pli=1"
          target="_blank" 
          className="
          flex
          w-[200px]
          py-[8px]
          pl-[18px]
          gap-[10px]
          rounded-[30px]
          font-link-butt
          border border-dark border-1
          bg-light hover:bg-container
          hover:text-light
          ">
              <FaGooglePlay size={35}/>
              <div>
                <div  className="text-caption">Available on</div>
                <div className="font-heading-1">Google Play</div>
              </div>
          </Link>
        </div>
      </div>
      <div className="
      w-full md:w-1/2
      h-[500px] md:min-h-[600px]
      relative
      ">
         <Image 
         src="/mobile-screens.png" 
         alt="mobile screens" 
         layout="fill"
         objectFit="contain"
         /> 
      </div>
    </div>
  )
}
