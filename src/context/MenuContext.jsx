import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(true);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function toggleCatalog() {
    setIsCatalogOpen((prev) => !prev);
  }

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, isCatalogOpen, toggleCatalog }}>
      {children}
    </MenuContext.Provider>
  );
}
