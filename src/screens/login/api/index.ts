import axios from "axios";
import { Login } from "../types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const login = async (login: Login) => {
  try {
    const url = `/api/login`;
    const response = await axios.post(url, login, {
      headers: {
        accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
