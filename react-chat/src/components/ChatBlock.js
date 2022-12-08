import React, {useEffect, useState} from "react";
import {ChatInfo, ChatMeta, ReceivedMessageStatus} from "../styles/PageChatListStyles";
export const ChatBlock = ({chat}) => {
    const [lastMessage, setLastMessage] = useState("");

    useEffect(() => {
        fetch(`/api/chats/chat_messages/${chat.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "X-CSRFToken": "Osdeegez52LCNUXWMgFyr4MeO56Nb0p8",
            }
        })
            .then(resp => resp.json())
            .then(data => setLastMessage(data.sort((a, b) => a.send_time - b.send_time).reverse().at(0)))
    }, [chat.id])

    return (
        <>
            <ChatInfo>
                <span>{chat.chat_name}</span>
                <span style={{color: "#787878"}}>{lastMessage.message}</span>
            </ChatInfo>
            <ChatMeta>
                <span style={{color: "#787878"}}>{
                    new Date(lastMessage.send_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                }</span>
                <ReceivedMessageStatus><span className="material-icons">done_all</span></ReceivedMessageStatus>
            </ChatMeta>
        </>
    )
}