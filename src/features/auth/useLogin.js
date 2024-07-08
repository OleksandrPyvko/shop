import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
        queryClient.setQueryData(['user', user])
      navigate("/");
      console.log(user)
    },
    onError: err => {
        console.log(err)
    }
  });

  return {mutate, isLoading}
}
