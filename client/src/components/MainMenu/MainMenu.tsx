import React from 'react'
import {connect} from "react-redux";
import './MainMenu.sass'
import {ILink} from "../../../../shared/interfaces/ILink";
import {IInitialState} from "../../../../shared/interfaces/IInitialState";

const mapStateToProps = (state: IInitialState) => {
    return {
        links: state.mainMenuItems
    }
}

interface IProps {
    links: ILink[]
}

const MainMenu = (props: IProps): JSX.Element => {
    return (
        <nav className="main-menu">
            <ul className="main-menu__list">
                {props.links.map((link: ILink) => (
                    <li key={link.href} className="main-menu__item">
                        <a href={link.href} className="main-menu__link">{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const MainMenuConnected = connect(mapStateToProps)(MainMenu)

export {MainMenuConnected as MainMenu}
