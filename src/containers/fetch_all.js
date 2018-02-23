import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as researcherActions from '../actions/researcherActions';
import Button from '../components/Button';

class FetchAll extends Component {

  researchers = {
    researchers: []
  }

  handleonClick = () => {
    researcherActions.fetchAll();
  }
  
  render() {
    this.handleonClick = this.handleonClick.bind(this);
    return (
      <Button handleonClick={this.handleonClick} buttonLabels="Show all" />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ researcherActions }, dispatch);
}

export default connect(null, mapDispatchToProps)(FetchAll);