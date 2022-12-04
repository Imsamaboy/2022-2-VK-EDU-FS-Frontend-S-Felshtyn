import './App.css';
import {PageChatList} from "./pages/PageChatList";
import React, {createContext, useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PageChat} from "./pages/PageChat";
import {PageProfile} from "./pages/PageProfile";

let chats = [
    {
        "id": 1,
        "name": "Brad Pitt",
        "username": "@bradpittcool",
        "messages": [
            {
                "id": 1,
                "name": "Brad Pitt",
                "content": "Dude, you wanna hang out on Broadway?",
                "time": "4:19",
                "type": "left"
            }
        ],
        "bio": "William Bradley Pitt (born December 18, 1963) is an American actor and film producer." +
               "He is the recipient of various accolades, including two Academy Awards,"  +
               "a British Academy Film Award, two Golden Globe Awards, and a Primetime Emmy Award.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Brad_Pitt_Fury_2014.jpg/800px-Brad_Pitt_Fury_2014.jpg",
        "online": "was online 3 minutes ago"
    },
    {
        "id": 2,
        "name": "Leo Dic",
        "username": "@leonardodicaprio",
        "messages": [
            {
                "id": 1,
                "name": "Leo Dic",
                "content": "Lost oscar again...",
                "time": "9:30",
                "type": "left"
            }
        ],
        "bio": "Leonardo Wilhelm DiCaprio was born November 11, 1974 in Los Angeles, California," +
               "the only child of Irmelin DiCaprio (née Indenbirken) and former comic book artist George DiCaprio." +
               "His father is of Italian and German descent," +
               "and his mother, who is German-born, is of German and Russian ancestry.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
        "online": "was online 1 hour ago"
    },
    {
        "id": 3,
        "name": "Margo R",
        "username": "@margotrobbieofficial",
        "messages": [
            {
                "id": 1,
                "name": "Margo R",
                "content": "We can't be friends...",
                "time": "9:30",
                "type": "left"
            }
        ],
        "bio": "Margot Elise Robbie is an Australian actress and producer." +
               "Known for her roles in both blockbusters and independent films, she has received several accolades," +
               "including nominations for two Academy Awards, three Golden Globe Awards," +
               "and five British Academy Film Awards.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/SYDNEY%2C_AUSTRALIA_-_JANUARY_23_Margot_Robbie_arrives_at_the_Australian_Premiere_of_%27I%2C_Tonya%27_on_January_23%2C_2018_in_Sydney%2C_Australia_%2825980751148%29_%28cropped%29.jpg",
        "online": "was online 1 minute ago"
    }
]

export const ChatContext = createContext(null)

const App = () => {
    const [chatsValueContext, setChatsValueContext] = useState(JSON.parse(localStorage.getItem("chats")))

    useEffect(() => {
        if (localStorage.chats) {
            chats = JSON.parse(localStorage.getItem("chats"))
        } else {
            localStorage.setItem("chats", JSON.stringify(chats));
        }
        setChatsValueContext(chatsValueContext)
    }, [chatsValueContext])

  return (
    <div className="App">
        <ChatContext.Provider value={[chatsValueContext, setChatsValueContext]}>
            <Routes>
                <Route path="/" element={<Navigate to={"/chats"}/>}/>
                <Route path="/chats" element={<PageChatList/>}/>
                <Route path="/chat/:id" element={<PageChat/>}/>
                <Route path="/profile/:id" element={<PageProfile/>}/>
            </Routes>
        </ChatContext.Provider>
    </div>
  );
}

export default App;
