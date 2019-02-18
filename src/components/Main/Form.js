import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
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
    value: 'digital',
    label: 'Digital',
  },
  {
    value: 'físico',
    label: 'Físico',
  },
]

const state = [
  {
    value: '',
    label: '',
  },
  {
    value: 'disponible',
    label: 'Disponible',
  },
  {
    value: 'prestado',
    label: 'Prestado',
  },
  {
    value: 'pending',
    label: 'Pendiente',
  },
];

class Form extends Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { handleChange, newBook, handleChip, arrayTags, createBook, goBackApp } = this.props;

    return (
      <Fragment>
        <div className="left__arrow"></div>
        <div className="createBook__title">Crear un nuevo libro</div>
        <form className="form__container" action="/signup" method="post" onSubmit={this.handleSubmit}>
          <FormControl className="form__textfield" variant="outlined" required>
            <InputLabel htmlFor="outlined-title">Título</InputLabel>
            <OutlinedInput labelWidth={0} id="outlined-title" className="form__input" label="Título" onKeyUp={handleChange} inputProps={{ "data-field": "title" }} />
          </FormControl>

          <FormControl className="form__textfield" variant="outlined" required>
            <InputLabel htmlFor="outlined-author">Autor</InputLabel>
            <OutlinedInput labelWidth={0} className="form__input" label="Autor" id="outlined-author" onKeyUp={handleChange} inputProps={{ "data-field": "author" }} />
          </FormControl>

          <FormControl className="form__textfield" variant="outlined" required>
            <InputLabel htmlFor="outlined-ISBN">ISBN</InputLabel>
            <OutlinedInput labelWidth={0} className="form__input" label="ISBN" id="outlined-ISBN" onKeyUp={handleChange} inputProps={{ "data-field": "ISBN" }} />
          </FormControl>

          <FormControl className="form__textfield" variant="outlined" required>
            <InputLabel htmlFor="type">Tipo</InputLabel>
            <Select labelWidth={0} className="form__input" native value={newBook.type} onChange={handleChange} input={
              <OutlinedInput className="form__input" name="type" id="type" inputProps={{ "data-field": "type" }} />}>
              {types.map((option, index) => {
                return (
                  <option key={index} value={option.value}>{option.label}</option>
                )
              }
              )}
            </Select>
          </FormControl>

          <FormControl className="form__textfield" variant="outlined" required>
            {/* <label class="custom-label">Tags <span>*</span></label> */}
            <Chips className="form__input" label="tags"
              value={newBook.tags} onChange={handleChip} suggestions={arrayTags} id="outlined-tags" placeholder="Tags *" />
          </FormControl>

          <FormControl className="form__textfield" variant="outlined" required>
            <InputLabel htmlFor="status">Estado</InputLabel>
            <Select labelWidth={0} className="form__input" native value={newBook.status} onChange={handleChange} input={
              <OutlinedInput name="status" id="status" inputProps={{ "data-field": "status" }} />}>
              {state.map((option, optionindex) => {
                return (
                  <option key={optionindex} value={option.value}>{option.label}</option>
                )
              }
              )}
            </Select>
          </FormControl>
        </form>
        <div className="btn__container">
          <input type="submit" value="Enviar" className="form__btn" onClick={createBook} />
          <button className="form__btn form__btn--close" onClick={goBackApp}>Cerrar</button>
        </div>
      </Fragment>

    );
  }
}

Form.propTypes = {
  createBook: PropTypes.func.isRequired,
  newBook: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChip: PropTypes.func.isRequired,
  arrayTags: PropTypes.array.isRequired,
  goBackApp: PropTypes.func.isRequired
};

export default withRouter(Form);