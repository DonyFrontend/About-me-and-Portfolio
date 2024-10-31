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
    currentState: number,
    now: IHomeLanguage,
    statets: [IHomeLanguage, IHomeLanguage]
}

export interface IHomeTitle {
    id: string,
    title: IHomeLanguage,
    TitleArray: IHomeLanguage[]
}

export interface IHomeGps {
    id: string,
    gps: IHomeLanguage
}

export type HomeSchema = [IHomeGps, IHomeAbout, IHomeState, IHomeTitle];