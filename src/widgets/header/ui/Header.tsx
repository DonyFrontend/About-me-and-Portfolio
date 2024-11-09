import { TranslateButton } from "@/shared/ui/translateButton";
import { ThemeButton } from "@/shared/ui/themeButton";
import { useTranslation } from "react-i18next";
import { CVButton } from "@/shared/ui/CVButton";
import { useC } from "@/shared/hooks/use-change-theme";
import { useMediaQuery } from "@/shared/hooks/use-media";
import { useState } from "react";

const Header = () => {

    const { t } = useTranslation();
    const [state, setState] = useState<boolean>(false);
    const navCN = `p-2 rounded-[12px] ${useC('text-black', 'text-white')} ${useC('hover:bg-[#beb7c5] active:bg-[#beb7c5]', 'hover:bg-[#391b60] active:bg-[#391b60]')} transition-colors rounded`;
    const burgerNavCN = `p-2 rounded-[12px] w-full ${useC('text-black', 'text-white')} ${useC('hover:bg-[#beb7c5] active:bg-[#beb7c5]', 'hover:bg-[#391b60] active:bg-[#391b60]')} transition-colors rounded`;

    const media = useMediaQuery('(max-width: 1100px)');
    const nav = <div><nav className={`text-white text-nowrap flex items-center text-[18px] gap-x-5`}>
        <a href="#home" className={navCN}>{t("home")}</a>
        <a href="#skills" className={navCN}>{t("skills")}</a>
        <a href="#experience" className={navCN}>{t("experience")}</a>
        <a href="#projects" className={navCN}>{t("projects")}</a>
        <a href="#contacts" className={navCN}>{t("contacts")}</a>
    </nav></div>

    const burgerNav = <div className={`fixed flex flex-col gap-y-3 rounded-md border-[3px] px-5 py-2 ${useC('bg-white', 'bg-[#1A0B2E] border-white')} items-center top-0 right-0`}>
        <div><nav className={`text-white text-nowrap flex ${media && 'flex-col'} px-4 w-full items-start text-[22px] gap-x-5`}>
            <a href="#home" className={burgerNavCN}>{t("home")}</a>
            <a href="#skills" className={burgerNavCN}>{t("skills")}</a>
            <a href="#experience" className={burgerNavCN}>{t("experience")}</a>
            <a href="#projects" className={burgerNavCN}>{t("projects")}</a>
            <a href="#contacts" className={burgerNavCN}>{t("contacts")}</a>
            <CVButton/>
        </nav></div>
        <button className={`text-[18px] rounded p-2 px-4 ${useC('text-black', 'text-white')} ${useC('hover:bg-[#beb7c5] active:bg-[#beb7c5]', 'hover:bg-[#391b60] active:bg-[#391b60]')} transition-colors`} onClick={() => setState(!state)}>{t('exit')}</button>
    </div>


    return (
        <header className={`w-full z-50 ${useC('border-b-[3px]', '')} ${useC('bg-white', 'bg-[#1A0B2E]')} fixed flex p-4 justify-between top-0 left-0`}>
            <div className="flex items-center gap-x-4">
                <TranslateButton />
                <ThemeButton />
            </div>
            {media && state && burgerNav}
            {!media && nav}
            <div className="flex items-center gap-x-8">
                {!media && <CVButton />}
                {media && <div onClick={() => setState(!state)} className="flex flex-col cursor-pointer justify-center gap-2">
                    <span className="bg-[#D1D5DB] w-[37px] block rounded-[13px] h-[4px]"></span>
                    <span className="bg-[#D1D5DB] w-[37px] block rounded-[13px] h-[4px]"></span>
                    <span className="bg-[#D1D5DB] w-[37px] block rounded-[13px] h-[4px]"></span>
                </div>}
            </div>
        </header>
    )
}

export default Header;