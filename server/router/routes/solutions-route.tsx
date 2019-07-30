import express from 'express'
import React from "react";
import {renderToString} from "react-dom/server";
import {App} from "../../../client/src/components/App/App";
import {Solutions} from "../../../client/src/components/pages/Solutions/Solutions";

export const solutionsRoute = (req: express.Request, res: express.Response) => {
    res.render('default', {
        App: renderToString(<App>
            <Solutions/>
        </App>)
    })
}
