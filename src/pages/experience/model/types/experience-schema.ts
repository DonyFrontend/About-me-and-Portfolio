interface IExperienceLanguage {
    en: string,
    ru: string
}

export interface IExperienceDoc {
    id?: string
    title: IExperienceLanguage,
    description: IExperienceLanguage,
    tasks: IExperienceLanguage[],
    result: IExperienceLanguage,
    date: IExperienceLanguage,
    link?: string
}

export type IExperienceSchema = IExperienceDoc[]