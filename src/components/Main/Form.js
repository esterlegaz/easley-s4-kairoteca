import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chips from 'react-chips';

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

  render() {
    return (
      <div className="form__container">
        <div className="form__popup">
          <form action="/signup" method="post">
            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="outlined-title">Título</InputLabel>
              <OutlinedInput id="outlined-title" className="form__input" label="Título" onKeyUp={this.props.handleChange} inputProps={{ "data-field": "title" }} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="outlined-author">Autor</InputLabel>
              <OutlinedInput className="form__input" label="Autor" id="outlined-author" onKeyUp={this.props.handleChange} inputProps={{ "data-field": "author" }} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="outlined-ISBN">ISBN</InputLabel>
              <OutlinedInput className="form__input" label="ISBN" id="outlined-ISBN" onKeyUp={this.props.handleChange} inputProps={{ "data-field": "ISBN" }} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="type">Tipo</InputLabel>
              <Select className="form__input" native value={this.props.newBook.type} onChange={this.props.handleChange} input={
                <OutlinedInput className="form__input" name="type" id="type" inputProps={{ "data-field": "type" }} />}>
                {types.map(option => {
                  return (
                    <option value={option.value}>{option.label}</option>
                  )
                }
                )}
              </Select>
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              <p>Tags <span>*</span></p>
              <Chips className="form__input" label="tags"
                value={this.props.newBook.tags} onChange={this.props.handleChip} suggestions={this.props.arrayTags} id="outlined-tags" />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="status">Estado</InputLabel>
              <Select className="form__input" native value={this.props.newBook.status} onChange={this.props.handleChange} input={
                <OutlinedInput name="status" id="status" inputProps={{ "data-field": "status" }} />}>
                {state.map(option => {
                  return (
                    <option value={option.value}>{option.label}</option>
                  )
                }
                )}
              </Select>
            </FormControl>
          </form>
          <div className="form__wrapper--btn">
            <input type="submit" value="Enviar" className="form__send--btn" onClick={this.props.createBook} />
            <button className="form__close--btn" onClick={this.props.togglePopup}>Cerrar</button>
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  createBook: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
  newBook: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChip: PropTypes.func.isRequired,
  arrayTags: PropTypes.array.isRequired
};

export default Form;