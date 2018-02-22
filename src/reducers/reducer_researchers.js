import * as actionTypes from '../actions/actionTypes';

const initialState = { 
  researchers: []  
};

export default function (state = initialState.researchers, action) {
  //The action comes from our promise in the payload in our actioncreator
  //So the reducer only wants the data, not a promise
  switch (action.type) {
  case actionTypes.FETCH_RESEARCHER:  
    console.log('Action received', action);  
    return [ action.payload.data, ...state ]
    /* return [ action.payload.data, ...state ] //It takes all the entries from our state-array and put it in our new array
  case actionTypes.FETCH_ALL_RESEARCHERS:
    console.log('Action received', action);
    return [ action.payload.data, ...state ] */
  }    
  return state;

}
