import { FormattedMessage } from 'react-intl';
import React from 'react';
import styled from 'styled-components';
import LogoutIcon from 'react-icons/lib/io/log-out';

import { isUserLoggedIn, logout } from '../modules/Security/SecurityUtil';
import Languages from 'config/languages';
import LanguageSwitcher from 'components/LanguageSwitcher';



const AppFooter = () => {

  if (!isUserLoggedIn()) return null;

  return (
    <FooterSection>
      <Footer>

        <span><FormattedMessage id="app.headline" /></span>

        <span style={{ float: 'right' }} ><FormattedMessage id="app.confidentiality" /></span>


      </Footer>
    </FooterSection>
  );
};


export default AppFooter;


// // // // // // // // // // // // // Styles // // // // // // // // // // // // // // // // // //

const FooterSection = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 72px;

  background: #FFFFFF;
  border: 1px solid #E0E0E0;

`;


const Footer = styled.footer`
  padding-top: 25px;
  padding-bottom: 15px;
  padding-left: 5%;
  padding-right: 5%;

  letter-spacing: 0;
  line-height: 20px;
  font-size: 12px;
  color: #808080;
`;
