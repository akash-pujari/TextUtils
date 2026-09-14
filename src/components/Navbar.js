import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="logo">
                {props.title}
            </div>

            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search"
                />

                <button>Search</button>
            </div>

        </nav>
    );

}

Navbar.prototype = {
    title: String
}
