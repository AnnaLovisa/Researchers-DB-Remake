import { RESEARCHER_ITEMS_HAS_ERRORED, RESEARCHER_ITEMS_IS_LOADING, RESEARCHER_ITEMS_FETCH_DATA_SUCCESS, TEST } from '../actions/actionTypes';
import { RESEARCHER_ITEMS_ARE_EMPTY } from '../actions/actionTypes';
import { RESEARCHER_ITEMS_FILTER_BY_GROUP, RESEARCHER_ITEMS_ARE_FILTERED } from '../actions/actionTypes';

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
 export function filterItems(state = [], action) {
    switch (action.type) {
    case RESEARCHER_ITEMS_FILTER_BY_GROUP:
        console.log(action.filteredItems);
        return action.filteredItems;
    default:
        return state;
    }
    
}

export function researcherItemsAreFiltered(state = true, action) {
    switch(action.type) {
        case RESEARCHER_ITEMS_ARE_FILTERED:
            return action.isFiltered;
        default:
            return state;
    }
}



