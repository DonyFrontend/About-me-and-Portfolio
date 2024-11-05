export interface ISkillsData {
    title: string,
    icon: string,
    href?: string
}

export type SkillsSchema = {
    Html?: ISkillsData,
    css?: ISkillsData,
    Axios?: ISkillsData,
    ChakraUI?: ISkillsData,
    Firebase?: ISkillsData
    Git?: ISkillsData
    "Hook - form"?: ISkillsData,
    JavaScript?: ISkillsData
    RRT?: ISkillsData
    React?: ISkillsData
    Redux?: ISkillsData
    TailwindCSS?: ISkillsData
    TypeScript?: ISkillsData
}

export type SkillsArray = ISkillsData[];