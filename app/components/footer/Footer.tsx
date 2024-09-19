import React from 'react';
import Link from 'next/link';
import { Container } from '../Container';
import { FooterList } from './FooterList';
import { FiMapPin, FiPhone, FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="
    mt-[20px]
    p-[40px] lg:p-[100px]
    rounded-[40px]
    bg-container">
      <Container>
        <div className="
        flex
        flex-col md:flex-row
        items-center
        gap-[50px] lg:gap-[100px] 
        text-light
        ">
          <FooterList>
            <h2 className="text-heading-2 md:text-heading-2-md">
              Sip, Savor, Smile.
              <div className="text-accent italic">It&rsquo;s coffee time!</div>
            </h2>
            <div className="flex flex-row gap-4">
              <Link
              href="https://twitter.com/"
              target="blank"
              className="inline-block p-4 rounded-full border border-1 hover:bg-light hover:text-dark"
              >
                <FiTwitter size={18}/>
              </Link>
              <Link
              href="https://www.instagram.com/"
              target="blank"
              className="inline-block p-4 rounded-full border border-1 hover:bg-light hover:text-dark"
              >
                <FiInstagram size={18}/>
              </Link>
              <Link
              href="https://www.facebook.com/"
              target="blank"
              className="inline-block p-4 rounded-full border border-1 hover:bg-light hover:text-dark"
              >
                <FiFacebook size={18}/>
              </Link>
            </div>
          </FooterList>
          <FooterList>
            <h3 className="text-heading-3">
              Contact us
            </h3>
            <ul className="
            flex
            flex-col
            gap-[16px]">
              <li>
                <Link 
                href="https://www.google.com/maps/search/8558+Green+Rd,++LA/@26.6511927,-88.5327713,4.69z?entry=ttu"
                target="_blank"
                className="underline-center"
                >
                  <FiMapPin size={16} className="inline-block mr-2 mb-[5px]"/>
                  <span>8558 Green Rd., LA</span>
                </Link>
              </li>
              <li>
                <Link 
                href="tel:+1(603)5550123"
                target="_blank"
                className="underline-center"
                >
                  <FiPhone  size={16} className="inline-block mr-2 mb-[5px]"/>
                  <span>+1 (603) 555-0123</span>
                </Link>
              </li>
              <li>
                <Link 
                href="#"
                className="underline-center"
                >
                  <MdOutlineWatchLater size={16} className="inline-block mr-2 mb-[5px]"/>
                  <span>Mon-Sat: 9:00 AM &ndash; 23:00 PM</span>
                </Link>
              </li>
            </ul>
          </FooterList>
        </div>

      </Container>
    </footer>
  )
}
