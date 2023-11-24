/**
 * Login Page
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

import  * as SecurityUtil from './SecurityUtil';
import goTo from '../../utils/HistoryUtil';
import { checkGroupPermission, handleLoginFailure } from './LoginHelper';
import {resetStates} from '../../utils/StoreUtil'

import './Login.css';

import logger, * as Utils from 'utils/Utils';


class Login extends Component {
  state = {
    uname: '',
    pwd: '',
  };


  componentDidMount = () => {
    if (SecurityUtil.isUserLoggedIn()) {
      goTo('/home');  // redirect to search
    }
  }

  handleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleLogin = (e) => {

    e.preventDefault();

    // check credentials from server
    SecurityUtil.login(this.state.uname, this.state.pwd).then(response => {
      if (response.message==="valid") {
          this.loginSuccess(response.code);
          goTo('/home');
          //resetStates();  // erase previous search
      } else {
        handleLoginFailure(response.status);
      }
    }).catch(err => {
      logger('login error = %s', err);
      handleLoginFailure();
    });

  }

  loginSuccess = (code) => {
    SecurityUtil.saveAccessTokens(code);
    checkGroupPermission();
  }


  render() {
    return (
      <form className="login-form" onSubmit={this.handleLogin}>

      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={4} className='login-title'>
            <span><FormattedMessage id="login.title" /></span>
          </Col>
        </Row>

        {/* user name */}
        <Row>
          <Col xs={12} md={4} mdOffset={4} className='login-label'>
            <span><FormattedMessage id="login.username" /></span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={4} >
            <input
              className="login-input"
              id="uname"
              data-auto-id="login-input-uname"
              name="uname"
              autoFocus="true"
              // required="true"
              // placeholder={this.props.intl.formatMessage(globalMessages['form.username'])}
              value={this.state.uname}
              onChange={this.handleChange}
            />
          </Col>
        </Row>

        {/* password */}
        <Row>
          <Col xs={12} md={4} mdOffset={4} className='login-label'>
            <span><FormattedMessage id="login.pwd" /></span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} mdOffset={4} >
            <input
              className="login-input"
              id="pwd"
              data-auto-id="login-input-pwd"
              name="pwd"
              type="password"
              // required="true"
              // placeholder={this.props.intl.formatMessage(globalMessages['form.pwd'])}
              value={this.state.pwd}
              onChange={this.handleChange}
            />
          </Col>
        </Row>

        {/* login button */}
        <Row>
          <Col xs={12} md={4} mdOffset={4} >
            <button
              type="submit"
              autoFocus="true"
              data-auto-id="login-click-login"
              className="login-button" style={{ marginTop: 20 }}
              disabled={!this.state.uname && !this.state.pwd}
            >
              {this.props.intl.formatMessage(globalMessages['form.login'])}
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

export default withRouter(injectIntl(connect(mapStateToProps)(Login)));
