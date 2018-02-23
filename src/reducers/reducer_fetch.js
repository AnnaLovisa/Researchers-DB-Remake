import * as actionTypes from '../actions/actionTypes';


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