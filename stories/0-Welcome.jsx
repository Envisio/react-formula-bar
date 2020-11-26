import React from 'react';
import FormulaBar from '../src/index';

export default {
  title: 'Formula Bar',
};

export const suggestion = () => (
  <FormulaBar
    placeholder="Try type one of these function name(SUM/AVG/COUNT)."
    suggestions={[{
      type: '',
      color: '',
      items: [{
        title: 'SUM',
        description: '',
      }, {
        title: 'AVG',
        description: '',
      }, {
        title: 'COUNT',
        description: '',
      }],
    }]}
  />
);

suggestion.story = {
  name: 'Suggestions',
};

export const highlight = () => (
  <FormulaBar
    placeholder="Try type one of these function name(SUM/AVG/COUNT)."
    suggestions={[{
      type: '',
      color: 'blue',
      items: [{
        title: 'SUM',
        description: '',
      }, {
        title: 'AVG',
        description: '',
      }, {
        title: 'COUNT',
        description: '',
      }],
    }]}
  />
);

highlight.story = {
  name: 'Syntax Highlight',
};

export const description = () => (
  <FormulaBar
    placeholder="Try type one of these function name(SUM/AVG/COUNT)."
    suggestions={[{
      type: '',
      color: 'blue',
      items: [{
        title: 'SUM',
        description: 'Summary function',
      }, {
        title: 'AVG',
        description: 'Average function',
      }, {
        title: 'COUNT',
        description: 'Count function',
      }],
    }]}
  />
);

description.story = {
  name: 'Keywords Description',
};

export const group = () => (
  <FormulaBar
    placeholder="Try type one of these function name(SUM/AVG/COUNT) or any variable type(Number/String/Boolean)."
    suggestions={[{
      type: 'Function',
      color: 'blue',
      items: [{
        title: 'SUM',
        description: 'Summary function',
      }, {
        title: 'AVG',
        description: 'Average function',
      }, {
        title: 'COUNT',
        description: 'Count function',
      }],
    }, {
      type: 'Variable',
      color: 'cyan',
      items: [{
        title: 'Number',
        description: 'Number type',
      }, {
        title: 'String',
        description: 'String type',
      }, {
        title: 'Boolean',
        description: 'Boolean type',
      }],
    }]}
  />
);

group.story = {
  name: 'Group Keywords',
};

export const style = () => (
  <FormulaBar
    placeholder="Try type one of these function name(SUM/AVG/COUNT)."
    suggestions={[{
      type: '',
      color: 'purple',
      items: [{
        title: 'SUM',
        description: 'Summary function',
      }, {
        title: 'AVG',
        description: 'Average function',
      }, {
        title: 'COUNT',
        description: 'Count function',
      }],
    }]}
    styles={{
      listItem: (defaultStyles, {
        groupIndex,
        suggestions,
      }) => ({
        ...defaultStyles,
        backgroundColor: suggestions[groupIndex].color,
      }),
    }}
  />
);

style.story = {
  name: 'Custom Styles',
};

export const documentation = () => (
  <FormulaBar
    placeholder="Try type one of these function name(SUM/CONCAT/CONTAINS)."
    suggestions={[{
      type: 'Functions',
      color: 'purple',
      items: [{
        title: 'CONCAT',
        description: 'Combines multiple strings together',
        autocomplete: 'CONCAT(',
        docs: {
          signature: 'CONCAT(value1, [value2, ...])',
          example: 'MAX($A, 1, "hello")',
          args: {
            value1: 'The first string to be combined',
            '[value2, ...]': '(optional) Additional strings to combine',
          },
        },
      },
      {
        title: 'CONTAINS',
        description: 'Checks to see if a string is a substring of another string',
        autocomplete: 'CONTAINS(',
        docs: {
          signature: 'CONTAINS(substring, full_string)',
          example: 'CONTAINS("bear", "polar bear")',
          args: {
            substring: 'The string you want to search for',
            full_string: 'The string being searched for the substring',
          },
        },
      },
      {
        title: 'SUM',
        description: 'Adds all the given values together',
        autocomplete: 'SUM(',
        docs: {
          signature: 'SUM(value1, [value2, ...])',
          example: 'SUM($A, 1, 2)',
          args: {
            value1: 'The first number to add',
            '[value2, ...]': '(optional) Additional numbers to add',
          },
        },
      }],
    }]}
  />
);

documentation.story = {
  name: 'Documentation',
};
