import React, { Component } from 'react';
import Dialog from 'react-dialog';
import styled from 'styled-components';
import RootModalHeader from './RootModalHeader';
import RootModalFooter from './RootModalFooter';
import 'react-dialog/css/index.css';
import './RootModal.css';

class RootModal extends Component {
  state = { isVisible: false };

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      isVisible: nextProps.show,
    }));
  }

  render() {
    const { buttonConfig, defaultButtonConfig, children, modalType } = this.props;

    if (!this.state.isVisible) return null;

    return (
      <Dialog
        modal={true}
        closeOnEscape={false}
        hasCloseIcon={false}
        isDraggable={false}
        height={'auto'}
        position={{ y: -350 }}
      >
        <RootModalHeader modalType={modalType} headerTitle="Oops, we did not expect this" />
        <RootModalBody>{children}</RootModalBody>
        <RootModalFooter {...this.props} buttonConfig={buttonConfig || defaultButtonConfig} />
      </Dialog>
    );
  }
}

export default RootModal;

// // // // // // // // // // // // // Styles // // // // // // // // // // // // // // // // // //

const RootModalBody = styled.div`
  padding: 20px;
`;
