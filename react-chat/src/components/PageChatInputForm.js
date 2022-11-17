import React, {useContext, useState} from "react";
import {AttachmentButton, Form, FormInput} from "../styles/PageChatStyles";
import {ChatContext} from "../App";

export const PageChatInputForm = ({chat}) => {
    let [chatsContext, setChatsContext] = useContext(ChatContext)
    const [text, setText] = useState("")

    const updateChatsInLocalStorage = (message, time) => {
        chat.messages.push({
                "id": chat.messages.length + 1,
                "name": "Loveyouzaya",
                "content": message,
                "time": time,
                "type": "right"
        })
        localStorage.setItem("chats", JSON.stringify(chatsContext))
        setChatsContext()
        // setChats(JSON.parse(localStorage.getItem("chats")))
        // chats = JSON.parse(localStorage.getItem("chats"))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text === "") {
            return
        }
        const date = new Date()
        const time = date.toLocaleTimeString([], {timeStyle: 'short'})
        updateChatsInLocalStorage(text, time)
        setText("")
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormInput
                name="message-text"
                value={text}
                placeholder="Сообщение"
                type="textarea"
                onChange={handleChange}
            />
            <AttachmentButton>
                <span className="material-icons">attachment</span>
            </AttachmentButton>
        </Form>
    )
}