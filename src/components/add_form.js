import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import TextField from '../components/text_field';
import SelectMenu from '../components/select_menu';
import RadioButton from '../components/radio_button';


export const AddFormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="d-flex flex-column justify-content-center items-center">
      <h4>Add new researcher</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <button type="submit">Submit</button> */}
        <Button type="submit" buttonLabels="Submit" />
        <Link to="/">Cancel</Link>
        <Field
          name="name"
          label="Name"
          component={TextField}
        />
        <Field
          name="institution"
          label="Institution"
          component={TextField}
        />
        <Field
          name="gender"
          label="Gender"
          component={RadioButton}
          options={{
            male: 'Male',
            female: 'Female'
          }}
        />
        <Field
          name="year"
          label="Year of PhD"
          component={SelectMenu}
          options={{
            1325: '1325',
            pko: 'PKO',
            prevention: 'Prevention'
          }}
        />
        <Field
          name="website"
          label="Add website address: "
          component={TextField}
        />
        <Field
          name="workingGroup"
          label="Working Group"
          component={SelectMenu}
          options={{
            1325: '1325',
            pko: 'PKO',
            prevention: 'Prevention'
          }}
        />
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
        />
      </form>
    </div>
  );
}

export default AddFormComponent;