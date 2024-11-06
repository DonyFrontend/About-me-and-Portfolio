import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";
import { projectsTC } from "../model/service/projects.service";
import { useC } from "@/shared/hooks/use-change-theme";
import Title from "@/shared/ui/pagesTitle/ui/Title";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const dispatch = useAppDispatch();
    const { t, i18n } = useTranslation();
    const data = useAppSelector(state => state.projects);
    console.log(data);
    const C = (a: string, b: string) => {
        return useC(a, b)
    }

    useEffect(() => {
        dispatch(projectsTC())
    }, [dispatch])

    return (
        <div id="projects" className={`w-full flex ${useC('bg-white', 'bg-[#030712]')} justify-center py-20`}>
            <main className={`componentWidth flex flex-col items-center gap-y-16`}>
                <Title title={t('projects')} description={t('projects_desc')} />

                <section className={`flex flex-col gap-y-10`}>
                    {data.data.map((item, index) =>
                        <article key={index} className={`overflow-hidden flex border-[2px] shadow-lg ${C('shadow-gray-500', 'shadow-violet-500')} ${C('border-[3px]', 'border-violet-500')} rounded-[12px]`}>
                            <div className={`w-1/2 p-3 ${C('bg-[#e5e7eb]', 'bg-[#374151]')}`}>
                                <img className="rounded-[12px]" src={item.images[0]} alt="project image" />
                            </div>
                            <div className="flex px-7 py-5 w-1/2">
                                <div className="w-[80%] flex flex-col justify-between items-start">
                                    <div className="flex flex-col gap-y-3">
                                        <h4 className="text-[20px] font-semibold">{item.title}</h4>
                                        <p>{i18n.language == 'ru' ? item.description.ru : item.description.en}</p>
                                    </div>

                                    {/* <Button variant={'ghost'} bgColor={`${C('gray.200', 'purple.800')}`} >{t('show_more')}</Button> */}
                                    <button className={`text-[17px] ${C('text-[#4B5563]', 'text-white')} transition-all font-semibold p-[9px]  px-4 ${C('bg-[#e5e7eb]', 'bg-violet-600')} ${C('hover:bg-[#d0d2d5]', 'hover:bg-violet-800')} ${C('active:bg-[#c2c4c7]', 'active:bg-violet-90 0')} rounded-[10px] `}>{t('show_more')}</button>
                                </div>
                            </div>
                        </article>
                    )}
                </section>
            </main>
        </div>
    )
}

export default Projects;