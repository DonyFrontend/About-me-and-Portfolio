import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";
import { experienceTC } from "../model/service/experience.service";
import { useC } from "@/shared/hooks/use-change-theme";
import { useTranslation } from "react-i18next";

const Experience = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const data = useAppSelector(state => state.experience);
    console.log(data.data);

    useEffect(() => {
        dispatch(experienceTC());
    }, [dispatch])

    return (
        <div className="w-full flex justify-center py-20">
            <main className="componentWidth flex flex-col gap-y-16">
                <div className="w-full flex flex-col items-center gap-y-4">
                    <div className={`p-1 px-3 rounded-[12px] ${useC('bg-[#E5E7EB]', 'bg-[#374151]')}`}><p className={`text-[19px] ${useC('text-[#4B5563]', 'text-[#D1D5DB]')}`}>{t('skills')}</p></div>
                    <p className={`text-[17px] ${useC('text-[#4B5563]', 'text-white')}`}>{t('skills_desc')}</p>
                </div>
            </main>
        </div>
    )
}

export default Experience;