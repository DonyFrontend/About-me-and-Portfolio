import { TranslateButton } from "@/shared/ui/translateButton";
import { ThemeButton } from "@/shared/ui/themeButton";
import { useTranslation } from "react-i18next";
import { CVButton } from "@/shared/ui/CVButton";
import { useC } from "@/shared/const/changeThemeFunction";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className={`w-full ${useC('bg-white', 'bg-[#1A0B2E]')} fixed flex p-4 justify-between top-0 left-0`}>
            <div className="flex items-center gap-x-4">
                <TranslateButton />
                <ThemeButton />
            </div>
            <nav className="text-white text-nowrap flex items-center text-[18px] gap-x-5">
                <a href="" className={`p-2 ${useC('text-black', 'text-white')} ${useC('hover:bg-[#beb7c5]', 'hover:bg-[#391b60]')} transition-colors rounded`}>{t("home")}</a>
                <a href="" className={`p-2 ${useC('text-black', 'text-white')} ${useC('hover:bg-[#beb7c5]', 'hover:bg-[#391b60]')} transition-colors rounded`}>{t("about")}</a>
                <a href="" className={`p-2 ${useC('text-black', 'text-white')} ${useC('hover:bg-[#beb7c5]', 'hover:bg-[#391b60]')} transition-colors rounded`}>{t("skills")}</a>
                <a href="" className={`p-2 ${useC('text-black', 'text-white')} ${useC('hover:bg-[#beb7c5]', 'hover:bg-[#391b60]')} transition-colors rounded`}>{t("projects")}</a>
                <a href="" className={`p-2 ${useC('text-black', 'text-white')} ${useC('hover:bg-[#beb7c5]', 'hover:bg-[#391b60]')} transition-colors rounded`}>{t("education")}</a>
                <a href="" className={`p-2 ${useC('text-black', 'text-white')} ${useC('hover:bg-[#beb7c5]', 'hover:bg-[#391b60]')} transition-colors rounded`}>{t("contacts")}</a>
            </nav>
            <div className="flex items-center">
                <CVButton/>
            </div>
        </header>
    )
}

export default Header;