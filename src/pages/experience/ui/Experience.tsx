import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";
import { experienceTC } from "../model/service/experience.service";
import { useC } from "@/shared/hooks/use-change-theme";
import { useTranslation } from "react-i18next";
import Title from "@/shared/ui/pagesTitle/ui/Title";
import { useMediaQuery } from "@/shared/hooks/use-media";
import { motion } from 'motion/react';
import variants from "@/shared/const/variants";

const Experience = () => {
    const dispatch = useAppDispatch();
    const media = useMediaQuery('(max-width: 768px)');
    const { t, i18n } = useTranslation();
    const data = useAppSelector(state => state.experience);
    const C = (a: string, b: string) => {
        return useC(a, b)
    }

    useEffect(() => {
        dispatch(experienceTC());
    }, [dispatch])

    return (
        <div id="experience" className={`w-full flex ${useC('bg-white', 'bg-[#030712]')} justify-center py-20 ${media && 'py-[70px]'}`}>
            <main className="w-[95%] flex flex-col items-center gap-y-16">
                <div className="flex justify-center w-[90%]">
                    <Title title={t('experience')} description={t('experience_desc')} />
                </div>

                <motion.section variants={variants} initial={'hidden'} transition={{ duration: 0.8 }} whileInView={'whileInView'} className="w-[100%] md:w-[80%] flex flex-col gap-y-10">
                    {data.data.map((item, index) =>
                        <article key={index} className={`w-full hover:translate-y-[-15px] transition-all border-[3px] ${C('shadow-cardShadowLight', 'shadow-cardShadowDark border-violet-500')}  rounded-[12px] flex flex-col gap-y-5 p-7 ${C('bg-[white]', 'bg-[#1F2937]')}`}>
                            <div className="flex flex-col md:flex-row justify-between">
                                <p className="text-[30px] font-semibold">{i18n.language == 'ru' ? item.title.ru : item.title.en}</p>
                                <p className={`text-[18px] ${C('text-[#4B5563]', 'text-[#D1D5DB]')} `}>{i18n.language == 'ru' ? item.date.ru : item.date.en}</p>
                            </div>
                            <div className="w-[100%] flex flex-col items-start gap-y-7">
                                <div className="flex flex-col md:w-[70%] gap-y-3">
                                    <p className="text-[20px] font-medium">{t('project_desc')}</p>
                                    <p className={`text-[19px] ${C('text-[#4B5563]', 'text-[#dbd1db]')}`}>{i18n.language == 'ru' ? item.description.ru : item.description.en}</p>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <p className="text-[20px] font-medium">{t('my_tasks')}</p>

                                    <div className="flex flex-col gap-y-[20px] items-start justify-center">
                                        {item.tasks.map((item, index) =>
                                            <div className="flex gap-x-2 items-center">
                                                <div className="flex">
                                                    <span className={`w-[8px] h-[8px] rounded-full ${C('bg-[#4B5563]', 'bg-[#D1D5DB]')}`}></span>
                                                </div>
                                                <p key={index} className={`text-[19px] ${C('text-[#4B5563]', 'text-[#D1D5DB]')}`}>{i18n.language == 'ru' ? item.ru : item.en}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col w-[100%] md:w-[70%] gap-y-3">
                                    <p className="text-[20px] font-medium">{t('result')}</p>
                                    <p className={`text-[19px] ${C('text-[#4B5563]', 'text-[#dbd1db]')}`}>{i18n.language == 'ru' ? item.result.ru : item.result.en}</p>
                                </div>

                                <div className="flex w-full flex-col gap-y-1">
                                    <p className="text-[20px] font-medium ">{t('link')}</p>
                                    {item.link ? <a target="_blank" href={item.link} className={`text-[18px] md:text-[20px] underline visited:text-violet-500 ${C('text-blue-500', 'text-[#dbd1db]')}`}>{i18n.language == 'ru' ? item?.link : item?.link}</a> : <p className="text-[19px]">{t('empty_link')}</p>}
                                </div>
                            </div>
                        </article>
                    )}
                </motion.section>
            </main>
        </div>
    )
}

export default Experience;