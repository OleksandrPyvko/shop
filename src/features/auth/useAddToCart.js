import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../services/apiCart";

export function useAddItemToCart() {
  const queryClient = useQueryClient();

  const { mutate: addItemToCart, isLoading } = useMutation({
    mutationFn: ({ cart_id, quantity, item_id }) =>
      addToCart({ cart_id, quantity, item_id }),
    onSuccess: () => queryClient.invalidateQueries("cartItems"),
  });
  return { addItemToCart, isLoading };
}
