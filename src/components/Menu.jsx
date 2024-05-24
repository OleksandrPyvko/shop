import { NavLink } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

function Menu() {
  const { isOpen, toggleMenu } = useMenu();

  function handleClose() {
    toggleMenu((prev) => !prev);
  }

  return (
    <div
      className={`bg-stone-900 fixed top-0 w-[100%] transition-all h-lvh z-50 duration-500 text-white px-6 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={toggleMenu} className="px-2 py-6">
        X
      </button>
      <p className="uppercase text-center border-y py-4 text-stone-400 border-stone-400">
        Вхід / Реєстрація
      </p>
      <ul className="flex flex-col gap-8 font-semibold text-xl text-stone-400 py-6 uppercase">
        <li>
          <NavLink onClick={handleClose} to="/">
            головна
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/catalog">
            каталог
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/delivery">
            доставка
          </NavLink>
        </li>
        <NavLink onClick={handleClose} to="/faq">
          допомога
        </NavLink>
        <li>
          <NavLink onClick={handleClose} to="/contacts">
            контакти
          </NavLink>
        </li>
        <li><NavLink onClick={handleClose} to="/about-us">
            про t-shop
          </NavLink></li>
      </ul>
    </div>
  );
}

export default Menu;
