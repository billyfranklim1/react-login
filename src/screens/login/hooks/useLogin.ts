import { useMutation } from "@tanstack/react-query";
import { login } from "../api";

import { toast } from "react-toastify";

export const useLogin = () => {
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("login success", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onError: (error) => {
      console.error("Error creating task:", error);
    },
  });

  return {
    loginMutation,
  };
};
