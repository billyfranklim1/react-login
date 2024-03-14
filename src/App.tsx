import BannerContainer from "./screens/login/components/Banner/BannerContainer";
import LoginContainer from "./screens/login/components/Login/LoginContainer";

export default function App() {
  return (
    <div className="flex h-screen justify-center bg-white dark:bg-neutral-800">
      <BannerContainer />
      <LoginContainer />
    </div>
  );
}
