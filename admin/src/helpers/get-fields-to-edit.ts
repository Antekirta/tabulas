import { getCollectionSchema } from "../providers/collectionsProvider";
import { matchFieldConstructor } from "../fields-factory/helpers/match-constructor";
import { ISchema, ISchemaWithTree } from "../../../db/interfaces/mongoose";
import { getDocumentInCollectionById } from "../providers/documentsProvider";
import * as mongoose from "mongoose";

export interface IFieldsToEdit {
    fields: Array<JSX.Element>
    schema: ISchemaWithTree
    modelPrettyName: string
}

async function getFieldsToEdit(collectionName: string, documentId?: string) : Promise<IFieldsToEdit> {
    let document: mongoose.Document | undefined

    if (documentId) {
        document = await getDocumentInCollectionById(collectionName, documentId)
    }

    const schema = await getCollectionSchema(collectionName)

    const fields: Array<JSX.Element> = []

    Object.keys(schema.obj).map((fieldName: string) => {
        fields.push(matchFieldConstructor(schema as ISchema, fieldName, this, document))
    })

    // @ts-ignore
    const modelPrettyName = schema.options.modelPrettyName

    return { fields, schema, modelPrettyName }
}

export { getFieldsToEdit } 