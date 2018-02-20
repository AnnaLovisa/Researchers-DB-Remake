import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    inputValue: ''
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ inputValue : event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

    render() {

    this.onInputChange = this.onInputChange.bind(this);
      

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input className="form-control"
               id="match"
               name="match"
               type="text"
               placeholder="Search for name here"
               size="50"
               value={this.state.inputValue}
               onChange={this.onInputChange}
        />
        <ul className="suggestions"></ul>
      </form>
    );
  }
}

export default SearchBar;

