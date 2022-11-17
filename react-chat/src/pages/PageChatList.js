import React from "react"
import {PageChatListHeader} from "../components/PageChatListHeader";
import {CreateChatButton} from "../components/CreateChatButton";
import {ChatList} from "../containers/ChatList";

export const PageChatList = () => {
    return (
        <>
            <PageChatListHeader/>
            <ChatList/>
            <CreateChatButton/>
        </>
    )
}