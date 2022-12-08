import React, {useEffect, useState} from "react"
import {PageChatWrapper} from "../styles/PageChatStyles";
import {useParams} from "react-router-dom";
import {PageChatBody} from "../containers/PageChatBody";
import {PageChatHeaderWrapper} from "../components/PageChatHeaderWrapper";

export const PageChat = () => {
    let { id } = useParams()
    const [chat, setChat] = useState(null)
    const currentUserId = 1

    useEffect(() => {
        fetch(`api/chats/users/${currentUserId}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "X-CSRFToken": "Osdeegez52LCNUXWMgFyr4MeO56Nb0p8",
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setChat(data.find((chat) => chat.id === parseInt(id)))
            })
    }, [id]);

    return (
        <PageChatWrapper>
            {chat ? <><PageChatHeaderWrapper chat={chat}/><PageChatBody chat={chat}/></> : <></>}
        </PageChatWrapper>
    )
}