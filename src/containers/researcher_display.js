import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResearcherDetails from './researcher_details';
import { researcherItemsFetchData } from '../actions/researcher_actions'; //Här ska fler actions läggas till sen
import Button from '../components/button';

const ROOT_URL = 'http://localhost:3000/researchers';

class DisplayResearchers extends Component {

     
  handleonClick = () => {  
    this.props.fetchData(ROOT_URL);
  }

  render() {

    this.handleonClick = this.handleonClick.bind(this);

    const researcher = this.props.researcherItems
    console.log(researcher);

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    const researchers = this.props.researcherItems.map((item, index) => {
      <ResearcherDetails key={index} details={item} />
    })
    
    return (
      <div>
        <Button handleonClick={this.handleonClick} buttonLabels="Show all" />      
        {/*Rendering out the state of the researchers*/}
        <div>{researchers}</div>
      </div>
    )
    
  }
} 
 
function mapStateToProps(state) {
  return { 
    researcherItems: state.researcherItems,
    hasErrored: state.researcherItemsHasErrored,
    isLoading: state.researcherItemsIsLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(researcherItemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResearchers);