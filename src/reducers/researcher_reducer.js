import * as actionTypes from '../actions/actionTypes';


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

      default:
          return state;
  }
}

