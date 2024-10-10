"use client";

import { Product } from '../../types/product';
import Image from 'next/image';
import truncateText from '@/utils/truncateText';
import formatPrice from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';
import { AddToCartButt } from '../productDetails/AddToCartButt';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({product}: ProductCardProps) => {
  const router = useRouter();
  const cartProduct = {
    id: product.id,
    name: product.name,
    category: product.category,
    size: product.sizes[Object.keys(product.sizes)[0]].size,
    additives: [],
    price1: product.price,
    quantity: 1,
    price: product.price,
    image: product.image,
  };

  return (
    <div className="relative text-dark box-border border border-lightB rounded-3xl overflow-hidden">
     <div onClick={() => router.push(`/products/${product.id}`)} 
      className="h-full flex flex-col relative group hover:cursor-pointer">
        <div className="overflow-hidden rounded-3xl">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={300} 
            height={300} 
            className="w-full transition-transform duration-300 transform group-hover:scale-110" 
          />
        </div>
        <div className="flex flex-col flex-1 px-3 py-4 gap-2 justify-between">
            <div className="flex font-medium text-heading-3">{product.name}</div>
            <div className="flex flex-grow font-light">{truncateText(product.description)}</div>
            <div className="flex font-semibold text-heading-3">
              {formatPrice(product.price)}
            </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-3">
        <AddToCartButt 
        cartProduct={cartProduct} 
        className={`flex items-center justify-center w-10 h-10 rounded-full border border-dark`} 
        btnTextDis={'+'}
        btnText={'+'}/>
      </div>
    </div>
  )
}
