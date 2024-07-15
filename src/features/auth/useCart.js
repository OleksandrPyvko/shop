import { useQuery } from "@tanstack/react-query";
import { getOrCreateCart } from "../../services/apiCart";

export function useCart() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['cart'],
        queryFn: getOrCreateCart,
    })

    return {data, isLoading, error}
}