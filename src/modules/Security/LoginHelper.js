import React from 'react';
import InfoIcon from 'react-icons/lib/io/ios-informatoutline';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { getUserSelectedLanguage } from '../../components/LanguageSwitcher/locale';

import * as SecurityUtil from './SecurityUtil';
import goTo from '../../utils/HistoryUtil';

import {expiredToken} from '../../store/SecurityStore'
import * as SecurityMessage from './SecurityMessage';

import logger, * as Utils from 'utils/Utils';

/** login */
export const handleLoginFailure = (status = 500) => {
  switch (status) {
    case 400:
      showAlertDialog(SecurityMessage.LOGIN_BAD_CREDENTIALS,
        () => { goTo('/login');
      });
      break;
    case 401:
    case 403:
      showAlertDialog(SecurityMessage.LOGIN_USER_UNAUTHORIZED,
        () => { goTo('/login');
      });
      break;
    default:
      showAlertDialog(SecurityMessage.SECURITY_ERROR,
        () => { goTo('/login');
      });
  }
}

export const checkGroupPermission = () => {
      goTo('/home');
      return;
  };

/** check group permission after login */
export const checkGroupPermissionNotImplemented = () => {
  SecurityUtil.checkGroupPermission().then(response => {

    if (response.ok) {
      goTo('/home');
      return;
    }

    if (response.status === 401) {
      SecurityUtil.revokeAccessTokens();
      showAlertDialog(SecurityMessage.LOGIN_GROUP_UNAUTHORIZED);
      return;
    }

    throw new Error(response.statusText);

  }).catch(error => {
    logger('check group permission failed = %s', error)

    SecurityUtil.revokeAccessTokens();
    showAlertDialog(SecurityMessage.SECURITY_ERROR);
  });
};

/** client session time out */
export const sessionExpiredLogout = () => {
  SecurityUtil.clearSession();
  showAlertDialog(SecurityMessage.CLIENT_SESSION_EXPIRED, () => {
    goTo('/login');
  });
};

/** server session time out */
export const tokenExpiredLogout = () => {
  SecurityUtil.clearSession();
  showAlertDialog(SecurityMessage.SERVER_SESSION_EXPIRED, () => {
    goTo('/login');
  });
};


/** alert dialog */
export const showAlertDialog = (code, confirmAction = () => { }) => {
  const lang = getUserSelectedLanguage();
  let msg = '', confirm='';

  if (lang === 'de') {
    msg = SecurityMessage.getMessage(code, 'de');
    confirm = SecurityMessage.getMessage(SecurityMessage.LOGIN_DIALOG_CONFIRM, 'de');
  } else {
    msg = SecurityMessage.getMessage(code);
    confirm = SecurityMessage.getMessage(SecurityMessage.LOGIN_DIALOG_CONFIRM);
  }

  confirmAlert({
    title: <InfoIcon />, // Title dialog
    message: msg, // Message dialog
    confirmLabel: confirm, // Text button confirm
    cancelLabel: '',
    onConfirm: confirmAction(), // Action after Confirm
  });

};
