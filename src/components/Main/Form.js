import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
      chips:[],
      newBook: {
        title: '',
        author: '',
        ISBN: '',
        type: '',
        tags: [],
        status: ''
      }
    }
    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
    this.ISBNRef = React.createRef();
    this.typeRef = React.createRef();
    this.statusRef = React.createRef();
    this.handleChip = this.handleChip.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChip = chips => {
    this.setState({chips})
  };

  // handleChip = chips => {
  //   const {newBook}= this.state;
  //   const tags= newBook.tags.push(`${chips}`);
  //   return tags
  // }

  handleChange = field => event => {
    const { newBook } = this.state;
    const addBook = { ...newBook, [field]: event.currentTarget.value }
    this.setState({
      newBook: addBook
    })
  }

  render() {
    return (
      <div className="form__container">
        <div className="popup">
          <form action="/signup" method="post">
            <FormControl className="form__textfield" variant="outlined">
              <InputLabel ref={this.titleRef} htmlFor="outlined-title">Título</InputLabel>
              <OutlinedInput label="Título" id="outlined-title" onKeyUp={this.handleChange('title')} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel ref={this.titleRef} htmlFor="outlined-author">Autor</InputLabel>
              <OutlinedInput label="Autor" id="outlined-author" onKeyUp={this.handleChange('author')} labelWidth={this.authorRef ? this.authorRef.offsetWidth : 0} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel ref={this.ISBNRef} htmlFor="outlined-ISBN">ISBN</InputLabel>
              <OutlinedInput label="ISBN" id="outlined-ISBN" onKeyUp={this.handleChange('ISBN')} labelWidth={this.ISBNRef ? this.ISBNRef.offsetWidth : 0} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel ref={this.typeRef} htmlFor="type">Tipo</InputLabel>
              <Select native value={this.state.newBook.type} onChange={this.handleChange('type')} input={
                <OutlinedInput name="type" labelWidth={this.typeRef ? this.typeRef.offsetWidth : 0} id="type" />}>
                {types.map(option => {
                  return (
                    <option value={option.value}>{option.label}</option>
                  )
                }
                )}
              </Select>
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <Chips value={this.state.chips} onChange={this.handleChip} suggestions={this.props.arrayTags} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel ref={this.statusRef} htmlFor="status">Estado</InputLabel>
              <Select native value={this.state.newBook.status} onChange={this.handleChange('status')} input={
                <OutlinedInput name="status" labelWidth={this.statusRef ? this.statusRef.offsetWidth : 0} id="type" />}>
                {state.map(option => {
                  return (
                    <option value={option.value}>{option.label}</option>
                  )
                }
                )}
              </Select>
            </FormControl>
          </form>
          <button className="close" onClick={this.props.togglePopup}> Cerrar </button>
        </div>
      </div>
    );
  }
}

export default Form;