import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDisplay } from '../actions/display_actions';
import Header from './header'
import ButtonLink from './button_link';

class NavBar extends Component {

    handleonClick = () => {
        this.props.toggleList();
    }

    render() {

    this.handleonClick = this.handleonClick.bind(this);

    return (
      <div className="row d-flex justify-content-between p-2 navigation-style">
        
        <div className="col-xs-2">
            <Header />
            
        </div>
        <div className="col-xs-2">           
            <strong>Display</strong>
            <ButtonLink onClick={this.handleonClick} buttonLabels="list" displayIcon="fa fa-th-list"></ButtonLink>
            {/* <ButtonLink handleButtonClick={props.handleButtonClick} buttonLabels="grid" displayIcon="fa fa-th"></ButtonLink> */}
            {/* <div className="row ">
                <div className="col-xs-12">
                    This should only appear for admins
                    <ButtonLink handleButtonClick={props.handleButtonClick} buttonLabels="Add new researcher"></ButtonLink>
                </div>
            </div> */}
        </div>
      </div>
    )};
}

  function mapDispatchToProps(dispatch) {
    return {
      toggleList: () => dispatch(toggleDisplay())
    };
  };
  
  export default connect(null, mapDispatchToProps)(NavBar);
