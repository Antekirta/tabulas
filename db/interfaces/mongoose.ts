import * as mongoose from "mongoose";

interface ICollection {
    name: string
    type: 'collection'
    options: any
    info: {
        readonly: boolean
        uuid: any
    }
    idIndex: any
}

interface IDocumentFromResponse {
    _id: string

    [key: string]: any
}

interface ISchemaOptions extends mongoose.SchemaOptions {
    collection: string
    modelPrettyName: string
}

interface ISchema extends mongoose.Schema {
    paths: {
        [key: string]: any
    }
    options: ISchemaOptions
}

export {ICollection, ISchema, IDocumentFromResponse, ISchemaOptions}
