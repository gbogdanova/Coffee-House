import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import toast from 'react-hot-toast'

export const Checkout = () => {
   const handleCheckout = () => toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <Image
                  className="h-10 w-10 rounded-full"
                  width={300}
                  height={300}
                  src="/2024-10-10 13.57.21.jpg"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-dark">
                  App created by Halina Bahdanava
                </p>
                <p className="mt-1 text-sm text-lightB">
                Connect with me on <Link className="text-accent underline" href='https://www.linkedin.com/in/halina-bahdanava/' target='blank'>LinkedIn</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-lightB">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-lightB hover:text-lightB focus:outline-none focus:ring-2 focus:ring-lightB"
            >
              Close
            </button>
          </div>
        </div>
    ));

  return (
    <button className='mx-auto mt-8 justify-center w-[200px]
          py-[15px]
          rounded-[30px]
          font-link-butt
          text-light
          bg-container' onClick={handleCheckout}>
      CHECKOUT
    </button>
  );
};
