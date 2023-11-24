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

import goTo from '../../utils/HistoryUtil';
import {resetStates} from '../../utils/StoreUtil'
import './Home.css';
import logger, * as Utils from 'utils/Utils';


class Home extends Component {

  state = {
    uname: '',
    pwd: '',
  };

  render() {
    return (
      <form className="home-form" >

      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={4} className='home-title'>
            <span><FormattedMessage id="home.title" /></span>
          </Col>
        </Row>


        {/* Enter button */}
        <Row>
          <Col xs={12} md={4} mdOffset={4} >
            <button
              type="submit"
              autoFocus="true"
              data-auto-id="home-click-login"
              className="home-button" style={{ marginTop: 20 }}
              disabled={!this.state.uname && !this.state.pwd}
            >
              {this.props.intl.formatMessage(globalMessages['home.enter'])}
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
