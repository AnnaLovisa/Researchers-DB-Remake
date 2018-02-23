import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { researcherItemsFetchData } from '../actions/researcher_actions';
import Button from '../components/Button';

class FetchAll extends Component {

  researchers = {
    researchers: []
  }

  handleonClick = () => {
    this.props
  }
  
  render() {
    this.handleonClick = this.handleonClick.bind(this);
    return (
      <Button handleonClick={this.handleonClick} buttonLabels="Show all" />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ researcherItemsFetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(FetchAll);