import React, {useContext} from "react";
import {ProfileImage} from "../styles/PageProfileStyles";
import {ChatContext} from "../App";
import {useParams} from "react-router-dom";

export const PageProfileImage = () => {
    const [chatsContext] = useContext(ChatContext)
    let { id } = useParams()
    let chat = chatsContext.find((chat) => chat.id === parseInt(id))

    return (
        <>
            <ProfileImage src={chat.image} alt=""/>
        </>
    )
}