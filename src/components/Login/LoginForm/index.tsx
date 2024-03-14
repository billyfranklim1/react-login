import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  MdPersonOutline,
  MdLockOutline,
  MdInput,
  MdVisibilityOff,
  MdVisibility,
} from "react-icons/md";
import { useLogin } from "../../../screens/login/hooks/useLogin";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { loginMutation: login } = useLogin();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("O usuário é obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("A senha é obrigatória"),
    }),
    onSubmit: (values) => {
      login.mutate(values);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete="new-password">
        <div className="mt-10">
          <label className="block text-gray-400">Usuário</label>
          <div className="mt-2 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-white">
              <MdPersonOutline size={20} />
            </span>
            <input
              type="text"
              className={`w-full p-2 border ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : "border-neutral-800	"
              } rounded-lg pl-10 focus:outline-none dark:bg-neutral-800	 dark:text-white dark:border-gray-600`}
              placeholder="Usuário"
              autoComplete="new-password"
              {...formik.getFieldProps("username")}
            />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 mt-2">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="mt-4">
          <label className="block text-gray-400">Senha</label>
          <div className="mt-2 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-white">
              <MdLockOutline size={20} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className={`w-full p-2 border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-neutral-800	"
              } rounded-lg pl-10 focus:outline-none dark:bg-neutral-800	 dark:text-white dark:border-gray-600`}
              placeholder="Senha"
              autoComplete="new-password"
              {...formik.getFieldProps("password")}
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer dark:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <MdVisibilityOff size={20} />
              ) : (
                <MdVisibility size={20} />
              )}
            </span>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 mt-2">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="mt-4 flex items-center">
          <input type="checkbox" id="stayConnected" className="mr-2" />
          <label htmlFor="stayConnected" className="text-gray-400">
            Manter conectado
          </label>
        </div>
        <button
          className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center "
          type="submit"
        >
          <MdInput className="mr-2" />
          Entrar
        </button>
      </form>
      <div className="mt-10 flex justify-center">
        <a href="#" className="text-center text-sm text-gray-400">
          Esqueceu sua senha ? {""}
          <span className="text-blue-600">Recuperar senha</span>
        </a>
      </div>
    </>
  );
}
