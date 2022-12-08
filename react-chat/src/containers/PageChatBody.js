import {
    AttachmentButton, Chat,
    Form,
    FormInput,
    MessageInfo,
    MessageLeft,
    MessageRight,
    MessageTime
} from "../styles/PageChatStyles";
import React, {useEffect, useState} from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export const PageChatBody = ({chat}) => {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState("")
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const currentUserId = 1
    const messageText = {
        fontSize: "16px"
    }

    useEffect(() => {
        fetch(`/api/chats/chat_messages/${chat.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "X-CSRFToken": "Osdeegez52LCNUXWMgFyr4MeO56Nb0p8",
            }
        })
            .then(resp => resp.json())
            .then(data => setMessages(data.sort((a, b) => a.send_time - b.send_time)))
    }, [])

    const createMessages = () => {
        return (
            messages.map((message) => {
                if (message.sender !== currentUserId) {
                    return (
                        <MessageLeft key={message.id}>
                            <div style={messageText}>{message.message}</div>
                            <MessageInfo>
                                <MessageTime>{
                                    new Date(message.send_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                                }
                                </MessageTime>
                            </MessageInfo>
                        </MessageLeft>
                    )
                } else {
                    return (
                        <MessageRight key={message.id}>
                            <div style={messageText}>{message.message}</div>
                            <MessageInfo>
                                <MessageTime>{
                                    new Date(message.send_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                                }
                                </MessageTime>
                            </MessageInfo>
                        </MessageRight>
                    )
                }
            })
        )
    }
    function sendMessage(message) {
        fetch('api/chats/message/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "Osdeegez52LCNUXWMgFyr4MeO56Nb0p8",
            },
            body: JSON.stringify(message),
        })
    }

    function getMessages() {
        fetch(`/api/chats/chat_messages/${chat.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "X-CSRFToken": "Osdeegez52LCNUXWMgFyr4MeO56Nb0p8",
            }
        })
            .then(resp => resp.json())
            .then(data => setMessages(data.sort((a, b) => a.send_time - b.send_time)))
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    async function handleSubmit (event) {
        event.preventDefault()
        const date = new Date()
        const message = {
            "message": text,
            "send_time": date,
            "is_read": false,
            "sender": currentUserId,
            "chat": chat.id
        }
        if (message.text === "") {
            return
        }
        sendMessage(message)
        await sleep(100)
        getMessages()
        setText("")
    }

    return (
        <>
            <Chat>
                {createMessages()}
            </Chat>
            <Form onSubmit={handleSubmit}>
                <FormInput
                    name="message-text"
                    value={text}
                    placeholder="Сообщение"
                    type="textarea"
                    onChange={handleChange}
                />
                <AttachmentButton><AttachFileIcon/></AttachmentButton>
            </Form>
        </>
    )
}