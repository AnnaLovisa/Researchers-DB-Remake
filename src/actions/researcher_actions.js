import axios from 'axios';
/* import { searchUrl, fetchAll } from './shared'; */
import * as actionTypes from './actionTypes';


//Actioncreators for researcherActions

export function researcherItemsHasErrored(bool) {
  return {
      type: 'RESEARCHER_ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}

export function researcherItemsIsLoading(bool) {
  return {
      type: 'RESEARCHER_ITEMS_IS_LOADING',
      isLoading: bool
  };
}

export function researcherItemsFetchDataSuccess(researcherItems) {
  return {
      type: 'RESEARCHER_ITEMS_FETCH_DATA_SUCCESS',
      researcherItems
  };
}

export function researcherItemsFetchData(url) {
  return (dispatch) => {
      dispatch(researcherItemsIsLoading(true));

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(researcherItemsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((researcherItems) => dispatch(researcherItemsFetchDataSuccess(researcherItems)))
          .catch(() => dispatch(researcherItemsHasErrored(true)));
  };

}
