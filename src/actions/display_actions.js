import { TOGGLE_DISPLAY } from '../actions/actionTypes';

//Actioncreators for researcherActions

export function toggleDisplaySuccess(bool) {
  return {
      type: TOGGLE_DISPLAY,
      showList: bool
  };
}

export function toggleDisplayList() {
  return (dispatch) => {
      dispatch(toggleDisplaySuccess(true));   
    }
  }

  export function toggleDisplayGrid() {
    return (dispatch) => {
      dispatch(toggleDisplaySuccess(false));
    }
  }

