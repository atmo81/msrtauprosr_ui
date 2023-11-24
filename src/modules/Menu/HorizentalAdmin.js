/**
 * Menu Page
 *
 * @author SA
 */
 import React, { Component } from 'react';
 import { withRouter } from 'react-router-dom';
 import { connect } from 'react-redux';
 import { Container, Grid, Row, Col,Navbar,NavDropdown,Nav,Breadcrumb } from 'react-bootstrap';

 import { FormattedMessage } from 'react-intl';
 import { injectIntl } from 'react-intl';

 import goTo from '../../utils/HistoryUtil';
 import {resetStates} from '../../utils/StoreUtil'
 import  * as SecurityUtil from '../Security/SecurityUtil';

 import logger, * as Utils from 'utils/Utils';

 class HorizentalAdmin extends Component {
   handleLogout = (e) => {
     e.preventDefault();
     SecurityUtil.revokeAccessTokens();
     goTo('/login');
}
   render() {
     return (
          <Breadcrumb>
            <Breadcrumb.Item href="home">Home</Breadcrumb.Item>
            <Breadcrumb.Item >Help</Breadcrumb.Item>
            <Breadcrumb.Item onClick={this.handleLogout}>Exit</Breadcrumb.Item>
          </Breadcrumb>

     )
   }
 }

  export default HorizentalAdmin;
