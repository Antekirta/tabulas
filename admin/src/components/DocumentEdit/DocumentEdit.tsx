import React from 'react'

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import {getDocumentInCollectionById, updateDocument} from "../../providers/documentsProvider"
import {getCollectionSchema} from "../../providers/collectionsProvider"
import {SCHEMA_TYPES} from "../../../../shared/registry/SCHEMA_TYPES";
import {matchFieldConstructor} from "../../fields-factory/helpers/match-constructor";
import {ISchema} from "../../../../db/interfaces/mongoose";

require('./DocumentEdit.sass')

// @ts-ignore
console.log('SCHEMA_TYPES: ', SCHEMA_TYPES)

interface Props {
    collectionName: string
    documentId: string
}

interface LocalState {
    fields: Array<JSX.Element>
    documentData: {
        [key: string]: any
    }
    modelPrettyName: string
    successfullyUpdated: boolean
}

class DocumentEdit extends React.Component<Props, LocalState> {
    constructor(props: Props) {
        super(props)
    }

    state: LocalState = {
        fields: [],
        documentData: {},
        modelPrettyName: '',
        successfullyUpdated: false
    }

    async componentDidMount() {
        await this.getFields()
    }

    setFieldValue(fieldName: string, value: any) {
        const documentData = {
            ...this.state.documentData,
            [fieldName]: value
        }

        this.setState({documentData})
    }

    async submitHandler(event: React.FormEvent) {
        event.preventDefault()

        try {
            await updateDocument(this.props.documentId, this.state.documentData)

            this.setState({
                successfullyUpdated: true
            })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)}
                  className={'document-edit'}>
                <Grid container
                      spacing={4}>
                    <Grid item
                          xs={12}>
                        <Typography variant="h4"
                                    component="h4">
                            {this.state.modelPrettyName}
                        </Typography>
                    </Grid>

                    {
                        this.state.fields.map((field) => {
                            return (
                                <Grid key={field.key}
                                      item
                                      xs={12}>
                                    {field}
                                </Grid>
                            )
                        })
                    }

                    <Grid item
                          xs={2}>
                    </Grid>

                    <Grid item
                          xs={12}>
                        <Button variant="contained"
                                type="submit"
                                color="primary">Сохранить</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

    async getFields() {
        const document = await getDocumentInCollectionById(this.props.collectionName, this.props.documentId)
        const schema = await getCollectionSchema(this.props.collectionName)

        console.log('document: ', document)
        console.log('schema: ', schema)

        const fields: Array<JSX.Element> = []

        Object.keys(schema.obj).map((fieldName: string) => {
            fields.push(matchFieldConstructor(schema as ISchema, fieldName, this, document))
        })

        this.setState({
            fields,
            // TODO solve type problem
            // @ts-ignore
            modelPrettyName: schema.options.modelPrettyName
        })
    }
}

export {DocumentEdit}
