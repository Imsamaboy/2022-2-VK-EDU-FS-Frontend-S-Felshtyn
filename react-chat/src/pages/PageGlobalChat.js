import React from "react"
import {PageChatWrapper} from "../styles/PageChatStyles"
import {PageGlobalHeader} from "../components/PageGlobalHeader"
import {PageGlobalBody} from "../containers/PageGlobalBody"
import {connect} from "react-redux"
import {getMessages, sendMessageAction} from "../actions/MessageAction"

export const PageGlobalChat = () => {
    return (
        <PageChatWrapper>
            <PageGlobalHeader/>
            <PageGlobalBody/>
        </PageChatWrapper>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
})

export default connect(mapStateToProps, { getMessages, sendMessageAction })(PageGlobalChat)