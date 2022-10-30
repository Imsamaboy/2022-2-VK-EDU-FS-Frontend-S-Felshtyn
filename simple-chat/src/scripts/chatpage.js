import "../styles/chatpage/header.css"
import "../styles/chatpage/chat.css"
import "../styles/chatpage/form.css"
import "../styles/main.css"

const form = document.querySelector("form")
const input = document.querySelector(".form-input")
const chat = document.querySelector(".chat")
const back_button = document.querySelector('.back-button')

form.addEventListener("submit", handleSubmit.bind(this))
document.addEventListener("DOMContentLoaded", getMessagesFromLocalStorage.bind(this))
back_button.addEventListener('click', goToChatList.bind(this))

function goToChatList() {
    window.location.href = './chatlist.html'
}

function getMessagesFromLocalStorage () {
    let messages = localStorage.getItem("messages") || "[]"
    messages = JSON.parse(messages)
    for (const message of messages)
        createMessage(message)
}

function saveMessageToLocalStorage (message) {
    let messages = localStorage.getItem("messages") || "[]"
    messages = JSON.parse(messages)
    messages.push(message)
    localStorage.setItem("messages", JSON.stringify(messages))
}

function createMessage(message) {
    const messageBlock = `
    <div class="message right">
        <span class="message-text">${message.content}</span>
        <div class="message-info">
            <span class="message-time">${message.time}</span>
            <div class="message-status">
                <span class="material-icons">done</span>
            </div>
        </div>
    </div>
    `
    chat.innerHTML += messageBlock
}

function handleSubmit (event) {
    event.preventDefault();
    const message = {
        "name": "Loveyouzaya",
        "content": input.value,
        "time": `${new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"})}`
    }
    if (message.text === "") return
    createMessage(message)
    saveMessageToLocalStorage(message)
    input.value = ""
}

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event("submit"))
    }
}