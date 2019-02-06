import React, { Component } from "react";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class Filter extends Component {
  render() {
    return (
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="component-outlined"
        >
          Name
      </InputLabel>
        <OutlinedInput
          id="component-outlined"
          placeholder='Buscar'
          onKeyUp={this.props.getFilter}
          labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
        />
      </FormControl>

      //   <OutlinedInput
      //   id="component-outlined"
      //   placeholder='Buscar'
      //   onKeyUp={this.props.getFilter}
      //   labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
      // />
      //   <TextField
      //   id="filled-uncontrolled"
      //   label="Uncontrolled"
      //   defaultValue="foo"
      //   margin="normal"
      //   variant="filled"
      // />
      // <label htmlFor="filter">
      //     <input id="filter" type="text" placeholder="Buscar" onKeyUp={this.props.getFilter}/>
      // </label>
    );
  }
}

export default Filter;