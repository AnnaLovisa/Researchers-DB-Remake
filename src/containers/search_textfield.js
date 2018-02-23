import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchByName } from '../actions/researcher_actions';

class SearchTextfield extends Component {

  state = {
    inputValue: ''
  }

  onInputChange = (event) => {
    this.setState({ inputValue : event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.fetchByName(this.state.inputValue); //denna har jag inte inkluderat i actions och reducers än
    this.setState({ inputValue: '' });
  }

    render() {

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

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
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
        {/* <ul className="suggestions"></ul> */}
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchByName }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchTextfield);

