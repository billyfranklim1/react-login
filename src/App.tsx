import BannerContainer from "./screens/login/components/Banner/BannerContainer";
import LoginContainer from "./screens/login/components/Login/LoginContainer";

export default function App() {
  return (
    <div className="flex h-screen w-screen justify-center">
      <BannerContainer />
      <LoginContainer />
    </div>
  );
}
