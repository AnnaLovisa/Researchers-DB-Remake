import { combineReducers } from 'redux';
import { researcherItems, researcherItemsIsLoading, researcherItemsHasErrored } from './researcher_reducer';

const rootReducer = combineReducers({
  researcherItems,
  researcherItemsIsLoading,
  researcherItemsHasErrored
});

export default rootReducer;