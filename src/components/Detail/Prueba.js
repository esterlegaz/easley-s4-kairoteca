import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
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

class Prueba extends Component {
    showMeEdit() {
        const { handleChange, newBook, handleChip, arrayTags, createBook } = this.props;
        const bookId = this.props.match.params.id;
        const { editBook, bookList } = this.props;

        if (bookList.length > 0 && bookId <= bookList.length) {
            const myBook = bookList[bookId - 1];
            const { author, title, tags, status, ISBN, type } = myBook;

            if (editBook === true) {
                return (
                    <Fragment>
                        <ul className="list__view-details">
                            <li className="list__item">
                                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">Título</InputLabel>
                                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={title} margin="normal" InputProps={{
                                    readOnly: true,
                                }} />
                            </li>
                            <li className="list__item">
                                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">Autor</InputLabel>
                                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={author} margin="normal" InputProps={{
                                    readOnly: true,
                                }} />
                            </li>
                            <li className="list__item">
                                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">ISBN</InputLabel>
                                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={ISBN} margin="normal" InputProps={{
                                    readOnly: true,
                                }} />
                            </li>
                            <li className="list__item">
                                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">Tipo</InputLabel>
                                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={type} margin="normal" InputProps={{
                                    readOnly: true,
                                }} />
                            </li>
                            <li className="list__item">
                                <h2 id="list__item--title">Tags</h2>
                                <div className="list__item--content-tags">
                                    <ul className="list__tags--list">
                                        {tags.map((tag, index) => {
                                            return (
                                                <li className="list__tags--item" key={index}>{tag}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                            <li className="list__item">
                                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">Estado</InputLabel>
                                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={status} margin="normal" InputProps={{
                                    readOnly: true,
                                }} />
                            </li>
                        </ul>
                        <Link className="link__close form__btn" to="/">Cerrar</Link>
                    </Fragment >
                )
            } else if (editBook === false) {
                return (
                    <Fragment>
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
                                            <option value={option.value}>{option.label}</option>
                                        )
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
                                            <option value={option.value}>{option.label}</option>
                                        )
                                    }
                                    )}
                                </Select>
                            </FormControl>
                        </form>
                        <div className="btn__container">
                            <input type="submit" value="Enviar" className="form__btn" onClick={createBook} />
                            <button className="form__btn form__btn--close" onClick={this.goBack} >Cerrar</button>
                        </div>
                    </Fragment >
                )
            }

        } else {
            return (
                <Fragment>
                    <p className="book__no-data">Sin datos</p>
                    <Link className="link__close" to="/">Atrás</Link>
                </Fragment>
            )
        }
    }
    render() {
        const {goBack} = this.props;
        
        return(
        <div className="detail__wrapper">
            <div className="btn__container">
                <button className="form__btn" onClick={this.props.changeMe} >EDITAME</button>
                <input type="submit" value="Enviar" className="form__btn" />
                <button className="form__btn form__btn--close" onClick={goBack} >Cerrar</button>
            </div>
            <div>AQUI SUCEDO: {this.showMeEdit()} </div>
        </div>
        )
    }

};

export default Prueba;

