import { TOGGLE_DISPLAY } from '../actions/actionTypes';

//Actioncreators for researcherActions

export function toggleDisplaySuccess(bool) {
  return {
      type: TOGGLE_DISPLAY,
      showList: bool
  };
}
//FUNKTIONEN SOM JAG FÖRSÖKER DISPATCHA I NAVBAR OCH SOM I SIN TUR KALLAR PÅ TOGGLEDISPLAYSUCCESS SOM ÄNDRAR STATET TILL TRUE
export function toggleDisplay() {
  return (dispatch) => {
      dispatch(toggleDisplaySuccess(true));   
    }
  }

