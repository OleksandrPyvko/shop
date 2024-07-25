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

  const fullName = user?.identities[0].identity_data.fullName;

  console.log("user", user);
  console.log();
  return (
    <div
      className={`bg-stone-900 fixed top-0 w-[100%] rounded-md transition-transform transform h-lvh z-50 duration-500 text-white px-6 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      
      <p>{fullName}</p>

      <h2 className="text-center text-2xl w-full py-4">Кошик</h2>

      <div className="p-4 rounded-md bg-stone-800 text-stone-300">
        {cartItems.length === 0 && (
          <p className="text-center">
            Ой-йой <br /> Ви ще нічого не додали до кошика
          </p>
        )}
        {cartItems?.map((item, index) => (
          <CartItem
            key={index}
            quantity={item.quantity}
            itemId={item?.item_id}
          />
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
