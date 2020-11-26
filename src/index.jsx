import React, { Component, Fragment, createRef } from 'react';
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
  find,
  pickBy,
} from 'lodash';
import Dropdown from './dropdown';

export default class FormulaBar extends Component {
  static propTypes = {
    value: PropTypes.string,
    suggestions: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      color: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        autocomplete: PropTypes.string,
        docs: PropTypes.shape({
          signature: PropTypes.string.isRequired,
          example: PropTypes.string,
          args: PropTypes.object,
        }),
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
      container: PropTypes.func,
      value: PropTypes.func,
      input: PropTypes.func,
      listItem: PropTypes.func,
      listItemLabel: PropTypes.func,
      listItemDescription: PropTypes.func,
      listGroup: PropTypes.func,
    }),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    readonly: PropTypes.bool,
    type: PropTypes.string,
    dropdownPortalTarget: PropTypes.instanceOf(Element),
  };

  static defaultProps = {
    value: '',
    suggestions: [],
    classes: {},
    styles: {
      container: styles => styles,
      value: styles => styles,
      input: styles => styles,
      dropdownContainer: styles => styles,
      suggestContent: styles => styles,
      listItem: styles => styles,
      listItemLabel: styles => styles,
      listItemDescription: styles => styles,
      listGroup: styles => styles,
      docContainer: styles => styles,
      docContent: styles => styles,
      docSignature: styles => styles,
      docExample: styles => styles,
      docDescription: styles => styles,
      docArg: styles => styles,
      docArgName: styles => styles,
      docArgDescription: styles => styles,
    },
    onChange: () => { },
    disabled: false,
    placeholder: '',
    onBlur: () => { },
    readonly: false,
    type: 'text',
    dropdownPortalTarget: undefined,
  };

  constructor(props) {
    super(props);
    const { value, suggestions } = this.props;
    this.containerRef = createRef();
    this.state = {
      value,
      display: 'none',
      results: suggestions,
      currentDoc: null,
      highlight: [0, 0],
    };
  }

  generateDoc = (value) => {
    const { suggestions } = this.props;
    let result;

    each(suggestions, ({ items }) => {
      const foundItem = find(items, ({ title }) => toLower(title) === toLower(value));
      if (foundItem) {
        result = pickBy({
          description: foundItem.description,
          ...foundItem.docs,
        });
        return false;
      }
    });

    if (!isEmpty(result)) {
      this.setState({ display: 'doc' });
    } else {
      this.setState({ display: 'none' });
    }

    this.setState({ highlight: [0, 0] });
    this.setState({ currentDoc: result });
  }

  generateSuggestions = (event, cursorPos) => {
    const { suggestions } = this.props;
    const {
      target: {
        value,
      },
    } = event;
    const valueTail = first(value.match(/[^A-Za-z\d]*(?:[A-Za-z]+\d*\(?[A-Za-z\d,'"]*)*$/g));
    let valueLast;
    let insideFunc = false;

    if (valueTail.match(/[A-Za-z]+\d*$/g)) {
      valueLast = last(valueTail.match(/[A-Za-z\d]+$/g));
    } else if (valueTail.match(/[A-Za-z]+\d*\([^\)]*/g)) {
      // in the context of a function
      valueLast = replace(last(valueTail.match(/[A-Za-z]+\d*\(/g)), '(', '');
      insideFunc = true;
    } else {
      valueLast = last(valueTail);
    }

    if (insideFunc) {
      this.generateDoc(valueLast);
      return false;
    }

    let maxMatch = 0;
    const matchedGroups = reject(map(suggestions, ({
      items,
      ...props
    }) => ({
      items: compact(map(items, ({
        title,
        description,
        autocomplete,
        docs,
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
              autocomplete,
              docs: pickBy({
                description,
                ...docs,
              }),
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
      this.setState({ display: 'suggest' });
    }

    this.setState({ results: matchedGroups });
  }

  onChange = (event) => {
    const { onChange } = this.props;
    const {
      target: { value },
    } = event;
    this.generateSuggestions(event);
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
        if (eq(display, 'suggest')) {
          this.onAutocomplete(currentGroupIndex, currentItemIndex);
        } else {
          this.setState({ value });
          this.setState({ display: 'none' });
        }

        break;
      case 'Tab':
        if (eq(display, 'suggest')) {
          event.preventDefault();
          this.onAutocomplete(currentGroupIndex, currentItemIndex);
        } else {
          this.setState({ value });
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

  onAutocomplete = (groupIndex, itemIndex) => {
    const {
      results,
      value,
    } = this.state;
    const valueTail = first(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g));
    const valueLast = last(valueTail);
    // use autocomplete value or default to title
    const currentTitle = get(results, [groupIndex, 'items', itemIndex, 'autocomplete']) ||
      get(results, [groupIndex, 'items', itemIndex, 'title']);
    const indexEnd = indexOf(split(toLower(currentTitle), ''), toLower(valueLast));
    const matchValue = currentTitle.substring(0, indexEnd + 1);
    const matchSize = size(matchValue);
    const valueSize = size(value);
    const startIndex = valueSize - matchSize;
    this.setState({ value: `${value.substring(0, startIndex)}${currentTitle}` });

    // show docs if available
    const currentDoc = get(results, [groupIndex, 'items', itemIndex, 'docs']);

    if (!isEmpty(currentDoc)) {
      this.setState({ display: 'doc' });
      this.setState({ currentDoc })
    } else {
      this.setState({ display: 'none' });
    }
  }

  onClickSuggestion = (groupIndex, itemIndex) => {
    this.onAutocomplete(groupIndex, itemIndex);
  }

  onMouseOver = (groupIndex, itemIndex) => {
    this.setState({ highlight: [groupIndex, itemIndex] });
  }

  render() {
    const {
      suggestions,
      classes,
      styles,
      type,
      disabled,
      readonly,
      onBlur,
      placeholder,
      dropdownPortalTarget,
    } = this.props;

    const {
      container: containerStyle = styles => styles,
      value: valueStyle = styles => styles,
      input: inputStyle = styles => styles,
      dropdownContainer: dropdownContainerStyle = styles => styles,
      suggestContent: suggestContentStyle = styles => styles,
      listItem: listItemStyle = styles => styles,
      listItemLabel: listItemLabelStyle = styles => styles,
      listItemDescription: listItemDescriptionStyle = styles => styles,
      listGroup: listGroupStyle = styles => styles,
      docContainer: docContainerStyle = styles => styles,
      docContent: docContentStyle = styles => styles,
      docSignature: docSignatureStyle = styles => styles,
      docExample: docExampleStyle = styles => styles,
      docDescription: docDescriptionStyle = styles => styles,
      docArg: docArgStyle = styles => styles,
      docArgName: docArgNameStyle = styles => styles,
      docArgDescription: docArgDescriptionStyle = styles => styles,
    } = styles;
    const {
      value,
      highlight,
      results,
      display,
      currentDoc,
    } = this.state;

    return (
      <div
        ref={this.containerRef}
        className={classes.container}
        style={containerStyle({
          width: '100%',
          height: '34px',
          border: 'solid 1px gray',
          position: 'relative',
          fontSize: '14px',
          fontFamily: 'Monaco, Courier, "Ubuntu Mono", monospace',
          borderRadius: '5px',
          backgroundColor: 'white',
        })}
      >
        {/* <section
          className={classes.value}
          style={valueStyle({
            height: '34px',
            lineHeight: '34px',
            padding: '0 6px',
            overflow: 'hidden',
          })}
          dangerouslySetInnerHTML={{
            __html: (() => {
              let formula = value;
              each(suggestions, ({
                color,
                items,
              }) => {
                each(items, ({ title }) => {
                  formula = replace(replace(formula, new RegExp(`\\b(${replace(title, /[|\\{}()[\]^$+*?.-]/g, '\\$&')})\\b`, 'g'), `<span style="color:${color}">$1</span>`), '  ', ' &nbsp;');
                });
              });

              return formula;
            })(),
          }}
        /> */}
        <input
          className={classes.input}
          onChange={this.onChange}
          value={value}
          onKeyDown={this.onKeyDown}
          style={inputStyle({
            borderStyle: 'none',
            outline: 'none',
            width: '100%',
            // padding: '0 6px',
            lineHeight: '34px',
            height: '34px',
            fontSize: '14px',
            fontFamily: 'Monaco, Courier',
            position: 'absolute',
            top: 0,
            // color: 'transparent',
            caretColor: 'black',
            backgroundColor: 'transparent',
            overflow: 'hidden'
          })}
          readOnly={readonly}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          onBlur={() => {
            this.setState({ display: 'none' });
            onBlur(value);
          }}
        />
        <Dropdown
          container={dropdownPortalTarget}
          inputContainer={this.containerRef.current}
          className={classes.dropdownContainer}
          styles={dropdownContainerStyle}
          isOpen={display !== 'none'}
        >
          {(() => {
            switch (display) {
              case 'doc':
                return (
                  <div
                    className={classes.docContent}
                    style={docContentStyle({
                      padding: '6px'
                    })}
                  >
                    <div
                      className={classes.docSignature}
                      style={docSignatureStyle({
                        fontWeight: 'bold',
                        lineHeight: '20px',
                        color: 'gray',
                      })}
                    >
                      {currentDoc?.signature}
                    </div>
                    <div
                      className={classes.docDescription}
                      style={docDescriptionStyle({
                        lineHeight: '15px',
                        color: 'gray',
                      })}
                    >
                      {currentDoc?.description}
                    </div>
                    <div
                      className={classes.docExample}
                      style={docExampleStyle({
                        color: 'gray',
                        lineHeight: '20px',
                      })}
                    >
                      {currentDoc?.example ? `Example: ${currentDoc?.example}` : ''}
                    </div>
                    <>
                      {map(currentDoc?.args, (argDesc, argName) => (
                        <div
                          key={join(['doc', 'arg', argName], '-')}
                          className={classes.docArg}
                          style={docArgStyle({
                            color: 'gray',
                          })}
                        >
                          <span
                            className={classes.docArgName}
                            style={docArgNameStyle({
                              fontWeight: 'bold',
                            })}
                          >
                            {`${argName}:`}
                          </span>
                          <span
                            className={classes.docDescription}
                            style={docDescriptionStyle({
                              paddingLeft: '5px',
                            })}
                          >
                            {argDesc}
                          </span>
                        </div>
                      ))}
                    </>
                  </div>
                )
              case 'suggest':
                return (
                  <dl
                    className={classes.suggestContent}
                    style={suggestContentStyle({
                      margin: 0,
                    })}
                  >
                    {map(results, ({
                      type,
                      items,
                    }, groupIndex) => (
                        <Fragment key={join(['suggestion', 'group', type], '-')}>
                          <dt
                            className={classes.listGroup}
                            style={listGroupStyle({
                              fontWeight: eq(groupIndex, first(highlight)) ? 'bold' : undefined,
                              padding: '0 6px',
                              color: 'gray',
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
                                style={listItemStyle({
                                  marginLeft: 0,
                                  padding: '0 6px',
                                  lineHeight: '28px',
                                  backgroundColor: (eq(groupIndex, first(highlight)) && eq(itemIndex, last(highlight))) ? 'gainsboro' : 'white',
                                  cursor: 'pointer',
                                }, {
                                  groupIndex,
                                  itemIndex,
                                  highlight,
                                  suggestions,
                                })}
                                onClick={partial(this.onClickSuggestion, groupIndex, itemIndex)}
                                onMouseOver={partial(this.onMouseOver, groupIndex, itemIndex)}
                                onFocus={partial(this.onMouseOver, groupIndex, itemIndex)}
                              >
                                <label
                                  className={classes.listItemLabel}
                                  style={listItemLabelStyle({ fontWeight: (eq(groupIndex, first(highlight)) && eq(itemIndex, last(highlight))) ? 'bold' : undefined }, {
                                    groupIndex,
                                    itemIndex,
                                    highlight,
                                    suggestions,
                                  })}
                                >
                                  {title}
                                </label>
                                <i
                                  className={classes.listItemDescription}
                                  style={listItemDescriptionStyle({
                                    paddingLeft: '14px',
                                    margin: 0,
                                    color: 'gray',
                                  })}
                                >
                                  {description}
                                </i>
                              </dd>
                            ))}
                        </Fragment>
                      ))}
                  </dl>
                );
              default:
                return '';
            }
          })()}
        </Dropdown>
      </div>
    );
  }
}
