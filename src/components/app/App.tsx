import React from "react";

import NavBar from "../navbar/NavBar";
import ToDo from "../../pages/toDo/ToDo";

import "./app.scss";

const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <ToDo />
            </div>
        </>
    );
};

export default App;
