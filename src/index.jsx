import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  isEmpty,
  first,
  map,
  join,
  lowerCase,
  filter,
  startsWith,
  reject,
  eq,
  last,
  gt,
  size,
  get,
  has,
  replace,
  each,
  partial,
} from 'lodash';

const suggestions = [{
  type: 'keyword',
  color: 'red',
  items: [{
    title: 'SUM',
    description: 'this is summary function',
  }, {
    title: 'AVG',
    description: 'this is average function',
  }, {
    title: 'MIN',
    description: 'get the tiny one',
  }, {
    title: 'MAX',
    description: 'get the biggest one',
  }],
}, {
  type: 'variable',
  color: 'blue',
  items: [{
    title: 'SV1',
    description: 'summary variable',
  }, {
    title: 'IV2',
    description: 'indicator variable',
  }, {
    title: 'CV3',
    description: 'column variable',
  }],
}];

export default class FormularBar extends Component {
  static propTypes = {
    value: PropTypes.string,
    suggestions: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      color: PropTypes.string,
      items: PropsTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }))
    }))
  };

  static defaultProps = {
    value: '',
    suggestions: []
  };

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value,
      display: 'none',
      results: suggestions,
      highlight: [0, 0],
    };
  }

  onChange(event) {
    const { target: { value: inputValue } } = event;
    const matchValue = first(inputValue.match(/[A-Za-z0-9]+$/));
    if (isEmpty(matchValue)) {
      this.setState({ display: 'none' });
      this.setState({ highlight: [0, 0] });
    } else {
      const matchedGroups = reject(map(suggestions, ({
        items,
        ...props
      }) => ({
        items: filter(items, ({
          title,
        }) => startsWith(lowerCase(title), lowerCase(matchValue) || matchValue)),
        ...props,
      })), ({ items }) => isEmpty(items));
      if (isEmpty(matchedGroups)) {
        this.setState({ display: 'none' });
        this.setState({ highlight: [0, 0] });
      } else {
        this.setState({ display: 'block' });
      }
      this.setState({ results: matchedGroups });
    }
    this.setState({ value: inputValue });
  }

  onKeyDown(event) {
    const { key } = event;
    const {
      results,
      highlight: [currentGroupIndex, currentItemIndex],
      display,
      value,
    } = this.state;
    switch (key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!isEmpty(results)) {
          if (has(results, [currentGroupIndex, 'items', currentItemIndex + 1])) {
            this.setState({ highlight: [currentGroupIndex, currentItemIndex + 1] });
          } else if (has(results, [currentGroupIndex + 1])) {
            this.setState({ highlight: [currentGroupIndex + 1, 0] });
          }
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isEmpty(results)) {
          if (gt(currentItemIndex, 0)) {
            this.setState({ highlight: [currentGroupIndex, currentItemIndex - 1] });
          } else if (gt(currentGroupIndex, 0)) {
            this.setState({ highlight: [currentGroupIndex - 1, size(get(results, [currentGroupIndex - 1, 'items'])) - 1] });
          }
        }
        break;
      case 'Enter':
        event.preventDefault();
        if (!isEmpty(first(value.match(/[A-Za-z0-9]+$/)))) {
          if (eq(display, 'block')) {
            this.setState({ value: `${replace(value, /[A-Za-z0-9]+$/, '')}${get(results, [currentGroupIndex, 'items', currentItemIndex, 'title'])}` });
          } else {
            this.setState({ value });
          }
          this.setState({ display: 'none' });
        }
        break;
      case 'Tab':
        event.preventDefault();
        if (!isEmpty(first(value.match(/[A-Za-z0-9]+$/)))) {
          if (eq(display, 'block')) {
            this.setState({ value: `${replace(value, /[A-Za-z0-9]+$/, '')}${get(results, [currentGroupIndex, 'items', currentItemIndex, 'title'])}` });
          } else {
            this.setState({ value });
          }
          this.setState({ display: 'none' });
        }
        break;
      case 'Backspace':
        this.setState({ display: 'none' });
        break;
      case 'Escape':
        this.setState({ display: 'none' });
        break;
      default:
        break;
    }
  }

  onClick(groupIndex, itemIndex) {
    const { results, value } = this.state;
    this.setState({ value: `${replace(value, /[A-Za-z0-9]+$/, '')}${get(results, [groupIndex, 'items', itemIndex, 'title'])}` });
    this.setState({ display: 'none' });
  }

  onMouseOver(groupIndex, itemIndex) {
    this.setState({ highlight: [groupIndex, itemIndex] });
  }

  render() {
    const {
      value, highlight, results, display,
    } = this.state;
    return (
      <div
        style={{
          width: '100%',
          height: '1rem',
          border: 'solid 1px black',
          position: 'relative',
          fontSize: '14px',
          fontFamily: 'Monaco',
        }}
      >
        <section
          dangerouslySetInnerHTML={{
            __html: (() => {
              let formula = value;
              each(suggestions, ({
                color,
                items,
              }) => {
                each(items, ({ title }) => {
                  formula = replace(replace(formula, new RegExp(`\\b(${title})\\b`, 'g'), `<span style="color:${color}">$1</span>`), '  ', ' &nbsp;');
                });
              });
              return formula;
            })(),
          }}
        />
        <input
          onChange={this.onChange}
          value={value}
          onKeyDown={this.onKeyDown}
          style={{
            borderStyle: 'none',
            outline: 'none',
            width: '100%',
            padding: 0,
            height: '1rem',
            fontSize: '14px',
            fontFamily: 'Monaco',
            position: 'absolute',
            top: 0,
            color: 'white',
            caretColor: 'black',
            opacity: 0.3,
          }}
        />
        <dl
          style={{
            display,
            top: '1rem',
            position: 'absolute',
            width: '100%',
            margin: 0,
          }}
        >
          {map(results, ({
            type,
            items,
          }, groupIndex) => (
              <Fragment
                key={join(['suggestion', 'group', type], '-')}
              >
                <dt
                  style={{
                    fontWeight: eq(groupIndex, first(highlight)) ? 'bold' : undefined,
                  }}
                >
                  {type}
                </dt>
                {map(items, ({
                  title,
                  description,
                }, itemIndex) => (
                    <dd
                      key={join(['suggestion', 'group', type, 'item', title], '-')}
                      style={{
                        marginLeft: 0,
                      }}
                      onClick={partial(this.onClick, groupIndex, itemIndex)}
                      onMouseOver={partial(this.onMouseOver, groupIndex, itemIndex)}
                    >
                      <label
                        style={{
                          fontWeight: (eq(groupIndex, first(highlight)) && eq(itemIndex, last(highlight))) ? 'bold' : undefined,
                        }}
                      >
                        {title}
                      </label>
                      <i
                        style={{
                          paddingLeft: '1rem',
                          margin: 0,
                          color: 'grey',
                        }}
                      >
                        {description}
                      </i>
                    </dd>
                  ))}
              </Fragment>
            ))}
        </dl>
      </div>
    );
  }
}
