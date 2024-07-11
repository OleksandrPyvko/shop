import { useQuery } from "@tanstack/react-query";
import { getOrCreateCart } from "../services/apiCart";

export function useCart() {
    return useQuery('cart', getOrCreateCart)
}