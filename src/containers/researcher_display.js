import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResearcherDetails from './researcher_details';
import { researcherItemsFetchData } from '../actions/researcher_actions'; //Här ska fler actions läggas till sen
/* import { toggleDisplay } from '../actions/display_actions'; */
import Button from '../components/button';
import { ROOT_URL } from '../actions/shared';


class DisplayResearchers extends Component {
  
     
  handleonClick = () => {  
    this.props.fetchData(ROOT_URL);
  }

  handleonResetClick = () => {
    //Reset state of  to an empty array
  }

  /* handleonButtonClick = () => {
    console.log('working');
    this.props.toggleList();
   
  } */
  
  render() {

    this.handleonClick = this.handleonClick.bind(this);
   /*  this.handleonResetClick = this.handleonResetClick.bind(this);
    this.handleonButtonClick = this.handleonButtonClick.bind(this); */

    //const listClass = showList ? 'col-sm-12 col-md-12 col-lg-12 list-group' : 'col-sm-12 col-md-4 col-lg-2 researcher-card-style shadow-style m-4'; 
    const researcher = this.props.researcherItems
    
    const researchers = this.props.researcherItems.map((item, index) => {
      return <ResearcherDetails key={index} details={item} />
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
          {/*<Button handleonClick={this.handleonButtonClick} buttonLabels="Reset" /> */} 
          {/* <ButtonLink onClick={this.handleonButtonClick} buttonLabels="test" /> */}
          </div>     
        {/*Rendering out the state of the researchers*/}
        <div className="row display-researchers-style d-flex justify-content-center">{researchers}</div>
      </div>
    )
    /* ButtonLink.props.onClick(this.handleonButtonClick); */
  }
} 

//Dessa nya states kommer från reducern
function mapStateToProps(state) {
  return { 
    researcherItems: state.researcherItems,
    hasErrored: state.researcherItemsHasErrored,
    isLoading: state.researcherItemsIsLoading,
    showList: state.toggleDisplay   //REFERERAR FUNKTIONEN FRÅN COMBINE REDUCERN TILL DET NYA STATET SOM SHOWLIST
    //MEN DENNA KAN JAG INTE KONSOLLOGGA UT. SHOWLIST BLIR ALLTSÅ INTE TRUE (?) 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(researcherItemsFetchData(url))
   /*  toggleList: () => dispatch(toggleDisplay()) */
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(DisplayResearchers);

