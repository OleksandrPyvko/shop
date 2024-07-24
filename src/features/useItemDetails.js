import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getItemDetails } from "../services/apiCatalog";

export function useItemDetails(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["itemDetails", id],
    queryFn: () => getItemDetails(id),
  });
  return { data, isLoading };
}
