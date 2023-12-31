
import { getUserSelectedLanguage } from 'components/LanguageSwitcher/locale';
import Timeout from './Timeout';

import {invalidSession} from '../../store/SecurityStore'
import goTo from '../../utils/HistoryUtil';

import logger, * as Utils from 'utils/Utils';

/*
  const BASE_URL = process.env['GATEWAY_URL'].trim();
  const BASE_OAUTH_URL = process.env['GATEWAY_OAUTH_URL'].trim();
  const OAUTH_USERNAME = process.env['USERNAME_OAUTH_URL'].trim();
  const OAUTH_PASSWORD = process.env['PWD_OAUTH_URL'].trim();

*/

  const BASE_URL = "http://34.212.29.229:8888/msrtauprosr/api/user/check/";
  const BASE_OAUTH_URL = "";
  const OAUTH_USERNAME = "";
  const OAUTH_PASSWORD = "";

export const hash = new Buffer(`${OAUTH_USERNAME}:${OAUTH_PASSWORD}`).toString('base64');

/** authenticate user */
export const loginFormData = (userName, password) => {
  const loginUrl = `${BASE_OAUTH_URL}/api/user/isauth/`;

  let form = new FormData();
  form.append('username', userName);
  form.append('password', password);
  form.append('grant_type', 'password');

  const requestOptions = {
    method: 'POST',
    headers: {
      authorization: `Basic ${hash}`,
    },
    body: form,
  };

  return fetch(loginUrl, requestOptions);

};

export const login = (userName, password) => {

    return fetch(BASE_URL + '/' + userName + '/' + password)
      .then((res) => res.json())
      .then((data) => {
        return  data;
      })

}

/** authenticate user */
export const loginApi = (userName, password) => {
  const loginUrl = `${BASE_OAUTH_URL}/api/user/isauth/`;
  const jsonParam = { 'username': userName, 'password':password} ;

  const requestOptions = {
    method: 'POST',
    headers: {
      authorization: `Basic ${hash}`,
      'Content-Type': `application/json`,
    },
    body: JSON.stringify(jsonParam),
  };

  return fetch(loginUrl , requestOptions)
    .then(response => {

      switch (response.status) {
        case 200:
          break;
        case 201:
          break;
        case 400:
          throw new Error(`Load API Failed.`);
        case 404:
          throw new Error(`Seems like we could not find your requested api?`);
        default:
          throw new Error(`There seems to be an issue with the server.`);
      }
      return response;
    })
    .then
    .catch(function(error){
        console.log(error);
    });
};

export const checkGroupPermission = () => {
  const groupPermissionUrl = `${BASE_OAUTH_URL}/txn/api/check/useraccess` + getAccessToken();  // status check if allowed to access
  return fetch(groupPermissionUrl);
};


export const renewAccessToken = () => {
  const request = new Request(
    BASE_OAUTH_URL +
    '/oauth/token?grant_type=refresh_token&refresh_token=' +
    window.sessionStorage.getItem('refresh_token'),
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Basic ${hash}`,
        mode: 'cors'
      }),
    }
  );

  return fetch(request);
};


export const deleteAccessToken = (accessToken) => {
  const request = new Request(
    BASE_OAUTH_URL +
    '/oauth/token?access_token=' +
    accessToken,
    {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Basic ${hash}`,
        mode: 'cors'
      }),
    }
  );

  return fetch(request);
};

export const logout = () => {
  deleteAccessToken(window.sessionStorage.getItem('access_token')).then(() => {
    clearSession();  // reset all entries
    goTo('/login');
  })
};

export const clearSession = () => {
  sessionStorage.clear();  // reset all entries
}

export const isSessionValid = () => {
  //Check if the tokens available in session Storage
  if (!window.sessionStorage.access_token) return false;
  if (!window.sessionStorage.refresh_token) return false;

  //calculation for the time out period
  let timeout = Timeout.sessionTimeout;  // minutes
  if (timeout < 0) {
    return true; // no expiry
  }

  let now = new Date();
  let token_validity = new Date(window.sessionStorage.getItem('expires_in'));
  token_validity.setMinutes(token_validity.getMinutes() + timeout);

  if (now.getTime() > token_validity.getTime()) {
    //User passed the time out period, so invalidate the session
    invalidSession();
  } else {
    return true;
  }
};

// if not login, redirect to login page
export const checkUserLogin = () => {
  if ( !isUserLoggedIn() ) {
    goTo('/login');
    return false;
  }
  return true;
};

export const isUserLoggedIn = () => {
  return true; // Disabled due to remove authentication for first phase
  // (Utils.isNotEmpty(sessionStorage.access_token) && Utils.isNotEmpty(sessionStorage.refresh_token))
};

export const saveAccessTokens = function(data, isResetExpiry=true) {
  //sessionStorage.setItem('access_token', data.access_token);
  //sessionStorage.setItem('refresh_token', data.refresh_token);
  sessionStorage.setItem('access_token', data);
  sessionStorage.setItem('refresh_token', data);
  //Adding the expiration of tokens
  if (isResetExpiry) {
    sessionStorage.setItem('expires_in', new Date());
  }
};

export const revokeAccessTokens = function() {
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('refresh_token');
  sessionStorage.removeItem('expires_in');
};

export const getAccessToken = () => {
  return `?access_token=${window.sessionStorage.getItem("access_token")}`;
}
