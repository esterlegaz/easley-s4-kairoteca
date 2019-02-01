import React, {Component, Fragment} from "react";

const books = {
    ISBN: 12243544775,
    title: 'Prueba',
    author: 'IKL',
    description: 'Esto es una prueba',
    tags: ["programming", "react", "javascript"],
    year: 2018,
    status: 'pending',
    type: 'digital'
}

class Tags extends Component {
  render() {
    return (
        <Fragment>
            <ul className="tag__list">
              {books.tags.map(tag => {
                  return(
                      <li className="tag__item">
                          {tag}
                      </li>
                  )
              })}  
            </ul>
        </Fragment>
    );
  }
}

export default Tags;