import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleonClick} type="button" className="btn">{props.buttonLabels}</button>
    );
}

export default Button;