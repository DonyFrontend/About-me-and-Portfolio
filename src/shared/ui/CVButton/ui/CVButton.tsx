import { useC } from "@/shared/hooks/use-change-theme";
import { useTranslation } from "react-i18next";

const CVButton = () => {
  const { t } = useTranslation();
  return (
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1SbxT99_M9xPEUu6GiyE0C28G7D0ZHimD/view?usp=sharing"
      className={`${useC("text-white", "text-black")} ${useC(
        "bg-gray-900",
        "bg-white"
      )} text-nowrap p-2 px-5 rounded-[12px]`}
    >
      {t("CV")}
    </a>
  );
};

export default CVButton;
