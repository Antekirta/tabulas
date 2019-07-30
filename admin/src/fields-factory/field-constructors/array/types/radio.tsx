import React from 'react'
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormLabel from "@material-ui/core/FormLabel"
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

class RadioField extends React.Component <IProps, IState> {
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
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    >
                        <FormControlLabel value="female"
                                          control={<Radio/>}
                                          label="Female"/>
                        <FormControlLabel value="male"
                                          control={<Radio/>}
                                          label="Male"/>
                        <FormControlLabel value="sobaka"
                                          control={<Radio/>}
                                          label="Sobaka"/>
                        <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio/>}
                            label="(Disabled option)"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
        )
    }
}

export {RadioField}
