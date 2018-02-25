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

    const researcher = this.props.researcherItems
    console.log(researcher);
   
    const researchers = this.props.researcherItems.map((item, index) => {
      return <ResearcherDetails key={index} details={item} />
    })

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    const listClass = 'col-sm-12 col-md-12 col-lg-12 list-group';
    
    return (
      <div>
        <div className="row display-researchers-style d-flex justify-content-center mt-4">
          <Button handleonClick={this.handleonClick} buttonLabels="Show all" />
          <Button handleonClick={this.handleonResetClick} buttonLabels="Reset" /> 
          </div>     
        {/*Rendering out the state of the researchers*/}
        <div className="row display-researchers-style d-flex justify-content-center">{researchers}</div>
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

/*
$(document).ready(function() {
    $('#list').click(function(event){
        event.preventDefault();
        $('.researcher-box').addClass('col-sm-12 col-md-12 col-lg-12 list-group');
        $('.item').addClass('list-group-item');
    });

    $('#grid').click(function(event){
        event.preventDefault();
        $('.researcher-box').removeClass('col-sm-12 col-md-12 col-lg-12 list-group');
        $('.item').removeClass('list-group-item');
        $('.researcher-box').addClass('col-sm-12 col-md-6 col-lg-3');
    });
});

*/