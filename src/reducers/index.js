import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { researcherItems, researcherItemsIsLoading, researcherItemsHasErrored, filterItems } from './researcher_reducer';
import { toggleDisplay } from './display_reducer';


const rootReducer = combineReducers({
  researcherItems,
  researcherItemsIsLoading,
  researcherItemsHasErrored,
  toggleDisplay,
  filterItems
  /* form: formReducer  */   //mounted at 'form'
});

export default rootReducer;