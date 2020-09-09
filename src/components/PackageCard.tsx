import React from 'react'

interface CardProps {
    image: string;
    title: string;
    price: string;
}

const PackageCard = (props: CardProps): any => {
    return (
        <div className="packages__card">
            <img className="packages__card--image" src={props.image} alt={props.title} />
            <h4 className="packages__card--title">{props.title}</h4>
            <p className="packages__card--text">{props.price}</p>
        </div>
    )
}

export default PackageCard;