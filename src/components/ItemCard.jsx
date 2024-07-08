import { useNavigate } from "react-router-dom";
import { deleteItem } from "../services/apiCatalog";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function ItemCard({ item, isLoading }) {
  const navigate = useNavigate();
  const id = item.id;

  function handleClick() {
    navigate(`/item/${id}`);
  }

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <div
          className=" py-6 px-4 shadow-xl text-stone-300 bg-stone-500 bg-opacity-20   w-full divide-y divide-stone-600"
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
          <div className="flex justify-center">
           
          </div>
        </div>
      )}
    </>
  );
}

export default ItemCard;
