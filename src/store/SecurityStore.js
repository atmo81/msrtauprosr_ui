/**
 * Security Store
 * 
 * @author SA
 */

import logger from 'utils/Utils';
import * as StoreUtil from '../utils/StoreUtil';

const initalState = {
  isExpiredToken: false,
  isSessionValid: true
};

// actions
const INVALID_SESSION_ACTION = 'INVALID_SESSION_ACTION';
const EXPIRED_TOKEN_ACTION = 'EXPIRED_TOKEN_ACTION';
const RESET_SECURITY_ACTION = 'RESET_SECURITY_ACTION';

const createInvalidSessionAction = () => {
  return {
    type: INVALID_SESSION_ACTION,
  };
};

const createExpiredTokenAction = () => {
  return {
    type: EXPIRED_TOKEN_ACTION,
  };
};

const createResetSecurityAction = () => {
  return {
    type: RESET_SECURITY_ACTION,
  };
};


// reducer
export const securityReducer = (state = initalState, action) => {
  switch (action.type) {
    case INVALID_SESSION_ACTION:
      return {
        ...state,
        isSessionValid: false,
      };
    case EXPIRED_TOKEN_ACTION:
      return {
        ...state,
        isExpiredToken: true,
      };
    case RESET_SECURITY_ACTION:
      return {
        ...state,
        isExpiredToken: false,
        isSessionValid: true
      };

    default:
      return state;
  }
};

// dispatchers

export const invalidSession = () => {
  StoreUtil.dispatch(createInvalidSessionAction());
};

export const expiredToken = () => {
  StoreUtil.dispatch(createExpiredTokenAction());
};

export const resetSecurity = () => {
  StoreUtil.dispatch(createResetSecurityAction());
};


