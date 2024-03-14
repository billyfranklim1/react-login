import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImagePaginationProps } from "../../../screens/login/types";

export default function ImagePagination({
  totalImages,
  currentIndex,
  changeImage,
}: ImagePaginationProps) {
  return (
    <div className="flex items-center justify-start  w-full mt-10 ">
      <div className="flex items-center justify-center w-1/3 gap-3 ">
        {Array.from({ length: totalImages }).map((_, index) => (
          <div
            key={index}
            className={`h-1 w-full rounded ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            } cursor-pointer`}
            onClick={() => changeImage(index)}
          ></div>
        ))}
      </div>
      <div className="flex items-center justify-end w-2/3 h-10">
        <IoIosArrowBack
          size={30}
          className={`cursor-pointer ${
            currentIndex === 0 ? "text-gray-400" : "text-white"
          }`}
          onClick={() => {
            if (currentIndex !== 0) {
              changeImage((currentIndex - 1 + totalImages) % totalImages);
            }
          }}
        />
        <IoIosArrowForward
          size={30}
          className={`cursor-pointer ${
            currentIndex === totalImages - 1 ? "text-gray-400" : "text-white"
          }`}
          onClick={() => {
            if (currentIndex !== totalImages - 1) {
              changeImage((currentIndex + 1) % totalImages);
            }
          }}
        />
      </div>
    </div>
  );
}
