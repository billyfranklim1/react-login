import React from "react";

function BannerContent() {
  return (
    // <div className="absolute bottom-14 mx-5 flex flex-col items-center justify-center text-white">
    // </div>

    //   <div className="flex flex-col gap-4">
    //   </div>

    <>
      <div className="flex justify-start items-center">
        <span className="px-4 py-2 rounded-full bg-blue-700 text-sm">
          Cursos
        </span>
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-semibold my-4">
          Plataforma de cursos completa
        </h3>
        <p className="font-medium text-gray-400">
          Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida
          tincidunt, etiam magna sapien gravida sodales sed vel pulvinar
          suspendisse, morbi mi proin urna ornare posuere donec aptent. orci
          vivamus primis fusce lacinia libero nostra aliquam vestibulum
        </p>
      </div>
    </>
  );
}

export default BannerContent;
