import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDisplayList, toggleDisplayGrid } from '../actions/display_actions';
import { Link } from 'react-router-dom';
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
      <div className="row d-flex justify-content-between p-2 navigation-style">
        
        <div className="col-xs-2">
            <Header />
            
        </div>
        <div className="col-xs-2">           
            <strong>Display</strong>
            <ButtonLink onClick={this.makeList} buttonLabels="list" displayIcon="fa fa-th-list"></ButtonLink>
            <ButtonLink onClick={this.makeGrid} buttonLabels="grid" displayIcon="fa fa-th"></ButtonLink>
            <div className="row ">
                <div className="col-xs-12">
                    {/*This should only appear for admins*/}
                    <Link to="/addResearcher">Add new researcher</Link>
                </div>
            </div>
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
