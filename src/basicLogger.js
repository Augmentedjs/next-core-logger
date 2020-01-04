import Level from "./level.js";
import ConsoleLogger from "./consoleLogger.js";

/**
 * Basic Console Logger (level off extra text)
 * @param {Level} l The level to initialize the logger with
 * @memberof Logger
 * @extends ConsoleLogger
 */
class BasicLogger extends  ConsoleLogger {
  constructor(l) {
    super(l);
    this.loggerLevel = (l) ? l : Level.INFO;
    this.label = Level;
    this.TIME_SEPERATOR = ":";
    this.DATE_SEPERATOR = "-";
    this.OPEN_GROUP = " [ ";
    this.CLOSE_GROUP = " ] ";
  };

  /**
   * log a message with default level
   * @param {string} message The message to log
   * @param {Logger.Level} level The level of the log message
   * @returns {Any} The message
   */
  log(...message) {
    return this.info(...message);
  };

  /**
   * Logs a message in info level
   * @param {Any} message
   */
  info(...message) {
    return this._logMe(Level.INFO, `${this.OPEN_GROUP}INFO  ${this.CLOSE_GROUP}`, ...message);
  };

  /**
   * Log a message in error level
   * @param {Any} message
   */
  error(...message) {
    return this._logMe(Level.ERROR, `${this.OPEN_GROUP}ERROR ${this.CLOSE_GROUP}`, ...message);
  };

  /**
   * Log a message in debug level
   * @param {Any} message
   */
  debug(...message) {
    return this._logMe(Level.DEBUG, `${this.OPEN_GROUP}DEBUG ${this.CLOSE_GROUP}`, ...message);
  };

  /**
   * Log a message in warn level
   * @param {Any} message
   */
  warn(...message) {
    return this._logMe(Level.WARN, `${this.OPEN_GROUP}WARN  ${this.CLOSE_GROUP}`, ...message);
  };
};

export default BasicLogger;
