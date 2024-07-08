import { useCart } from "../context/CartContext";
import { useLogout } from "../features/auth/useLogout";
import { useUser } from "../features/auth/useUser";

function Cart() {
  const { isCartOpen, toggleCart } = useCart();
  const { user } = useUser();
  const { logout, isLoading } = useLogout();

  return (
    <div
      className={`bg-stone-900 fixed top-0 w-[100%] transition-transform transform h-lvh z-50 duration-500 text-white px-6 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <p>{user?.email}</p>

      <div>
        <button onClick={logout}>Logout</button>
      </div>

      <button className="bg-cyan-300 px-2 text-cyan-900" onClick={toggleCart}>
        toggle
      </button>
    </div>
  );
}

export default Cart;

// z-50 fixed top-0 h-svh bg-stone-900 w-[100%]
