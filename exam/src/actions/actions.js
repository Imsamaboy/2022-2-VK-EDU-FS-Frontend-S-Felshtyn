import {LANGUAGES_REQUEST, LANGUAGES_SUCCESS, LANGUAGES_FAILURE} from "../constants/LanguageActionTypes"

const getLanguagesSuccess = (languages) => ({
    type: LANGUAGES_SUCCESS,
    payload: languages
})

const getLanguagesFailure = (error) => ({
    type: LANGUAGES_FAILURE,
    payload: error
})

const getLanguagesRequest = (languages) => ({
    type: LANGUAGES_REQUEST,
    payload: languages
})


export const getLanguages = () => {
    return (dispatch) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-ua': 'RapidAPI-Playground'
            }
        }
        dispatch(getLanguagesRequest())
        fetch('https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0', options)
            .then(response => response.json())
            .then(response => {
                const responseLanguages = []
                Object.keys(response.translation).forEach((key) => {
                    responseLanguages.push({
                        key, ...(response.translation[key])
                    })
                })
                dispatch(getLanguagesSuccess(responseLanguages))
            })
            .catch(error => {
                console.error(error)
                dispatch(getLanguagesFailure())
            })
    }
}
