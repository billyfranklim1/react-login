
import { IoIosArrowBack } from 'react-icons/io';

function CloseBannerButton({ setBannerOpen }) {
  return (
    <button
      className="w-10 h-10 mt-5 ml-5 flex items-center justify-center border rounded-full text-white bg-transparent border-white  hover:border-black hover:text-black"
      onClick={() => setBannerOpen(false)}
    >
      <IoIosArrowBack />
    </button>
  );
}

export default CloseBannerButton;