import React, { Component } from 'react';
import { connect } from 'react-redux'
import { researcherItemsFilterData } from '../actions/researcher_actions';
import Button from '../components/button';
import SelectMenu from '../components/select_menu';


class SearchForm extends Component {


  handleChange = (event) => {
    this.props.filterData(event.target.value)
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
      </div>
  )}
}

function mapDispatchToProps(dispatch) {
  return {
    filterData: (value) => dispatch(researcherItemsFilterData(value))
  };
};

export default connect(null, mapDispatchToProps)(SearchForm);