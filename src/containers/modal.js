import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Default modal component
class Modal extends Component {

  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onClose: PropTypes.func
  };

  listenKeyboard(event) {
    if(event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    if(this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }

  componentWillUnmount() {
    if(this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
    }
  }

  get title () {
    const { title } = this.props;

    return title ? (
      <div className='modal__title'>
        <h1>{title}</h1>
      </div>
    ) : null;
  }

  get close () {
    const { onClose } = this.props;

    return onClose ? (
      <div className='modal__close' onClick={onClose} />
    ) : null;
  }

   onOverlayClick() {
    this.props.onClose();
  }

  onDialogClick(event) {
    event.stopPropagation();
  }


  render() {
    return(
      <div className="modal">
        <div className="modal-overlay">
          <div className="modal-content" onClick={this.onOverlayClick}>
            <div className="modal-dialog" onClick={this.onDialogClick}>
              <header>
                {this.title}
                {this.close}
              </header>
              <div>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>     
    )
  }
}

export default Modal;