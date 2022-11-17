import {MessageInfo, MessageLeft, MessageRight, MessageTime} from "../styles/PageChatStyles";
import React, {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {ChatContext} from "../App";


export const MessageList = ({chat}) => {
    // const [chatsContext, setChatsContext] = useContext(ChatContext)

    useEffect(() => {
        console.log("chatsContext изменился в MessageList")
    }, [])

    const messageText = {
        fontSize: "16px"
    }

    return (
        chat.messages.map((message) => {
            if (message.name !== "Loveyouzaya") {
                return (
                    <MessageLeft key={message.id}>
                    <div style={messageText}>{message.content}</div>
                    <MessageInfo><MessageTime>{message.time}</MessageTime></MessageInfo>
                    </MessageLeft>
                )
            } else {
                return (
                    <MessageRight key={message.id}>
                        <div style={messageText}>{message.content}</div>
                        <MessageInfo><MessageTime>{message.time}</MessageTime></MessageInfo>
                    </MessageRight>
                )
            }
        })
    )
}