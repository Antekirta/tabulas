import React from 'react'
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import {DocumentEdit} from "../../../../components/DocumentEdit/DocumentEdit";

interface IProps {
    initialValue: boolean
    fieldName: string
    label: string
    parentComponent: DocumentEdit
}

interface IState {
    value: boolean
}

class SwitchField extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            value: this.props.initialValue
        }
    }

    onChangeSwitchField(event: React.FormEvent, value: boolean) {
        this.setState({
            value
        })

        this.props.parentComponent.setFieldValue(this.props.fieldName, value)
    }

    render() {
        return (
            <Grid item
                  xs={6}>
                <FormControl fullWidth>
                    <FormControlLabel
                        control={
                            <Switch
                                onChange={(event: React.FormEvent) => {
                                    this.onChangeSwitchField(event, !this.state.value) // TODO Not true, think it out!
                                }
                                }
                                checked={this.state.value}
                                color="primary"
                            />
                        }
                        label={this.props.label}
                    />

                    <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>
            </Grid>
        )
    }
}

export {SwitchField}
