import ConsoleLogger from "./consoleLogger.js";
import ColorConsoleLogger from "./colorConsoleLogger.js";
import BasicLogger from "./basicLogger.js";
import IconLogger from "./iconLogger.js";
import Type from "./type.js";

/**
 * A logger factory for creating a logger instance
 */
class LoggerFactory {
  constructor() {
  };
  /**
   * getLogger - get an instance of a logger
   * @param {Type} type Type of logger instance
   * @param {Level} level Level to set the logger to
   * @returns {AbstractLogger} logger Instance of a logger by istance type
   * @example LoggerFactory.getLogger(Type.CONSOLE, Level.DEBUG);
   */
  static getLogger(type, level) {
    if (type === Type.CONSOLE) {
      return new ConsoleLogger(level);
    } else if (type === Type.COLOR_CONSOLE) {
      return new ColorConsoleLogger(level);
    } else if (type === Type.BASIC) {
      return new BasicLogger(level);
    } else if (type === Type.ICON) {
      return new IconLogger(level);
    }
  };
};

export default LoggerFactory;
