import { useC } from "@/shared/hooks/use-change-theme";
import { useTranslation } from "react-i18next"

const CVButton = () => {
  const {t} = useTranslation();
    return (
    <a target='_blank' href='https://drive.google.com/file/d/1EHbkp6vimqCeqFYzMolP6hn5G9nmDGg7/view?usp=sharing' className={`${useC('text-white', 'text-black')} ${useC('bg-gray-900', 'bg-white')} text-nowrap p-2 px-5 rounded-[12px]`}>
      {t("CV")}
    </a>
  )
}

export default CVButton
