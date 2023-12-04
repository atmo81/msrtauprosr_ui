/**
 * Home Page
 *
 * @author SA
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { injectIntl } from 'react-intl';

import globalMessages from '../../messages.global';
import AppHeader from '../../app/AppHeader';
import goTo from '../../utils/HistoryUtil';
import {resetStates} from '../../utils/StoreUtil'
import './Home.css';
import logger, * as Utils from 'utils/Utils';


class Home extends Component {

  state = {
    uname: '',
    pwd: '',
  };

  navigate =(e) => {
    const id = e.target.id;
    goTo('/'+ id ); 
  }


  render() {
    return (
      
      <form className="home-form" >
      <div><AppHeader /></div>
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={4} className='home-title'>
            <span><FormattedMessage id="home.title" /></span>
          </Col>
        </Row>


        {/* Enter button */}
        <Row>
          <Col xs={12} md={4} mdOffset={4} >
            <button id="risks" type="submit" autoFocus="true" disabled="true" data-auto-id="home-click-login" className="home-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}  >
              {this.props.intl.formatMessage(globalMessages['home.status'])}
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={4} >
            <button  id="risks" type="submit" autoFocus="true" disabled="true" data-auto-id="home-click-login" className="home-button" style={{ marginTop: 20 }}  onClick={(e) => { this.navigate(e); }}>
              {this.props.intl.formatMessage(globalMessages['home.mapping'])}
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={4} >
            <button  id="risks" type="submit" autoFocus="true"  data-auto-id="home-click-login" className="home-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }} >
              {this.props.intl.formatMessage(globalMessages['home.values'])}
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={4} >
            <button  id="risks" type="submit" autoFocus="true" disabled="true" data-auto-id="home-click-login" className="home-button" style={{ marginTop: 20 }}  onClick={(e) => { this.navigate(e); }}>
              {this.props.intl.formatMessage(globalMessages['home.history'])}
            </button>
          </Col>
        </Row>
      </Grid>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default withRouter(injectIntl(connect(mapStateToProps)(Home)));
