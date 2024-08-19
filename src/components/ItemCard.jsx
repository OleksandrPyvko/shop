import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAddItemToCart } from "../features/auth/useAddToCart";

export function ItemCard({ item, isLoading, cart_id }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const item_id = item.id;

  const { addItemToCart, isLoading: isAdding } = useAddItemToCart();

  function handleAdding() {
    addItemToCart({ cart_id, quantity, item_id });
  }

  function handleClick() {
    navigate(`/item/${item_id}`);
  }

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <div
          className=" py-6 px-4 shadow-xl text-stone-300 bg-stone-500 bg-opacity-20   w-full divide-y divide-stone-600 flex flex-col"
          style={{
            cursor: "pointer",
          }}
        >
          <img
            onClick={() => handleClick(id)}
            src={item.image}
            alt="item-image"
            className="h-96 w-full min-h-96 object-cover"
          />
          <p className="py-1 uppercase">{item.name}</p>
          <div className="flex justify-between py-1">
            <span className="text-sm text-stone-400">
              Артикул: {item.article}
            </span>
            <p className="">{item.price} UAH</p>
          </div>
          <div className="flex justify-center"></div>
          <button
            onClick={handleAdding}
            className="px-4 py-2 bg-stone-300 text-black rounded-full"
          >
            До кошика
          </button>
        </div>
      )}
    </>
  );
}

export default ItemCard;
