import React from 'react';

const ResearcherDetails = ({details}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="item">
        <p><strong>Name: </strong>{details.name}</p>
      </div>
      <div className="item">
        <p><strong>Institution: </strong>{details.institution}</p>
      </div>
    </div>
  )  
}

export default ResearcherDetails;