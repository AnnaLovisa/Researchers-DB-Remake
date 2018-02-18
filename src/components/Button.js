import React from 'react';

const Button = (props) => {
    return (
            <button type="button" className="btn">{props.buttonLabels}</button>
    );
}

export default Button;