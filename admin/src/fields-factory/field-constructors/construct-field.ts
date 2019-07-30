import {DocumentEdit} from "../../components/DocumentEdit/DocumentEdit";
import * as mongoose from "mongoose";
import {IDocumentFromResponse} from "../../../../db/interfaces/mongoose";

class ConstructField {
    protected customType: string

    constructor(readonly fieldName: string,
                readonly label: string,
                readonly schema: mongoose.Schema,
                readonly component: DocumentEdit,
                readonly document: IDocumentFromResponse) {
        this.customType = schema.obj[fieldName].customType
    }

    public returnField() {

    }
}

export {ConstructField}
