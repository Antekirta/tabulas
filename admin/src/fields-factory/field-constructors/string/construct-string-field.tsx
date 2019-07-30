import React from 'react'
import {DocumentEdit} from "../../../components/DocumentEdit/DocumentEdit";
import * as mongoose from "mongoose";
import {ConstructField} from '../construct-field'
import {CUSTOM_SCHEMA_TYPES} from "../../../../../shared/registry/SCHEMA_TYPES";
import {StringField} from "./types/string";
import {HtmlField} from "./types/html";
import {IDocumentFromResponse} from "../../../../../db/interfaces/mongoose";

class ConstructStringField extends ConstructField {
    constructor(fieldName: string,
                label: string,
                schema: mongoose.Schema,
                component: DocumentEdit,
                document: IDocumentFromResponse) {
        super(fieldName, label, schema, component, document)
    }

    public returnField() {
        const props = {
            key: this.fieldName,
            initialValue: this.document[this.fieldName],
            fieldName: this.fieldName,
            label: this.label,
            parentComponent: this.component
        }

        switch (this.customType) {
            case CUSTOM_SCHEMA_TYPES.HTML:
                return <HtmlField {...props} />
            case CUSTOM_SCHEMA_TYPES.STRING:
                return <StringField {...props} />
            default:
                throw new Error(`Specify "customType" property for ${this.fieldName}!`)
        }
    }
}

export {ConstructStringField}
