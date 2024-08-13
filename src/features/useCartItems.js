import { useQuery } from "@tanstack/react-query";
import { useGetOrCreateCart } from "./auth/useGetOrCreateCart";
import { getCartItems } from "../services/apiCart";
import { useItemDetails } from "./useItemDetails";

export  function useCartItems() {
  const { data: cart } = useGetOrCreateCart();

  const {
    data: cartItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cartItems", cart?.id],
    queryFn: () => getCartItems(cart?.id),
  });

  return cartItems;
}
