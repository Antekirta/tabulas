import React from 'react'
import TextField from "@material-ui/core/TextField"
import {DocumentEdit} from "../../../../components/DocumentEdit/DocumentEdit";

interface IProps {
    initialValue: string
    fieldName: string
    label: string
    parentComponent: DocumentEdit
}

interface IState {
    value: string
}

class StringField extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            value: this.props.initialValue
        }
    }

    render() {
        return (
            <TextField
                key={this.props.fieldName}
                onChange={this.onChangeStringField.bind(this)}
                fullWidth
                value={this.state.value}
                label={this.props.label}/>
        )
    }

    onChangeStringField(event: React.FormEvent): void {
        const target = event.target as HTMLInputElement

        if (target) {
            this.setState({
                value: target.value
            })

            this.props.parentComponent.setFieldValue(this.props.fieldName, target.value)
        }
    }
}

export {StringField}
