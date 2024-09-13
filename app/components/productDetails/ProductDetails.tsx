import { Product, AdditivesOptionsType } from '@/app/types/product'
import React, { useState } from 'react'
import Image from 'next/image';
import formatPrice from '@/utils/formatPrice';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { SizeOptions } from './SizeOptions';
import { AdditivesOptions} from './AdditivesOptions';


interface ProductProp {
    product: Product;
}

export const ProductDetails = ({ product }: ProductProp) => {
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [selectedAdditives, setSelectedAdditives] = useState<AdditivesOptionsType[]>([]); // Массив выбранных добавок

  const handleSizeChange = (sizePrice: number) => {
    setSelectedSize(sizePrice);
  };

  const handleAdditivesChange = (additive: AdditivesOptionsType) => {
    setSelectedAdditives((prevAdditives) => {
      if (prevAdditives.some((item) => item.name === additive.name)) {
        return prevAdditives.filter((item) => item !== additive);
      } else {
        return [...prevAdditives, additive];
     }
    });
  };

  const totalAdditivesPrice = selectedAdditives.reduce((acc, additive) => acc + additive['add-price'], 0); // Считаем итоговую цену добавок
  const totalPrice = product.price + selectedSize + totalAdditivesPrice;

  return (
    <div className="my-[40px] md:my-[60px] flex flex-col gap-[40px] md:flex-row md:gap-[60px] text-dark">
      <div className="min-w-[40%]">
        <Image 
          src={product.image} 
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-auto rounded-3xl"
        />    
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex font-medium text-heading-2">{product.name}</div>
        <div className="flex font-light">{product.description}</div>
        <div className="flex flex-col gap-3">
          <div>Size</div>
          <SizeOptions 
            sizes={product.sizes} 
            selectedSize={selectedSize}
            handleSizeChange={handleSizeChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div>Additives</div>
          <AdditivesOptions 
            additives={product.additives}
            selectedAdditives={selectedAdditives}
            handleAdditivesChange={handleAdditivesChange}
          />
        </div>
        <div className="flex justify-between font-medium text-heading-2">
          <div>Total:</div>
          <div>{formatPrice(totalPrice)}</div>
        </div>
        <hr className="border-lightB border-t-1"/>
        <div className="flex gap-2">
          <IoIosInformationCircleOutline size={25}/>
          <div className="text-caption">
            The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points 
            and enjoy your favorite coffee with up to 20% discount.
          </div>
        </div>
        <div>
          <button className="w-[100%] py-2 rounded-3xl border border-dark font-medium text-heading-3 hover:bg-container hover:text-light">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
