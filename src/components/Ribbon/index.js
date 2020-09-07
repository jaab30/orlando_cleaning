import React from 'react'

export const Ribbon = ({ title, image }) => {
    return (
        <div className="ribbon">
            <div className="ribbon__content-box">
                <h3 className="ribbon__title">{title}</h3>
                <img className="ribbon__image" src={image} alt={title} />
            </div>
        </div>
    )
}

export default Ribbon;
