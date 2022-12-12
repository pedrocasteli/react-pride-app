import React from "react";
import "./Button.css";

const Button = ({ text, changeColor }) => {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "indigo",
        "violet",
        "lightblue",
        "pink",
    ];

    const changeColorHandler = () => {
        changeColor([
            colors[Math.floor(Math.random() * colors.length)],
            colors[Math.floor(Math.random() * colors.length)],
        ]);
    };

    return (
        <button className="button" onClick={changeColorHandler}>
            {text}
        </button>
    );
};

export default Button;
