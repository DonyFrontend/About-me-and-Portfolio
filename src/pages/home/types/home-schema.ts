interface IHomeLanguage {
    ru: string,
    en: string
}

export interface IHomeAbout {
    id: string,
    description: IHomeLanguage
}

export interface IHomeState {
    id: string,
    currentState: number
}

export interface IHomeTitle {
    id: string,
    title: IHomeLanguage,
    TitleArray: IHomeLanguage[]
}

export type HomeSchema = [IHomeAbout, IHomeState, IHomeTitle];