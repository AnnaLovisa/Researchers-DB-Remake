import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDisplayList, toggleDisplayGrid } from '../actions/display_actions';
import Header from './header'
import ButtonLink from './button_link';

class NavBar extends Component {

    makeList = () => {
        this.props.toggleList();
    }

    makeGrid = () => {
        this.props.toggleGrid();
    }

    render() {

    this.makeList = this.makeList.bind(this);
    this.makeGrid = this.makeGrid.bind(this);

    return (
      <div className="nav-container navigation-style">
            <Header />
        <div className="nav-item-b">           
            <strong>Display</strong>
            <ButtonLink onClick={this.makeList} buttonLabels="list" displayIcon="fa fa-th-list" className="button-link-style"></ButtonLink>
            <ButtonLink onClick={this.makeGrid} buttonLabels="grid" displayIcon="fa fa-th" className="button-link-style"></ButtonLink>
        </div>
      </div>
    )};
}

  function mapDispatchToProps(dispatch) {
    return {
      toggleList: () => dispatch(toggleDisplayList()),
      toggleGrid: () => dispatch(toggleDisplayGrid()) 
    };
  };
  
  export default connect(null, mapDispatchToProps)(NavBar);
