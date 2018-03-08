import React, { Component } from 'react';
import { connect } from 'react-redux'
import { researcherItemsFilterDataByGroup, researcherItemsFilterDataByRegion, researcherItemsFilterDataByField } from '../actions/researcher_actions';

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


  return (

      <div>
        <select onChange={this.handleChange}>   {/*hårdkodat. fixa sen*/}
            <option value="">Select</option>
            <option value="1235">1235</option>
            <option value="PKO">PKO</option>
            <option value="Prevention">Prevention</option>
        </select>

        <select onChange={this.handleChange2}>   {/*hårdkodat. fixa sen*/}
            <option value="">Select</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Africa">Africa</option>
            <option value="Niger">Niger</option>
            <option value="Asia">Asia</option>
        </select>
                

        <select onChange={this.handleChange3}>   {/*hårdkodat. fixa sen*/}
            <option value="">Select</option>
            <option value="Conflicts">Conflicts</option>
            <option value="DDR">DDR</option>
            <option value="Gender">Gender</option>
            <option value="Governance%20%26%20Statebuilding">Governance & Statebuilding</option>
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