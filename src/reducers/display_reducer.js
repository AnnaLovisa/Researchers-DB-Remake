import { TOGGLE_DISPLAY } from '../actions/actionTypes';

export function toggleDisplay(state = false, action) {
  switch (action.type) {
      case TOGGLE_DISPLAY:
          return action.showList;
      default:
          return state;
  }
}
