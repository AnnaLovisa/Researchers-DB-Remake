import React from 'react';

export const TextField = props => {
  console.log('inputStuff: ', props.input);
  return (
    <div>
      <div>
        {props.label}
      </div>
      <div>
        <input {...props.input} placeholder={props.label} type="text" />
      </div>
    </div>
  );
}

export default TextField;