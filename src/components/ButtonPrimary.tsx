import React from 'react'

interface ButtonProps {
    title: string;
    target: string;
    btnClass: string
}

const ButtonPrimary = (props: ButtonProps): any => {
    return (
        <a className={`btn btn-primary ${props.btnClass}`} href={props.target}>
            {props.title}
        </a>
    )
}

export default ButtonPrimary;