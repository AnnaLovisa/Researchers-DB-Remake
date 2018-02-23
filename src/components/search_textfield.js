import React from 'react';
import SearchBar from '../containers/search_textfield';

const SearchBarComponent = () => {
    return (
      <section className="row justify-content-center">
          <div className="col-xs-8">
            <h3>Search for researcher</h3>
            <SearchBar />
          </div>
      </section>
    );
}

export default SearchBarComponent;