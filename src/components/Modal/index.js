import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from './Modal.actions';

// Modal types
import StandardModal from './StandardModal';

export const MODALTYPES = {
  ERROR: 'error',
  STANDARD: 'standard',
};

class Modal extends Component {
  hide = () => {
    this.props.dispatch(hideModal());
  };

  render() {
    const { modalType } = this.props;

    const customProps = {
      hide: this.hide,
      defaultButtonConfig: [
        {
          label: 'OK',
          action: this.hide,
        },
      ],
    };

    switch (modalType) {
      case MODALTYPES.ERROR:
      case MODALTYPES.STANDARD:
      default:
        return <StandardModal {...this.props} {...customProps} />;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { modalType, title, message, show, size } = state.modal;

  return {
    modalType,
    title,
    message,
    show,
    size,
  };
};

export default connect(mapStateToProps)(Modal);
