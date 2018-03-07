import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { researcherItems, researcherItemsIsLoading, researcherItemsHasErrored, filterItems, researcherItemsAreFiltered } from './researcher_reducer';
import { toggleDisplay } from './display_reducer';


const rootReducer = combineReducers({
  researcherItems,
  researcherItemsIsLoading,
  researcherItemsHasErrored,
  toggleDisplay,
  filterItems,
  researcherItemsAreFiltered
});

export default rootReducer;