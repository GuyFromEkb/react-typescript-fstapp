import React from "react";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter, Route,Routes  } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom'

import NavBar from "../navbar/NavBar";
import ToDo from "../../pages/toDo/ToDo";
import About from "../../pages/about/About";
import DragDrop from "../../pages/dragDrop/DragDrop";

import "./app.scss";

const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>

                    <Route path="/" element={<ToDo />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/drag-drop" element={<DragDrop />} />


                </Routes>
            </div>
        </>
    );
};

export default App;
