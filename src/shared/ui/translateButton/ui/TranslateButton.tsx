import { useTranslation } from "react-i18next";
import image from '@/shared/assets/icons/Language.svg';
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
    <div className={`p-3 border-white ${useC('bg-gray-900', 'bg-[#1A0B2E]')} border rounded-[500px] flex gap-x-2 px-4 py-2 items-center`}>
      <img src={image} alt="Error!" />
      <select onChange={e => handleChangeLanguage(e.currentTarget.value)} className="bg-[#1A0B2E] text-white text-lg cursor-pointer">
        {languages.map((item, index) => <option key={index} value={item.lang}>{item.text}</option>)}
      </select>
    </div>
  )
}

export default TranslateButton;