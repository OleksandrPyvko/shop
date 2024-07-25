import { useItemDetails } from "../features/useItemDetails";

function CartItem({ itemId, quantity }) {
  const { data, isLoading } = useItemDetails(itemId);
  const { data: item, isLoading: itemLoading } = useItemDetails(itemId);

  return (
    <div className="flex py-2 px-4 justify-between">
      <div className="my-auto w-full">
        <p className="uppercase">{data?.name}</p>
        <p>{data?.price} UAH</p>
        <p>{quantity}</p>
      </div>
      <div>
        <img
          className="mw-36 h-36 rounded-md object-cover"
          src={item.image}
          alt=""
        />
      </div>
    </div>
  );
}

export default CartItem;
