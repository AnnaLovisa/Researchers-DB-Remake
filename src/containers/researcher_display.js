import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResearcherDetails from './researcher_details';
import { researcherItemsFetchData, researcherItemsEmptyData } from '../actions/researcher_actions'; //Här ska fler actions läggas till sen
import Button from '../components/button';
import { ROOT_URL } from '../actions/shared';


class DisplayResearchers extends Component {
  
  state = {
    showDetails: false
  }
     
  handleonClick = () => {  
    this.props.fetchData(ROOT_URL);
  }

  resetonClick = () => {
    this.props.emptyData();
  }

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  }
  
  render() {

    this.handleonClick = this.handleonClick.bind(this);
    this.resetonClick = this.resetonClick.bind(this);

    const displayClass = this.props.showList ? 'col-sm-4 col-md-4 col-lg-4 list-group slide' : 'col-sm-12 col-md-4 col-lg-2 researcher-card-style shadow-style m-4';    
    const displayContainer = this.props.showList ? 'row d-flex flex-column align-items-center' : 'row display-researchers-style d-flex justify-content-center';
    const displayItem = this.props.showList ? 'item' : 'item';
    
    const { showDetails } = this.state;
    const showList = this.props.showList;

    const showDetailsButton = (
      <a role="button" style={{textDecoration: 'underline'}} onClick={this.toggleDetails}>
        {showDetails ? 'Hide details' : 'Show details'}
      </a>
    );
    console.log()
    const researcher = this.props.researcherItems   
    const researchers = this.props.researcherItems.map((item, index) => {
      return <ResearcherDetails key={index}
                                details={item}
                                displayClass={displayClass}
                                displayItem={displayItem}
                                open={showDetails}
                                detailsButton={showDetailsButton}
                                listForm={showList} />
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
  console.log(state.researcherItems);
  return { 
    researcherItems: state.researcherItems,
    hasErrored: state.researcherItemsHasErrored,
    isLoading: state.researcherItemsIsLoading,
    showList: state.toggleDisplay
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(researcherItemsFetchData(url)),
    emptyData: () => dispatch(researcherItemsEmptyData())
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(DisplayResearchers);

