import React, { Component } from "react";
import ViewDetail from './ViewDetail';
import EditBook from './EditBook';

class ViewOrEdit extends Component {

    render() {
        const { goBack, editBook, bookList, changeMe, goBackApp, handleChange, newBook, handleChip, arrayTags, createBook, updateBook, match } = this.props;

        return (
            <div className="detail__wrapper">
                <div className="btn__container">
                    <button className="form__btn" onClick={changeMe} >EDITAME</button>
                    <input type="submit" value="Enviar" className="form__btn" onClick={updateBook} />
                    <button className="form__btn form__btn--close" onClick={goBack} >Cerrar</button>
                </div>
                {editBook ?
                    <ViewDetail match={match} bookList={bookList} editBook={editBook} changeMe={changeMe} goBack={goBackApp} handleChange={handleChange} newBook={newBook} handleChip={handleChip} arrayTags={arrayTags} createBook={createBook} updateBook={updateBook} />
                    : <EditBook match={match} bookList={bookList} editBook={editBook} changeMe={changeMe} goBack={goBackApp} handleChange={handleChange} newBook={newBook} handleChip={handleChip} arrayTags={arrayTags} createBook={createBook} updateBook={updateBook} />
                }
            </div>
        )
    }

};

export default ViewOrEdit;

