import React, {useContext, useEffect, useState} from "react";
import {AttachmentButton, Form, FormInput} from "../styles/PageChatStyles";
import {ChatContext} from "../App";
import AttachFileIcon from '@mui/icons-material/AttachFile';

export const PageChatInputForm = ({chat}) => {
    let [chatsContext, setChatsContext] = useContext(ChatContext)
    const [text, setText] = useState("")

    const updateChatsInLocalStorage = (message, time) => {
        // Из-за новой ссылки всё пофиксилось :)
        // Контекст не будет менятся пока не поменяется ссылка
        const newChatsContext = JSON.parse(JSON.stringify(chatsContext))
        newChatsContext[chat.id - 1].messages.push({
            "id": chat.messages.length + 1,
            "name": "Loveyouzaya",
            "content": message,
            "time": time,
            "type": "right"
        })
        setChatsContext(newChatsContext)
        localStorage.setItem("chats", JSON.stringify(chatsContext))
    }

    useEffect(() => {
        console.log("chatsContext изменился в PageChatInput")
    }, [chatsContext])

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
            <AttachmentButton><AttachFileIcon/></AttachmentButton>
        </Form>
    )
}