import './App.css';
import {PageChatList} from "./pages/PageChatList";
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PageChat} from "./pages/PageChat";
import {PageProfile} from "./pages/PageProfile";
import {PageGlobalChat} from "./pages/PageGlobalChat";

const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Navigate to={"/chats"}/>}/>
            <Route path="/chats" element={<PageChatList/>}/>
            <Route path="/chat/:id" element={<PageChat/>}/>
            <Route path="/chat/global_chat" element={<PageGlobalChat/>}/>
            <Route path="/profile/:id" element={<PageProfile/>}/>
        </Routes>
    </div>
  );
}

export default App;
