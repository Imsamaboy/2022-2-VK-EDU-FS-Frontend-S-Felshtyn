import './App.css';
import React from "react";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {PageTranslate} from "./pages/PageTranslate";
import {PageTranslateHistory} from "./pages/PageTranslateHistory";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Navigate to={"/translate"}/>}/>
            <Route path='/translate' element={<PageTranslate/>}/>
            <Route path='/history' element={<PageTranslateHistory/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
