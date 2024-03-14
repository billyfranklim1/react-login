import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  MdFacebook,
  MdPersonOutline,
  MdLockOutline,
  MdInput,
} from "react-icons/md";

import { FaApple, FaGithub, FaTwitter } from "react-icons/fa6";

export default function App() {
  const images = ["banner.png", "banner.png", "banner.png"];

  const [currentImage, setCurrentImage] = useState(0);
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <div className="flex h-screen w-screen justify-center">
      <div
        className={`bg-cover ${
          bannerOpen ? "w-2/3" : "w-0"
        }  hidden lg:block md:block`}
        style={{
          backgroundImage: ` url(${images[currentImage]})`,
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        {bannerOpen && (
          <div className="relative h-full">
            <div className="absolute w-full px-5 py-5 flex justify-start">
              <button
                className="w-10 h-10 flex items-center justify-center border rounded-full text-black bg-transparent border-black hover:bg-gray-700 hover:text-white"
                onClick={() => setBannerOpen(!bannerOpen)}
              >
                <IoIosArrowBack />
              </button>
            </div>
            <div className="absolute bottom-16 mx-5 flex flex-col items-center justify-center text-white">
              <div className="flex flex-col gap-4">
                <div className="p-2 flex justify-start items-center">
                  <span className="px-4 py-2 rounded-full bg-blue-700">
                    Cursos
                  </span>
                </div>
                <div className="px-2 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold my-5">
                    Plataforma de cursos completa
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, veritatis eveniet cupiditate illo eius beatae enim
                    dolorum doloremque totam incidunt maxime. Id voluptate
                    aspernatur dolorum, sint alias sapiente earum blanditiis!
                  </p>
                </div>
                <div className="px-2 flex items-center justify-center gap-4">
                  <div className="flex items-center justify-center gap-3 w-1/3">
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded w-1/3 ${
                            i === currentImage ? "bg-white" : "bg-gray-500"
                          } cursor-pointer hover:bg-white`}
                          onClick={() => setCurrentImage(i)}
                        ></div>
                      ))}
                  </div>
                  <div className="flex items-center justify-end w-2/3 h-10">
                    <IoIosArrowBack
                      size={30}
                      className={`cursor-pointer ${
                        currentImage === 0 ? "text-gray-500" : "text-white"
                      }`}
                      onClick={() => {
                        if (currentImage !== 0) {
                          setCurrentImage(
                            (currentImage - 1 + images.length) % images.length
                          );
                        }
                      }}
                    />
                    <IoIosArrowForward
                      size={30}
                      className={`cursor-pointer ${
                        currentImage === images.length - 1
                          ? "text-gray-500"
                          : "text-white"
                      }`}
                      onClick={() => {
                        if (currentImage !== images.length - 1) {
                          setCurrentImage((currentImage + 1) % images.length);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`h-full px-5 md:w-full w-full flex justify-center ${
          bannerOpen ? "md:w-1/3 w-full lg:w-1/3" : "w-full lg:w-5/12"
        } `}
      >
        {!bannerOpen && (
          <div className="absolute left-5 hidden lg:block md:block">
            <button
              className="mt-5 bg-blue-500 text-white rounded-full w-10 h-10 hover:bg-gray-700 flex items-center justify-center"
              onClick={() => setBannerOpen(true)}
            >
              <IoIosArrowForward />
            </button>
          </div>
        )}

        <div className={`${bannerOpen ? "w-full" : "w-1/3 lg:w-full"}`}>
          <div className="mt-10 flex justify-between">
            <img src="logo.png" alt="" className="h-8" />
            <a href="" className="text-blue-500">
              Criar conta
            </a>
          </div>
          <div className="flex flex-col mt-10">
            <h1 className="text-3xl font-bold">Boas-vindas!</h1>
            <p className="mt-5">Entre ultilizando umas das opções abaixo.</p>
          </div>
          <div className="flex w-full gap-2 mt-10">
            <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer">
              <MdFacebook size={20} />
            </div>
            <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer">
              <FaApple size={20} />
            </div>
            <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer">
              <FaTwitter size={20} />
            </div>
            <div className="border-black w-10 h-10 flex flex-1 justify-center items-center border rounded-md hover:bg-gray-100 cursor-pointer">
              <FaGithub size={20} />
            </div>
          </div>
          <div className="flex items-center mt-10">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-2 text-gray-500">ou</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="mt-10">
            <label className="block text-gray-600">Usuário</label>
            <div className="mt-2 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdPersonOutline size={20} />
              </span>
              <input
                type="text"
                className="w-full p-2 border border-gray-800 rounded-lg pl-10 focus:outline-none"
                placeholder="Usuário"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Senha</label>
            <div className="mt-2 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdLockOutline size={20} />
              </span>
              <input
                type="password"
                className="w-full p-2 border border-gray-800 rounded-lg pl-10 focus:outline-none"
                placeholder="Senha"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <input type="checkbox" id="stayConnected" className="mr-2" />
            <label htmlFor="stayConnected" className="text-gray-600">
              Manter conectado
            </label>
          </div>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center">
            <MdInput className="mr-2" />
            Entrar
          </button>
          <div className="mt-6 flex justify-center">
            <a href="#" className="text-center text-sm text-gray-600">
              Esqueceu sua senha ? {""}
              <span className="text-indigo-600">Recuperar senha</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
