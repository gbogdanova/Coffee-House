import { CartProductType } from '@/app/types/product';
import { createContext, useCallback, useContext, useState, ReactNode, useEffect } from 'react';
import {toast} from 'react-hot-toast';

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    console.log('Adding product to cart:', product);
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        const productExists = prev.find((productPrev) =>
          productPrev.id === product.id &&
          productPrev.size === product.size &&
          productPrev.additives.join(' ') === product.additives.join(' ')
        );
  
        if (productExists) {
          updatedCart = prev.map((productPrev) =>
            productPrev.id === product.id &&
            productPrev.size === product.size &&
            productPrev.additives.join(' ') === product.additives.join(' ')
              ? { ...productPrev,
                quantity: productPrev.quantity + product.quantity,
                price:  productPrev.price + product.price}
              : productPrev
          );
        } else {
          updatedCart = [...prev, product];
        }
      } else {
        updatedCart = [product];
      }
      return updatedCart;
    });
    setCartTotalQty((prevQty) => prevQty + product.quantity);
    toast.success('Item added to cart!');
  }, []);
  

  const value = { 
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error('useCart must be used within a CartContextProvider');
  }

  return context;
};
