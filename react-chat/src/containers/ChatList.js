import React, {useContext, useEffect, useState} from "react"
import {Chat, ChatImage, ChatWrapper} from "../styles/PageChatListStyles"
import {ChatContext} from "../App"
import {Link} from "react-router-dom"
import {ChatBlock} from "../components/ChatBlock";


export const ChatList = () => {
    const [chatsContext] = useContext(ChatContext)
    const [chats, setChats] = useState([]);
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
            .then(data => setChats(data))
    }, []);


    if (!chatsContext.length) {
        return (
            <ChatWrapper>
                <h1 style={{ marginBottom: 0 }}>
                    Chat list is empty 😔
                </h1>
            </ChatWrapper>
        )
    }

    const createChats = (chat) => {
        return (
            <Chat>
                <ChatImage>
                    <img style={{height: "50px", width: "50px", borderRadius: "50%"}}
                         src={"https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"} alt={""}/>
                </ChatImage>
                <ChatBlock chat={chat}/>
            </Chat>
        )
    }

    return (
        chats.map((chat) =>
            <Link key={chat.id} style={{textDecoration: 'none'}} to={"/chat/" + chat.id}>
                {createChats(chat)}
            </Link>
        )
    )
}
