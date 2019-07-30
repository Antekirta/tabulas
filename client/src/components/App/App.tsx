import React from 'react'
import {Provider} from "react-redux";
import {store} from "../../store";
import {SiteHeader} from "../SiteHeader/SiteHeader";
import {SiteFooter} from "../SiteFooter/SiteFooter";

interface IProps {
    [key: string]: any
}

function App(props: IProps) {
    return (
        <Provider store={store}>
            <SiteHeader/>

            {props.children}

            <SiteFooter/>
        </Provider>
    )
}

export {App}
