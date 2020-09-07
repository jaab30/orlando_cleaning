import React from 'react'
import Navbar from "../../components/Navbar";
import cleaningLogo from "../../images/cleaning_logo.png"

export const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <div className="header__logo-box">
                <img className="header__logo" src={cleaningLogo} alt="Orlando Cleaning Logo Icon" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Orlando Cleaning Services</span>
                    <span className="heading-primary--sub">Cleaning Orlando and Surrounding Areas</span>
                </h1>
            </div>
            <div className="header__social-box">
                <i className="fab fa-facebook-f header__social-box--facebook"></i>
                <i className="fab fa-twitter header__social-box--twitter"></i>
                <i class="fab fa-instagram header__social-box--instagram"></i>
            </div>

        </header>
    )
}

export default Header;
