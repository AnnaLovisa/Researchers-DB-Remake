import React from 'react';

const ResearcherCard = () =>  {
    return (
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="item">
          <p><strong>Name: </strong></p>
        </div>
        <div className="item">
          <p><strong>Institution: </strong></p>
        </div>
        <div className="item">
          <p><strong>Work Location: </strong></p>
        </div>
        <div className="item">
          <p><strong>Gender: </strong></p>
        </div>
        <div className="item">
          <p><strong>Year of PhD: </strong></p>
        </div>
        <div className="item">
          <p><strong>Working Group: </strong></p>
        </div>
        <div className="item">
          <p><strong>Region of expertise: </strong></p>
        </div>
        <div className="item">
          <p><strong>Field of research: </strong></p>
        </div>
        <div className="item">
          <p><a href="">Visit website</a></p>
        </div>
      </div>
    );
}

export default ResearcherCard;