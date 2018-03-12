import React, { Component } from 'react';
import { connect } from 'react-redux'
import { researcherItemsFilterDataByGroup, researcherItemsFilterDataByRegion, researcherItemsFilterDataByField } from '../actions/researcher_actions';
import { workingGroupValues } from '../values/groups';
import { regionOfExpertiseValues } from '../values/regions';
import { fieldOfResearchValues } from '../values/fields';

class SearchForm extends Component {


  handleChange = (event) => {
    this.props.filterDataByGroup(event.target.value) 
  }

  handleChange2 = (event) => {
    this.props.filterDataByRegion(event.target.value)
  }

  handleChange3 = (event) => {
    this.props.filterDataByField(event.target.value)
  }


  render() {

    const groupValues = workingGroupValues.map((item, key) => {
      return <option key={key} value={item.value}>{item.name}</option>; 
    })

    const regionValues = regionOfExpertiseValues.map((item, key) => {
      return <option key={key} value={item.value}>{item.name}</option>; 
    })

    const fieldValues = fieldOfResearchValues.map((item, key) => {
      return <option key={key} value={item.value}>{item.name}</option>; 
    })

  return (

      <div>
        <select onChange={this.handleChange}>
            {groupValues}
        </select>

        <select onChange={this.handleChange2}>
            {regionValues}
        </select>

        <select onChange={this.handleChange3}>
            {fieldValues}
        </select>
      </div>

  )}
}

function mapDispatchToProps(dispatch) {
  return {
    filterDataByGroup: (value) => dispatch(researcherItemsFilterDataByGroup(value)),
    filterDataByRegion: (value) => dispatch(researcherItemsFilterDataByRegion(value)),
    filterDataByField: (value) => dispatch(researcherItemsFilterDataByField(value))
  };
};

export default connect(null, mapDispatchToProps)(SearchForm);
