import { useState } from "react";

import BannerContainer from "./screens/login/components/Banner/BannerContainer";
import LoginContainer from "./screens/login/components/Login/LoginContainer";

export default function App() {
  const images = ["banner.png", "banner.png", "banner.png"];

  const [currentImage, setCurrentImage] = useState(0);
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen justify-center">
      <BannerContainer
        images={images}
        bannerOpen={bannerOpen}
        setBannerOpen={setBannerOpen}
        currentIndex={currentImage}
        setCurrentIndex={setCurrentImage}
      />
      <LoginContainer bannerOpen={bannerOpen} setBannerOpen={setBannerOpen} />
    </div>
  );
}
