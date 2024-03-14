import { MdFacebook } from "react-icons/md";
import { FaApple, FaGithub, FaTwitter } from "react-icons/fa";

export default function SocialLoginButtons() {
  return (
    <div className="flex w-full gap-2 mt-10">
      <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
        <MdFacebook size={20} />
      </div>
      <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
        <FaApple size={20} />
      </div>
      <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
        <FaTwitter size={20} />
      </div>
      <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white">
        <FaGithub size={20} />
      </div>
    </div>
  );
}
