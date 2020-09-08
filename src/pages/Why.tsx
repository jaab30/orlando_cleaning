import React from 'react';
import Card from "../components/Card";
import reliableIcon from "../images/25years_final.png"

const Why = (): any => {

    return (
        <div id="why" className="why">
            <div className="why__title-box">
                <h2 className="why__title">Why Orlando Cleaning Services..?</h2>
            </div>
            <div className="why__cards">
                <Card
                    image={reliableIcon}
                    title="Reliable"
                    text="Orlando Cleaning Services has been offering professional house cleaning services since 1995. We have helped clean thousands of homes and apartments in the Orlando area. Orlando Cleaning Services is your one-stop shop for whenever you need professional house cleaning help."

                />
                <Card
                    image={reliableIcon}
                    title="Reliable"
                    text="Orlando Cleaning Services has been offering professional house cleaning services since 1995. We have helped clean thousands of homes and apartments in the Orlando area. Orlando Cleaning Services is your one-stop shop for whenever you need professional house cleaning help."

                />
                <Card
                    image={reliableIcon}
                    title="Reliable"
                    text="Orlando Cleaning Services has been offering professional house cleaning services since 1995. We have helped clean thousands of homes and apartments in the Orlando area. Orlando Cleaning Services is your one-stop shop for whenever you need professional house cleaning help."

                />
                <Card
                    image={reliableIcon}
                    title="Reliable"
                    text="Orlando Cleaning Services has been offering professional house cleaning services since 1995. We have helped clean thousands of homes and apartments in the Orlando area. Orlando Cleaning Services is your one-stop shop for whenever you need professional house cleaning help."

                />
            </div>

        </div>
    )
}

export default Why;
