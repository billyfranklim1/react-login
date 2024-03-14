import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  MdFacebook,
  MdPersonOutline,
  MdLockOutline,
  MdInput,
  MdVisibilityOff,
  MdVisibility
} from "react-icons/md";
import { FaApple, FaGithub, FaTwitter } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import DarkModeSwitcher from "../../DarkModeSwitcher";
import { useLogin } from "../../../screens/login/hooks/useLogin";

const FormContainer = ({
  bannerOpen,
  setBannerOpen,
}) => {
  const [darkMode, setDarkMode] = useState(false);
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

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === "true") {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <div
        className={`h-full px-10 md:w-full w-full flex justify-center dark:bg-neutral-800	
        ${bannerOpen ? "md:w-1/3 w-full lg:w-1/3" : "w-full lg:w-5/12"} `}
      >
        {!bannerOpen && (
          <div className="absolute left-5 hidden lg:block md:block">
            <button
              className="mt-5 bg-blue-500 text-white rounded-full w-10 h-10 hover:bg-blue-700 flex items-center justify-center dark:bg-neutral-800	 dark:text-white"
              onClick={() => setBannerOpen(true)}
            >
              <IoIosArrowForward />
            </button>
          </div>
        )}

        <div className={`${bannerOpen ? "w-full" : "w-1/3 lg:w-full"}`}>
          <div className="absolute right-5 top-5">
            <DarkModeSwitcher />
          </div>
          <div className="mt-16 flex justify-between">
            <img
              alt=""
              className="h-8"
              src={` ${darkMode ? "logo-dark.png" : "logo.png"}`}
            />
            <a href="" className="text-blue-500">
              Criar conta
            </a>
          </div>
          <div className="flex flex-col mt-10">
            <h1 className="text-3xl font-semibold text-neutral-800	 dark:text-white">
              Boas-vindas!
            </h1>
            <p className="text-lg font-medium text-gray-400 mt-5 dark:text-gray-300">
              Entre ultilizando umas das opções abaixo.
            </p>
          </div>
          <div className="flex w-full gap-2 mt-10">
            <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
              <MdFacebook size={20} />
            </div>
            <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
              <FaApple size={20} />
            </div>
            <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
              <FaTwitter size={20} />
            </div>
            <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
              <FaGithub size={20} />
            </div>
          </div>
          <div className="flex items-center mt-10">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-2 text-gray-400">ou</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <form onSubmit={formik.handleSubmit}>
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
                  autoComplete="off"
                  {...formik.getFieldProps("username")}
                />
              </div>
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 mt-2">
                  {formik.errors.username}
                </div>
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
                  autoComplete="off"
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
                <div className="text-red-500 mt-2">
                  {formik.errors.password}
                </div>
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
        </div>
      </div>
    </>
  );
};

export default FormContainer;