import { IoIosArrowForward } from "react-icons/io";
import { CloseBannerButtonProps } from "../../../screens/login/types";

function CloseBannerButton({ setBannerOpen }: CloseBannerButtonProps) {
  return (
    <div className="absolute left-5 hidden lg:block md:block">
      <button
        className="mt-5 bg-blue-500 text-white rounded-full w-10 h-10 hover:bg-blue-700 flex items-center justify-center dark:bg-neutral-800	 dark:text-white"
        onClick={() => setBannerOpen(true)}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default CloseBannerButton;
