import React from 'react'

export const ButtonPrimary = ({ title, target, btnClass }) => {
    return (
        <a className={`btn btn-primary ${btnClass}`} href={target}>
            {title}
        </a>
    )
}

export default ButtonPrimary;