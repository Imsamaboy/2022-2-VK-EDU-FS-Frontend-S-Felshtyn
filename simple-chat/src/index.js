import './index.css';

function restoreChatHistory(messages) {
    messages.forEach((message) => {
        const class_name = message.name === login ? "my-message" : ""
        // Я знаю, что template string гораздо лучше, но с ней у меня падает код 0_о
        const template =
            "<div class='message-area " + 
            class_name + 
            "'>" + 
            "<div class='message'>" +
            "<p>" + 
            message.content + 
            "</p>" + 
            "<time>" +
            message.time + 
            "</time>" + 
            "</div>" + 
            "</div>"
        message_list.innerHTML += template
    })
}

function handleSubmit(event) {
    event.preventDefault();
    if (input.value === "") return
    chatHistory.push({
        name: login,
        time: new Date().toLocaleTimeString().slice(0, -3),
        content: input.value,
    })
    document.querySelector('.form-input').value = ""
    localStorage.setItem("chat", JSON.stringify(chatHistory))
    const data = JSON.parse(localStorage.getItem("chat"))
    // Я знаю, что template string гораздо лучше, но с ней у меня падает код 0_о
    const template = "<div class='message-area my-message'>" +
        "<div class='message'>" +
        "<p>" +
        data[data.length - 1].content +
        "</p>" +
        "<time>" +
        data[data.length - 1].time +
        "</time>" +
        "</div>" +
        "</div>"
    message_list.innerHTML += template
    message_list.scrollTop = message_list.scrollHeight
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event("submit"));
    }
}

const login = "Loveyouzaya"
const form = document.querySelector('form')
const input = document.querySelector('.form-input')
const message_list = document.querySelector('.message-list')
message_list.scrollTop = message_list.scrollHeight

const chat = [
    {
        "name": "Brad Pitt",
        "time": "4:19",
        "content": "Dude, you wanna hang out on Broadway?"
    },
    {
        "name": "Loveyouzaya",
        "time": "4:20",
        "content": "What are we talking about)"
    }
]

if (!localStorage.getItem("chat"))
    localStorage.setItem("chat", JSON.stringify(chat))

const chatHistory = JSON.parse(localStorage.getItem("chat"))
restoreChatHistory(chatHistory)

form.addEventListener('submit', handleSubmit.bind())
form.addEventListener('keypress', handleKeyPress.bind())
