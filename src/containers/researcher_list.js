import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResearcherList extends Component {

  render() {
    //action creator som endast hämtar vald
    /* const researcherList = this.props. .map((item, index) => {
      return <li key={index}>{item[0].institution}</li>
    }) */
    
    return (      
      //Rendering out the state of the researchers
      {/* <ul>{researcherList}</ul> */}
    )
  }
} 
 
function mapStateToProps({  }) {
  return {  };
}

export default connect(mapStateToProps)(ResearcherList)
