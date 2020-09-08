import React from 'react'

interface RibbonProps {
    title: string;
    image: string;
    num: string;
}

const Ribbon = (props: RibbonProps): any => {
    return (
        <div className="ribbon">
            <div className={`ribbon__content-box ribbon-${props.num}`}>
                <h3 className="ribbon__title">{props.title}</h3>
                <img className="ribbon__image" src={props.image} alt={props.title} />
            </div>
        </div>
    )
}

export default Ribbon;
