import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="filter__wrapper">
        <label htmlFor="filter">
          <input id="filter" type="text" placeholder="Buscar..." onKeyUp={this.props.getFilter}/>
        </label>
      </div>
    );
  }
}

export default Filter;