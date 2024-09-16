import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header className="app-header">
            <div id="navbar">
                <div id="wrapper">
                    <nav>
                        <ul>
                            <li>Latest Work</li>
                            <li>Archive</li>
                            <li>About</li>
                            <li>Contact</li>
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