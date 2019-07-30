import * as mongoose from 'mongoose'
import {ROUTES} from "../../../shared/registry/ROUTES"
import {QUERY_PARAMS} from "../../../shared/registry/QUERY_PARAMS"

const getCollectionsRoutes = async (): Promise<Array<string>> => {
    const response = await fetch(ROUTES.COLLECTION)

    return await response.json()
}

const getCollectionSchema = async (modelName: string): Promise<mongoose.Schema<any>> => {
    const response = await fetch(`${ROUTES.SCHEMA}?${QUERY_PARAMS.MODEL_NAME}=${modelName}`)

    return await response.json()
}

export {getCollectionsRoutes, getCollectionSchema}
