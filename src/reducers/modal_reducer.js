import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';

//Initial state
const initialModalState = {
  type: null,
  props: {}
}

export function modalReducer(state = initialModalState, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        type: action.payload.type,
        props: action.payload.props
      }
    case HIDE_MODAL:
      return initialModalState;
    default:
      return state;
  }
}
