import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, formValueSelector } from 'redux-form';

import SearchFormComponent from '../components/search_form';

export const SearchFormContainer = props => {



  return (
    //CHILD OF THIS IN CONTAINER   onSubmit={submitForm}  
    
    <SearchFormComponent
      formValues={props.formValues}
      change={props.change}
      mySubmit={submitForm}
      handleSubmit={props.handleSubmit}
      />  
  );
}

const mapStateToProps = state => ({
  formValues: getFormValues('searchForm')(state),
});

/* const formConfiguration = {
  form: 'searchForm'
}

export default connect(mapStateToProps)(
  reduxForm(formConfiguration)(SearchFormContainer)
); */


