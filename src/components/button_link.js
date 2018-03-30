import React from 'react';

const ButtonLink = (props) => {

    return (
        <button type="link" className={props.className} onClick={props.onClick}>{props.buttonLabels}<i className={props.displayIcon}></i></button>
    );

};

export default ButtonLink;
