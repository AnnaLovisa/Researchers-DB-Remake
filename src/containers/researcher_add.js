import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModal } from '../actions/modal_actions';
import Modal from './modal';  //default modal

const AddResearcher = ({ title, afterClose, hideModal }) => {

  const onClose = () => {
    this.props.hide();

    if(afterClose) {
      afterClose();
    }
  }

    return(
      <Modal title={title} onClose={onClose}>
        <div className="add-form">
          <h6>Type info</h6>
          <form method="post" onSubmit={this.handleSubmit}>
            
          </form>
        </div>
      </Modal>
    )

}

AddResearcher.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    hide: () => dispatch(hideModal())
  }
}


export default connect(null, mapDispatchToProps)(AddResearcher);
