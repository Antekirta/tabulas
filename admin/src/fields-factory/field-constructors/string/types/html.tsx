import React from 'react'
import TextField from "@material-ui/core/TextField"
import {ConstructStringField} from "../construct-string-field";
// @ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {IFieldProps} from "../../interfaces/props";
import {ICKEditor} from "../../interfaces/ckeditor";

interface IState {
    value: string
}

class HtmlField extends React.Component <IFieldProps, IState> {
    constructor(props: IFieldProps) {
        super(props)
    }

    onChangeHTMLField(event: React.FormEvent, editor: ICKEditor) {
        const data = editor.getData()

        this.props.parentComponent.setFieldValue(this.props.fieldName, data)
    }

    render() {
        return (
            <CKEditor
                key={this.props.fieldName}
                editor={ClassicEditor}
                data={this.props.initialValue}
                onChange={this.onChangeHTMLField.bind(this)}
            />
        )
    }
}

export {HtmlField}
