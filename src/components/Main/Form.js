import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  render() {
    const {handleChange, newBook, handleChip, arrayTags, createBook} = this.props;

    return (
      <Fragment>
        <form className="form__container" action="/signup" method="post">
          <FormControl className="form__textfield" variant="outlined">
            <InputLabel htmlFor="outlined-title">Título</InputLabel>
            <OutlinedInput placeholder="Escribe el título" labelWidth="0" className="form__input" label="Título" id="outlined-title" onKeyUp={handleChange('title')} />
          </FormControl>

          <FormControl className="form__textfield" variant="outlined">
            <InputLabel htmlFor="outlined-author">Autor</InputLabel>
            <OutlinedInput placeholder="Escribe el autor" labelWidth="0" className="form__input" label="Autor" id="outlined-author" onKeyUp={handleChange('author')} />
          </FormControl>

          <FormControl className="form__textfield" variant="outlined">
            <InputLabel htmlFor="outlined-ISBN">ISBN</InputLabel>
            <OutlinedInput placeholder="Escribe el ISBN" labelWidth="0" className="form__input" label="ISBN" id="outlined-ISBN" onKeyUp={handleChange('ISBN')} />
          </FormControl>

          <FormControl className="form__textfield" variant="outlined">
            <InputLabel htmlFor="type">Tipo</InputLabel>
            <Select className="form__input" native value={newBook.type} onChange={handleChange('type')} input={
              <OutlinedInput placeholder="Elige el tipo" labelWidth="0" className="form__input" name="type" id="type" />}>
              {types.map((option, opindex) => {
                return (
                  <option key={opindex} value={option.value}>{option.label}</option>
                )
              }
              )}
            </Select>
          </FormControl>

          <FormControl className="form__textfield" variant="outlined">
            <p>Tags</p>
            <Chips placeholder="Elige las tags" className="form__input" label="tags"
              value={newBook.tags} onChange={handleChip} suggestions={arrayTags} id="outlined-tags" />
          </FormControl>

          {/* <InputLabel htmlfor="tags">Tags</InputLabel>
          <div id="outlined-tags" className="form__input" native value={newBook.status} onChange={handleChange('status')} input={
              <OutlinedInput labelWidth="0" name="tags" id="outlined-tags" />}>
              {newBook.tags.map((itemTag) => {
                return (
                  <Chip id="outlined-tags" value={itemTag} label={itemTag} onDelete={console.log('bla')}/>
                )
              }
              )}
            </div> */}

          {/* <Chip value={itemTag} value={newBook.tags}label={newBook.tags} onDelete={handleChip}/> */}
          <FormControl className="form__textfield" variant="outlined">
            <InputLabel htmlFor="status">Estado</InputLabel>
            <Select className="form__input" native value={newBook.status} onChange={handleChange('status')} input={
              <OutlinedInput labelWidth="0" name="status" id="status" />}>
              {state.map((option, index) => {
                return (
                  <option key={index} value={option.value}>{option.label}</option>
                )
              }
              )}
            </Select>
          </FormControl>
        </form>
        <div className="form__btn--container">
          <Link className="link__router" to='./'><button className="form__close--btn" onClick={createBook}>Crear</button></Link>
          <Link className="link__router" to='./'><button className="form__close--btn">Cancelar</button></Link>
        </div>
      </Fragment >
    );
  }
}

Form.propTypes = {
  createBook: PropTypes.func.isRequired,
  newBook: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChip: PropTypes.func.isRequired,
  arrayTags: PropTypes.array.isRequired
};

export default Form;