import React from 'react';

const SearchMenu = (props) => {
    return (
          <select name={props.selectName}>
            <option default value>{props.selectLabels}</option>
          </select>
    );
}

export default SearchMenu;