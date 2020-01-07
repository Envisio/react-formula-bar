import React from 'react';
import FormularBar from '../src/index';

export default {
  title: 'Formular Bar',
};

export const suggestion = () => (
  <FormularBar
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
  <FormularBar
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
  <FormularBar
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
  <FormularBar
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
  <FormularBar
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
