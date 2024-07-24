import { useQuery } from "@tanstack/react-query";
import { useGetOrCreateCart } from "./auth/useGetOrCreateCart";
import { getCartItems } from "../services/apiCart";

export function useCartItems() {
  const { data: cart } = useGetOrCreateCart();

  const {
    data: cartItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cartItems", cart?.id],
    queryFn: () => getCartItems(cart?.id),
  });
  console.log("Cart items ->>>", cartItems);
  return cartItems;
}
