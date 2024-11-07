export interface IMessageSchema {
    name: string,
    email: string,
    network: string,
    message: string,
    toast: () => void,
    load: (state: boolean) => void
}