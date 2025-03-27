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
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/photos">Latest Photos</Link></li>
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