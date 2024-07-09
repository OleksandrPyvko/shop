import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCart, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
