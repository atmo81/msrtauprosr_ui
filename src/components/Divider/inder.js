import React from 'react';
import styled from 'styled-components';

const Divider = () => {
  return <DividerLine />;
};
export default Divider;

// // // // // // // // // // // // // Styles // // // // // // // // // // // // // // // // // //

const DividerLine = styled.div`
  height: 1px;
  border-top: 1px solid #ccc;
  margin: 10px 0;
`;
