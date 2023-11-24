import 'whatwg-fetch';
import services from '../config/services';

// unused ??

// Default localhost (including port) for local development.
const LOCALHOST = 'localhost:3000';

const SERVICE_HOST_ENV_VAR = 'GATEWAY_URL';
const SERVICE_HOST_OAUTH_ENV_VAR = 'GATEWAY_OAUTH_URL';
/**
 * Wrapper function for sending a XHR request. Hostname will automatically
 * be filled in for local development.
 * @see: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 * @param {String} url          Relative url path for XHR request
 * @param {Object} [options={}] Several config options for request
 * @return {Promise}            Promise object returned by the fetch method
 */
export const sendRequest = (serviceUrl, options = {}) => {
  let url = serviceUrl;

  if (url === undefined || typeof url !== 'string') {
    console.error('Missing or incorrect url parameter.');
    return;
  }

  if (url.substr(0, 1) !== '/' && !url.startsWith('http')) {
    console.error('Url parameter needs to start with a slash.');
    return;
  }

  // If the url already starts with a protocol, do not change it.
  if (url.startsWith('http')) {
    // TODO: rewrite function to remove this url=url
    // url = url;
  } else if (!(SERVICE_HOST_ENV_VAR in process.env)) {
    // If this environment variable does not exist, assume we are doing local development
    url = `${window.location.protocol}//${LOCALHOST}${url}`;
  } else {
    const serviceHost = process.env[SERVICE_HOST_ENV_VAR].trim();
    url = serviceHost.startsWith('http')
      ? `${serviceHost}${url}`
      : `${window.location.protocol}//${serviceHost}${url}`;
  }

  return fetch(url, options);
};

export const getRequestConfig = serviceId => {
  if (!serviceId) {
    console.error('Service ID is missing.');
    return;
  }

  if (typeof serviceId !== 'string') {
    console.error('Service ID needs to be a string.');
    return;
  }

  if (!(serviceId in services)) {
    console.error(`The service ID "${serviceId}" was not found in services config.`);
    return;
  }

  return { ...services[serviceId] };
};
