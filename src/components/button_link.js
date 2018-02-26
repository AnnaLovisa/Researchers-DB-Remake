import React from 'react';

const ButtonLink = (props) => {

    return (
        <button type="button" onClick={props.onClick} className="btn btn-link">{props.buttonLabels}<i className={props.displayIcon}></i></button>
    );

};

export default ButtonLink;
