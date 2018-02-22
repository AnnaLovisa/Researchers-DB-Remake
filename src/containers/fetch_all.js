import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchAll from '../actions/researcherActions';
import Button from '../components/Button';

class FetchAll extends Component {

  researchers = {
    researchers: []
  }

  handleonClick = () => {
    this.props.fetchAll();
  }
  
  render() {

    this.handleonClick = this.handleonClick.bind(this);

    return (
      <Button handleonClick={this.handleonClick} buttonLabels="Show all" />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAll }, dispatch);
}

export default connect(null, mapDispatchToProps)(FetchAll);