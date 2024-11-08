import { useTranslation } from "react-i18next";
import langauage_dark from '@/shared/assets/icons/Language.svg';
import langauage_light from '@/shared/assets/icons/language_light.svg';
import { useC } from "@/shared/hooks/use-change-theme";

const TranslateButton = () => {
  const {i18n} = useTranslation();

  function handleChangeLanguage(lang: string): void {
    i18n.changeLanguage(lang);
  }

  const languages = [
    {lang: 'ru', text: 'Русский'},
    {lang: 'en', text: 'English'},
  ]
  
  return (
    <div className={`p-3 ${useC('border-black', 'border-white')} ${useC('bg-white', 'bg-[#1A0B2E]')} border rounded-[500px] flex gap-x-2 px-4 py-2 items-center`}>
      <img src={useC(langauage_light, langauage_dark)} alt="Error!" />
      <select onChange={e => handleChangeLanguage(e.currentTarget.value)} className={`${useC('bg-white', 'bg-[#1A0B2E]')} text-lg cursor-pointer`}>
        {languages.map((item, index) => <option key={index} value={item.lang}>{item.text}</option>)}
      </select>
    </div>
  )
}

export default TranslateButton;