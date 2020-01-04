import Level from "./level.js";

/**
 * Augmented Abstract Logger
 * @param {Level} l The level to initialize the logger with
 * @abstract
 */
class AbstractLogger {
  constructor(l) {
    this.loggerLevel = (l) ? l : Level.INFO;
    this.label = Level;
    this.TIME_SEPERATOR = ":";
    this.DATE_SEPERATOR = "-";
    this.OPEN_GROUP = " [ ";
    this.CLOSE_GROUP = " ] ";
  };

  _getLogTime() {
    const now = new Date();
    const s = `${now.getFullYear()}${this.DATE_SEPERATOR}${(now.getMonth() + 1)}${this.DATE_SEPERATOR}${now.getDate()} ${now.getHours()}${this.TIME_SEPERATOR}${now.getMinutes()}${this.TIME_SEPERATOR}${now.getSeconds()}${this.TIME_SEPERATOR}${now.getMilliseconds()}`;
    return s.padEnd(23, " ");
  };

  /**
   * log a message with default level
   * @param {string} message The message to log
   * @param {Logger.Level} level The level of the log message
   * @returns {Any} The message
   */
  log(...message) {
    return this._logMe(Level.INFO, `${this._getLogTime()}${this.OPEN_GROUP}INFO ${this.CLOSE_GROUP}`, ...message);
  };

  /**
   * Logs a message in info level
   * @param {Any} message
   */
  info(...message) {
    return this._logMe(Level.INFO, `${this._getLogTime()}${this.OPEN_GROUP}INFO ${this.CLOSE_GROUP}`, ...message);
  };

  /**
   * Log a message in error level
   * @param {Any} message
   */
  error(...message) {
    return this._logMe(Level.ERROR, `${this._getLogTime()}${this.OPEN_GROUP}ERROR${this.CLOSE_GROUP}`, ...message);
  };

  /**
   * Log a message in debug level
   * @param {Any} message
   */
  debug(...message) {
    return this._logMe(Level.DEBUG, `${this._getLogTime()}${this.OPEN_GROUP}DEBUG${this.CLOSE_GROUP}`, ...message);
  };

  /**
   * Log a message in warn level
   * @param {Any} message
   */
  warn(...message) {
    return this._logMe(Level.WARN, `${this._getLogTime()}${this.OPEN_GROUP}WARN ${this.CLOSE_GROUP}`, ...message);
  };

  /**
   * logMe method - the actual logger method that logs.  Each instance will have it's own<br/>
   * override this in an instance
   * @example _logMe(message, level) { ... };
   * @method _logMe
   * @param {string} level The level to log to
   * @param {Any} message The message(s) to log
   * @returns {string} The message
   */
   _logMe(level, ...message) {};
};

export default AbstractLogger;
