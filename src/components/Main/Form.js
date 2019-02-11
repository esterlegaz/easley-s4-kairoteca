import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chips from 'react-chips';
import Chip from '@material-ui/core/Chip';

const types = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Digital',
    label: 'Digital',
  },
  {
    value: 'Físico',
    label: 'Físico',
  },
]

const state = [
  {
    value: '',
    label: '',
  },
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
];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBook: {
        title: '',
        author: '',
        ISBN: '',
        type: '',
        tags: [],
        status: ''
      },
    }
    this.handleChip = this.handleChip.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChip = chips => {
  const { newBook } = this.state;
  const addBook = { ...newBook, tags: chips }
  this.setState({newBook: addBook})
}
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
        <div className="form__popup">
          <form action="/signup" method="post">
            <FormControl className="form__textfield" variant="outlined">
              <InputLabel htmlFor="outlined-title">Título</InputLabel>
              <OutlinedInput className="form__input" label="Título" id="outlined-title" onKeyUp={this.handleChange('title')}/>
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel htmlFor="outlined-author">Autor</InputLabel>
              <OutlinedInput className="form__input" label="Autor" id="outlined-author" onKeyUp={this.handleChange('author')} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel htmlFor="outlined-ISBN">ISBN</InputLabel>
              <OutlinedInput className="form__input" label="ISBN" id="outlined-ISBN" onKeyUp={this.handleChange('ISBN')} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel htmlFor="type">Tipo</InputLabel>
              <Select className="form__input" native value={this.state.newBook.type} onChange={this.handleChange('type')} input={
                <OutlinedInput className="form__input" name="type" id="type" />}>
                {types.map(option => {
                  return (
                    <option value={option.value}>{option.label}</option>
                  )
                }
                )}
              </Select>
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
                <p>Tags</p>
              <Chips className="form__input" label="tags"
              value={this.state.newBook.tags} onChange={this.handleChip} suggestions={this.props.arrayTags} id="outlined-tags"/>
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel htmlFor="status">Estado</InputLabel>
              <Select className="form__input" native value={this.state.newBook.status} onChange={this.handleChange('status')} input={
                <OutlinedInput name="status" id="type" />}>
                {state.map(option => {
                  return (
                    <option value={option.value}>{option.label}</option>
                  )
                }
                )}
              </Select>
            </FormControl>
          </form>
          <button className="form__close--btn" onClick={this.props.togglePopup}>Cerrar</button>
        </div>
      </div>
    );
  }
}

export default Form;