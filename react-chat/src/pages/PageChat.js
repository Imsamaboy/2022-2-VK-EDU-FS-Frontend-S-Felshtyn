import React, {useContext, useEffect} from "react"
import {Chat, PageChatWrapper} from "../styles/PageChatStyles";
import {useParams} from "react-router-dom";
import {PageChatInputForm} from "../components/PageChatInputForm";
import {ChatContext} from "../App";
import {MessageList} from "../containers/MessageList";
import {PageChatHeaderWrapper} from "../containers/PageChatHeaderWrapper";

export const PageChat = () => {
    const [chatsContext] = useContext(ChatContext)
    let { id } = useParams()
    let chat = chatsContext.find((chat) => chat.id === parseInt(id))

    useEffect(() => {

    }, [chatsContext])

    return (
        <PageChatWrapper>
            <PageChatHeaderWrapper chat={chat}/>
            <Chat><MessageList chat={chat}/></Chat>
            <PageChatInputForm chat={chat}/>
        </PageChatWrapper>
    )
}