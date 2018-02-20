
const ROOT_URL = ''

export const FETCH_RESEARCHER = 'FETCH_RESEARCHER';

export function fetchResearchers() {

  return {
    type: 'FETCH_RESEARCHER'
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