import React from 'react'

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import {updateDocument} from "../../providers/documentsProvider"
import {getFieldsToEdit} from "../../helpers/get-fields-to-edit";

require('./DocumentEdit.sass')

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
        const {fields, modelPrettyName} = await getFieldsToEdit(this.props.collectionName, this.props.documentId)

        this.setState({
            fields,
            modelPrettyName
        })
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
}

export {DocumentEdit}
