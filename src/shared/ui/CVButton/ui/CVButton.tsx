import { useC } from "@/shared/const/changeThemeFunction";
import { useTranslation } from "react-i18next"

const CVButton = () => {
  const {t} = useTranslation();
    return (
    <button className={`${useC('text-white', 'text-black')} ${useC('bg-gray-900', 'bg-white')} p-2 px-5 rounded-[12px]`}>
      {t("CV")}
    </button>
  )
}

export default CVButton
