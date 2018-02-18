import React from 'react';
import SearchFieldcont from '../containers/SearchFieldcont';

const SearchFieldContainer = () => {
    return (
      <div className="searchBarContainer">
        <div className="row justify-content-center">
          <div className="col-xs-3">
            <h3>Search for researcher</h3>
          </div>
        </div>
        <div className="row justify-content-center">
            <SearchFieldcont />           
        </div>
      </div>
    );
}

export default SearchFieldContainer;