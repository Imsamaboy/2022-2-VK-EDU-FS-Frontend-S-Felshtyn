import React, {useContext, useEffect} from "react"
import {
    PageChatHeader,
    Profile,
    ProfileInfo,
    ProfileImage,
    BackButton,
    Chat
} from "../styles/PageChatStyles";
import {useNavigate, useParams} from "react-router-dom";
import {PageChatInputForm} from "../components/PageChatInputForm";
import {ChatContext} from "../App";
import {MessageList} from "../containers/MessageList";

export const PageChat = () => {
    const [chatsContext, setChatsContext] = useContext(ChatContext)
    const navigate = useNavigate()
    let { id } = useParams()

    const lastSeen = {
        color: "#CB9CD9",
        fontSize: "13px"
    }

    const nameState = {
        color: "white",
        fontSize: "20px",
        fontWeight: "400",
    }

    let chat = chatsContext.find((chat) => chat.id === parseInt(id))

    useEffect(() => {
        console.log("chatsContext изменился в PageChat")
    }, [chatsContext])

    return (
        <>
              <PageChatHeader>
              <BackButton onClick={() => navigate(-1)}>
                  <span className="material-icons">arrow_back</span>
              </BackButton>
                <Profile>
                    <ProfileImage src={chat.image} alt="" />
                    <ProfileInfo>
                        <span style={nameState}>{chat.name}</span>
                        <span style={lastSeen}>{chat.online}</span>
                    </ProfileInfo>
                </Profile>
              </PageChatHeader>
              <Chat><MessageList chat={chat}/></Chat>
              <PageChatInputForm chat={chat}/>
        </>
    )
}