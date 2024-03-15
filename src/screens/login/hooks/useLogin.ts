import { useMutation } from "@tanstack/react-query";
import { login } from "../api";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useTranslation } from "react-i18next";


export const useLogin = () => {
  const {t} = useTranslation();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success(t("login.success"), {
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
