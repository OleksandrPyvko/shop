import { useCartContext } from "../context/CartContext";
import { useLogout } from "../features/auth/useLogout";
import { useUser } from "../features/auth/useUser";
import { useGetOrCreateCart } from "../features/auth/useGetOrCreateCart";
import { useCartItems } from "../features/useCartItems";
import CartItem from "./CartItem";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

function Cart() {
  const [total, setTotal] = useState(null);
  const { isCartOpen, toggleCart } = useCartContext();
  const { user } = useUser();
  const { logout } = useLogout();
  const { data, error } = useGetOrCreateCart();

  console.log(data);

  //!! updating cart content on logout etc
  const cartItems = useCartItems();
  const fullName = user?.user_metadata?.fullName;

  useEffect(() => {
    const totalPrice = cartItems
      ?.map((item) => item.Items.price * item.quantity)
      .reduce((acc, curr) => acc + curr, 0);

    setTotal(totalPrice);
  }, [cartItems]);

  return (
    <div
      className={`bg-stone-900 z-50 h-full fixed top-0 w-[100%] overflow-y-auto max-h-[100vh] rounded-md transition-transform transform duration-500 text-white px-6 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end">
        <button
          className="py-6 px-2 text-stone-200 text-2xl "
          onClick={toggleCart}
        >
          <IoClose />
        </button>
      </div>

      <button onClick={logout}>Logout</button>

      <p>{fullName}</p>

      <h2 className="text-center text-2xl w-full py-4">Кошик</h2>

      <div className="p-4 rounded-md bg-stone-800 text-stone-300">
        {cartItems?.length === 0 && (
          <p className="text-center">
            Ой-йой <br /> Ви ще нічого не додали до кошика
          </p>
        )}
        <div className="">
          {cartItems?.map((item, index) => (
            <CartItem
              key={index}
              quantity={item.quantity}
              itemId={item?.item_id}
            />
          ))}
        </div>
        {cartItems?.length !== 0 && (
          <p className="flex justify-end pt-4">Total price: {total} uah</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
