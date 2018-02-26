import { RESEARCHER_ITEMS_HAS_ERRORED, RESEARCHER_ITEMS_IS_LOADING, RESEARCHER_ITEMS_FETCH_DATA_SUCCESS } from '../actions/actionTypes';
import { RESEARCHER_ITEMS_ARE_EMPTY } from '../actions/actionTypes';

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


