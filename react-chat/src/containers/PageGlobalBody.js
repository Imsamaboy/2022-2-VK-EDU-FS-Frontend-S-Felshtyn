import {
    AttachmentButton,
    Chat,
    Form,
    FormInput,
    MessageInfo,
    MessageLeft,
    MessageRight,
    MessageTime
} from "../styles/PageChatStyles"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import React, {useEffect, useState} from "react"

export const PageGlobalBody = () => {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState("")
    const author = "Felshtyn Stanislav"

    const sleep = ms => new Promise(r => setTimeout(r, ms))

    useEffect(() => {
        fetch('https://tt-front.vercel.app/messages')
            .then(resp => resp.json())
            .then(data => setMessages(data))
    }, [])

    useEffect(() => {
        const pollItems = () => {
            fetch('https://tt-front.vercel.app/messages')
                .then((resp) => resp.json())
                .then((data) => setMessages(data))
        }
        setInterval(() => pollItems(), 1000)
    }, [])

    const getMessages = () => {
        fetch('https://tt-front.vercel.app/messages')
            .then(res => res.json())
            .then(data => setMessages(data.reverse()))
    }

    function sendMessage(message) {
        fetch('https://tt-front.vercel.app/message', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        })
    }

    function handleChange(event) {
        setText(event.target.value)
    }

    async function handleSubmit (event) {
        event.preventDefault()
        const message = {
            "text": text,
            "author": author
        }
        if (message.text === "") {
            return
        }
        sendMessage(message)
        await sleep(200)
        getMessages();
        setText("")
    }

    const messageText = {
        fontSize: "16px"
    }
    const createMessages = () => {
        return (
            messages.map((message) => {
                if (message.author !== author) {
                    return (
                        <MessageLeft>
                            <div style={messageText}>{message.text}</div>
                            <MessageInfo>
                                <MessageTime>{
                                    new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                                }
                                </MessageTime>
                            </MessageInfo>
                        </MessageLeft>
                    )
                } else {
                    return (
                        <MessageRight>
                            <div style={messageText}>{message.text}</div>
                            <MessageInfo>
                                <MessageTime>{
                                    new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                                }
                                </MessageTime>
                            </MessageInfo>
                        </MessageRight>
                    )
                }
            })
        )
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