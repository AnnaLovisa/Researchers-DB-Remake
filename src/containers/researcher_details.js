import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResearcherDetails extends Component {

  render() {
    let result = [];
    const researcherDetail = this.props.fetchResearchers.map(item => {
      return  <div key={item.id} className="col-sm-12 col-md-6 col-lg-3">
              <div className="item">
                <p><strong>Name: </strong>{item.name}</p>
              </div>
              <div className="item">
                <p><strong>Institution: </strong>{item.institution}</p>
              </div>
            </div>
    })
    
    return (
      <div className="row">{researcherDetail}</div>
    );
  }
}

 
function mapStateToProps({ fetchResearchers }) {
  return { fetchResearchers: fetchResearchers };
}

export default connect(mapStateToProps)(ResearcherDetails)
