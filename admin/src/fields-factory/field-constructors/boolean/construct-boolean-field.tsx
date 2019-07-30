import React from 'react'
import * as mongoose from "mongoose";
import {ConstructField} from "../construct-field";
import {DocumentEdit} from "../../../components/DocumentEdit/DocumentEdit";
import {SwitchField} from "./types/switch";
import {IDocumentFromResponse} from "../../../../../db/interfaces/mongoose";
import {CUSTOM_SCHEMA_TYPES} from "../../../../../shared/registry/SCHEMA_TYPES";

class ConstructBooleanField extends ConstructField {
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
            label: this.label,
            fieldName: this.fieldName,
            parentComponent: this.component
        }

        switch (this.customType) {
            case CUSTOM_SCHEMA_TYPES.SWITCH:
                return <SwitchField {...props} />
            default:
                throw new Error(`Specify "customType" property for ${this.fieldName}!`)
        }
    }
}

export {ConstructBooleanField}
