import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";
import { experienceTC } from "../model/service/experience.service";
import { useC } from "@/shared/hooks/use-change-theme";
import { useTranslation } from "react-i18next";

const Experience = () => {
    const dispatch = useAppDispatch();
    const { t, i18n } = useTranslation();
    const data = useAppSelector(state => state.experience);
    const C = (a: string, b: string) => {
        return useC(a, b)
    }

    console.log(data.data);

    useEffect(() => {
        dispatch(experienceTC());
    }, [dispatch])

    return (
        <div id="experience" className={`w-full flex ${useC('bg-white', 'bg-[#030712]')} justify-center py-20`}>
            <main className="componentWidth flex flex-col items-center gap-y-16">
                <div className="w-full flex flex-col items-center gap-y-4">
                    <div className={`p-1 px-3 rounded-[12px] ${useC('bg-[#E5E7EB]', 'bg-[#374151]')}`}><p className={`text-[19px] ${useC('text-[#4B5563]', 'text-[#D1D5DB]')}`}>{t('experience')}</p></div>
                    <p className={`text-[17px] ${useC('text-[#4B5563]', 'text-white')}`}>{t('experience_desc')}</p>
                </div>

                <section className="w-[80%] flex flex-col gap-y-10">
                    {data.data.map((item, index) =>
                        <article key={index} className={`w-full hover:translate-y-[-15px] transition-all shadow-[10px 5px 5px red] ${C('shadow-cardShadowLight border-[3px]', 'shadow-cardShadowDark')}  rounded-[12px] flex flex-col gap-y-5 p-7 ${C('bg-[white]', 'bg-[#1F2937]')}`}>
                            <div className="flex justify-between">
                                <p className="text-[30px] font-semibold">{i18n.language == 'ru' ? item.title.ru : item.title.en}</p>
                                <p className={` text-[18px] ${C('text-[#4B5563]', 'text-[#D1D5DB]')} `}>{i18n.language == 'ru' ? item.date.ru : item.date.en}</p>
                            </div>
                            <div className="w-[100%] flex flex-col items-start gap-y-7">
                                <div className="flex flex-col w-[70%] gap-y-3">
                                    <p className="text-[20px] font-medium">{t('project_desc')}</p>
                                    <p className={`text-[19px] ${C('text-[#4B5563]', 'text-[#dbd1db]')}`}>{i18n.language == 'ru' ? item.description.ru : item.description.en}</p>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <p className="text-[20px] font-medium">{t('my_tasks')}</p>

                                    <div className="flex flex-col gap-y-[6px] items-start justify-center">
                                        {item.tasks.map((item, index) =>
                                            <div className="flex gap-x-2 items-center">
                                                <span className={`w-[8px] h-[8px] rounded-full ${C('bg-[#4B5563]', 'bg-[#D1D5DB]')}`}></span>
                                                <p key={index} className={`text-[19px] ${C('text-[#4B5563]', 'text-[#D1D5DB]')}`}>{i18n.language == 'ru' ? item.ru : item.en}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </article>
                    )}
                </section>
            </main>
        </div>
    )
}

export default Experience;