import React from 'react';


const ResearcherDetails = ({details, displayClass, displayItem, open, listForm, detailsButton, itemId}) => {

console.log(details.id)
console.log(itemId)


    let listStyle;
    if(listForm && details.id === itemId){
        if(open){
            listStyle = {maxHeight: "400px"};
          } 
        else {
          listStyle = {maxHeight: "0px"};
        }

      }
    else {
      listStyle = {};
    }

    

  return (
          <div className={displayClass} >
              <div className={displayItem}>
                <p><strong>Name: </strong> {details.name}</p>
              </div>
{listForm && <div>
                <p>{detailsButton}</p>
              </div>}
 <div className='slide' style={listStyle} id={details.id}>
                        <div className='item'>
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
                          <p><a href='${details.website}'>Visit website</a></p>
                        </div>
                  </div>
              </div>
  )}  
/*{details.id === itemId && */

export default ResearcherDetails;
