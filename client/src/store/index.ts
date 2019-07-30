import {createStore} from "redux";
import {rootReducer} from './reducers'
import {IInitialState} from "../../../shared/interfaces/IInitialState";

const mainMenuItems = [
    {
        title: 'Insurance solutions',
        href: 'insurance-solutions'
    },
    {
        title: 'How we work',
        href: 'insurance-solutions1'
    },
    {
        title: 'About us',
        href: 'insurance-solutions2'
    },
    {
        title: 'Career',
        href: 'insurance-solutions3'
    },
    {
        title: 'Contact',
        href: 'insurance-solutions4'
    }
]

const initialState: IInitialState = {
    mainMenuItems,
    highlightedMainMenuItemHref: ''
}

const store = createStore(rootReducer, initialState)

export {store}
