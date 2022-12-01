import {BackButton, PageChatHeader} from "../styles/PageChatStyles";
import {Link} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from '@mui/icons-material/Done';
import React from "react";
import {AcceptButton, PageProfileEdit} from "../styles/PageProfileStyles";

export const PageProfileHeaderWrapper = () => {
    return (
        <PageChatHeader>
            <Link style={{display: "flex", textDecoration: 'none', justifyContent: 'center', flexBasis: '92px'}} to={"/chat/" + 1}>
                <BackButton>
                    <ArrowBackIcon/>
                </BackButton>
            </Link>
            <PageProfileEdit>Edit Profile</PageProfileEdit>
            <AcceptButton>
                <DoneIcon/>
            </AcceptButton>
        </PageChatHeader>
    )
}