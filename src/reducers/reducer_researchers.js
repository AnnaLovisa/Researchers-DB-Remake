import { FETCH_RESEARCHER } from '../actions/index';

export default function (state = [], action) {
  //The action comes from our promise in the payload in our actioncreator
  //So the reducer only wants the data, not a promise
  switch (action.type) {
  case FETCH_RESEARCHER:  
    console.log('Action received', action);   
    return [ action.payload.data, ...state ] //It takes all the entries from our state-array and put it in our new array

  }    
  return state;

}