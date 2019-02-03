import React, { Component } from "react"

class List extends Component {

  render() {
    return (
      <div className="list__wrapper">
        <ul className="list__container">

          {this.props.bookList.map(item => {
            return (
              <li key={item.id} className="list__book">
                <h2 className="book__title">{item.title}</h2>
                <h3 className="book__author">{item.author}</h3>
                <ul className="book__tags--list">
                  {item.tags.map((tag,index) => {
                    return (
                      <li className="book__tags--item" key={index}>{tag}</li>
                    )
                  })}
                </ul>
              </li>
            )
          })}

        </ul>
      </div>
    )
  }
}

export default List;