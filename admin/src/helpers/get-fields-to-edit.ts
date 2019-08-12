import {getCollectionSchema} from "../providers/collectionsProvider";
import {matchFieldConstructor} from "../fields-factory/helpers/match-constructor";
import {ISchema} from "../../../db/interfaces/mongoose";
import {getDocumentInCollectionById} from "../providers/documentsProvider";

async function getFieldsToEdit(collectionName: string, documentId: string) {
    const document = await getDocumentInCollectionById(collectionName, documentId)
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