/**
 * Utility class for global navigation using history
 */
import logger, * as Utils from 'utils/Utils';

// todo: define here paths as constants

let localHistory = null;

/**
 * must be set in the <App> before first use
 * 
 * @param {Object} history the object this.props.history provided by react
 */
export const setHistory= (history) => {
  if (Utils.isEmpty(history)) {
    logger('cannot set, history object is empty!');
    return;
  }
  localHistory = history;
}

const goTo = (page) => {
  if (Utils.isEmpty(localHistory)) {
    logger('history object is empty!');
    return;
  }
  localHistory.push(page);
}
export default goTo;

export const goBack = () => {
  if (Utils.isEmpty(localHistory)) {
    logger('history object is empty!');
    return;
  }
  localHistory.goBack();
}

export const goForward = () => {
  if (Utils.isEmpty(localHistory)) {
    logger('history object is empty!');
    return;
  }
  localHistory.go(+1);
}
