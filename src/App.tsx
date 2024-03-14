import { useState } from "react";

import BannerContainer from "./components/Banner/BannerContainer";
import FormContainer from "./components/Form/FormContainer";

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
      <FormContainer bannerOpen={bannerOpen} setBannerOpen={setBannerOpen} />
    </div>
  );
}
