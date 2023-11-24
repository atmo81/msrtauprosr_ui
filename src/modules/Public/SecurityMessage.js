/**
 * Handle locale for security related messages
 * 
 * @author SA
 */


export const LOGIN_DIALOG_CONFIRM        = 'login.dialog.confirm'; 

export const LOGIN_BAD_CREDENTIALS       = 'login.bad.credentials'; //1003, 400-Bad Request
export const LOGIN_GROUP_UNAUTHORIZED    = 'login.group.unauthorized';  // 1006 group permission, 401-Unauthorized
export const LOGIN_USER_UNAUTHORIZED     = 'login.user.unauthorized' // 1004, 403-Forbidden
export const CLIENT_SESSION_EXPIRED      = 'client.session.expired'; // 1005, client time out, hard time out
export const SERVER_SESSION_EXPIRED      = 'server.session.expired'; // 1002, server token timeout
export const SECURITY_ERROR              = 'security.error'; // 1001, default error

export const getMessage = (code, lang='en') => {
  const msg = (lang==='en' ? security_en[code] : security_de[code]);
  return (msg ? msg : code); // return code if not found
}

const security_en = {
  "login.dialog.confirm"      : "Ok, I got it",
  "login.bad.credentials"     : "Bad credentials, check your login!",
  "login.user.unauthorized"   : "Unauthorized user! check your login",
  "login.group.unauthorized"  : "Check with Admin",
  "client.session.expired"    : "Your session has expired. Please login again",
  "server.session.expired"    : "Not a valid session, Please login again!",
  "security.error"            : "Something went wrong, Try again later!"  
}

const security_de = {
  "login.dialog.confirm"      : "Ok, I got it",
  "login.bad.credentials"     : "Bad credentials, check your login!",
  "login.user.unauthorized"   : "Unauthorized user! check your login",
  "login.group.unauthorized"  : "Check with Admin",
  "client.session.expired"    : "Your session has expired. Please login again",
  "server.session.expired"    : "Not a valid session, Please login again!",
  "security.error"            : "Something went wrong, Try again later!"  
}
