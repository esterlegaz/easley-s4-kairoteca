import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
// import Chip from '@material-ui/core/Chip';
import Chips from 'react-chips';

const types = [
    {
        value: 'digital',
        label: 'digital',
    },
    {
        value: 'físico',
        label: 'físico',
    },
]

const state = [
    {
        value: 'Disponible',
        label: 'Disponible',
    },
    {
        value: 'Prestado',
        label: 'Prestado',
    },
    {
        value: 'Pendiente',
        label: 'Pendiente',
    },
]

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chips: [],
            newBook:{
                title:'',
                author:'',
                ISBN:'',
                type:'',
                tags:[],
                status:'',
                name: ''
            }
        }
        this.labelRef=React.createRef();
    }

    handleChip = chips => {
        this.setState({ chips });
    }

    handleChange(e){
        const {newBook} = this.state;
        const addBook = {...newBook, name: e.currentTarget.value}
        this.setState({
            newBook: addBook
        })
    }

    render() {
        return (
            <div className="form__container">
                <div className="popup">
                    <form action="/signup" method="post">
                        <FormControl className='formControl' variant="outlined">
                            <InputLabel ref={this.labelRef} htmlFor="component-outlined">
                                Name
                            </InputLabel>
                            <OutlinedInput id="component-outlined" value={this.state.name} onChange={this.handleChange} labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0} />
                        </FormControl>
                        <TextField id="outlined-title" label="Título" className='form__textfield' /* value={this.state.name}  onChange={this.handleChange("name")}*/ margin="normal" variant="outlined" />

                        <TextField id="outlined-author" label="Autor" className='form__textfield' /* value={this.state.name}  onChange={this.handleChange("name")}*/ margin="normal" variant="outlined" />

                        <TextField id="outlined-isbn" label="ISBN" className='form__textfield' /* value={this.state.name}  onChange={this.handleChange("name")}*/ margin="normal" variant="outlined" />

                        <TextField id="outlined-select-types" select label="Tipo" className="form__textfield" /*value={this.state.currency} onChange={this.handleChange('currency')} */ margin="normal" variant="outlined">
                            {types.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <div>
                            <Chips value={this.state.chips} onChange={this.handleChip} suggestions={this.props.arrayTags} />
                        </div>

                        <TextField id="outlined-select-state" select label="Estado" className="form__textfield" /*value={this.state.currency} onChange={this.handleChange('currency')} */ margin="normal" variant="outlined">
                            {state.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </form>
                    <button className="close" onClick={this.props.togglePopup}> Cerrar </button>
                </div>
            </div>
        );
    }
}

export default Form;