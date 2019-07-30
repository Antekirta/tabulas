import * as mongoose from 'mongoose'
import {ROUTES} from "../../../shared/registry/ROUTES"
import {QUERY_PARAMS} from "../../../shared/registry/QUERY_PARAMS";

const getDocumentsOfCollection = async (collectionName: string): Promise<Array<mongoose.Document>> => {
    const response = await fetch(`${ROUTES.DOCUMENT}?${QUERY_PARAMS.MODEL_NAME}=${collectionName}`)

    return await response.json()
}

const getDocumentInCollectionById = async (collectionName: string, documentId: string): Promise<mongoose.Document> => {
    const response = await fetch(
        `${ROUTES.DOCUMENT}?${QUERY_PARAMS.MODEL_NAME}=${collectionName}&${QUERY_PARAMS.DOCUMENT_ID}=${documentId}`)

    return await response.json()
}

const updateDocument = async (_id: string, documentData: object) => {
    return await fetch(ROUTES.ARTICLE, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({
            ...documentData,
            _id
        })
    })
}

export {getDocumentsOfCollection, getDocumentInCollectionById, updateDocument}
