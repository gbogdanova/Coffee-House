import { CartProductType } from '@/app/types/product';
import { createContext, useCallback, useContext, useState, ReactNode } from 'react';

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
    setCartProducts((prev) => {
      if (prev) {
        const productExists = prev.find((productPrev) =>
          productPrev.id === product.id &&
          productPrev.size === product.size &&
          productPrev.additives.join(' ') === product.additives.join(' ')
        );
  
        if (productExists) {
          return prev.map((productPrev) =>
            productPrev.id === product.id &&
            productPrev.size === product.size &&
            productPrev.additives.join(' ') === product.additives.join(' ')
              ? { ...productPrev,
                quantity: productPrev.quantity + product.quantity,
                price:  productPrev.price + product.price}
              : productPrev
          );
        } else {
          return [...prev, product];
        }
      } else {
        return [product];
      }
    });
  
    setCartTotalQty((prevQty) => prevQty + product.quantity);
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
