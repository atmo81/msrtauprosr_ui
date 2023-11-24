
/**
 * AppHeader Component
 *
 * @author SA
 */


import { FormattedMessage } from 'react-intl';
import React from 'react';
import styled from 'styled-components';
import LogoutIcon from 'react-icons/lib/io/log-out';
import { Grid, Row, Col,Panel,Navbar } from 'react-bootstrap';
import { isUserLoggedIn, logout } from '../modules/Security/SecurityUtil';
import Languages from 'config/languages';
import LanguageSwitcher from 'components/LanguageSwitcher';
import HorizentalAdmin from '../modules/Menu/HorizentalAdmin';


const AppHeader = () => {

  return (
    <Navbar variant="dark" fixed="top" bg="dark" variant="dark">
      <Header>
        
        {/* logout button  */}
        {isUserLoggedIn() && (
          <LogoutLink data-auto-id="search-click-signout" onClick={() => logout()} >
            {/* <LogoutIcon /> */}
            <FormattedMessage id="global.signout" />
          </LogoutLink>
        )}

        {/* language toggle  */}
        <LanguageWrapper>
          <LanguageSwitcher
            languages={Languages}
            renderLanguageItem={(locale, label) => <Button id={locale}>{label}</Button>}
          />
        </LanguageWrapper>
        </Header>
      <HorizentalAdmin/>
    </Navbar>

  );
};


export default AppHeader;


// // // // // // // // // // // // // Styles // // // // // // // // // // // // // // // // // //

const HeaderSection = styled.div`
  height: 72px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;

`;


const Header = styled.header`
  padding-top: 15px;
  /* padding-bottom: 25px; */
  padding-left: 5%;
  padding-right: 5%;


  letter-spacing: 1px;
  font-size: 14 px;
  color:  rgba(0,0,0,0.87);
  font-weight:600;
`;

const Image = styled.img`
  vertical-align: middle;
  padding-right: 20px;
`;

const Button = styled.button`

  &:hover {
    color: #6699ff;
  }
`;

const LanguageWrapper = styled.span`
  cursor: pointer;
  margin-right: 15px;
  margin-top: 10px;
  float: right;
  font-size: 14px;
  color: #085EB9;
  font-weight: normal;
`;

const LogoutLink = styled.span`
  cursor: pointer;
  float: right;
  margin-top: 10px;
  font-size: 14px;
  color: #085EB9;
  font-weight: normal;

  &:hover {
    color: #6699ff;
  }

  & > span {
    font-weight: normal;
  }
`;
