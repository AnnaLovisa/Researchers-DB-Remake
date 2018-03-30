import React, { Component } from 'react';
import { connect } from 'react-redux';
import { researcherItemsFetchData, researcherItemsEmptyData, filterItemsEmptyData } from '../actions/researcher_actions'; //Här ska fler actions läggas till sen
import { ROOT_URL } from '../actions/shared';
import { MODAL_TYPE_RESEARCHER_ADD } from '../actions/modalTypes';
import { showModal } from '../actions/modal_actions';
import SearchForm from '../containers/search_form';
import SearchTextField from '../containers/search_textfield';
import ResearcherDetails from '../components/researcher_details';
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
    this.props.emptyFilterData();
    this.setState({ showDetails: false })
  }

  toggleDetails = (id) => {
    this.setState({ showDetails: !this.state.showDetails, itemId: id });
  }

  showAddMenu = () => {
    this.props.show(MODAL_TYPE_RESEARCHER_ADD, {
      title: 'Title'
    });
  }
  
  render() {

    this.handleonClick = this.handleonClick.bind(this);
    this.resetonClick = this.resetonClick.bind(this);
    this.showAddMenu = this.showAddMenu.bind(this);

    const displayClass = this.props.showList ? ' col-sm-4 col-md-4 col-lg-4 list-group slide' : 'col-sm-12 col-md-4 col-lg-2 researcher-card-style shadow-style';   /*card-group*/
    const displayContainer = this.props.showList ? 'researcher-list-container' : 'researcher-card-container';
    const displayItem = this.props.showList ? 'item' : 'item';
    
    const { showDetails, itemId } = this.state;
    const showList = this.props.showList;

    const filterItems = this.props.showFilteredItems;
    const researcher = this.props.researcherItems;
    const filtered = this.props.filtered; 

    const item = !filtered ? researcher : filterItems;

    const researchers = item.map((item, index) => {
      const showDetailsButton = (
        <a role="button" style={{textDecoration: 'underline'}} onClick={() => this.toggleDetails(item.id)} id={item.id} >
          {showDetails && item.id === this.state.itemId ? 'Hide details' : 'Show details'} 
        </a>
      );
                     
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
        <div className="search-add-container">
          <div className="search-item-a">
            <Button type="button" onClick={this.handleonClick} buttonLabels="Show all" className="button-style" />
            <Button type="button" onClick={this.resetonClick} buttonLabels="Reset" className="button-style" />  
          </div>  
          <div className="search-item-c">
          <Button type="button" onClick={this.showAddMenu} buttonLabels="Add new researcher" className="button-style" />
          </div>
            <p className="search-item-d">Filter By</p>     
            <SearchForm />
            <div className="search-item-f">
              <SearchTextField />
            </div>
        </div>              
        {/*Rendering out the state of the researchers*/}
        <div className="container-1">
          <div className={displayContainer}>
            {researchers}
          </div>
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
    filtered: state.researcherItemsAreFiltered,
    showFilteredItems: state.filterItems,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => dispatch(researcherItemsFetchData(url)),
    emptyData: () => dispatch(researcherItemsEmptyData()),
    emptyFilterData: () => dispatch(filterItemsEmptyData()),
    show: (type, props) => dispatch(showModal(type, props))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResearchers);


