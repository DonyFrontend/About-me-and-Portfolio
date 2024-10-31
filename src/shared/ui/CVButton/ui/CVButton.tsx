import { useC } from "@/shared/hooks/use-change-theme";
import { useTranslation } from "react-i18next"

const CVButton = () => {
  const {t} = useTranslation();
    return (
    <button className={`${useC('text-white', 'text-black')} ${useC('bg-gray-900', 'bg-white')} text-nowrap p-2 px-5 rounded-[12px]`}>
      {t("CV")}
    </button>
  )
}

export default CVButton
