import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MODALTYPES } from '../index';
import { colors } from 'config/styles';
import Button from 'components/Forms/Button';

class RootModalFooter extends Component {
  setHeaderBackgroundColor() {
    const { modalType } = this.props;
    let color = '';
    let backgroundColor = '';

    switch (modalType) {
      case MODALTYPES.ERROR:
        color = colors.red;
        backgroundColor = '#ffd9d5';
        break;
      default:
        color = colors.blue;
        backgroundColor = '#d7edfd';
    }

    ModalButton = styled(ModalButton)`
      border-color: ${color};
      color: ${color};

      &:hover {
        background-color: ${backgroundColor};
      }
    `;
  }

  render() {
    const { buttonConfig } = this.props;
    this.setHeaderBackgroundColor();
    // Reverse the buttonConfig order so the buttons will show up in the right order.
    return (
      <ModalFooter>
        {buttonConfig.reverse().map((config, index) => (
          <ModalButton type="reset" key={index} onClick={config.action}>
            {config.label}
          </ModalButton>
        ))}
      </ModalFooter>
    );
  }
}

RootModalFooter.defaultProps = {
  buttonConfig: [],
};

RootModalFooter.propTypes = {
  buttonConfig: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default RootModalFooter;

// // // // // // // // // // // // // Styles // // // // // // // // // // // // // // // // // //

let ModalButton = styled(Button)`
  min-width: 100px;
  margin: 0 5px;
  transition: 0.3s background;
  background-color: transparent;
  box-shadow: none;
  font-weight: normal;
`;

const ModalFooter = styled.div`
  text-align: right;
  box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.05);
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  position: relative;
`;
