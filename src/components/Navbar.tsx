import React from 'react'
import { HashLink as Link } from "react-router-hash-link";

const Navbar = (): any => {
    return (
        <nav className="navbar">
            <div className="navbar__link-box">
                <Link className="navbar__link" to="/#header">home</Link>
                <Link className="navbar__link" to="/#about">about</Link>
                <Link className="navbar__link" to="/#why">why</Link>
                <Link className="navbar__link" to="/#package">services</Link>
                <Link className="navbar__link" to="#">contact</Link>
            </div>
        </nav>
    )
}


export default Navbar;