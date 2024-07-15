import { useCartContext } from "../context/CartContext";
import { useLogout } from "../features/auth/useLogout";
import { useUser } from "../features/auth/useUser";
import { useCart } from "../features/auth/useCart";

function Cart() {
  const { isCartOpen, toggleCart } = useCartContext();
  const { user } = useUser();
  const { logout } = useLogout();
  const { data, error } = useCart();

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

      <div className="text-white">Cart id: {data?.id} </div>
    </div>
  );
}

export default Cart;
