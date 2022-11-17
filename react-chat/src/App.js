import './App.css';
import {PageChatList} from "./pages/PageChatList";
import React, {createContext, useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PageChat} from "./pages/PageChat";

let chats = [
    {
        "id": 1,
        "name": "Brad Pitt",
        "messages": [
            {
                "id": 1,
                "name": "Brad Pitt",
                "content": "Dude, you wanna hang out on Broadway?",
                "time": "4:19",
                "type": "left"
            }
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Brad_Pitt_Fury_2014.jpg/800px-Brad_Pitt_Fury_2014.jpg",
        "online": "was online 3 minutes ago"
    },
    {
        "id": 2,
        "name": "Leo Dic",
        "messages": [
            {
                "id": 1,
                "name": "Leo Dic",
                "content": "Lost oscar again...",
                "time": "9:30",
                "type": "left"
            }
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
        "online": "was online 1 hour ago"
    },
    {
        "id": 3,
        "name": "Margo R",
        "messages": [
            {
                "id": 1,
                "name": "Margo R",
                "content": "We can't be friends...",
                "time": "9:30",
                "type": "left"
            }
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/SYDNEY%2C_AUSTRALIA_-_JANUARY_23_Margot_Robbie_arrives_at_the_Australian_Premiere_of_%27I%2C_Tonya%27_on_January_23%2C_2018_in_Sydney%2C_Australia_%2825980751148%29_%28cropped%29.jpg",
        "online": "was online 1 minute ago"
    }
]

export const ChatContext = createContext(null)

const App = () => {
    // const [chatsValueContext, setChatsContext] = useState(chats)
    const [chatsValueContext, setChatsValueContext] = useState(JSON.parse(localStorage.getItem("chats")))

    useEffect(() => {
        if (localStorage.chats) {
            chats = JSON.parse(localStorage.getItem("chats"))
        } else {
            localStorage.setItem("chats", JSON.stringify(chats));
        }
        setChatsValueContext(chatsValueContext)
    }, [])

  return (
    <div className="App">
        <ChatContext.Provider value={[chatsValueContext, setChatsValueContext]}>
            <Routes>
                <Route path="/" element={<Navigate to={"/chats"}/>}/>
                <Route path="/chats" element={<PageChatList/>}/>
                <Route path="/chat/:id" element={<PageChat/>}/>
            </Routes>
        </ChatContext.Provider>
    </div>
  );
}

export default App;
