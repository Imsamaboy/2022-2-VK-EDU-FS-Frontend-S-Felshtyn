import {MessageInfo, MessageLeft, MessageRight, MessageTime} from "../styles/PageChatStyles";
import React, {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {ChatContext} from "../App";


export const MessageList = ({id, chat}) => {
    const messageText = {
        fontSize: "16px"
    }

    useEffect(() => {
        chat = JSON.parse(localStorage.getItem("chats"))[id - 1]
        console.log(chat)
    }, [localStorage.chats[id - 1].messages])

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