import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

const App = () => {
    const [color, setColor] = useState("");

    return (
        <main className={`main ${color[1]}`}>
            <Header changeBodyColor={setColor} />
        </main>
    );
};

export default App;
