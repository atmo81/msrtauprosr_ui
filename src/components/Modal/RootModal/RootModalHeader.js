import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'config/styles';
import Octicon from 'react-octicon';
import { MODALTYPES } from '../index';

class RootModalHeader extends Component {
  setHeaderBackgroundColor() {
    const { modalType } = this.props;
    let backgroundColor = '';

    switch (modalType) {
      case MODALTYPES.ERROR:
        backgroundColor = colors.red;
        break;
      default:
        backgroundColor = colors.blue;
    }

    StyledModalHeader = styled(StyledModalHeader)`
      background-color: ${backgroundColor};
    `;
  }

  setGlypIcon() {
    const { modalType } = this.props;

    switch (modalType) {
      case MODALTYPES.ERROR:
        return 'alert';
      default:
        return 'info';
    }
  }

  render() {
    const { headerTitle } = this.props;
    this.setHeaderBackgroundColor();

    return (
      <StyledModalHeader>
        <HeaderLabel>
          <StyledOcticon name={this.setGlypIcon()} /> {headerTitle}
        </HeaderLabel>
      </StyledModalHeader>
    );
  }
}

RootModalHeader.propTypes = {
  modalType: PropTypes.string.isRequired,
};

export default RootModalHeader;

// // // // // // // // // // // // // Styles // // // // // // // // // // // // // // // // // //

const borderRadius = 4;

let StyledModalHeader = styled.div`
  color: white;
  margin: 0;
  padding: 25px 20px;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
`;

const HeaderLabel = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const StyledOcticon = styled(Octicon)`
  font-size: 25px;
  padding-right: 5px;
`;
