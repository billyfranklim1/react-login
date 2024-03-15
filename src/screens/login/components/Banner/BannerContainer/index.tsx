import CloseBannerButton from "../CloseBannerButton";
import Content from "../Content";
import ImagePagination from "../ImagePagination";
import { useBanner } from "../../../../../contexts/Banner/BannerContext";

export default function BannerContainer() {
  const { isOpen, images, currentImage } = useBanner();

  return (
    <div
      className={`bg-cover  ${
        isOpen ? "w-2/3" : "w-0"
      } hidden lg:block md:block`}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {isOpen && (
        <>
          <div className="h-full flex flex-col justify-between p-5">
            <CloseBannerButton />
            <div className="  text-white flex flex-col justify-end">
              <Content />
              <ImagePagination />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
