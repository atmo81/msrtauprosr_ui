/**
 * Utility class to create store from reducers
 * and dispatch any action globally
 *
 * @author SA
 */

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import {modal} from '../store/ModalStore'
import { securityReducer } from '../store/SecurityStore';
import { languageReducer } from '../store/LanguageStore';

import { clearRisksForm,risksReducer } from '../store/RisksStore' ;

import logger, * as Utils from './Utils';

let localStore = null;  // copy of store to allow global dispatch


/** combine all reducers to create single store */
export const initStore = () => {

  let store = null;

  const reducers = combineReducers({
    modal,
    securityReducer,
    languageReducer,
    risksReducer
});

  const middlewares = [thunk];
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) {
    store = createStore(reducers, compose(applyMiddleware(...middlewares)));
  } else {
    store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
  }
  localStore = store; // copy store locally
  return store;
};


/** global dispatcher */
export const dispatch = (action) => {
  if (Utils.isEmpty(localStore)) {
    logger('Store is not set!');
    return;
  }
  if (!action) {
    logger('action is empty!');
    return;
  }
  localStore.dispatch(action);
}

/** clear and reset states of stores */
export const resetStates = () => {
  clearRisksForm();
};
