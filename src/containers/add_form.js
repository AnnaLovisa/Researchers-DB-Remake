import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import AddFormComponent from '../components/add_form';

export const AddForm = props => {

  const submitForm = (formValues) => {
    console.log('submitting form', formValues);
  }

  return (
    <AddFormComponent
      formValues={props.formValues}
      change={props.change}
      onSubmit={submitForm}
      handleSubmit={props.handleSubmit}
    />
  );
}

const mapStateToProps = state => ({
  formValues: getFormValues('my-form')(state)
})

const formConfiguration = {
  form: 'my-form'
}


export default connect(mapStateToProps)(
  reduxForm(formConfiguration)(AddForm)
)




/* import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class AddForm extends Component {

  

  render() { */

    /* const validate = values => {
      const errors = {}
      if(!values.name) {
        errors.name = 'Name is required';
      }
      return errors;
    } */

    /* const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="firstName">Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
} */

// Decorate the form component
/* 
AddForm = reduxForm({
  form: 'addform',*/ // a unique name for this form
  /*destroyOnUnmount: false
})(AddForm);

export default AddForm; */