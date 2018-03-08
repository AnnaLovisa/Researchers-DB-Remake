import React, { Component } from 'react';
import { connect } from 'react-redux';
import { researcherItemsFetchChar } from '../actions/researcher_actions';

class SearchTextfield extends Component {

  onInputChange = (event) => {
    this.props.fetchChar(event.target.value)
  }

    render() {

    this.onInputChange = this.onInputChange.bind(this);

    return (

        <input type="text"
               placeholder="Search for name here"
               size="50"
               value={this.state.inputValue}
               onChange={this.onInputChange}
        />

    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChar: (value) => (value) => dispatch(researcherItemsFetchChar(value)),
  }
}

export default connect(null, mapDispatchToProps)(SearchTextfield);


