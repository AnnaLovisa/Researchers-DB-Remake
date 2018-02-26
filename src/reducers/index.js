import { combineReducers } from 'redux';
import { researcherItems, researcherItemsIsLoading, researcherItemsHasErrored } from './researcher_reducer';
import { toggleDisplay } from './display_reducer';

//TOGGLEDISPLAY ÄR FUNKTIONEN I DISPLAY_REDUCER JAG ANVÄNDER I KOMPONENTEN JAG VILL RENDERA UT DET NYA STATET I
const rootReducer = combineReducers({
  researcherItems,
  researcherItemsIsLoading,
  researcherItemsHasErrored,
  toggleDisplay      
});

export default rootReducer;