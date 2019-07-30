import React from 'react'
import * as mongoose from "mongoose";
import {ConstructField} from "../construct-field";
import {DocumentEdit} from "../../../components/DocumentEdit/DocumentEdit";
import {IDocumentFromResponse} from "../../../../../db/interfaces/mongoose";
import {RadioField} from "./types/radio";
import {SelectField} from "./types/select";
import {CUSTOM_SCHEMA_TYPES} from "../../../../../shared/registry/SCHEMA_TYPES";

class ConstructArrayField extends ConstructField {
    constructor(fieldName: string, label: string, schema: mongoose.Schema, component: DocumentEdit, document: IDocumentFromResponse) {
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
            case CUSTOM_SCHEMA_TYPES.RADIO:
                return <RadioField {...props} />
            case CUSTOM_SCHEMA_TYPES.SELECT:
                return <SelectField {...props} />
            default:
                throw new Error(`Specify "customType" property for ${this.fieldName}!`)
        }
    }
}

export {ConstructArrayField}

