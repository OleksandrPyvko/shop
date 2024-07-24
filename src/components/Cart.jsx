import { useCartContext } from "../context/CartContext";
import { useLogout } from "../features/auth/useLogout";
import { useUser } from "../features/auth/useUser";
import { useGetOrCreateCart } from "../features/auth/useGetOrCreateCart";
import { useCartItems } from "../features/useCartItems";
import CartItem from "./CartItem";

function Cart() {
  const { isCartOpen, toggleCart } = useCartContext();
  const { user } = useUser();
  const { logout } = useLogout();
  const { data, error } = useGetOrCreateCart();

  const cartItems = useCartItems();

  return (
    <div
      className={`bg-stone-900 fixed top-0 w-[100%] transition-transform transform h-lvh z-50 duration-500 text-white px-6 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <p>{user?.email}</p>

      <div className="p-4 bg-green-400">
        {cartItems?.map((item) => (
          
          <CartItem key={item?.id} itemId={item?.item_id} />
          
          
        ))}
        
      </div>

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
