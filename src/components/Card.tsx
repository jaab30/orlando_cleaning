import React from 'react'

interface CardProps {
    image: string;
    title: string;
    text: string;
}

const Card = (props: CardProps): any => {
    return (
        <div className="card">
            <div className="card__image">
                <img className="card__image--icon" src={props.image} alt="" />
            </div>
            <div className="card__title">
                <h3>{props.title}</h3>
            </div>
            <div className="card__body">
                <p className="card__body--text">{props.text}</p>
            </div>
        </div>
    )
}

export default Card;