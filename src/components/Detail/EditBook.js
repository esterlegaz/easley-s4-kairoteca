import React, { Component, Fragment } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

class EditBook extends Component {

    render() {
        const { handleChange, newBook, handleChip, arrayTags, createBook } = this.props;
        const bookId = this.props.match.params.id;
        const { bookList, updateBook, goBackApp } = this.props;
        if (bookList.length > 0 && bookId <= bookList.length) {
            const myBook = bookList[bookId - 1];
            const { author, title, tags, status, ISBN, type } = myBook;
            return (
                <Fragment>
                    <div className="btn__container">
                        <input type="submit" value="Enviar" className="form__btn" onClick={updateBook} />
                        <button className="form__btn form__btn--close" onClick={goBackApp} >Cerrar</button>
                    </div>

                    <form className="form__container" action="/signup" method="post">
                        <FormControl className="form__textfield" variant="outlined" required>
                            <InputLabel htmlFor="outlined-title">Título</InputLabel>
                            <OutlinedInput id="outlined-title" className="form__input" defaultValue={title} label="Título" onKeyUp={handleChange} inputProps={{ "data-field": "title" }} />
                        </FormControl>

                        <FormControl className="form__textfield" variant="outlined" required>
                            <InputLabel htmlFor="outlined-author">Autor</InputLabel>
                            <OutlinedInput className="form__input" label="Autor" id="outlined-author" defaultValue={author} onKeyUp={handleChange} inputProps={{ "data-field": "author" }} />
                        </FormControl>

                        <FormControl className="form__textfield" variant="outlined" required>
                            <InputLabel htmlFor="outlined-ISBN">ISBN</InputLabel>
                            <OutlinedInput className="form__input" label="ISBN" id="outlined-ISBN" defaultValue={ISBN} onKeyUp={handleChange} inputProps={{ "data-field": "ISBN" }} />
                        </FormControl>

                        <FormControl className="form__textfield" variant="outlined" required>
                            <InputLabel htmlFor="type">Tipo</InputLabel>
                            <Select className="form__input" native value={newBook.type} defaultValue={type} onChange={handleChange} input={
                                <OutlinedInput className="form__input" name="type" id="type" inputProps={{ "data-field": "type" }} />}>
                                {types.map(option => {
                                   return (
                                    <option value={option.value} selected={option.value === type ? true:false}>{option.label}</option>
                                ); 
                                }
                                )}
                            </Select>
                        </FormControl>

                        <FormControl className="form__textfield" variant="outlined" required>
                            <p>Tags <span>*</span></p>
                            <Chips className="form__input" label="tags"
                                value={newBook.tags} onChange={handleChip} suggestions={arrayTags} defaultValue={tags} id="outlined-tags" />
                        </FormControl>

                        <FormControl className="form__textfield" variant="outlined" required>
                            <InputLabel htmlFor="status">Estado</InputLabel>
                            <Select className="form__input" native value={newBook.status} onChange={handleChange} input={
                                <OutlinedInput name="status" id="status" defaultValue={status} inputProps={{ "data-field": "status" }} />}>
                                {state.map(option => {
                                    return (
                                        <option value={option.value} selected={option.value === status ? true:false}>{option.label}</option>
                                    ); 
                                }
                                )}
                            </Select>
                        </FormControl>
                    </form>
                    <div className="btn__container">
                        <input type="submit" value="Enviar" className="form__btn" onClick={updateBook} />
                        <button className="form__btn form__btn--close" onClick={goBackApp} >Cerrar</button>
                    </div>
                </Fragment >
            )
        }
    }
}



export default EditBook;