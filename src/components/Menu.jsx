import { useMenu } from "../context/MenuContext";

function Menu() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <div
      className={`bg-stone-900 fixed top-0 w-[100%] transition-all h-lvh z-50 text-white px-6 ${
        isOpen ? "" : "left-full"
      }`}
    >
      <button onClick={toggleMenu} className="px-2 py-6">
        X
      </button>
      <p className="uppercase text-center border-y py-4 text-stone-400 border-stone-400">
        Вхід / Реєстрація
      </p>
      <ul className="flex flex-col gap-8 dela text-2xl text-stone-400 py-6 uppercase">
        <li>головна</li>
        <li>Каталог</li>
        <li>Доставка</li>
        <li>Контакти</li>
        <li>Про T-SHOP</li>
      </ul>
    </div>
  );
}

export default Menu;
