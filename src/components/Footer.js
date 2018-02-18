import React from 'react';

const Footer = () =>  {
    return (
      <div className="row">
        <div className="col-sm-2 offset-sm-10 pr-4">
            <img src={`../img/fba_logo_pos_rgb.png`} className="img-fluid" alt={`FBA logotype`} />
        </div>
        <div className="col-sm-2">
            <p>Anna Gribbe - February 2018</p>
        </div>
      </div>
    );
}

export default Footer;

