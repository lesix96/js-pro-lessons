import React from 'react';
import './App.css';
import { Routes, Route } from "react-router";
import TodoPage from "./pages/todo-page/TodoPage";


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<TodoPage />} />
        </Routes>
    )
}

export default App;
