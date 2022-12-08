import {BackButton, PageChatHeader, Profile, ProfileImage, ProfileInfo} from "../styles/PageChatStyles";
import {Link} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

export const PageGlobalHeader = () => {
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
                <ProfileImage src={"https://bit.ly/3EZwFjZ"} alt=""/>
                <ProfileInfo>
                    <span style={nameState}>Общий чат</span>
                    <span style={lastSeen}>В сети</span>
                </ProfileInfo>
            </Profile>
        </PageChatHeader>
    )
}