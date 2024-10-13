import { CartProductType } from '@/app/types/product';
import { createContext, useCallback, useContext, useState, ReactNode } from 'react';
import {toast} from 'react-hot-toast';

type CartContextType = {
  cartTotalQty: number;
  cartSubtotal: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleIncreaseProductQty: (product: CartProductType) => void;
  handleDecreaseProductQty: (product: CartProductType) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  const calculateSubtotal = (cartProducts: CartProductType[]) => {
    return cartProducts.reduce((sum, product) => sum + (product.price1 * product.quantity), 0);
  };

  const handleAddProductToCart = useCallback((product: CartProductType) => {
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
      setCartSubtotal(calculateSubtotal(updatedCart));
      return updatedCart;
    });
    setCartTotalQty((prevQty) => prevQty + product.quantity);
    toast.success('Item added to cart!');
  }, []);

const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
  setCartProducts((prev) => {
    if (prev) {
      const productIndex = prev.findIndex((productPrev) =>
        productPrev.id === product.id &&
        productPrev.size === product.size &&
        productPrev.additives.join(' ') === product.additives.join(' ')
      );
      
      if (productIndex !== -1) {
        let updatedCart = prev.filter((_, ind) => ind !== productIndex);
        setCartSubtotal(calculateSubtotal(updatedCart));
        return updatedCart.length > 0 ? updatedCart : null;
      }
    }
    return prev; 
  });

  setCartTotalQty((prevQty) => prevQty - product.quantity);
  toast.success('Item removed from cart!');
  }, []);

   const handleIncreaseProductQty = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      if (!prev) return prev;
  
      const updatedCart = prev.map((item) => {
        if (item.id === product.id && item.size === product.size && item.additives.join(' ') === product.additives.join(' ')) {
          if (item.quantity < 10) {
            return { 
              ...item, 
              quantity: item.quantity + 1, 
              price: (item.price / item.quantity) * (item.quantity + 1) 
            };
          }
        }
        return item;
      });
  
      setCartSubtotal(calculateSubtotal(updatedCart));
      return updatedCart;
    });
  
    setCartTotalQty((prevQty) => prevQty + 1);
  }, []);
  

  const handleDecreaseProductQty = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      if (!prev) return prev;

      const updatedCart = prev.map((item) => {
        if (item.id === product.id && item.size === product.size && item.additives.join(' ') === product.additives.join(' ')) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1, price: (item.price / item.quantity) * (item.quantity - 1) };
          }
        }
        return item;
      });
      setCartSubtotal(calculateSubtotal(updatedCart));
      return updatedCart;
    });

    setCartTotalQty((prevQty) => prevQty - 1);
  }, []);
  
  

  const value = { 
    cartTotalQty,
    cartSubtotal,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
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
