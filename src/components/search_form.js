import React, { Component } from 'react';
import { connect } from 'react-redux'
/* import { Field, reduxForm, formValueSelector, getFormValues } from 'redux-form'; */
import { researcherItemsFilterData } from '../actions/researcher_actions';
/*import { ROOT_URL } from '../actions/shared'; */
import Button from '../components/button';
import SelectMenu from '../components/select_menu';


class SearchForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = { selectValue: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    /* console.log(event.target.value)
    this.setState({selectValue: event.target.value}) */
    this.props.filterData(event.target.value)
  }

  render() {
    console.log(this.state.selectValue); //loggar ut värdet

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

//const onSubmit = (values, dispatch) => {
  //dispatch(  )  // your submit action //      );
//};

/* export default connect()(reduxForm({
  form: 'searchForm', 
  onSubmit, 
})(SearchForm)); */

/* class SearchFormComponent extends Component {

    handleSubmit = () => {
      console.log('hej')
    }

    submitForm = (formValues) => {
      console.log('submitting Form: ', formValues);
    }

  
    render() {

      this.submitForm = this.submitForm.bind(this);

    return (

      <form onSubmit={this.handleSubmit(this.submitForm)} className="d-flex">
        <Button type="submit" buttonLabels="Submit" /> */
        {/*<select onChange={this.onInputChange} >*/}   {/*hårdkodat. fixa sen*/}
          {/*<option value = "">Select</option>
          <option value ="1235">1235</option>
          <option value="pko">PKO</option>
          <option value="prevention">Prevention</option>
        </select>*/}
          {/* <Field
            name="workingGroup"
            label="Working Group"
            component={SelectMenu}
            options={{
              1235: '1235',
              pko: 'PKO',
              prevention: 'Prevention'
            }}
           />
          <select>   {/*hårdkodat. fixa sen*/}
            {/* <option value="">Select</option>
            <option value="1235">1235</option>
            <option value="pko">PKO</option>
            <option value="prevention">Prevention</option>
          </select>
         <Field
          name="regionOfExpertise"
          label="Region of Expertise"
          component={SelectMenu}
          options={{
            afghanistan: 'Afghanistan',
            africa: 'Africa',
            asiaPacificRegion: 'Asia-Pacific Region'
          }}
        />
        <Field
          name="fieldOfResearch"
          label="Field of Research"
          component={SelectMenu}
          options={{
            conflicts: 'Conflicts',
            ddr: 'DDR',
            gender: 'Gender'
          }}
        /> */
        /*   <button type="submit">Submit</button>
      </form>
  )};
}

const mapStateToProps = state => ({
  formValues: getFormValues('searchForm')(state),
});
 */

//Decorate with redux-form
//SearchFormComponent = reduxForm({
  //form: 'searchForm', // a unique identifier for this form

//})(SearchFormComponent);

// Decorate with connect to read form values
//const selector = formValueSelector('searchForm') // <-- same as form name

//SearchFormComponent = connect(
  //state => {
    // can select values individually
    /* const workingGroup = selector(state, 'workingGroup')
    const regionOfExpertise = selector(state, 'regionOfExpertise')
    const fieldOfResearch = selector(state, 'fieldOfResearch')
      return {
        workingGroup,
        regionOfExpertise,
        fieldOfResearch
    }
  }
 
)(SearchFormComponent)

export default SearchFormComponent; */}

