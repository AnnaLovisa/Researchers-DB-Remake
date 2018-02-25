import React from 'react';

const ButtonLink = (props) => {
    return (
        <button onClick={props.handleonClick} className="btn btn-link">{props.buttonLabels}<i className={props.displayIcon}></i></button>
    );
}

export default ButtonLink;