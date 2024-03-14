import React, { useState } from "react";
import CloseBannerButton from "../CloseBannerButton";
import BannerContent from "../BannerContent";
import Tag from "../Tag";
import ImagePagination from "../ImagePagination";

const BannerContainer = ({ images, bannerOpen, setBannerOpen, currentIndex, setCurrentIndex }) => {
  const toggleBanner = () => {
    setBannerOpen(!bannerOpen);
  };

  const changeImage = (newIndex) => {
    console.log(newIndex);
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div
      className={`bg-cover ${
        bannerOpen ? "w-2/3" : "w-0"
      }  hidden lg:block md:block`}
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {bannerOpen && (
        <div className="relative h-full">
            <CloseBannerButton setBannerOpen={toggleBanner} />
            <div className="absolute bottom-14 mx-5 flex flex-col items-center justify-center text-white">
                <div className="flex flex-col gap-4">
                    <BannerContent />
                    <ImagePagination
                        totalImages={images.length}
                        currentIndex={currentIndex}
                        changeImage={changeImage}
                    />
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default BannerContainer;
