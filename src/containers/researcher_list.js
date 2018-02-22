import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResearcherList extends Component {

  render() {

    const researcherList = this.props.researchers.map((item, index) => {
      return <li key={index}>{item[0].institution}</li>
    })
    
    return (      
      //Rendering out the state of the researchers
      <ul>{researcherList}</ul>
    )
  }
} 
 
function mapStateToProps({ researchers }) {
  return { researchers: researchers };
}

export default connect(mapStateToProps)(ResearcherList)
