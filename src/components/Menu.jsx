import { NavLink, useNavigate } from "react-router-dom";
import { useMenu } from "../context/MenuContext";
import { useUser } from "../features/auth/useUser";
import { logout } from "../services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";

function Menu() {
  const { isOpen, toggleMenu, toggleCatalog } = useMenu();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useUser();

  const queryClient = useQueryClient();

  function handleLogin() {
    navigate("/login");
    toggleMenu();
  }

  function handleLogout() {
    logout();
    queryClient.invalidateQueries("user");
  }

  function handleAddItems() {
    navigate("/admin-tools");
    toggleMenu();
  }

  function handleClose() {
    toggleMenu();
  }

  function handleCatalog() {
    toggleMenu();
    toggleCatalog();
  }

  return (
    <div
      className={`bg-stone-900 fixed top-0 w-[100%] transition-transform transform h-lvh z-50 duration-500 text-white px-6 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={toggleMenu} className="px-2 pt-6">
        X
      </button>
      <div className='flex align-middle justify-center m-auto p-4 w-2/3'>

      {!isAuthenticated ? (
        <button
        onClick={handleLogin}
        className="w-full uppercase text-center border-y py-4 text-stone-400 border-stone-400"
        >
          Вхід / Реєстрація
        </button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
      </div>
      {/* <button
        onClick={handleLogin}
        className=" uppercase text-center border-y py-4 text-stone-400 border-stone-400"
      >
        Вхід / Реєстрація
      </button> */}
      <button
        onClick={handleAddItems}
        className="px-6 py-4 bg-stone-400 text-stone-800 font-semibold mx-auto w-full"
      >
        Додати товари
      </button>
      <ul className="flex flex-col gap-8 font-semibold text-xl text-stone-400 py-6 uppercase">
        <li>
          <NavLink onClick={handleClose} to="/">
            головна
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleCatalog} to="/catalog">
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
        <li>
          <NavLink onClick={handleClose} to="/about-us">
            про t-shop
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
