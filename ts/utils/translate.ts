import {ITranslateParams, TTranslateFunction} from "./types"

const API: string = "https://microsoft-translator-text.p.rapidapi.com/translate?"

export const translate: TTranslateFunction = async (params: ITranslateParams) => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: `[{ "Text": "${params.text}" }]`
    }
    let queryParams: string = new URLSearchParams({
        to: params.toLang,
        apiVersion: "3.0",
        from: params.fromLang,
        profanityAction: "NoAction",
        textType: "plain"
    }).toString()
    const url = API + queryParams
    const cache = await caches.open('translate-cache')
    const request = new Request(url, options)
    const match = await cache.match(request)
    if (match) {
        return match
    } else {
        let result = ""
        await fetch(url, options)
            .then(response => response.json())
            .then(response => {
                result = response[0].translations[0].text
            })
            .catch(error => console.error(error))
        await cache.put(request, new Response(result))
        return result
    }
}