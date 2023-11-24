import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
  render() {
    const { children, type, ...otherProps } = this.props;

    switch (type) {
      case 'reset':
        return <ResetButton {...otherProps}>{children}</ResetButton>;
      case 'anchor':
        return <AnchorButton {...otherProps}>{children}</AnchorButton>;
      case 'secondary':
        return <SecondaryButton {...otherProps}>{children}</SecondaryButton>;
      default:
        return <PrimaryButton {...otherProps}>{children}</PrimaryButton>;
    }
  }
}

Button.defaultProps = {
  size: 'large', // small
  type: 'primary', // reset - anchor - secondary - primary
};

export default Button;

// // // // // // // // // // // // // Styles // // // // // // // // // // // // // // // // // //

const ResetButton = styled.button`
  background: none;
  border: 1px solid #aaa;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 5px 25px;
  color: #aaa;
  border-radius: 3px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ececec;
  }

  &[disabled]:hover {
    background-color: transparent;
  }
`;

const AnchorButton = styled(ResetButton)`
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  color: #aaa;
  text-decoration: underline;

  &:hover {
    background-color: transparent;
  }
`;

const SecondaryButton = styled(ResetButton)`
  text-decoration: none;
  text-align: center;
  border: none;
  background-color: #ddd;
  color: #007fd8;
  padding: 0 20px 0 20px;

  /* Button size */
  height: ${props => (props.size === 'small' ? '35px' : '37px')};

  &:hover {
    background-color: #ccc;
  }

  &[disabled],
  &[disabled]:hover {
    color: #aaa;
    background-color: #eee;
    cursor: not-allowed;
  }

  &:active {
    background-color: #00385f;
  }
`;

const PrimaryButton = styled(ResetButton)`
  text-decoration: none;
  text-align: center;
  border: none;
  text-transform: uppercase;
  background-color: #007fd8;
  font-weight: bold;
  color: #ffffff;
  box-shadow: 0px 2px 0px 0px #003b64;
  border-radius: 3px;
  font-size: 16px;
  padding: 0 20px 0 20px;

  /* Button size */
  height: ${props => (props.size === 'small' ? '35px' : '37px')};

  &:hover {
    background-color: #00385f;
    color: #fff;
  }

  &[disabled] {
    background-color: lightgrey;
  }

  &.active {
    background-color: #00385f;
    font-weight: bold;
  }

  &[disabled]:hover {
    background-color: #c5c4c4;
  }

  &:active {
    background-color: #00385f;
  }
`;
