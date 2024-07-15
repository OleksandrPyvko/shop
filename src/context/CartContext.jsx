import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(null);

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCart, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
