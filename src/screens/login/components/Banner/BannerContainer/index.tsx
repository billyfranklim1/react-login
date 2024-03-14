import CloseBannerButton from "../CloseBannerButton";
import Content from "../Content";
import ImagePagination from "../ImagePagination";
import { useBanner } from "../../../../../contexts/Banner/BannerContext";

export default function BannerContainer() {
  const { isOpen, images, currentImage } = useBanner();

  return (
    <div
      className={`bg-cover ${
        isOpen ? "w-2/3" : "w-0"
      } hidden lg:block md:block`}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {isOpen && (
        <div className="relative h-full">
          <CloseBannerButton />
          <div className="absolute bottom-14 mx-5 flex flex-col items-center justify-center text-white">
            <div className="flex flex-col gap-4">
              <Content />
              <ImagePagination />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
