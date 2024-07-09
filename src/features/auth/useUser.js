import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  console.log(user?.email);
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
