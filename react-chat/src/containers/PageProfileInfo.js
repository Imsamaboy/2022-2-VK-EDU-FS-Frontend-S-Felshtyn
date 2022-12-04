import React, {useContext} from "react";
import {
    ProfileInfo,
    ProfileInfoDiv,
    ProfileInfoInput,
    ProfileInfoSpan
} from "../styles/PageProfileStyles";
import {ChatContext} from "../App";
import {useParams} from "react-router-dom";


export const PageProfileInfo = () => {
    const [chatsContext] = useContext(ChatContext)
    let { id } = useParams()
    let chat = chatsContext.find((chat) => chat.id === parseInt(id))

    return (
        <>
            <ProfileInfo>
                <ProfileInfoDiv>
                    <ProfileInfoSpan>Full name</ProfileInfoSpan>
                    <ProfileInfoInput placeholder="Enter your full name" type="text" value={chat.name}/>
                </ProfileInfoDiv>
                <ProfileInfoDiv>
                    <ProfileInfoSpan>Username</ProfileInfoSpan>
                    <ProfileInfoInput placeholder="Enter your username" type="text" defaultValue={chat.username}/>
                </ProfileInfoDiv>
                <ProfileInfoDiv>
                    <ProfileInfoSpan>Bio</ProfileInfoSpan>
                    <ProfileInfoInput placeholder="Enter your bio" type="text" defaultValue={chat.bio}/>
                </ProfileInfoDiv>
            </ProfileInfo>
        </>
    )
}