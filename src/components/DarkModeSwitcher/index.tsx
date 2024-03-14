import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { DarkModeSwitcherProps } from "../../screens/login/types";

export default function DarkModeSwitcher({
  darkMode,
  setDarkMode,
}: DarkModeSwitcherProps) {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <motion.div
      initial={darkMode ? "dark" : "light"}
      animate={darkMode ? "dark" : "light"}
      className="rounded-full bg-gray-300 w-14 h-8 flex items-center justify-start p-1 dark:bg-gray-700 cursor-pointer"
      onClick={setDarkMode}
    >
      <motion.div
        initial={darkMode ? "dark" : "light"}
        animate={darkMode ? "dark" : "light"}
        variants={{
          dark: { x: 28 },
          light: { x: 2 },
        }}
        className={`w-4 h-4 rounded-full flex items-center justify-center`}
      >
        {darkMode ? <FaSun color="yellow" /> : <FaMoon color="gray" />}
      </motion.div>
    </motion.div>
  );
}
