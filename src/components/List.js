import React, { Component } from "react"
import api from '../api';

class List extends Component {
    
  render(){
    api.books().then(console.log);
    return (
      <div>
      HOLA
      </div>
    )
  }
}

export default List;