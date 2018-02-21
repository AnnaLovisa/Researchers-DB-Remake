import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResearcherList extends Component {
  

  render() {

    const researcherList = this.props.researchers.map((researcher, index) => {
      return <li key={index}>{researcher.name}</li>
    })

    return (      
      //Rendering out the state of the researchers
      <ul>{researcherList}</ul>
    )
  }
} 
 
function mapStateToProps({ researchers }) {
  return { researchers };
}

export default connect(mapStateToProps)(ResearcherList)