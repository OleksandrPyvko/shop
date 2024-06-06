import { NavLink, useSearchParams } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

function Menu() {
  const { isCatalogOpen, toggleCatalog } = useMenu();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    toggleCatalog();
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
      <ul
        className={`flex flex-col gap-8 font-semibold text-xl text-stone-400 py-6 uppercase duration-1000 transition-all  ${
          isCatalogOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <li>
          <NavLink to="catalog?category=hoodies" onClick={handleClick}>
            ХУДІ
          </NavLink>
        </li>
        <li>
          <NavLink to="catalog?category=sweatshirts" onClick={handleClick}>
            світшоти
          </NavLink>
        </li>
        <li>
          <NavLink to="catalog?category=outerwear" onClick={handleClick}>
            верхній одяг
          </NavLink>
        </li>
        <NavLink to="catalog?category=shorts" onClick={handleClick}>
          шорти
        </NavLink>
        <li>
          <NavLink to="catalog?category=t-shirts" onClick={handleClick}>
            футболки
          </NavLink>
        </li>
        <li>
          <NavLink to="catalog?category=skirts" onClick={handleClick}>
            спідниці
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
