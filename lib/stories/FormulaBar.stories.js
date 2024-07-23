"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestion = exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _temp = _interopRequireDefault(require("../temp"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import FormulaBar from '../src/index';
var _default = exports["default"] = {
  component: _temp["default"]
};
var suggestion = exports.suggestion = {
  parameters: {
    placeholder: "Try type one of these function name(SUM/AVG/COUNT).",
    suggestions: [{
      type: '',
      color: '',
      items: [{
        title: 'SUM',
        description: ''
      }, {
        title: 'AVG',
        description: ''
      }, {
        title: 'COUNT',
        description: ''
      }]
    }]
  }
};

// export const highlight = {
//   args: {
//     placeholder: "Try type one of these function name(SUM/AVG/COUNT).",
//     suggestions:
//       [{
//         type: '',
//         color: 'blue',
//         items: [{
//           title: 'SUM',
//           description: '',
//         }, {
//           title: 'AVG',
//           description: '',
//         }, {
//           title: 'COUNT',
//           description: '',
//         }],
//       }]

//   }
// }

// export const description = {
//   args: {
//     placeholder: "Try type one of these function name(SUM/AVG/COUNT).",
//     suggestions:
//       [{
//         type: '',
//         color: 'blue',
//         items: [{
//           title: 'SUM',
//           description: 'Summary function',
//         }, {
//           title: 'AVG',
//           description: 'Average function',
//         }, {
//           title: 'COUNT',
//           description: 'Count function',
//         }],
//       }]

//   }
// }

// export const group = {
//   args: {

//     placeholder: "Try type one of these function name(SUM/AVG/COUNT) or any variable type(Number/String/Boolean).",
//     suggestions: [{
//       type: 'Function',
//       color: 'blue',
//       items: [{
//         title: 'SUM',
//         description: 'Summary function',
//       }, {
//         title: 'AVG',
//         description: 'Average function',
//       }, {
//         title: 'COUNT',
//         description: 'Count function',
//       }],
//     }, {
//       type: 'Variable',
//       color: 'cyan',
//       items: [{
//         title: 'Number',
//         description: 'Number type',
//       }, {
//         title: 'String',
//         description: 'String type',
//       }, {
//         title: 'Boolean',
//         description: 'Boolean type',
//       }],
//     }],
//   }
// }

// export const style = {
//   args: {
//     placeholder: "Try type one of these function name(SUM/AVG/COUNT).",
//     suggestions: [{
//       type: '',
//       color: 'purple',
//       items: [{
//         title: 'SUM',
//         description: 'Summary function',
//       }, {
//         title: 'AVG',
//         description: 'Average function',
//       }, {
//         title: 'COUNT',
//         description: 'Count function',
//       }],
//     }]
//   },
//   styles: {
//     listItem: (defaultStyles, {
//       groupIndex,
//       suggestions,
//     }) => ({
//       ...defaultStyles,
//       backgroundColor: suggestions[groupIndex].color,
//     }),
//   }
// }

// export const documentation = {
//   args: {
//     placeholder: "Try type one of these function name(SUM/CONCAT/CONTAINS).",
//     suggestions: [{
//       type: 'Functions',
//       color: 'purple',
//       items: [{
//         title: 'CONCAT',
//         description: 'Combines multiple strings together',
//         autocomplete: 'CONCAT(',
//         docs: {
//           signature: 'CONCAT(value1, [value2, ...])',
//           example: 'MAX($A, 1, "hello")',
//           args: {
//             value1: 'The first string to be combined',
//             '[value2, ...]': '(optional) Additional strings to combine',
//           },
//         },
//       },
//       {
//         title: 'CONTAINS',
//         description: 'Checks to see if a string is a substring of another string',
//         autocomplete: 'CONTAINS(',
//         docs: {
//           signature: 'CONTAINS(substring, full_string)',
//           example: 'CONTAINS("bear", "polar bear")',
//           args: {
//             substring: 'The string you want to search for',
//             full_string: 'The string being searched for the substring',
//           },
//         },
//       },
//       {
//         title: 'SUM',
//         description: 'Adds all the given values together',
//         autocomplete: 'SUM(',
//         docs: {
//           signature: 'SUM(value1, [value2, ...])',
//           example: 'SUM($A, 1, 2)',
//           args: {
//             value1: 'The first number to add',
//             '[value2, ...]': '(optional) Additional numbers to add',
//           },
//         },
//       }],
//     }]
//   },
// }