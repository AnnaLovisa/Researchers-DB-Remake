import React from 'react';
import Button from './Button';
import SearchMenu from './Search_menu';

const SearchBarContainer = () => {
    return (
      <div className="searchBarContainer">
        <div className="row">
          <div className="col-xs-2">
            <Button buttonLabels="Show all" />
            <Button buttonLabels="Reset search" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8">
            <SearchBar selectName="Choose Working Group" selectLabels="Working Groups" />
            <SearchBar selectName="Choose Region of Expertise" selectLabels="Region of Expertise" />
            <SearchBar selectName="Choose Field of Research" selectLabels="Field of Research" />
            <SearchBar selectName="Choose Location" selectLabels="Location" />
          </div>
        </div>
      </div>
    );
}

export default SearchBarContainer;