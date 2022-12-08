import React from "react"
import {PageChatListHeader} from "../components/PageChatListHeader";
import {CreateChatButton} from "../components/CreateChatButton";
import {ChatList} from "../containers/ChatList";
import {Chat, ChatImage, ChatWrapper} from "../styles/PageChatListStyles";
import {Link} from "react-router-dom";
import {GlobalChatBlock} from "../containers/GlobalChatBlock";

export const PageChatList = () => {
    return (
        <>
            <PageChatListHeader/>
            <ChatWrapper>
                <Link key={0} style={{textDecoration: 'none'}} to={"/chat/global_chat"}>
                    <Chat>
                        <ChatImage>
                            <img style={{height: "50px", width: "50px", borderRadius: "50%"}}
                                 src={"https://bit.ly/3EZwFjZ"} alt={""}/>
                        </ChatImage>
                        <GlobalChatBlock/>
                    </Chat>
                </Link>
                <ChatList/>
            </ChatWrapper>
            <CreateChatButton/>
        </>
    )
}