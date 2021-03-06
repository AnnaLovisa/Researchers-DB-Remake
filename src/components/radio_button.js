import * as React from 'react';
import { Field } from 'redux-form';

export const RadioButton = props => {
  if (props && props.input && props.options) {
    const renderRadioButtons = (key, index) => {
      return (
        <label className="sans-serif w-100" key={`${index}`} htmlFor={`${props.input.name}-${index}`}>
          <Field
            id={`${props.input.name}`}
            component="input"
            name={props.input.name}
            type="radio"
            value={key}
          />
          {props.options[key]}
        </label>
      )
    };
    return (
      <div>
        <div>
          {props.label}
        </div>
        <div>
          {props.options &&
            Object.keys(props.options).map(renderRadioButtons)}
        </div>
      </div>
    );
  }
  return <div></div>
}

export default RadioButton;