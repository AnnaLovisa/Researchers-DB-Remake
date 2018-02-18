import React from 'react';

const SearchBar = (props) => {
    return (
          <select name={props.selectName}>
            <option default value>{props.selectLabels}</option>
          </select>
    );
}

export default SearchBar;