import { Product, AdditivesOptionsType, CartProductType } from '@/app/types/product';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import formatPrice from '@/utils/formatPrice';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { SizeOptions } from './SizeOptions';
import { AdditivesOptions } from './AdditivesOptions';
import { SetQuantity } from './SetQuantity';
import { useCart } from '@/hooks/useCart';

interface ProductProp {
  product: Product;
}

export const ProductDetails = ({ product }: ProductProp) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [selectedAdditives, setSelectedAdditives] = useState<AdditivesOptionsType[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    category: product.category,
    size: product.sizes[Object.keys(product.sizes)[0]].size,
    additives: [],
    quantity: 1,
    price: product.price,
    image: product.image,
  });

  const handleSizeChange = (sizeIndex: number) => {
    setSelectedSize(sizeIndex);
  };

  const toggleAdditiveSelection = (additive: AdditivesOptionsType) => {
    setSelectedAdditives((prevAdditives) => {
      if (prevAdditives.some((item) => item.name === additive.name)) {
        return prevAdditives.filter((item) => item.name !== additive.name);
      } else {
        return [...prevAdditives, additive];
      }
    });
  };

  const handleQuantity = (action: 'increase' | 'decrease') => {
    if (action === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (action === 'increase' && quantity < 10) {
      setQuantity((prev) => prev + 1);
    }
  };

  const totalAdditivesPrice = selectedAdditives.reduce((acc, additive) => acc + additive['add-price'], 0);
  const totalSizePrice = product.sizes[Object.keys(product.sizes)[selectedSize]]['add-price'] || 0;
  const totalPrice = product.price * quantity + totalSizePrice * quantity + totalAdditivesPrice * quantity;

  useEffect(() => {
    setCartProduct((prev) => ({
      ...prev,
      size: product.sizes[Object.keys(product.sizes)[selectedSize]].size,
      additives: selectedAdditives.map(additive => additive.name).sort(),
      quantity: quantity,
      price: totalPrice,
    }));
  }, [selectedSize,selectedAdditives, quantity, totalPrice, product.sizes]);

  
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleAddProduct = () => {
    if (isButtonDisabled) return;
    handleAddProductToCart(cartProduct);
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
  };

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
          {product.additives.length > 0 ? (
            <AdditivesOptions
              additives={product.additives}
              selectedAdditives={selectedAdditives}
              handleAdditivesChange={toggleAdditiveSelection}
            />
          ) : (
            <div>No additives available</div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div>Quantity</div>
          <SetQuantity
            quantity={quantity}
            handleQuantity={handleQuantity}
          />
        </div>
        <div className="flex justify-between font-medium text-heading-2">
          <div>Total:</div>
          <div>{formatPrice(totalPrice)}</div>
        </div>
        <hr className="border-lightB border-t-1" />
        <div className="flex gap-2">
          <IoIosInformationCircleOutline size={25} />
          <div className="text-caption">
            The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points
            and enjoy your favorite coffee with up to 20% discount.
          </div>
        </div>
        <div>
          <button 
            className={`w-[100%] py-2 rounded-3xl border border-dark font-medium text-heading-3 
              ${isButtonDisabled ? 'border-lightB text-lightB' : 'hover:bg-container hover:text-light'}`}  
            onClick={handleAddProduct}
            disabled={isButtonDisabled}
            >{isButtonDisabled ? 'Adding...' : 'Add To Cart'}</button>
        </div>
      </div>
    </div>
  );
};
