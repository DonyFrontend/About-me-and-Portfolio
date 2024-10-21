import { useTranslation } from "react-i18next"

const CVButton = () => {
  const {t} = useTranslation();
    return (
    <button className="text-black bg-white p-2 px-5 rounded-[12px]">
      {t("CV")}
    </button>
  )
}

export default CVButton
