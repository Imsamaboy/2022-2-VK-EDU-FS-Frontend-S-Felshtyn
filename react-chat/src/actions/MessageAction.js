import {
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAILURE,
    ADD_NEW_MESSAGE,
} from "../constants/constants"

const getMessagesSuccess = (messages) => ({
    type: GET_MESSAGES_SUCCESS,
    payload: messages,
})

const getMessagesFailure = (error) => ({
    type: GET_MESSAGES_FAILURE,
    payload: {
        error,
    },
})

const addNewMessage = (message) => ({
    type: ADD_NEW_MESSAGE,
    payload: message,
})


export const getMessagesAction = () => {
    return (dispatch, getState) => {
        console.log("state: ", getState());
        const pollItems = () => {
            fetch(`https://tt-front.vercel.app/messages`)
                .then((resp) => resp.json())
                .then((data) => dispatch(getMessagesSuccess(data)))
        }
        setInterval(() => pollItems(), 1000)
        return
    }
}

export const newMessageAction = (message) => {
    return (dispatch, getState) => {
        fetch(`https://tt-front.vercel.app/message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message),
        })
        return
    }
}

export const renderNewMessageAction = (message) => {
    return (dispatch, getState) => {
        dispatch(addNewMessage(message))
    }
}