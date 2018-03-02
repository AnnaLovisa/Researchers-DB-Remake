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
        {props.meta && props.meta.error && props.meta.touched && (
        <div style={{fontColor: "red", fontFamily: "sans-serif"}}>
          {props.meta.error}
        </div>
      )}
      </div>
    </div>
  );
}

export default TextField;