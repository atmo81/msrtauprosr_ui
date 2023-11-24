/**
 * Language Store
 * 
 * @author SA
 */

import * as StoreUtil from '../utils/StoreUtil';
import { getUserSelectedLanguage } from '../components/LanguageSwitcher/locale';

const initalState = {
  language: getUserSelectedLanguage(), // curr language
  toLanguage: '' // language to switch to
};

// actions

const UPDATE_LANGUAGE_ACTION = 'UPDATE_LANGUAGE_ACTION';
const SWITCH_LANGUAGE_ACTION = 'SWITCH_LANGUAGE_ACTION';

const createUpdateLanguageAction = (lang) => {
  return {
    type: UPDATE_LANGUAGE_ACTION,
    language: lang
  };
};

const createSwitchLanguageAction = (toLanguage) => {
  return {
    type: SWITCH_LANGUAGE_ACTION,
    toLanguage: toLanguage
  };
};


// reducer
export const languageReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_LANGUAGE_ACTION:
      return {
        ...state,
        language: action.language,
      };
    case SWITCH_LANGUAGE_ACTION:
      return {
        ...state,
        toLanguage: action.toLanguage,
      };

    default:
      return state;
  }
};

// dispatchers

export const updateLanguage = (lang) => {
  StoreUtil.dispatch(createUpdateLanguageAction(lang));
};

export const switchLanguage = (toLanguage) => {
  StoreUtil.dispatch(createSwitchLanguageAction(toLanguage));
};

