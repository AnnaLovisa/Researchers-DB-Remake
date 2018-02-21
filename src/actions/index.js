import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/researchers';

//Constants
export const FETCH_RESEARCHER = 'FETCH_RESEARCHER';


//Actioncreators
export default function fetchResearchers(name) {

  const url = `${ROOT_URL}?name=${name}`;
  const request = axios.get(url); //Request is our promise
  console.log('request', request);
  //The purpose of Redux-Promise Middleware: Redux stops the action and dispatches a new action of the same type
  //but with the payload of the resolved request. This is to be sent into the reducer. So it unwraps 
  //the promise for us.
  return {
    type: 'FETCH_RESEARCHER',
    payload: request 
  }
}


/* export function selectResearcher(researcher) { */
  //selectBook is an ActionCreator, it needs to return an action, an object with a type property.
  //The type of action is that a user selects a book, thereof the name of the function.
  //payload is more information about the action that is taken.
  /* return  {
    type: 'RESEARCHER_SELECTED',
    payload: researcher
  };
} */
/* 
export function itemsFetchData(url) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(itemsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(itemsFetchDataSuccess(items)))
          .catch(() => dispatch(itemsHasErrored(true)));
  };
}*/