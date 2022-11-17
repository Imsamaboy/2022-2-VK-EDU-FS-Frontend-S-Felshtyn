import React, {useContext} from "react"
import {ChatWrapper, ChatInfo, ChatMeta, Chat, ChatImage, ReceivedMessageStatus} from "../styles/PageChatListStyles"
import {ChatContext} from "../App"
import {useNavigate} from "react-router-dom"


export const ChatList = () => {
    const [chatsContext] = useContext(ChatContext)
    const navigate = useNavigate()

    if (!chatsContext.length) {
        return (
            <ChatWrapper>
                <h1 style={{ marginBottom: 0 }}>
                    Chat list is empty 😔
                </h1>
            </ChatWrapper>
        )
    }

    const image = {
        height: "50px",
        width: "50px",
        borderRadius: "50%"
    }

    const lastMessage = {
        color: "#787878"
    }

    const createChats = (chat) => (
        <Chat>
            <ChatImage>
                <img style={image} src={`${chat["image"]}`} alt={""}/>
            </ChatImage>
            <ChatInfo>
                <span>{chat["name"]}</span>
                <span style={lastMessage}>{chat["messages"].at(-1)["content"]}</span>
            </ChatInfo>
            <ChatMeta>
                <span style={lastMessage}>{chat["messages"].at(-1)["time"]}</span>
                <ReceivedMessageStatus>
                    <span className="material-icons">done_all</span>
                </ReceivedMessageStatus>
            </ChatMeta>
        </Chat>
    );

    return (
        chatsContext.map((chat) =>
            <ChatWrapper onClick={() => navigate(`/chat/${chat.id}`)} key={chat.id}>
                {createChats(chat)}
            </ChatWrapper>)
    )
}
