import React from 'react'
import Button from "@material-ui/core/Button"
import { getFieldsToEdit, IFieldsToEdit } from "../../helpers/get-fields-to-edit";

interface IProps {
    collectionName: string
}

export class DocumentCreate extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <Button onClick={this.onCreateButtonClick.bind(this)} variant="contained"
                color="primary">Создать элемент</Button>
        )
    }

    async onCreateButtonClick() {
        const fields = await getFieldsToEdit(this.props.collectionName)

        this.showModal(getRequiredFields(fields))
    }

    showModal(fields: any) {
        console.log('Show modal! fields: ', fields)
    }
}

function getRequiredFields(fields: IFieldsToEdit) {
    const fieldsTree = fields.schema.tree

    const requiredFieldsKeys = Object.keys(fieldsTree).filter((fieldKey: string) => {
        return fieldsTree[fieldKey].required
    })

    const realFields = fields.fields

    // @ts-ignore object.values
    return Object.values(realFields).filter((field) => {
        return requiredFieldsKeys.includes(field.key)
    })
}