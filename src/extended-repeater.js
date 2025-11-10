const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', {
 *    repeatTimes: 3,
 *    separator: '**',
 *    addition: 'PLUS',
 *    additionRepeatTimes: 3,
 *    additionSeparator: '00'
 * })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let additionPart =
    options.addition ||
    (String(options.addition) && String(options.addition) !== "undefined")
      ? new Array(options.additionRepeatTimes)
          .fill(String(options.addition))
          .join(options.additionSeparator || "|")
      : "";

  const mainPart = String(str) + additionPart;

  return new Array(options.repeatTimes)
    .fill(mainPart)
    .join(options.separator || "+");
}

module.exports = {
  repeater,
};
