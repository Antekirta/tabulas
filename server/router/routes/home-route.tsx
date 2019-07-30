import express from 'express'
import React from "react";
import {renderToString} from "react-dom/server";
import {App} from "../../../client/src/components/App/App";
import {Home} from "../../../client/src/components/pages/Home/Home";
import {ServerStyleSheets} from '@material-ui/styles';

export const homeRoute = (req: express.Request, res: express.Response) => {
    const sheets = new ServerStyleSheets()

    const html = renderToString(
        sheets.collect(
            <App>
                <Home/>
            </App>
        )
    )

    const ssrStyles = sheets.toString()

    res.render('default', {
        App: html,
        ssrStyles
    })
}
