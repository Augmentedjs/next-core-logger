/**
 * Logger Type
 * @name Type
 * @enum {Symbol}
 * @property {Symbol} CONSOLE The console logger (HTML5 console)
 * @property {Symbol} COLOR_CONSOLE The color console logger (HTML5 console)
 */
const Type = {};
Type.CONSOLE = Symbol("console");
Type.COLOR_CONSOLE = Symbol("colorConsole");

export default Type;