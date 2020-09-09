import React from 'react'
import Navbar from "../components/Navbar";
import ButtonPrimary from "../components/ButtonPrimary";
import cleaningLogo from "../images/cleaning_logo.png"

const Header = (): any => {
    return (
        <header id="header" className="header">
            <div className="header__content">
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
                    <i className="fab fa-instagram header__social-box--instagram"></i>
                </div>
            </div>
            <ButtonPrimary
                title="free estimate"
                target="#"
                btnClass="btn-primary-header"
            />
        </header>
    )
}

export default Header;
