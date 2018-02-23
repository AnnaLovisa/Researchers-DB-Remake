import React from 'react';
import FetchAll from '../containers/fetch_all';
/* import SearchMenu from './Search_menu'; */

const PrimarySearch = () => {

    return (
      <div className="row justify-content-center mt-2">
        <div className="col-xs-2">
          <FetchAll />
        </div>
      </div>
    );
}

export default PrimarySearch;


{
  
  /* <div className="searchBarContainer">
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
</div> */}