export interface ITranslateParams {
    text: string
    toLang: string
    fromLang: string
}
export type TTranslateFunction = (params: ITranslateParams) => Promise<string | Response>