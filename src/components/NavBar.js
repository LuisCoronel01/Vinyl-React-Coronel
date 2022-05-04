import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
return (
    <div className="Navbar">
    <span className="nav-logo">Vinyl House</span>
    <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/Inicio">Inicio</a>
        <a href="/Carrito">Carrito</a>
        <a href="/Login">Login</a>
        <a href="/Vinilos">Vinilos</a>
        <a href="/Ayuda">Ayuda</a>
    </div>
    <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
    >
        <div className="bar"></div>
    </div>
    </div>
);
};

export default Navbar;