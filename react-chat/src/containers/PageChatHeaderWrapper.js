import {BackButton, PageChatHeader, Profile, ProfileImage, ProfileInfo} from "../styles/PageChatStyles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import {Link} from "react-router-dom";


export const PageChatHeaderWrapper = ({chat}) => {
    const lastSeen = {
        color: "#CB9CD9",
        fontSize: "13px"
    }

    const nameState = {
        color: "white",
        fontSize: "20px",
        fontWeight: "400",
    }

    return (
        <PageChatHeader>
            <Link style={{display: "flex", textDecoration: 'none', justifyContent: 'center', flexBasis: '92px'}} to="/chats">
                <BackButton>
                    <ArrowBackIcon/>
                </BackButton>
            </Link>
            <Profile>
                <Link to={"/profile/" + chat.id}>
                    <ProfileImage src={chat.image} alt=""/>
                </Link>
                <ProfileInfo>
                    <span style={nameState}>{chat.name}</span>
                    <span style={lastSeen}>{chat.online}</span>
                </ProfileInfo>
            </Profile>
        </PageChatHeader>
    )
}