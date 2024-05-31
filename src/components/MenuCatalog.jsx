import { NavLink } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

function Menu() {
  const { isCatalogOpen, toggleCatalog } = useMenu();

  function handleClose() {
    toggleCatalog();
  }
  
  function handleClick(value) {

  }

  return (
    <div
      className={`bg-stone-900 fixed top-0 w-[100%] transition-all h-lvh z-50 duration-500 text-white px-6 ${
        isCatalogOpen ? "translate-x-0" : "translate-x-full"
      } right-0 `}
    >
      <button onClick={toggleCatalog} className="px-2 py-6">
        X
      </button>
      <p className="uppercase w-full text-center border-y py-4 text-stone-400 border-stone-400">
        Вхід / Реєстрація
      </p>
      <ul className={`flex flex-col gap-8 font-semibold text-xl text-stone-400 py-6 uppercase duration-1000 transition-all  ${
        isCatalogOpen ? 'opacity-100'  : 'opacity-0'
      }`}>
        <li>
          <NavLink onClick={handleClose} to="/">
            ХУДІ
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/catalog">
            світшоти
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/delivery">
            верхній одяг
          </NavLink>
        </li>
        <NavLink onClick={handleClose} to="/faq">
          шорти
        </NavLink>
        <li>
          <NavLink onClick={handleClose} to="/contacts">
            футболки
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/about-us">
            спідниці
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
