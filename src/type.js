/**
 * Logger Type
 * @name Type
 * @enum {Symbol}
 * @property {Symbol} CONSOLE The console logger (terminal)
 * @property {Symbol} COLOR_CONSOLE The color console logger (terminal)
 * @property {Symbol} BASIC The basic console logger (terminal)
 * @property {Symbol} ICON The icon console logger (terminal)
 */
const Type = {};
Type.CONSOLE = Symbol("console");
Type.COLOR_CONSOLE = Symbol("colorConsole");
Type.BASIC = Symbol("basic");
Type.ICON = Symbol("icon");

export default Type;
