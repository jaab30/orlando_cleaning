import React from 'react';
import Card from "../components/Card";
import reasons from "../utils/why.json"

const Why = (): any => {

    const renderReasons = (): any => {
        const results = reasons.map(reason => {
            return (
                <Card
                    key={reason.title}
                    image={reason.image}
                    title={reason.title}
                    text={reason.text}
                />
            )
        })

        return results;
    }

    return (
        <div id="why" className="why">
            <div className="why__icon-box">
                <img className="why__icon" src="images/logo_100.png" alt="Cleaning logo" />
            </div>
            <div className="why__title-box">
                <h2 className="why__title">Why Orlando Cleaning Services..?</h2>
            </div>
            <div className="why__cards">
                {renderReasons()}
            </div>

        </div>
    )
}

export default Why;
