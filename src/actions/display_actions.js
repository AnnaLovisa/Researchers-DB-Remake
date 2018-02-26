import { TOGGLE_DISPLAY } from '../actions/actionTypes';

//Actioncreators for researcherActions

export function toggleDisplaySuccess(bool) {
  return {
      type: TOGGLE_DISPLAY,
      showList: bool
  };
}

export function toggleDisplay() {
  return (dispatch) => {
      dispatch(toggleDisplaySuccess(true));   
    }
  }

