import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="app-header">
            <div id="navbar">
                <div className="app-name">
                    <div className="main-name">
                        Tango Nham
                    </div>
                    <div className="subname">
                        Developer / Photographer
                    </div>
                </div>

                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div id="wrapper" className={menuOpen ? 'open' : ''}>
                    <nav>
                        <ul>
                            <li><Link to="/" onClick={closeMenu}>About</Link></li>
                            <li><Link to="/photos" onClick={closeMenu}>Latest Photos</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};