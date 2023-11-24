/**
 * General Utilities for
 *  - String
 *  - Date
 *  - locale formatting
 *  - logging
 */

import {getUserSelectedLanguage} from '../components/LanguageSwitcher/locale';
import moment from 'moment';


/** check for empty object */
export const isEmpty = (obj) => {
  if (obj) {

    // check number
    if (typeof obj === 'number')  return false;

    // check date
    if (obj instanceof Date)  return false;

    // check function
    if (obj instanceof Function) return false;

    // check array
    if (obj instanceof Array && obj.length === 0) return true;

    // check object
    let isEmptyObj = true;
    for (let x in obj) {
      isEmptyObj= false;
      break
    }
    if (isEmptyObj) return true;

    // others
    return false;
  }

  // null, undefined, Nan, '', 0, false
  return true;
}

export const isNotEmpty = (obj) => {
  return !isEmpty(obj);
}

/** get request parameter from url */
export const getRequestParam = (param) => {
  const url = new URL(window.location.href);
  return url.searchParams.get(param);
}

/** get request parameter from url - for IE */
export const getRequestParam2 = (param) => {
  const regx = new RegExp('[?&]'+encodeURIComponent(param)+'=([^&]*)');
  const paramValue = regx.exec(window.location.search);
  if (isNotEmpty(paramValue)) {
    return decodeURIComponent(paramValue[1]);
  }
  return null;
}

/** convert string to date */
export const toDate = (d) => {
  var timestamp = Date.parse(d);

  if (isNaN(timestamp)) {
    return toDate2(d);
  } else {
    return new Date(timestamp);
  }
}

// convert yyyymmdd to date
export const toDate2 = (d) => {
  if (isEmpty(d)) return null;
  if (d.length !== 8) return null;
  const yyyy = d.substr(0,4);
  const mm = d.substr(4,2);
  const dd = d.substr(6,2);
  // const strDate = yyyy+'-'+mm+'-'+dd;  // long date converts time zone
  const strDate = mm+'-'+dd+'-'+yyyy;  // use short date to avoid converting time zone
  return new Date(strDate);
}

export const dateDiffInDays = (d1, d2) => {
  try {
    const a = moment(d1);
    const b = moment(d2);
    const days = b.diff(a, 'days');
    return days;
  } catch (error) {
    logger("Can't compute days difference! ", error);
    return 0;
  }
}

export const isDateBefore = (d1, d2) => {
  try {
    const a = moment(d1);
    const b = moment(d2);
    return a.isBefore(b);
  } catch (error) {
    logger("Can't compute if date is before! ", error);
    return false;
  }
}

export const formatDateLocaleMilsec = (date) => {
  if (isEmpty(date)) return "";
  const d = new Date(date);
  return formatDateLocale(toDate(d));
}

export const formatDateLocale = (date) => {
  if (isEmpty(date)) return "";
  const currentLanguge = getUserSelectedLanguage();
  if (currentLanguge.toUpperCase() === 'DE') {
    return date.toLocaleDateString("de-DE");
  } else {
    return date.toLocaleDateString("en-CA");
  }
}

export const formatAmountLocale = (amt) => {
  if (isEmpty(amt)) {
    amt=0;
  }
  let formatAmt = amt;
  if (typeof amt === 'string') {
    formatAmt = parseFloat(amt);
  }
  const currentLanguge = getUserSelectedLanguage();
  const options = {style:'currency', currency: 'CAD'};
  if (currentLanguge.toUpperCase() === 'DE') {
    return formatAmt.toLocaleString("de-DE", options);
  } else {
    return formatAmt.toLocaleString("en-CA", options);
  }
}

export const formatNumberLocale = (num) => {
  const currentLanguge = getUserSelectedLanguage();
  const options = {style:'decimal'};
  if (currentLanguge.toUpperCase() === 'DE') {
    return num.toLocaleString("de-DE", options);
  } else {
    return num.toLocaleString("en-CA", options);
  }
}


export const formatDate = (date) => {
  var year = date.getFullYear(),
      month = date.getMonth() + 1, // months are zero indexed
      day = date.getDate(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds(),
      // hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
      minuteFormatted = minute < 10 ? "0" + minute : minute,
      secondFormatted = second < 10 ? "0" + second : second
      // morning = hour < 12 ? "am" : "pm",
      ;

  return year + "/" + month + "/" + day + " " + hour + ":" + minuteFormatted + ":" + secondFormatted;
}

// return only numbers from string
export const trimNumber = (origNo) => {
  if (isEmpty(origNo)) return origNo;

  let trimNo = (""+origNo).match(/[0-9]/g);
  if (isEmpty(trimNo)) return origNo;
  return trimNo.join('');
}


/** logger */
const logger = (...args) => {
  const prefix = formatDate( new Date() ) + ' ****** ' ;

  // enable only in dev/local

  console.log(
    args[0]?(prefix+args[0]):'',
    args[1]?args[1]:'',
    args[2]?args[2]:'',
    args[3]?args[3]:'',
    args[4]?args[4]:'',
    args[5]?args[5]:'',
  );
}

export default logger;


export function scrollIt(destination, duration = 200, easing = 'linear', callback) {

  const easings = {
    linear(t) {
      return t;
    },

  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

export const getAbsolutePosition = (element) => {
  var top = 0, left = 0;
  do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
  } while(element);

  return {
      top: top,
      left: left
  };
};
