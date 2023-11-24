/**
 * Log function which is only fired in development mode.
 * @param  {Any} args Everything that should be logged, the last element can be a string for a
 *                    specific type of logging ('error', 'warn'). Default is 'log'
 * @return {Void}
 */
export const devlog = (...args) => {
  if (process.env.NODE_ENV !== 'production') {
    if (args && args.length !== 0) {
      const allowedLogTypes = ['error', 'warn'];
      const type = args[args.length - 1];
      const consoleType = allowedLogTypes.indexOf(type) !== -1 ? type : 'log';
      // eslint-disable-next-line no-console
      console[consoleType](...args);
    }
  }
};

export const formatDate = function(timestamp) {
  const date = new Date(timestamp);
  const locale = 'en-us';

  const day = date.getDate();
  const month = date.toLocaleString(locale, { month: 'short' });
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};
