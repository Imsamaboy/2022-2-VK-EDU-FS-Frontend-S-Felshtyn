import {LANGUAGES_FAILURE, LANGUAGES_REQUEST, LANGUAGES_SUCCESS} from "../constants/LanguageActionTypes";

const initialState = {
    loading: false,
    languages: [],
    error: ""
}

const func = (state = initialState, action) => {
    switch (action.type) {
        case LANGUAGES_REQUEST:
            return {
                loading: true,
                ...state
            }
        case LANGUAGES_SUCCESS:
            return {
                loading: false,
                languages: action.payload,
                error: ""
            }
        case LANGUAGES_FAILURE:
            return {
                loading: false,
                error: action.payload,
                ...state
            }
        default:
            return state
    }
}

export default func