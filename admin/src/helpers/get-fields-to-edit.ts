import {getCollectionSchema} from "../providers/collectionsProvider";
import {matchFieldConstructor} from "../fields-factory/helpers/match-constructor";
import {ISchema} from "../../../db/interfaces/mongoose";
import {getDocumentInCollectionById} from "../providers/documentsProvider";
import * as mongoose from "mongoose";

async function getFieldsToEdit(collectionName: string, documentId: string) {
    let document : mongoose.Document | undefined
    
    if (documentId) {
        document = await getDocumentInCollectionById(collectionName, documentId)  
    }
    
    const schema = await getCollectionSchema(collectionName)

    console.log('getFieldsToEdit document: ', document)
    console.log('getFieldsToEdit schema: ', schema)

    const fields: Array<JSX.Element> = []

    Object.keys(schema.obj).map((fieldName: string) => {
        fields.push(matchFieldConstructor(schema as ISchema, fieldName, this, document))
    })
    
    // @ts-ignore
    const modelPrettyName = schema.options.modelPrettyName
    
    return {fields, modelPrettyName}
}

export {getFieldsToEdit} 