interface IProjectsLanguage {
    en: string,
    ru: string
}

export interface IProjectsDoc {
    title: string,
    description: IProjectsLanguage,
    technologies: string[],
    images: string[],
    github_link: string,
    vercel_link: string,
    id?: string
}

export type ProjectsSchema = IProjectsDoc[]