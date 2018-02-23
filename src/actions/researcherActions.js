import axios from 'axios';
/* import { searchUrl, fetchAll } from './shared'; */
import * as actionTypes from './actionTypes';


const ROOT_URL = 'http://localhost:3000/researchers';

//Actioncreators for researcherActions

export function researcherItemsHasErrored(bool) {
  return {
      type: 'RESEARCHER_ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}

export function researcherItemsIsLoading(bool) {
  return {
      type: 'RESEARCHER_ITEMS_IS_LOADING',
      isLoading: bool
  };
}

export function researcherItemsFetchDataSuccess(resarcherItems) {
  return {
      type: 'RESEARCHER_ITEMS_FETCH_DATA_SUCCESS',
      researcherItems
  };
}

export function researcherItemsFetchData(ROOT_URL) {
  return (dispatch) => {
      dispatch(researcherItemsIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(researcherItemsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((researcherItems) => dispatch(researcherItemsFetchDataSuccess(researcherItems)))
          .catch(() => dispatch(researcherItemsHasErrored(true)));
  };


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
} */}
