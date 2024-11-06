import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";
import { projectsTC } from "../model/service/projects.service";
import { useC } from "@/shared/hooks/use-change-theme";
import Title from "@/shared/ui/pagesTitle/ui/Title";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const data = useAppSelector(state => state.projects);
    console.log(data);


    useEffect(() => {
        dispatch(projectsTC())
    }, [dispatch])

    return (
        <div id="projects" className={`w-full flex ${useC('bg-white', 'bg-[#030712]')} justify-center py-20`}>
            <main className={`componentWidth flex flex-col items-center gap-y-16`}>
                <Title title={t('projects')} description={t('projects_desc')} />
            </main>

            <section>
            </section>
        </div>
    )
}

export default Projects;