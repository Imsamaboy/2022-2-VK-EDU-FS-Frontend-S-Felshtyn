import { SET_ACTIVE_CHAT } from "../constants/constants"

const setActiveChat = (chat) => ({
    type: SET_ACTIVE_CHAT,
    payload: chat,
})

export const openChatAction = (chat) => {
    return (dispatch, getState) => {
        dispatch(setActiveChat(chat))
    }
}