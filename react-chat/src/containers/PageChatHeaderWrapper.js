import {BackButton, PageChatHeader, Profile, ProfileImage, ProfileInfo} from "../styles/PageChatStyles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import {useNavigate} from "react-router-dom";


export const PageChatHeaderWrapper = ({chat}) => {
    const navigate = useNavigate()

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
            <BackButton onClick={() => navigate(-1)}>
                <ArrowBackIcon/>
            </BackButton>
            <Profile>
                <ProfileImage src={chat.image} alt="" />
                <ProfileInfo>
                    <span style={nameState}>{chat.name}</span>
                    <span style={lastSeen}>{chat.online}</span>
                </ProfileInfo>
            </Profile>
        </PageChatHeader>
    )
}