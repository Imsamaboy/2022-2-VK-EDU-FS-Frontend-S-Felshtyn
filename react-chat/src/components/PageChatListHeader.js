import React from "react";
import {Button, Header, PageTitle} from "../styles/PageChatListStyles";

export const PageChatListHeader = () => {
    return (
        <Header>
            <Button>
                <span className="material-icons">menu</span>
            </Button>
            <PageTitle>
                <span>Messenger</span>
            </PageTitle>
            <Button>
                <span className="material-icons">search</span>
            </Button>
        </Header>
    )
}