import React from 'react';

export const Checkbox = props => {
  return (
    <div>
      <div className="sans-serif">{props.label}</div>
      <input
        {...props.input}
        type="checkbox"
        checked={props.input.value}
      />
    </div>
  );
}

export default Checkbox;