import React from "react";
import {Button, Header, PageTitle} from "../styles/PageChatListStyles";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export const PageChatListHeader = () => {
    return (
        <Header>
            <Button><MenuIcon/></Button>
            <PageTitle>
                <span>Messenger</span>
            </PageTitle>
            <Button><SearchIcon/></Button>
        </Header>
    )
}