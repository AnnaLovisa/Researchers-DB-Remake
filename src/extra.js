
export default function researchers (state = [], action) {
  //The action comes from our promise in the payload in our actioncreator
  //So the reducer only wants the data, not a promise
  switch (action.type) {
  case actionTypes.FETCH_RESEARCHER:  
    console.log('Action received', action); 
    return [ action.payload.data, ...state ] //It takes all the entries from our state-array and put it in our new array
  default:    
    return state;
  }

}


export default function (state = [], action) {
  //The action comes from our promise in the payload in our actioncreator
  //So the reducer only wants the data, not a promise
  switch (action.type) {
  case actionTypes.FETCH_ALL_RESEARCHERS:
    console.log('Action received', action);
    return [ action.payload.data, ...state ]
  default:    
    return state;
  }

}



/* export function fetchByName(name) {
  const url = `${ROOT_URL}?name=${name}`;
  const names = axios.get(url); */ //Request is our promise
  //The purpose of Redux-Promise Middleware: Redux stops the action and dispatches a new action of the same type
  //but with the payload of the resolved request. This is to be sent into the reducer. So it unwraps 
  //the promise for us.
  /* return {
    type: 'FETCH_RESEARCHER',
    payload: names 
  }
} */

/* export function fetchAll() {
  
    const all = axios.get(ROOT_URL);
    console.log('request', all);
  
    return {
      type: 'FETCH_ALL_RESEARCHERS',
      payload: all
    }
  
  } */

/* export function selectResearcher(researcher) { */
  //selectBook is an ActionCreator, it needs to return an action, an object with a type property.
  //The type of action is that a user selects a book, thereof the name of the function.
  //payload is more information about the action that is taken.
  /* return  {
    type: 'RESEARCHER_SELECTED',
    payload: researcher
  };
} */

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