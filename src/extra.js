
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