import { RESEARCHER_ITEMS_HAS_ERRORED, RESEARCHER_ITEMS_IS_LOADING, RESEARCHER_ITEMS_FETCH_DATA_SUCCESS } from '../actions/actionTypes';
import { RESEARCHER_ITEMS_ARE_EMPTY, FILTER_ITEMS_ARE_EMPTY } from '../actions/actionTypes';
import { RESEARCHER_ITEMS_FILTER_BY_GROUP, RESEARCHER_ITEMS_FILTER_BY_REGION, RESEARCHER_ITEMS_FILTER_BY_FIELD, RESEARCHER_ITEMS_ARE_FILTERED } from '../actions/actionTypes';
import { FETCH_NAMES } from '../actions/actionTypes';

export function researcherItemsHasErrored(state = false, action) {
  switch (action.type) {
      case RESEARCHER_ITEMS_HAS_ERRORED:
          return action.hasErrored;
      default:
          return state;
  }
}

export function researcherItemsIsLoading(state = false, action) {
  switch (action.type) {
      case RESEARCHER_ITEMS_IS_LOADING:
          return action.isLoading;
      default:
          return state;
  }
}

export function researcherItems(state = [], action) {
  switch (action.type) {
      case RESEARCHER_ITEMS_FETCH_DATA_SUCCESS:
          return action.researcherItems;
      case RESEARCHER_ITEMS_ARE_EMPTY:
          return action.researcherItems;     
      default:
          return state;
  }
}

export function researcherNames(state = [], action) {
    switch (action.type) {
        case FETCH_NAMES:
            return action.names;
        default:
            return state;
    }
}

 export function filterItems(state = [], action) { //Det är detta namn jag skickar med som mitt state i combined reducers
    switch (action.type) {
    case RESEARCHER_ITEMS_FILTER_BY_GROUP:
        return action.filteredItemsByGroup; 
    case RESEARCHER_ITEMS_FILTER_BY_REGION:
        return action.filteredItemsByRegion;
    case RESEARCHER_ITEMS_FILTER_BY_FIELD:
        return action.filteredItemsByField;
    case FILTER_ITEMS_ARE_EMPTY:
        return action.filteredItemsByGroup;
    default:
        return state;
    }
    
}

export function researcherItemsAreFiltered(state = false, action) { //Det är detta namn jag skickar med som mitt state i combined reducers
    switch(action.type) {
        case RESEARCHER_ITEMS_ARE_FILTERED:
            return action.isFiltered; 
        default:
            return state;
    }
}



