import { RESEARCHER_ITEMS_HAS_ERRORED, RESEARCHER_ITEMS_IS_LOADING, RESEARCHER_ITEMS_FETCH_DATA_SUCCESS } from './actionTypes';
import { RESEARCHER_ITEMS_ARE_EMPTY, FILTER_ITEMS_ARE_EMPTY } from './actionTypes';
import { RESEARCHER_ITEMS_FILTER_BY_GROUP, RESEARCHER_ITEMS_FILTER_BY_REGION, RESEARCHER_ITEMS_FILTER_BY_FIELD, RESEARCHER_ITEMS_ARE_FILTERED } from './actionTypes';

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
      dispatch(researcherItemsAreFiltered(false));
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

export function emptyFilteredGroupItems(filteredItemsByGroup) {
    return {
        type: FILTER_ITEMS_ARE_EMPTY,
        filteredItemsByGroup
    }
}

export function emptyFilteredRegionItems(filteredItemsByRegion) {
    return {
        type: FILTER_ITEMS_ARE_EMPTY,
        filteredItemsByRegion
    }
}

export function emptyFilteredFieldItems(filteredItemsByField) {
    return {
        type: FILTER_ITEMS_ARE_EMPTY,
        filteredItemsByField
    }
}

export function  researcherItemsEmptyData() {
    return (dispatch) => {
        dispatch(emptyItems([]));
    }
}

export function filterItemsEmptyData() {
    return (dispatch) => {
        dispatch(emptyFilteredGroupItems([]), emptyFilteredRegionItems([]), emptyFilteredFieldItems([]))
    }
}


export function researcherItemsAreFiltered(bool) {
    return {
        type: RESEARCHER_ITEMS_ARE_FILTERED,
        isFiltered: bool
    }
}

export function researcherItemsFilterDataByGroup(workingGroup) {
    return (dispatch) => {
        dispatch(filterItemsByGroup(workingGroup));
        dispatch(researcherItemsAreFiltered(true));
    }
}

export function researcherItemsFilterDataByRegion(regionOfExpertise) {
    return (dispatch) => {
        dispatch(filterItemsByRegion(regionOfExpertise));
        dispatch(researcherItemsAreFiltered(true));
    }
}

export function researcherItemsFilterDataByField(fieldOfResearch) {
    return (dispatch) => {
        dispatch(filterItemsByField(fieldOfResearch));
        dispatch(researcherItemsAreFiltered(true));
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
            filteredItemsByGroup: filteredItems    //På vänstra sidan är namnet jag skickar till reducern. På högra sidan är variabeln jag samlar allt i
        })
    }
}

export function filterItemsByRegion(region) {
    return (dispatch, getState) => {
        const state = getState().researcherItems; //det är researcherItems mitt hämtade state ligger i
        const filteredItems = state.map(item => {
            let match = false;
                item.regionOfExpertise.forEach(value => {
                   if (value.toLowerCase() === region.toLowerCase()) {
                        match = true;
                    }
                })
                return match ? item : false
        }).filter(item => item !== false)
        console.log(filteredItems);

        dispatch({
            type: RESEARCHER_ITEMS_FILTER_BY_REGION,
            filteredItemsByRegion: filteredItems    //På vänstra sidan är namnet jag skickar till reducern. På högra sidan är variabeln jag samlar allt i
        })
    }
}

export function filterItemsByField(field) {
    return (dispatch, getState) => {
        const state = getState().researcherItems; //det är researcherItems mitt hämtade state ligger i
        let match = false;
        const filteredItems = state.filter(item => {
            if(item.fieldOfResearch.toLowerCase() === field.toLowerCase()) {               
                return item
                }
            })
        dispatch({
            type: RESEARCHER_ITEMS_FILTER_BY_FIELD,
            filteredItemsByField: filteredItems    //På vänstra sidan är namnet jag skickar till reducern. På högra sidan är variabeln jag samlar allt i
        })
    }
}




