import React, { Component } from 'react';

class SearchFieldcont extends Component {

    state = {
      inputvalue: ""
    }

    render() {

    return (
      <div className="col-xs-8">
        <input  id="match" name="match" type="text" placeholder="Search for name here" size="50" />
              <ul className="suggestions"></ul>
      </div>
    );
  }
}

export default SearchFieldcont;
