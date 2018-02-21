import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResearcherList extends Component {
  
  renderResearchers(researcherData) {
    return(
      <li key={}>{/* {researcherData.key.name} */}</li>
    )
  }

  render() {
    console.log(this.props.researchers.map(this.renderResearchers));
    return (      
      //Rendering out the state of the researchers
      <ul>
        {this.props.researchers.map(this.renderResearchers)}
      </ul>
    )
  }
}

function mapStateToProps({ researchers }) {
  return { researchers };
}

export default connect(mapStateToProps)(ResearcherList)