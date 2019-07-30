const path = require('path')
import express from "express";
import bodyParser from 'body-parser'

export const setMiddlewares = (app: express.Application) => {
    app.use(bodyParser.json())
    app.use(express.static(path.resolve(process.cwd(), 'dist')))
}
