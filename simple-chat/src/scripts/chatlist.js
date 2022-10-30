import "../styles/chatlist/header.css"
import "../styles/chatlist/chats.css"
import "../styles/chatlist/create-chat.css"
import "../styles/main.css"

const chat = document.querySelector(".chat")
chat.addEventListener('click', goToChatPage.bind(this))

function goToChatPage() {
    window.location.href = '../chatpage.html'
}

function checkOnLastMessage() {
    const chatInfo = document.querySelector(".chat-info")
    const chatMeta = document.querySelector(".chat-meta")

    let messages = localStorage.getItem("messages")
    if (messages === "[]") {
        const defaultChatInfo = `
            <span class="chat-name">Brad Pitt</span>
            <span class="last-message">Dude, you wanna hang out on Broadway?</span>
        `
        const defaultChatMeta = `
            <span class="last-message-time">4:19</span>
            <div class="received-message-status">
                <span class="messages-count">1</span>
            </div>
        `
        chatInfo.innerHTML = defaultChatMeta
        chatMeta.innerHTML = defaultChatInfo
        return
    }
    messages = JSON.parse(messages)
    messages.sort((a, b) => {return a["time"] < b["time"]})
    const lastMessage = messages.at(-1)
    const updateChatInfo = `
        <span class="chat-name">Brad Pitt</span>
        <span class="last-message">${lastMessage["content"]}</span>
    `
    const updateChatMeta = `
        <span class="last-message-time">${lastMessage["time"]}</span>
        <div class="message-status">
            <span class="material-icons">done</span>
        </div>
    `
    chatInfo.innerHTML = updateChatInfo
    chatMeta.innerHTML = updateChatMeta
}

checkOnLastMessage()