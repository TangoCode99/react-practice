import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header className="app-header">
            <div id="navbar">
                <div id="wrapper">
                    <nav>
                        <ul>
                            <li><button className="btn">Latest Work</button></li>
                            <li><button className="btn">About</button></li>
                            <li><button className="btn">Contact</button></li>
                        </ul>
                    </nav>
                </div>
                <div className="app-name">
                    Tango Nham
                </div>
            </div>
        </header>
    );
};