import { useState, useEffect } from "react";
import DarkModeSwitcher from "../../DarkModeSwitcher";

import SocialLoginButtons from "../SocialLoginButtons";
import Divider from "../Divider";
import LoginForm from "../LoginForm";
import OpenBannerButton from "../OpenBannerButton";
import LoginHeader from "../LoginHeader";
import WelcomeMessage from "../WelcomeMessage";

export default function LoginContainer({ bannerOpen, setBannerOpen }) {
  const [darkMode, setDarkMode] = useState(false);

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
        {!bannerOpen && <OpenBannerButton setBannerOpen={setBannerOpen} />}

        <div className={`${bannerOpen ? "w-full" : "w-1/3 lg:w-full"}`}>
          <div className="absolute right-5 top-5">
            <DarkModeSwitcher
              darkMode={darkMode}
              setDarkMode={() => setDarkMode(!darkMode)}
            />
          </div>
          <LoginHeader darkMode={darkMode} />
          <WelcomeMessage />
          <SocialLoginButtons />
          <Divider />
          <LoginForm />
        </div>
      </div>
    </>
  );
}
