import express from 'express'
import {ROUTES} from "../../shared/registry/ROUTES";

import {adminRoute} from "./routes/admin-route";
import {homeRoute} from "./routes/home-route";
import {solutionsRoute} from "./routes/solutions-route";

// REST
import {getArticle} from "./REST/articles";
import {createArticle} from "./REST/articles";
import {updateArticle} from "./REST/articles";
import {deleteArticle} from "./REST/articles";
import {getCollectionsRoutes, getCollectionSchema} from "./REST/collections";
import {getDocumentsOfCollection} from "./REST/documents";

export const setupRoutes = (app: express.Application) => {
    app.get(`${ROUTES.ADMIN_PANEL}*`, adminRoute)

    app.get(ROUTES.HOME, homeRoute)
    app.get(ROUTES.INSURANCE_SOLUTIONS, solutionsRoute)

    app.get(`${ROUTES.ARTICLE}/:_id`, getArticle)
    app.post(`${ROUTES.ARTICLE}`, createArticle)
    app.patch(`${ROUTES.ARTICLE}`, updateArticle)
    app.delete(`${ROUTES.ARTICLE}`, deleteArticle)

    app.get(ROUTES.COLLECTION, getCollectionsRoutes)
    app.get(ROUTES.SCHEMA, getCollectionSchema)
    app.get(ROUTES.DOCUMENT, getDocumentsOfCollection)
}
