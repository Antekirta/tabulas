import React from 'react'
import './UIContainer.sass'

interface IProps {
    [key: string]: JSX.Element | JSX.Element[]
}

function UIContainer(props: IProps) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export {UIContainer}
