import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleonClick} type={props.type} className="button-style">{props.buttonLabels}</button>
    );
}

export default Button;