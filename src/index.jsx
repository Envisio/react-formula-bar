import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  isEmpty,
  first,
  map,
  join,
  toLower,
  filter,
  endsWith,
  split,
  indexOf,
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
  compact,
} from 'lodash';

export default class FormularBar extends Component {
  static propTypes = {
    value: PropTypes.string,
    suggestions: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      color: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      })),
    })),
    onChange: PropTypes.func,
    classes: PropTypes.shape({
      container: PropTypes.string,
      value: PropTypes.string,
      input: PropTypes.string,
      listItem: PropTypes.string,
      listItemLabel: PropTypes.string,
      listItemDescription: PropTypes.string,
      listGroup: PropTypes.string,
    }),
    styles: PropTypes.shape({
      container: PropTypes.obj,
      value: PropTypes.obj,
      input: PropTypes.obj,
      listItem: PropTypes.obj,
      listItemLabel: PropTypes.obj,
      listItemDescription: PropTypes.obj,
      listGroup: PropTypes.obj,
    }),
  };

  static defaultProps = {
    value: '',
    suggestions: [],
    classes: {},
    styles: {
      container: () => ({
        width: '100%',
        height: '34px',
        border: 'solid 1px grey',
        position: 'relative',
        fontSize: '14px',
        fontFamily: 'Monaco',
        borderRadius: '5px',
        backgroundColor: 'white',
      }),
      value: () => ({
        height: '34px',
        lineHeight: '34px',
        padding: '0 6px',
      }),
      input: () => ({
        borderStyle: 'none',
        outline: 'none',
        width: '100%',
        padding: '0 6px',
        lineHeight: '34px',
        height: '34px',
        fontSize: '14px',
        fontFamily: 'Monaco',
        position: 'absolute',
        top: 0,
        color: 'transparent',
        caretColor: 'black',
        backgroundColor: 'transparent',
      }),
      listContainer: ({ display }) => ({
        display,
        top: '34px',
        position: 'absolute',
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
        borderRadius: '5px',
        borderColor: 'grey',
        borderWidth: '1px',
      }),
      listItem: () => ({
        marginLeft: 0,
        borderBottom: 'solid 1px grey',
        padding: '0 6px',
      }),
      listItemLabel: ({
        groupIndex,
        highlight,
        itemIndex,
      }) => ({
        fontWeight: (eq(groupIndex, first(highlight)) && eq(itemIndex, last(highlight))) ? 'bold' : undefined,
      }),
      listItemDescription: () => ({
        paddingLeft: '14px',
        margin: 0,
        color: 'grey',
      }),
      listGroup: ({
        groupIndex,
        highlight,
      }) => ({
        fontWeight: eq(groupIndex, first(highlight)) ? 'bold' : undefined,
        padding: '0 6px',
        color: 'grey',
      }),
    },
    onChange: () => { },
  };

  constructor(props) {
    super(props);
    const { value, suggestions } = this.props;
    this.state = {
      value,
      display: 'none',
      results: suggestions,
      highlight: [0, 0],
    };
  }

  onChange = (event) => {
    const {
      onChange,
      suggestions,
    } = this.props;
    const {
      target: { value },
    } = event;
    const valueTail = first(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
    let valueLast;

    if (valueTail.match(/[A-Za-z\d]+$/g)) {
      valueLast = last(valueTail.match(/[A-Za-z\d]+$/g));
    } else {
      valueLast = last(valueTail);
    }

    let maxMatch = 0;
    const matchedGroups = reject(map(suggestions, ({
      items,
      ...props
    }) => ({
      items: compact(map(items, ({
        title,
        description,
      }) => {
        const indexEnd = toLower(title).indexOf(toLower(valueLast));
        const matchValue = title.substring(0, indexEnd + size(valueLast));
        const matchSize = size(matchValue);

        if (gt(matchSize, 0) && endsWith(toLower(valueTail), toLower(matchValue)) && matchSize < size(title)) {
          maxMatch = matchSize > maxMatch ? matchSize : maxMatch;

          if (matchSize >= maxMatch) {
            return {
              title,
              matchSize,
              description,
            };
          }

          return undefined;
        }

        return undefined;
      })),
      ...props,
    })), ({ items }) => isEmpty(filter(items, ({ matchSize }) => eq(matchSize, maxMatch))));

    if (isEmpty(matchedGroups)) {
      this.setState({ display: 'none' });
      this.setState({ highlight: [0, 0] });
    } else {
      this.setState({ display: 'block' });
    }

    this.setState({ results: matchedGroups });
    this.setState({ value }, () => onChange(value));
  }

  onKeyDown = (event) => {
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

        if (eq(display, 'block')) {
          const valueTail = first(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
          const valueLast = last(valueTail);
          const currentTitle = get(results, [currentGroupIndex, 'items', currentItemIndex, 'title']);
          const indexEnd = indexOf(split(toLower(currentTitle), ''), toLower(valueLast));
          const matchValue = currentTitle.substring(0, indexEnd + 1);
          const matchSize = size(matchValue);
          const valueSize = size(value);
          const startIndex = valueSize - matchSize;
          this.setState({ value: `${value.substring(0, startIndex)}${currentTitle}` });
        } else {
          this.setState({ value });
        }

        this.setState({ display: 'none' });
        break;
      case 'Tab':
        event.preventDefault();

        if (eq(display, 'block')) {
          const valueTail = first(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
          const valueLast = last(valueTail);
          const currentTitle = get(results, [currentGroupIndex, 'items', currentItemIndex, 'title']);
          const indexEnd = indexOf(split(toLower(currentTitle), ''), toLower(valueLast));
          const matchValue = currentTitle.substring(0, indexEnd + 1);
          const matchSize = size(matchValue);
          const valueSize = size(value);
          const startIndex = valueSize - matchSize;
          this.setState({ value: `${value.substring(0, startIndex)}${currentTitle}` });
        } else {
          this.setState({ value });
        }

        this.setState({ display: 'none' });
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

  onClick = (groupIndex, itemIndex) => {
    const {
      results,
      value,
    } = this.state;
    const valueTail = first(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
    const valueLast = last(valueTail);
    const currentTitle = get(results, [groupIndex, 'items', itemIndex, 'title']);
    const indexEnd = indexOf(split(toLower(currentTitle), ''), toLower(valueLast));
    const matchValue = currentTitle.substring(0, indexEnd + 1);
    const matchSize = size(matchValue);
    const valueSize = size(value);
    const startIndex = valueSize - matchSize;
    this.setState({ value: `${value.substring(0, startIndex)}${currentTitle}` });
    this.setState({ display: 'none' });
  }

  onMouseOver = (groupIndex, itemIndex) => {
    this.setState({ highlight: [groupIndex, itemIndex] });
  }

  render() {
    const {
      suggestions,
      classes,
      styles,
    } = this.props;
    const {
      value,
      highlight,
      results,
      display,
    } = this.state;

    return (
      <div
        className={classes.container}
        style={styles.container()}
      >
        <section
          className={classes.value}
          style={styles.value()}
          dangerouslySetInnerHTML={{
            __html: (() => {
              let formula = value;
              each(suggestions, ({
                color,
                items,
              }) => {
                each(items, ({ title }) => {
                  formula = replace(replace(formula, new RegExp(`(${replace(title, /[|\\{}()[\]^$+*?.-]/g, '\\$&')})`, 'g'), `<span style="color:${color}">$1</span>`), '  ', ' &nbsp;');
                });
              });

              return formula;
            })(),
          }}
        />
        <input
          className={classes.input}
          onChange={this.onChange}
          value={value}
          onKeyDown={this.onKeyDown}
          style={styles.input()}
        />
        <dl
          className={classes.listContainer}
          style={styles.listContainer({ display })}
        >
          {map(results, ({
            type,
            items,
          }, groupIndex) => (
            <Fragment key={join(['suggestion', 'group', type], '-')}>
              <dt
                className={classes.listGroup}
                style={styles.listGroup({
                  groupIndex,
                  highlight,
                })}
              >
                {type}
              </dt>
              {map(items, ({
                title,
                description,
              }, itemIndex) => (
                <dd
                  className={classes.listItem}
                  key={join(['suggestion', 'group', type, 'item', title], '-')}
                  style={styles.listItem()}
                  onClick={partial(this.onClick, groupIndex, itemIndex)}
                  onMouseOver={partial(this.onMouseOver, groupIndex, itemIndex)}
                  onFocus={partial(this.onMouseOver, groupIndex, itemIndex)}
                >
                  <label
                    className={classes.listItemLabel}
                    style={styles.listItemLabel({
                      groupIndex,
                      itemIndex,
                      highlight,
                    })}
                  >
                    {title}
                  </label>
                  <i
                    className={classes.listItemDescription}
                    style={styles.listItemDescription()}
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
