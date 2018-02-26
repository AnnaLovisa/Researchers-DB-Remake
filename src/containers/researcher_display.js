import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResearcherDetails from './researcher_details';
import { researcherItemsFetchData } from '../actions/researcher_actions'; //Här ska fler actions läggas till sen
import Button from '../components/button';
import { ROOT_URL } from '../actions/shared';


class DisplayResearchers extends Component {
  
     
  handleonClick = () => {  
    this.props.fetchData(ROOT_URL);
  }

  handleonResetClick = () => {
    //Reset state of  to an empty array
  }

  
  render() {

    this.handleonClick = this.handleonClick.bind(this);
    this.resetonClick = this.resetonClick.bind(this);

    console.log(this.props.showList); //visar true vid knapptryck
    const displayClass = this.props.showList ? 'col-sm-4 col-md-4 col-lg-4 list-group' : 'col-sm-12 col-md-4 col-lg-2 researcher-card-style shadow-style m-4';    
    const displayContainer = this.props.showList ? 'row d-flex flex-column align-items-center' : 'row display-researchers-style d-flex justify-content-center';
    const displayItem = this.props.showList ? 'item list-group-item' : 'item';
  
    const researcher = this.props.researcherItems   
    const researchers = this.props.researcherItems.map((item, index) => {
      return <ResearcherDetails key={index} details={item} displayClass={displayClass} displayItem={displayItem} />
    })
   
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
     
      <div>
        <div className="row display-researchers-style d-flex justify-content-center mt-4">
          <Button handleonClick={this.handleonClick} buttonLabels="Show all" />
          <Button handleonClick={this.resetonClick} buttonLabels="Reset" /> 
          </div>     
        {/*Rendering out the state of the researchers*/}
        <div className={displayContainer}>
          {researchers}
        </div>
      </div>
    )
  }
} 

//Dessa nya states kommer från reducern
function mapStateToProps(state) {
  console.log(state.toggleDisplay);
  return { 
    researcherItems: state.researcherItems,
    hasErrored: state.researcherItemsHasErrored,
    isLoading: state.researcherItemsIsLoading,
    showList: state.toggleDisplay
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(researcherItemsFetchData(url))
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(DisplayResearchers);

