import React from 'react'
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import Input from "@material-ui/core/Input"
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

class SelectField extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.setState({
            value: this.props.initialValue
        })
    }

    handleChange(event: React.FormEvent) {
        const target = event.target as HTMLInputElement

        if (target) {
            const value = target.value

            this.setState({
                value
            })

            this.props.parentComponent.setFieldValue(this.props.fieldName, value)
        }
    }

    render() {
        return (
            <Grid item
                  xs={6}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="age-helper">{this.props.label}</InputLabel>
                    <Select
                        value={27}
                        onChange={this.handleChange.bind(this)}
                        input={<Input name="age"
                                      id="age-helper"/>}
                    >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>
            </Grid>
        )
    }
}

export {SelectField}
