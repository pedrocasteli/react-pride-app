import React, { useState } from "react";
import Button from "./Button";
import "./Header.css";

const Header = ({ changeBodyColor }) => {
    const [color, setColor] = useState("");

    return (
        <div className={`header ${color[0]}`}>
            <section>
                <Button
                    text="Change body color"
                    changeColor={changeBodyColor}
                />
            </section>
            <section>
                <Button text="Change header color" changeColor={setColor} />
            </section>
        </div>
    );
};

export default Header;
