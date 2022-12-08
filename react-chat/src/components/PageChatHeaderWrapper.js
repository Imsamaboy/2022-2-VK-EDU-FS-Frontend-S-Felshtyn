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
                {chat.users.length === 2 ?
                    <Link to={`/profile/${chat.id}&${chat.users.find(user => user !== 1)}`}>
                    <ProfileImage src={"https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"} alt=""/>
                    </Link> :
                    <ProfileImage src={"https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"} alt=""/>
                }
                <ProfileInfo>
                    <span style={nameState}>{chat.chat_name}</span>
                    <span style={lastSeen}>3 minuties ago</span>
                </ProfileInfo>
            </Profile>
        </PageChatHeader>
    )
}