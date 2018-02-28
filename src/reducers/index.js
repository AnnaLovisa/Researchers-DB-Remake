import { combineReducers } from 'redux';
import { researcherItems, researcherItemsIsLoading, researcherItemsHasErrored } from './researcher_reducer';
import { toggleDisplay } from './display_reducer';


const rootReducer = combineReducers({
  researcherItems,
  researcherItemsIsLoading,
  researcherItemsHasErrored,
  toggleDisplay     
});

export default rootReducer;