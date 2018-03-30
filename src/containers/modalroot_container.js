import React from 'react';
import { connect } from 'react-redux';
import AddResearcher from './researcher_add';

import { MODAL_TYPE_RESEARCHER_ADD } from '../actions/modalTypes';

const MODAL_COMPONENTS = {
  [MODAL_TYPE_RESEARCHER_ADD]: AddResearcher
};

const ModalRootContainer = ({ type, props }) => {
  
  if(!type) {  
    return null;
  }
  //If modaltype set in store
  const ModalComponent = MODAL_COMPONENTS[type];

  //Render that model
  return <ModalComponent {...props} />;
}


export default connect(state => state.modalReducer)(ModalRootContainer);


