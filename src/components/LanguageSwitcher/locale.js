import Lockr from 'lockr';

const LANGUAGE_KEY_LOCALSTORAGE = 'LanguageSwitcher:language';

/**
 * Get user's language.
 *
 * Different browsers have the user locale defined on different fields on the `navigator` object,
 * so we make sure to account for these different by checking all of them.
 * window.navigator.userLanguage is IE only and it's the language set in Windows Control
 * Panel - Regional Options and NOT browser language
 *
 * @return {String} User's current language (e.g. en)
 */
export const getUsersDefaultLanguage = () => {
  const lang =
    (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

  return lang.split('-')[0];
};

export const getUserSelectedLanguage = () => {
  const storedLanguage = Lockr.get(LANGUAGE_KEY_LOCALSTORAGE);
  
  return storedLanguage !== undefined && storedLanguage !== ''
    ? storedLanguage
    : getUsersDefaultLanguage();
};

export const setUserSelectedLanguage = locale => {
  Lockr.set(LANGUAGE_KEY_LOCALSTORAGE, locale);
};

export const removeUserSelectedLanguage = () => {
  Lockr.rm(LANGUAGE_KEY_LOCALSTORAGE);
};
