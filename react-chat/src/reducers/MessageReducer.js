import {
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAILURE,
    ADD_NEW_MESSAGE,
} from "../constants/constants"

const initialState = {
    loading: false,
    messages: [],
    error: ""
}

const func = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {
                loading: true,
                messages: [...action.payload],
                error: ""
            }
        case GET_MESSAGES_SUCCESS:
            return {
                loading: false,
                messages: [ ...state.messages],
                error: ""
            }
        case GET_MESSAGES_FAILURE:
            return {
                loading: false,
                messages: [...state.messages],
                error: action.payload,
            }
        default:
            return state
    }
}

export default func