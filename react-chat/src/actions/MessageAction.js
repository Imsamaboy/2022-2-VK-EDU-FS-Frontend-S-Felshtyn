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

const sendMessage = (message) => ({
    type: ADD_NEW_MESSAGE,
    payload: message,
})


export const getMessages = () => {
    return (dispatch, getState) => {
        console.log("state: ", getState());
        const pollItems = () => {
            fetch(`https://tt-front.vercel.app/messages`)
                .then((resp) => resp.json())
                .then((data) => dispatch(getMessagesSuccess(data)))
                .catch(error => dispatch(getMessagesFailure(error.message)))
        }
        setInterval(() => pollItems(), 1000)
    }
}

export const sendMessageAction = (message) => {
    return (dispatch) => {
        fetch(`https://tt-front.vercel.app/message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message),
        })
        .then(dispatch(sendMessage(message)))
    }
}