import { RESEARCHER_ITEMS_HAS_ERRORED, RESEARCHER_ITEMS_IS_LOADING, RESEARCHER_ITEMS_FETCH_DATA_SUCCESS, TEST } from './actionTypes';
import { RESEARCHER_ITEMS_ARE_EMPTY } from './actionTypes';
import { RESEARCHER_ITEMS_FILTER_BY_GROUP, RESEARCHER_ITEMS_ARE_FILTERED } from './actionTypes';

//Actioncreators for researcherActions

export function researcherItemsHasErrored(bool) {
  return {
      type: RESEARCHER_ITEMS_HAS_ERRORED,
      hasErrored: bool
  };
}

export function researcherItemsIsLoading(bool) {
  return {
      type: RESEARCHER_ITEMS_IS_LOADING,
      isLoading: bool
  };
}

export function researcherItemsFetchDataSuccess(researcherItems) {
  return {
      type: RESEARCHER_ITEMS_FETCH_DATA_SUCCESS,
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

export function emptyItems(researcherItems) {
    return {
        type: RESEARCHER_ITEMS_ARE_EMPTY,
        researcherItems
    }
}

export function  researcherItemsEmptyData() {
    return (dispatch) => {
        dispatch(emptyItems([]));
    }
}

export function researcherItemsFilterData(selectedGroup) {
    return (dispatch) => {
        dispatch(filterItemsByGroup(selectedGroup));
    }
}

export function filterItemsByGroup(group) {
    return (dispatch, getState) => {
        const state = getState().researcherItems; //det är researcherItems mitt hämtade state ligger i
        const filteredItems = state.map(item => {
            let match = false;
            item.workingGroup.forEach(value => {
                if (value.toLowerCase() === group.toLowerCase()) {
                    match = true;
                }
            })
            return match ? item : false
             
        }).filter(item => item !== false)
        console.log(filteredItems);

        dispatch({
            type: RESEARCHER_ITEMS_FILTER_BY_GROUP,
            filteredItems: filteredItems    //På vänstra sidan är namnet jag skickar till reducern. På högra sidan är variabeln jag samlar allt i
        })
    }
}

/* export function filterItemsByRegion(regionOfExpertise) {
    return {
        type: RESEARCHER_ITEMS_FILTER_BY_REGION,
        regionOfExpertise
    }
}

export function filterItemsByField(fieldOfResearch) {
    return {
        type: RESEARCHER_ITEMS_FILTER_BY_FIELD,
        fieldOfResearch
    }
} */

export function researcherItemsAreFiltered(bool) {
    return {
        type: RESEARCHER_ITEMS_ARE_FILTERED,
        isFiltered: bool
    }
}




