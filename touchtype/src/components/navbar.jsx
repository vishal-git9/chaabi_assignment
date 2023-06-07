import React from 'react';
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#typing">Typing Lessons</a></li>
                <li><a href="#practice">Practice</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
