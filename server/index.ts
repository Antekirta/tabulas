import express from 'express'
import '../db/connect'
import {setupRoutes} from "./router/router";
import {setAppSettings} from "./router/helpers/set-app-settings";
import {setMiddlewares} from "./router/helpers/set-middlewares";

const app = express()

setAppSettings(app)

setMiddlewares(app)

setupRoutes(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
