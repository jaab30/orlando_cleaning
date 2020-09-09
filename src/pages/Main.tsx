import React from 'react';
import About from "./About";
import Header from "./Header";
import Why from "./Why";
import ServPackages from "./ServPackages";

const Main = (): any => {
    return (
        <div>
            <Header />
            <About />
            <Why />
            <ServPackages />
        </div>
    )
}

export default Main;