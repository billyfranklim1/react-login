import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-start items-center">
        <span className="px-4 py-2 rounded-full bg-blue-700 text-sm">
          {t("banner.button")}
        </span>
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-semibold my-4">
          {t("banner.title")}
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
