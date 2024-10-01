import { createContext, useContext, useState } from 'react';

interface CartContextType {
  cartTotalQty: number;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const CartContextProvider = ({ children }: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);

  const value = { cartTotalQty };

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