import React, {useState, useEffect} from 'react'
import {getDocumentsOfCollection} from "../../providers/documentsProvider";
import {ROUTES} from "../../../../shared/registry/ROUTES";
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {DocumentCreate} from "../DocumentCreate/DocumentCreate"

interface ICollectionPageProps {
    collectionName: string
}

interface IDocumentField {
    link: string

    values: Array<any>
}

interface ICollectionPageState {
    headers: Array<string>
    documents: Array<IDocumentField>
}

export class CollectionPage extends React.Component <ICollectionPageProps, ICollectionPageState> {
    constructor(props: ICollectionPageProps) {
        super(props)

        this.state = {
            headers: [],
            documents: []
        }
    }

    render() {
        return (
            <main className='collection-page' style={{margin: '100px 16px'}}>
                <Typography variant={'h2'}>{this.props.collectionName}</Typography>

                <DocumentCreate collectionName={this.props.collectionName} />

                <Table>
                    <TableHead>
                        <TableRow>
                            {this.state.headers.map(header => (
                                <TableCell key={header}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.state.documents.map(document => (
                            <TableRow key={document.link}>
                                {document.values.map(documentField => (
                                    <TableCell key={documentField}>
                                        <Link to={document.link}>{documentField.toString()}</Link>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </main>
        )
    }

    async componentDidMount() {
        const documentsFromResponse = await getDocumentsOfCollection(this.props.collectionName)

        this.createDocumentsList.call(this, documentsFromResponse)
    }

    createDocumentsList(rawDocuments: any) {
        console.log('rawDocuments: ', rawDocuments)

        const headers = Object.keys(rawDocuments[0])
        const documents: Array<IDocumentField> = []

        rawDocuments.forEach((rawDocument: any) => {
            const values = Object.values(rawDocument)

            documents.push({
                link: `${ROUTES.ADMIN_DOCUMENT_EDIT}/${rawDocument._id}`,
                values
            })
        })

        this.setState({
            headers,
            documents
        })
    }
}
