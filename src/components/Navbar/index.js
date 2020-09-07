import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__link-box">
                <a className="navbar__link" src="#">home</a>
                <a className="navbar__link" src="#">about</a>
                <a className="navbar__link" src="#">services</a>
                <a className="navbar__link" src="#">contact</a>
            </div>
        </nav>
    )
}


export default Navbar;