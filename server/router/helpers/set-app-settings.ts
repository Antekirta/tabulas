import express from "express";

export const setAppSettings = (app: express.Application) => {
    app.set('view engine', 'ejs')
    app.engine('ejs', require('ejs').renderFile) // Due to https://spectrum.chat/zeit/general/ejs-template-engine-does-not-work-on-zeit~926d9ddd-0bfa-4ffd-85c5-93cf79618d38
    app.set('views', 'server/router/views')
}
