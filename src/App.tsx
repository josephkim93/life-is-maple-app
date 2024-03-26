import React from 'react';
import Login from "./pages/login/login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Today from "./pages/todo/today";
import History from "./pages/todo/history";
import Add from "./pages/todo/add";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" Component={Login}/>
                    <Route path="/today" Component={Today}/>
                    <Route path="/history" Component={History}/>
                    <Route path="/add" Component={Add}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
