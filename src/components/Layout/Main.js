import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import List from './../Main/List';
import Filter from './../Main/Filter';

class Main extends Component {
  render() {
    const {getFilter, bookItemId, deleteAnimation, popId, toggleDeletePopup, deletePopup, deleteBook, bookList, haveBooks, colorTags} = this.props;
    return (
      <Fragment>
        <Filter getFilter={getFilter} />
        <div className="main__addbook--container">
          <Link to="/add" className="main__addbook--btn link__router">Añadir libro</Link>
        </div>
        <List bookItemId={bookItemId} deleteAnimation={deleteAnimation} popId={popId} toggleDeletePopup={toggleDeletePopup} deletePopup={deletePopup} deleteBook={deleteBook} bookList={bookList} haveBooks={haveBooks} colorTags={colorTags}/>
      </Fragment>
    );
  }
}

Main.propTypes = {
  getFilter: PropTypes.func.isRequired,
  toggleDeletePopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.bool.isRequired,
  deleteBook: PropTypes.func.isRequired,
  haveBooks: PropTypes.bool.isRequired,
  bookList: PropTypes.array.isRequired
};

export default Main;