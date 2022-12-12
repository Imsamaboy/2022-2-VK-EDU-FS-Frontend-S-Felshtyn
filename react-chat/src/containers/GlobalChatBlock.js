import {ChatInfo, ChatMeta, ReceivedMessageStatus} from "../styles/PageChatListStyles"
import React, {useEffect, useState} from "react"

export const GlobalChatBlock = () => {
    const [lastMessageChannel, setLastMessageChannel] = useState("")

    useEffect(() => {
        fetch('https://tt-front.vercel.app/messages')
            .then(resp => resp.json())
            .then(data => setLastMessageChannel(data[data.length - 1]))
    }, [])

    useEffect(() => {
        const pollItems = () => {
            fetch('https://tt-front.vercel.app/messages')
                .then((resp) => resp.json())
                .then((data) => setLastMessageChannel(data[data.length - 1]))
        }
        setInterval(() => pollItems(), 1000)
    }, [])

    return (
        <>
            <ChatInfo>
                <span>Общий чат</span>
                <span style={{color: "#787878"}}>{lastMessageChannel.text}</span>
            </ChatInfo>
            <ChatMeta>
                <span style={{color: "#787878"}}>{
                    new Date(lastMessageChannel.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                }</span>
                <ReceivedMessageStatus><span className="material-icons">done_all</span></ReceivedMessageStatus>
            </ChatMeta>
        </>
    )
}