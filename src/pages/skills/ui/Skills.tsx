import { useC } from "@/shared/hooks/use-change-theme";
import { useTranslation } from "react-i18next";
import skills from "@/shared/const/skills";
import Title from "@/shared/ui/pagesTitle/ui/Title";

const Skills = () => {
  const { t } = useTranslation();
  const C = (a: string, b: string) => {
    return useC(a, b)
  }

  return (
    <div id="skills" className={`w-full flex py-20 justify-center ${useC('bg-white', 'bg-[#111827]')}`}>
      <main className="w-[90%] componentWidth flex flex-col gap-y-16">
        <Title title={t('skills')} description={t('skills_desc')}/>

        <section className="w-full grid grid-cols-8 gap-y-2">
          {skills.map((item, index) =>
            <article key={index} className={`hover:-translate-y-4 py-4 rounded-[15px] ${C('hover:bg-[#c5c7cb]', 'hover:bg-[#374151]')} transition-all`}>
              <a target="_blank" href={item.href} className="flex flex-col gap-y-2 items-center">
                <img src={item.icon} className="w-[64px] h-[64px]" alt="skill" />
                <p>{item.title}</p>
              </a>
            </article>
          )}
        </section>
      </main>
    </div>
  )
}

export default Skills;