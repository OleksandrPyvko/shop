import { createContext, useContext, useState } from "react";
import { FaBullseye } from "react-icons/fa";

const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

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
