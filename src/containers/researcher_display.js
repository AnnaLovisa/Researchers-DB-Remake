import React, { Component } from 'react';
import { connect } from 'react-redux';
import { researcherItemsFetchData, researcherItemsEmptyData, researcherItemsFilterData } from '../actions/researcher_actions'; //Här ska fler actions läggas till sen
import { toggleDetails } from '../actions/display_actions';
import { ROOT_URL } from '../actions/shared';
import SearchForm from '../components/search_form';
import SelectMenu from '../components/select_menu';
import ResearcherDetails from './researcher_details';
import Button from '../components/button';


class DisplayResearchers extends Component {
  
  state = {
    showDetails: false,
    itemId: ''
  }
     
  handleonClick = () => {  
    this.props.fetchData(ROOT_URL);
  }

  resetonClick = () => {
    this.props.emptyData();
    this.setState({ showDetails: false })
  }

  toggleDetails = (id) => {
    this.setState({ showDetails: !this.state.showDetails, itemId: id });
  }

/*   handleonChange = () => {
    console.log("hej");
    this.props.filterData(ROOT_URL);
  } */

  
  render() {

    this.handleonClick = this.handleonClick.bind(this);
    this.resetonClick = this.resetonClick.bind(this);

    const displayClass = this.props.showList ? 'col-sm-4 col-md-4 col-lg-4 list-group slide' : 'col-sm-12 col-md-4 col-lg-2 researcher-card-style shadow-style m-4';    
    const displayContainer = this.props.showList ? 'row d-flex flex-column align-items-center' : 'row display-researchers-style d-flex justify-content-center';
    const displayItem = this.props.showList ? 'item' : 'item';
    
    const { showDetails, itemId } = this.state;
    const showList = this.props.showList;

    const filterItems = this.props.showFilteredItems;
    console.log(filterItems);

    const researcher = this.props.researcherItems

    const researchers = this.props.researcherItems.map((item, index) => {
      //ändrat från showDetails till showmoredetails i redux
      const showDetailsButton = (
        <a role="button" style={{textDecoration: 'underline'}} onClick={() => this.toggleDetails(item.id)} id={item.id} >
          {showDetails && item.id === this.state.itemId ? 'Hide details' : 'Show details'} 
        </a>
      );
      //Ändrat till showMoredetails
      return <ResearcherDetails key={index}
                                details={item}
                                displayClass={displayClass}
                                displayItem={displayItem}
                                open={showDetails}
                                detailsButton={showDetailsButton}
                                listForm={showList}
                                itemId={itemId} />
    })
   
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
     
      <div>
        <div className="row display-researchers-style d-flex justify-content-left mt-4">
          <Button type="button" handleonClick={this.handleonClick} buttonLabels="Show all" />
          <Button type="button" handleonClick={this.resetonClick} buttonLabels="Reset" />
          
            <SearchForm />
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
  return { 
    researcherItems: state.researcherItems,
    hasErrored: state.researcherItemsHasErrored,
    isLoading: state.researcherItemsIsLoading,
    showList: state.toggleDisplay,
    showFilteredItems: state.filterItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(researcherItemsFetchData(url)),
    emptyData: () => dispatch(researcherItemsEmptyData()),
    /* filterData: (url) => dispatch(researcherItemsFilterData(url)) */
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResearchers);

