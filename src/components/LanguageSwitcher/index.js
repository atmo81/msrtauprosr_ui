import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getUsersDefaultLanguage,
  getUserSelectedLanguage,
  setUserSelectedLanguage,
  removeUserSelectedLanguage,
} from './locale';

import { switchLanguage } from '../../store/LanguageStore';
import logger from '../../utils/Utils';

class LanguageSwitcher extends Component {
  // Either the browser language or the language stored in the local storage.
  activeLanguage = getUserSelectedLanguage();

  onLanguageChange = (e) => {
    const defaultUserLanguage = getUsersDefaultLanguage();
    const selectedLocale = this.props.currLanguage === 'en' ? 'de' : 'en'; // toggle

    // if (this.activeLanguage === selectedLocale) return;

    // Only store selected language if it's different from the browser language. Remove local
    // storage entry of browser language was selected to avoid having to choose between two
    // settings.
    if (selectedLocale === defaultUserLanguage) {
      removeUserSelectedLanguage();
    } else {
      setUserSelectedLanguage(selectedLocale);
    }

    switchLanguage(selectedLocale);  // broadcast intention to switch to this language
  };

  render() {
    const { languages, renderLanguageItem } = this.props;

    if (!languages) {
      console.warn('LanguageSwitcher is missing a language config');
      return null;
    }

    let language = this.props.currLanguage === 'en' ? languages[1] : languages[0];

    return (
      <div>
        <span
          key={language.locale}
          onClick={this.onLanguageChange.bind(this, language.locale)}
        >
          {renderLanguageItem(language.locale, language.label)}
        </span>
      </div>
    );

  }
}

LanguageSwitcher.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      locale: PropTypes.string.isRequired,
    }),
  ).isRequired,
  renderLanguageItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    currLanguage: state.languageReducer.language
  };
};


export default connect(mapStateToProps)(LanguageSwitcher);