import { useItemDetails } from "../features/useItemDetails";

function CartItem({ itemId }) {
  const { data, isLoading } = useItemDetails(itemId);

  return (
    <div>
      <p>{data?.id}</p>
      <p>{data?.price} UAH</p>
    </div>
  );
}

export default CartItem;
