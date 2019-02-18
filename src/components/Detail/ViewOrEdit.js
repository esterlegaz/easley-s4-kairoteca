import React, { Component } from "react";
import ViewDetail from './ViewDetail';
import EditBook from './EditBook';
import PropTypes from "prop-types";

class ViewOrEdit extends Component {

  render() {
    const { editBook, bookList, changeMe, goBackApp, handleChange, newBook, handleChip, arrayTags, updateBook, colorTags, match } = this.props;

    return (
      <div className="detail__wrapper">

        {editBook ?
          <ViewDetail match={match} bookList={bookList} changeMe={changeMe} goBackApp={goBackApp} colorTags={colorTags} />
          : <EditBook match={match} bookList={bookList} goBackApp={goBackApp} handleChange={handleChange} newBook={newBook} handleChip={handleChip} arrayTags={arrayTags} updateBook={updateBook} />
        }
      </div>
    )
  }
};

ViewOrEdit.propTypes = {
  editBook: PropTypes.bool.isRequired,
  bookList: PropTypes.array.isRequired,
  colorTags: PropTypes.func.isRequired,
  goBackApp: PropTypes.func.isRequired,
  changeMe: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newBook: PropTypes.object.isRequired,
  handleChip: PropTypes.func.isRequired,
  arrayTags: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default ViewOrEdit;

