import { TOGGLE_DISPLAY } from '../actions/actionTypes';

//Actioncreators for displayActions

export const toggleDisplaySuccess = (bool) => {
  return {
      type: TOGGLE_DISPLAY,
      showList: bool
  };
}

export const toggleDisplayList = () => {
  return (dispatch) => {
      dispatch(toggleDisplaySuccess(true));   
    }
  }

  export const toggleDisplayGrid = () => {
    return (dispatch) => {
      dispatch(toggleDisplaySuccess(false));
    }
  }




