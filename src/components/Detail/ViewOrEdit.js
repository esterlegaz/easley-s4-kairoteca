import React, { Component } from "react";
import ViewDetail from './ViewDetail';
import EditBook from './EditBook';

class ViewOrEdit extends Component {

  render() {
    const { editBook, bookList, changeMe, goBackApp, handleChange, newBook, handleChip, arrayTags, updateBook, match } = this.props;

    return (
      <div className="detail__wrapper">

        {editBook ?
          <ViewDetail match={match} bookList={bookList} changeMe={changeMe} goBackApp={goBackApp} />
          : <EditBook match={match} bookList={bookList} goBackApp={goBackApp} handleChange={handleChange} newBook={newBook} handleChip={handleChip} arrayTags={arrayTags} updateBook={updateBook} />
        }
      </div>
    )
  }

};

export default ViewOrEdit;

