import React, { Component } from 'react';
import RootModal from '../RootModal';

class ErrorModal extends Component {
  render() {
    const { message } = this.props;

    return <RootModal {...this.props}>{message}</RootModal>;
  }
}

export default ErrorModal;
