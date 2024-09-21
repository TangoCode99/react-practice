import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <header className="app-header">
            <div id="navbar">
                <div id="wrapper">
                    <nav>
                        <ul>
                            <li><Link to="/">Latest Work</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="app-name">
                    <div className="main-name">
                        Tango Nham
                    </div>
                    <div className="subname">
                        Developer / Photographer
                    </div>
                </div>
            </div>
        </header>
    );
};