import React from 'react';

const ResearcherDetails = ({details}) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-2 researcher-card-style shadow-style m-4">
      <div className="item">
        <p><strong>Name: </strong> {details.name}</p>
      </div>
      <div className="item">
        <p><strong>Institution: </strong> {details.institution}</p>
      </div>
      <p><strong>Work Location: </strong> {details.workLocation}</p>
      <div className='item'>
        <p><strong>Gender: </strong> {details.gender}</p>
      </div>
      <div className='item'>
        <p><strong>Year of PhD: </strong> {details.yearPhD}</p>
      </div> 
      <div className='item'>                      
        <p><strong>Working Group: </strong> {details.workingGroup}</p>
      </div>
      <div className='item'>
        <p><strong>Region of expertise: </strong> {details.regionOfExpertise}</p>
      </div>
      <div className='item'>
        <p><strong>Field of research: </strong> {details.fieldOfResearch}</p>
      </div>
      <div className='item'>
        <p><a href="${details.website}">Visit website</a></p>
      </div>
    </div>
  )  
}

export default ResearcherDetails;