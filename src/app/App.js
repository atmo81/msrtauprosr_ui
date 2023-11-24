import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Grid,Form, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';


import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import Login from '../modules/Security/Login';
import Risks from '../modules/Risks/RisksHome';

import RisksEntry from '../modules/Risks/RisksEntry';
import TestPage from '../modules/Test/TestPage';

import * as LoginHelper from '../modules/Security/LoginHelper';
import { isSessionValid, checkUserLogin } from '../modules/Security/SecurityUtil';
import * as HistoryUtil from '../utils/HistoryUtil';

import logger, * as Utils from '../utils/Utils';

import { resetSecurity } from '../store/SecurityStore';
import { updateLanguage } from '../store/LanguageStore';

import localeData_en from '../locale/en.json';
import localeData_de from '../locale/de.json';

import { getUserSelectedLanguage, setUserSelectedLanguage } from '../components/LanguageSwitcher/locale';



class App extends Component {

  constructor(props) {
    super(props)

    // setup language
    addLocaleData([...en, ...de]);
    const language = getUserSelectedLanguage();
    const messages = language === 'de' ? localeData_de : localeData_en;

    this.state = {
      language: language,
      messages: messages,
    }
  }


  componentDidMount = () => {
    HistoryUtil.setHistory(this.props.history);  // save history for global navigation

    checkUserLogin();  // redirect to login if not authenticated

    // poll session
    window.setInterval(() => isSessionValid(), 2000); // 2 seconds, lower will not sync with refreshing token!

  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.isExpiredToken) {
      resetSecurity();  // reset to avoid infinite update
      LoginHelper.tokenExpiredLogout();
    }
    if (!this.props.isSessionValid) {
      resetSecurity();  // reset to avoid infinite update
      LoginHelper.sessionExpiredLogout();
    }
    if (prevProps.toLanguage !== this.props.toLanguage) {
      this.switchLanguage(this.props.toLanguage);  // toggle language
    }
  }

  // change messages to selected language
  switchLanguage = (toLanguage) => {
    setUserSelectedLanguage(toLanguage);
    const messages = toLanguage === 'de' ? localeData_de : localeData_en;
    this.setState({
      language: toLanguage,
      messages: messages,
    });
    updateLanguage(toLanguage);
  }


  render() {
    return (
      <IntlProvider locale={this.state.language} messages={this.state.messages}>
        <div>
          {/* <AppHeader />  */}
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/home' component={Risks} />
              <Route path='/entry' component={RisksEntry} />
              <Route path='/test' component={TestPage} />
            </Switch>
          <AppFooter />
        </div>
      </IntlProvider>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isExpiredToken: state.securityReducer.isExpiredToken,
    isSessionValid: state.securityReducer.isSessionValid,
    toLanguage: state.languageReducer.toLanguage
  };
};


export default withRouter(connect(mapStateToProps)(App));
