import React from 'react';

export const TextField = ({ label, input }) => {
  console.log('inputStuff: ', input);
  return (
    <div>
      <div>
        {label}
      </div>
      <div>
        <input {...input} placeholder={label} type="text" />
      </div>
    </div>
  );
}

export default TextField;