import React, { Component, Fragment } from "react";
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

class Edit extends Component {
  render() {
    return (
      <Fragment>
        <div className="edit__container">
          <div className="edit__popup">
            <form action="/signup" method="post">
              <FormControl className="edit__textfield" variant="outlined">
                <InputLabel htmlFor="outlined-title">Título</InputLabel>
                <OutlinedInput labelWidth="0" className="edit__input" label="Título" id="outlined-title" onKeyUp={this.props.handleChangeEdit('title')} />
              </FormControl>

              <FormControl className="edit__textfield" variant="outlined">
                <InputLabel htmlFor="outlined-author">Autor</InputLabel>
                <OutlinedInput labelWidth="0" className="edit__input" label="Autor" id="outlined-author" onKeyUp={this.props.handleChangeEdit('author')} />
              </FormControl>

              <FormControl className="edit__textfield" variant="outlined">
                <InputLabel htmlFor="outlined-ISBN">ISBN</InputLabel>
                <OutlinedInput labelWidth="0" className="edit__input" label="ISBN" id="outlined-ISBN" onKeyUp={this.props.handleChangeEdit('ISBN')} />
              </FormControl>

              <FormControl className="edit__textfield" variant="outlined">
                <InputLabel htmlFor="type">Tipo</InputLabel>
                <Select className="edit__input" /*native value={this.props.newBook.type}*/ onChange={this.props.handleChangeEdit('type')} input={
                  <OutlinedInput labelWidth="0" className="edit__input" name="type" id="type" />}>
                  {types.map((option, opindex) => {
                    return (
                      <option key={opindex} value={option.value}>{option.label}</option>
                    )
                  }
                  )}
                </Select>
              </FormControl>

              <FormControl className="edit__textfield" variant="outlined">
                <p>Tags</p>
                <Chips className="edit__input" label="tags"
                  /*value={this.props.newBook.tags}*/ onChange={this.props.handleChipEdit} suggestions={this.props.arrayTags}id="outlined-tags" />
              </FormControl>

              <FormControl className="edit__textfield" variant="outlined">
                <InputLabel htmlFor="status">Estado</InputLabel>
                <Select className="edit__input" /*native value={this.props.newBook.status}*/ onChange={this.props.handleChangeEdit('status')} input={
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
          </div>
        </div>
        <div className="edit__btn--container">
          <button className="edit__close--btn" onClick={this.props.updateBook}>Editar</button>
          <button className="edit__close--btn" onClick={this.props.togglePopup}>Cerrar</button>
        </div>
      </Fragment >
    );
  }
}

export default Edit;