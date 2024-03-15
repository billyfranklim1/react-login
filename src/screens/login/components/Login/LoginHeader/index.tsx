import { useDarkMode } from "../../../../../contexts/DarkMode/DarkModeContext";
import { useTranslation } from "react-i18next";

export default function LoginHeader() {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <div className="mt-16 flex justify-between select-none">
      <img
        alt=""
        className="h-8"
        src={`${!isDarkMode ? "logo-light.png" : "logo-dark.png"}`}
      />
      <a href="" className="text-blue-500">
        {t("login.createAccount")}
      </a>
    </div>
  );
}
