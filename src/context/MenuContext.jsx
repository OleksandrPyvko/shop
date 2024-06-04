import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(true);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function toggleCatalog() {
    setIsCatalogOpen((prev) => !prev);
    setIsOpen(false);
  }

  return (
    <MenuContext.Provider
      value={{ isOpen, toggleMenu, isCatalogOpen, toggleCatalog }}
    >
      {children}
    </MenuContext.Provider>
  );
}
