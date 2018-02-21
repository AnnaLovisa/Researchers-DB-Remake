import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResearcherList extends Component {
  
  renderResearchers = (researcher, index) => {
    return (
      <li key={index}>{researcher[index].name}</li>
    )
  }

  render() {
    
    return (      
      //Rendering out the state of the researchers
      <ul>{this.props.researchers.map(this.renderResearchers)}</ul>
    )
  }
} 
 
function mapStateToProps({ researchers }) {
  return { researchers };
}

export default connect(mapStateToProps)(ResearcherList)
