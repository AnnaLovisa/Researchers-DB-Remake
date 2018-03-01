import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import TextField from '../components/text_field';


export const AddFormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div>
      <h1>My Very own Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="name"
          label="Name"
          component={TextField}
        />
        {/* <button type="submit">Submit</button> */}
        <Button type="submit" buttonLabels="Submit" />
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
}

export default AddFormComponent;