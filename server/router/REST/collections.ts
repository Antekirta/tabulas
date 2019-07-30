import express from 'express'
import {modelsManager} from "../../../db/utils/models-manager";
import {ISchema} from "../../../db/interfaces/mongoose";
import {QUERY_PARAMS} from "../../../shared/registry/QUERY_PARAMS";

export interface ICollectionRoute {
    modelPrettyName: string
    urlParam: string
}

export const getCollectionsRoutes = async (req: express.Request, res: express.Response) => {
    const collectionsRoutes: Array<ICollectionRoute> = []

    modelsManager.getSchemas().forEach((schema: ISchema) => {
        collectionsRoutes.push({
            modelPrettyName: schema.options.modelPrettyName,
            urlParam: schema.options.collection
        })
    })

    res.status(200).send(collectionsRoutes)
}

export const getCollectionSchema = async (req: express.Request, res: express.Response) => {
    const modelName = req.query[QUERY_PARAMS.MODEL_NAME]

    const schema = modelsManager.getModelSchema(modelName)

    if (schema) {
        res.status(200).send(schema)
    } else {
        res.status(404).send(`There is no schema called ${modelName}`)
    }
}

