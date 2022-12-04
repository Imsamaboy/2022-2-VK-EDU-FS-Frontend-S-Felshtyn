import React from "react"
import {PageChatListHeader} from "../components/PageChatListHeader";
import {CreateChatButton} from "../components/CreateChatButton";
import {ChatList} from "../containers/ChatList";
import {ChatWrapper} from "../styles/PageChatListStyles";

export const PageChatList = () => {
    return (
        <>
            <PageChatListHeader/>
            <ChatWrapper><ChatList/></ChatWrapper>
            <CreateChatButton/>
        </>
    )
}