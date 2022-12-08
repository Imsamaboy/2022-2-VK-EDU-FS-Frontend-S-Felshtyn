import React from "react"
import {PageChatWrapper} from "../styles/PageChatStyles"
import {PageGlobalHeader} from "../components/PageGlobalHeader"
import {PageGlobalBody} from "../containers/PageGlobalBody"

export const PageGlobalChat = () => {
    return (
        <PageChatWrapper>
            <PageGlobalHeader/>
            <PageGlobalBody/>
        </PageChatWrapper>
    )
}