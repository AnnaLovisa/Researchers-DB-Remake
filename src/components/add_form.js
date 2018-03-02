import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { required } from '../components/form_validators';

import Button from '../components/button';
import TextField from '../components/text_field';
import SelectMenu from '../components/select_menu';
import RadioButton from '../components/radio_button';
import Checkbox from '../components/checkbox';


export const AddFormComponent = ({ handleSubmit, onSubmit, formValues }) => {

  //Function that adds all years to be placed in a select-menu (Eric)
  let countYear = () => {
    //Create a loop that creates a dropdown menu list of all years
    let start = 1980;
    let end = new Date().getFullYear();
    let options = "";
    let obj = {
      
    }
    for(let year = start; year <= end; year++){
      options += year;
    }            

  };


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
          validate={required}
        />
        <Field
          name="institution"
          label="Institution"
          component={TextField}
          validate={required}
        />
        <Field
          name="gender"
          label="Gender"
          component={RadioButton}
          validate={required}
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
            1980: '1980',
            1981: '1981',
            1982: '1982'
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
          validate={required}
        />
        <Field
            name="moreWorkingGroups"
            label="How many more Working Groups?"
            component={RadioButton}
            options={{
              1: '1',
              2: '2',
              3: '3'
          }}
        />
        {formValues && formValues.moreWorkingGroups === 1 ? (
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
        ) : ''}
        <Field
          name="regionOfExpertise"
          label="Region of Expertise"
          component={SelectMenu}
          options={{
            afghanistan: 'Afghanistan',
            africa: 'Africa',
            asiaPacificRegion: 'Asia-Pacific Region'
          }}
          validate={required}
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
          validate={required}
        />
      </form>
    </div>
  );
}

export default AddFormComponent;