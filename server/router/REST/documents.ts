import express from 'express'
import * as mongoose from 'mongoose'
import {QUERY_PARAMS} from "../../../shared/registry/QUERY_PARAMS";

const getDocumentsOfCollection = async (req: express.Request, res: express.Response) => {
    const [modelName, documentId] = [req.query[QUERY_PARAMS.MODEL_NAME], req.query[QUERY_PARAMS.DOCUMENT_ID]]

    try {
        const documents = documentId ?
            await mongoose.model(modelName).findById(documentId) :
            await mongoose.model(modelName).find()

        res.status(200).send(documents)
    } catch (err) {
        res.status(500).send(err);
    }
}

export {getDocumentsOfCollection}
