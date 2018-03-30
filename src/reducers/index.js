import { combineReducers } from 'redux';
import { researcherItems, researcherItemsIsLoading, researcherItemsHasErrored } from './researcher_reducer';
import { filterItems, researcherItemsAreFiltered } from './researcher_reducer';
import { toggleDisplay } from './display_reducer';
import { modalReducer } from './modal_reducer';


const rootReducer = combineReducers({
  researcherItems,
  researcherItemsIsLoading,
  researcherItemsHasErrored,
  toggleDisplay,
  filterItems,
  researcherItemsAreFiltered,
  modalReducer
});

export default rootReducer;