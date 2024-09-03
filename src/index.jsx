import React, { Component, Fragment, createRef } from "react";
import {
  arrayOf,
  bool,
  func,
  instanceOf,
  object,
  shape,
  string,
} from "prop-types";
import { isEmpty, last, get, has, partial, map } from "lodash";
import Dropdown from "./dropdown";

const isElementVisible = (el, container) => {
  if (!el || !container) {
    return false;
  }

  const top = el.offsetTop;
  const bottom = el.offsetTop + el.clientHeight;

  return (
    top >= container.scrollTop &&
    bottom <= container.scrollTop + container.clientHeight
  );
};
const suggestionWorker = () => {
  // This must be ES3 and no importings
  self.onmessage = function ({ data: { value = "", suggestions = [] } }) {
    const valueTail = value.match(
      /[^A-Za-z\d]*(?:[A-Za-z]+\d*\(?[A-Za-z\d,'"]*)*$/g
    )[0];

    if (valueTail) {
      let valueLast;
      let insideFunc = false;
      const valueLastMatch1 = valueTail.match(/[A-Za-z\d]+$/g);
      const valueLastMatch2 = valueTail.match(/[A-Za-z]+\d*\(/g);

      if (valueLastMatch1) {
        [valueLast] = valueLastMatch1.reverse();
      } else if (valueLastMatch2) {
        // in the context of a function
        valueLast = valueLastMatch2.reverse()[0].replace("(", "");
        insideFunc = true;
      } else {
        [valueLast] = Array.from(valueTail).reverse();
      }

      if (insideFunc) {
        suggestions.forEach(({ items }) => {
          const foundItem = items.find(
            ({ title }) => title.toLowerCase() === valueLast.toLowerCase()
          );

          if (foundItem) {
            const { description: itemDescription, docs: itemDocs } = foundItem;
            const result = Object.assign(
              { description: itemDescription },
              itemDocs
            );

            self.postMessage({ result });

            return false;
          }
        });

        return false;
      }

      let maxMatch = 0;
      const matchedGroups = suggestions
        .map(({ items, type, color }) => ({
          items: items
            .map(({ title, description, autocomplete, docs }) => {
              const indexEnd = title
                .toLowerCase()
                .indexOf(valueLast.toLowerCase());
              const matchValue = title.substring(
                0,
                indexEnd + valueLast.length
              );
              const matchSize = matchValue.length;

              if (
                matchSize > 0 &&
                valueTail.toLowerCase().endsWith(matchValue.toLowerCase()) &&
                matchSize < title.length
              ) {
                maxMatch = matchSize > maxMatch ? matchSize : maxMatch;

                if (matchSize >= maxMatch) {
                  return {
                    title,
                    matchSize,
                    description,
                    autocomplete,
                    docs: Object.assign({ description }, docs),
                  };
                }

                return undefined;
              }

              return undefined;
            })
            .filter((item) => !!item),
          type,
          color,
        }))
        .filter(
          ({ items }) =>
            !!items.filter(({ matchSize }) => matchSize === maxMatch).length
        );

      self.postMessage({ matchedGroups });
    }
  };
};

export default class FormulaBar extends Component {
  static propTypes = {
    value: string,
    suggestions: arrayOf(
      shape({
        type: string.isRequired,
        color: string,
        items: arrayOf(
          shape({
            title: string.isRequired,
            description: string,
            autocomplete: string,
            docs: shape({
              signature: string.isRequired,
              example: string,
              args: object,
            }),
          })
        ),
      })
    ),
    onChange: func,
    classes: shape({
      container: string,
      value: string,
      input: string,
      listItem: string,
      listItemLabel: string,
      listItemDescription: string,
      listGroup: string,
    }),
    styles: shape({
      container: func,
      value: func,
      input: func,
      listItem: func,
      listItemLabel: func,
      listItemDescription: func,
      listGroup: func,
    }),
    disabled: bool,
    placeholder: string,
    onFocus: func,
    onBlur: func,
    readonly: bool,
    type: string,
    dropdownPortalTarget: instanceOf(Element),
  };

  static defaultProps = {
    value: "",
    suggestions: [],
    classes: {},
    styles: {
      container: (styles) => styles,
      value: (styles) => styles,
      input: (styles) => styles,
      dropdownContainer: (styles) => styles,
      suggestContent: (styles) => styles,
      listItem: (styles) => styles,
      listItemLabel: (styles) => styles,
      listItemDescription: (styles) => styles,
      listGroup: (styles) => styles,
      docContainer: (styles) => styles,
      docContent: (styles) => styles,
      docSignature: (styles) => styles,
      docExample: (styles) => styles,
      docDescription: (styles) => styles,
      docArg: (styles) => styles,
      docArgName: (styles) => styles,
      docArgDescription: (styles) => styles,
    },
    onChange: () => {},
    disabled: false,
    placeholder: "",
    onFocus: () => {},
    onBlur: () => {},
    readonly: false,
    type: "text",
    dropdownPortalTarget: undefined,
  };

  constructor(props) {
    super(props);

    const { value, suggestions } = this.props;
    this.containerRef = createRef();
    this.dropdownContainerRef = createRef();
    this.state = {
      value,
      display: "none",
      results: suggestions,
      currentDoc: null,
      highlight: [0, 0],
    };
  }

  generateDoc = (value) => {
    const { suggestions } = this.props;
    let result;

    suggestions.forEach(({ items }) => {
      const foundItem = items.find(
        ({ title }) => title.toLowerCase() === value.toLowerCase()
      );

      if (foundItem) {
        result = { description: foundItem.description, ...foundItem.docs };

        return false;
      }
    });

    if (!isEmpty(result)) {
      this.setState({ display: "doc" });
    } else {
      this.setState({ display: "none" });
    }

    this.setState({ highlight: [0, 0] });
    this.setState({ currentDoc: result });
  };

  generateSuggestions = ({ value = "", suggestions }) => {
    const [valueTail] = value.match(
      /[^A-Za-z\d]*(?:[A-Za-z]+\d*\(?[A-Za-z\d,'"]*)*$/g
    );
    let valueLast;
    let insideFunc = false;
    const valueLastMatch1 = valueTail.match(/[A-Za-z\d]+$/g);
    const valueLastMatch2 = valueTail.match(/[A-Za-z]+\d*\(/g);

    if (valueTail.match(/[A-Za-z]+\d*$/g) && valueLastMatch1) {
      [valueLast] = valueLastMatch1.reverse();
    } else if (
      valueTail.match(/[A-Za-z]+\d*\([^\)]*/g) &&
      valueTail.match(/[A-Za-z]+\d*\(/g)
    ) {
      // in the context of a function
      valueLast = valueTail
        .match(/[A-Za-z]+\d*\(/g)
        .reverse()[0]
        .replace("(", "");
      insideFunc = true;
    } else {
      [valueLast] = Array.from(valueTail).reverse();
    }

    if (insideFunc) {
      this.generateDoc(valueLast);

      return false;
    }

    let maxMatch = 0;
    const matchedGroups = suggestions
      .map(({ items, ...props }) => ({
        items: items
          .map(({ title, description, autocomplete, docs }) => {
            const indexEnd = title
              .toLowerCase()
              .indexOf(valueLast.toLowerCase());
            const matchValue = title.substring(0, indexEnd + valueLast.length);
            const matchSize = matchValue.length;

            if (
              matchSize > 0 &&
              valueTail.toLowerCase().endsWith(matchValue.toLowerCase()) &&
              matchSize < title.length
            ) {
              maxMatch = matchSize > maxMatch ? matchSize : maxMatch;

              if (matchSize >= maxMatch) {
                return {
                  title,
                  matchSize,
                  description,
                  autocomplete,
                  docs: { description, ...docs },
                };
              }

              return undefined;
            }

            return undefined;
          })
          .filter((item) => !!item),
        ...props,
      }))
      .filter(
        ({ items }) =>
          !!items.filter(({ matchSize }) => matchSize === maxMatch).length
      );

    if (!matchedGroups.length) {
      this.setState({ display: "none" });
      this.setState({ highlight: [0, 0] });
    } else {
      this.setState({ display: "suggest" });
    }

    this.setState({ results: matchedGroups });
  };

  onChange = ({ target: { value = "" } = {} }) => {
    const { onChange, suggestions } = this.props;

    if (window.Worker) {
      const suggestionWorkerString = suggestionWorker.toString();
      const startIndex = suggestionWorkerString.indexOf("{") + 1;
      const endIndex = suggestionWorkerString.lastIndexOf("}");
      const suggestionWorkerContent = suggestionWorkerString.substring(
        startIndex,
        endIndex
      );
      const blob = new Blob([suggestionWorkerContent], {
        type: "application/javascript",
      });
      const worker = new Worker(URL.createObjectURL(blob));

      worker.postMessage({ value, suggestions });
      worker.onmessage = ({
        data: { matchedGroups = [], result = {} } = {},
      }) => {
        if (!matchedGroups.length) {
          this.setState({ highlight: [0, 0] });

          if (Object.keys(result).length) {
            this.setState({ display: "doc" });
            this.setState({ currentDoc: result });
          } else {
            this.setState({ display: "none" });
          }
        } else {
          this.setState({ display: "suggest" });
        }

        this.setState({ results: matchedGroups });
        worker.terminate();
      };
    } else {
      this.generateSuggestions({ value, suggestions });
    }

    this.setState({ value }, () => onChange(value));
  };

  onKeyDown = (event) => {
    const { key } = event;
    const {
      results,
      highlight: [currentGroupIndex, currentItemIndex],
      display,
      value,
    } = this.state;
    let newGroupIndex = currentGroupIndex;
    let newItemIndex = currentItemIndex;

    switch (key) {
      case "ArrowDown":
        if (display === "suggest" && !isEmpty(results)) {
          event.preventDefault();

          if (
            has(results, [currentGroupIndex, "items", currentItemIndex + 1])
          ) {
            newItemIndex = currentItemIndex + 1;
          } else if (has(results, [currentGroupIndex + 1])) {
            newGroupIndex = currentGroupIndex + 1;
            newItemIndex = 0;
          }

          this.setState({ highlight: [newGroupIndex, newItemIndex] });

          const { type } = get(results, newGroupIndex);
          const { title } = get(results, [
            newGroupIndex,
            "items",
            newItemIndex,
          ]);
          const highlightedItem = document.querySelector(
            `[data-id="${[type, title].join("-")}"]`
          );
          if (
            !isElementVisible(
              highlightedItem,
              this.dropdownContainerRef.current
            )
          ) {
            highlightedItem.scrollIntoView(false);
          }
        }
        break;
      case "ArrowUp":
        if (display === "suggest" && !isEmpty(results)) {
          event.preventDefault();

          if (currentItemIndex > 0) {
            newItemIndex = currentItemIndex - 1;
          } else if (currentGroupIndex > 0) {
            newGroupIndex = currentGroupIndex - 1;
            newItemIndex = get(results, [newGroupIndex, "items"]).length - 1;
          }

          this.setState({ highlight: [newGroupIndex, newItemIndex] });
          const { type } = get(results, newGroupIndex);
          const { title } = get(results, [
            newGroupIndex,
            "items",
            newItemIndex,
          ]);
          const highlightedItem = document.querySelector(
            `[data-id="${[type, title].join("-")}"]`
          );

          if (
            !isElementVisible(
              highlightedItem,
              this.dropdownContainerRef.current
            )
          ) {
            highlightedItem.scrollIntoView();
          }
        }
        break;
      case "Enter":
        event.preventDefault();
        if (display === "suggest") {
          this.onAutocomplete(currentGroupIndex, currentItemIndex);
        } else {
          this.setState({ value });
          this.setState({ display: "none" });
        }

        break;
      case "Tab":
        if (display === "suggest") {
          event.preventDefault();
          this.onAutocomplete(currentGroupIndex, currentItemIndex);
        } else {
          this.setState({ value });
          this.setState({ display: "none" });
        }

        break;
      case "Backspace":
        this.setState({ display: "none" });
        break;
      case "Escape":
        this.setState({ display: "none" });
        break;
      default:
        break;
    }
  };

  onAutocomplete = (groupIndex, itemIndex) => {
    const { results, value } = this.state;
    const [valueTail] = value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g);
    const valueLast = last(valueTail);
    // use autocomplete value or default to title
    const currentTitle =
      get(results, [groupIndex, "items", itemIndex, "autocomplete"]) ||
      get(results, [groupIndex, "items", itemIndex, "title"]);
    const indexEnd = currentTitle
      .toLowerCase()
      .split("")
      .indexOf(valueLast.toLowerCase());
    const matchValue = currentTitle.substring(0, indexEnd + 1);
    const matchSize = matchValue.length;
    const valueSize = value.length;
    const startIndex = valueSize - matchSize;
    this.setState({
      value: `${value.substring(0, startIndex)}${currentTitle}`,
    });

    // show docs if available
    const currentDoc = get(results, [groupIndex, "items", itemIndex, "docs"]);

    if (!isEmpty(currentDoc)) {
      this.setState({ display: "doc" });
      this.setState({ currentDoc });
    } else {
      this.setState({ display: "none" });
    }
  };

  onClickSuggestion = (groupIndex, itemIndex, event) => {
    event.preventDefault();
    this.onAutocomplete(groupIndex, itemIndex);
  };

  onMouseOver = (groupIndex, itemIndex) => {
    this.setState({ highlight: [groupIndex, itemIndex] });
  };

  render() {
    const {
      suggestions,
      classes,
      styles,
      type,
      disabled,
      readonly,
      onFocus,
      onBlur,
      placeholder,
      dropdownPortalTarget,
    } = this.props;

    const {
      container: containerStyle = (styles) => styles,
      value: valueStyle = (styles) => styles,
      input: inputStyle = (styles) => styles,
      dropdownContainer: dropdownContainerStyle = (styles) => styles,
      suggestContent: suggestContentStyle = (styles) => styles,
      listItem: listItemStyle = (styles) => styles,
      listItemLabel: listItemLabelStyle = (styles) => styles,
      listItemDescription: listItemDescriptionStyle = (styles) => styles,
      listGroup: listGroupStyle = (styles) => styles,
      docContent: docContentStyle = (styles) => styles,
      docSignature: docSignatureStyle = (styles) => styles,
      docExample: docExampleStyle = (styles) => styles,
      docDescription: docDescriptionStyle = (styles) => styles,
      docArg: docArgStyle = (styles) => styles,
      docArgName: docArgNameStyle = (styles) => styles,
      docArgDescription: docArgDescriptionStyle = (styles) => styles,
    } = styles;
    const { value, highlight, results, display, currentDoc } = this.state;

    return (
      <div
        ref={this.containerRef}
        className={classes.container}
        style={containerStyle({
          width: "100%",
          height: "34px",
          border: "solid 1px gray",
          position: "relative",
          fontSize: "14px",
          fontFamily: 'Monaco, Courier, "Ubuntu Mono", monospace',
          borderRadius: "5px",
          backgroundColor: "white",
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
                  formula = replace(replace(formula, new RegExp(`\b(${replace(title, /[|\{}()[\]^$+*?.-]/g, '\$&')})\b`, 'g'), `<span style="color:${color}">$1</span>`), '  ', ' &nbsp;');
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
            borderStyle: "none",
            outline: "none",
            width: "100%",
            // padding: '0 6px',
            lineHeight: "34px",
            height: "34px",
            fontSize: "14px",
            fontFamily: "Monaco, Courier",
            position: "absolute",
            top: 0,
            // color: 'transparent',
            caretColor: "black",
            backgroundColor: "transparent",
            overflow: "hidden",
          })}
          readOnly={readonly}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          onFocus={onFocus}
          onBlur={() => {
            this.setState({ display: "none" });
            onBlur(value);
          }}
        />
        <Dropdown
          ref={this.dropdownContainerRef}
          container={dropdownPortalTarget}
          inputContainer={this.containerRef.current}
          className={classes.dropdownContainer}
          styles={dropdownContainerStyle}
          isOpen={display !== "none"}
        >
          {(() => {
            switch (display) {
              case "doc":
                return (
                  <div
                    className={classes.docContent}
                    style={docContentStyle({
                      padding: "6px",
                    })}
                  >
                    <div
                      className={classes.docSignature}
                      style={docSignatureStyle({
                        fontWeight: "bold",
                        lineHeight: "20px",
                        color: "gray",
                      })}
                    >
                      {currentDoc?.signature}
                    </div>
                    <div
                      className={classes.docDescription}
                      style={docDescriptionStyle({
                        lineHeight: "15px",
                        color: "gray",
                      })}
                    >
                      {currentDoc?.description}
                    </div>
                    <div
                      className={classes.docExample}
                      style={docExampleStyle({
                        color: "gray",
                        lineHeight: "20px",
                      })}
                    >
                      {currentDoc?.example
                        ? `Example: ${currentDoc?.example}`
                        : ""}
                    </div>
                    <>
                      {map(currentDoc?.args, (argDesc, argName) => (
                        <div
                          key={["doc", "arg", argName].join("-")}
                          className={classes.docArg}
                          style={docArgStyle({
                            color: "gray",
                          })}
                        >
                          <span
                            className={classes.docArgName}
                            style={docArgNameStyle({
                              fontWeight: "bold",
                            })}
                          >
                            {`${argName}:`}
                          </span>
                          <span
                            className={classes.docDescription}
                            style={docArgDescriptionStyle({
                              paddingLeft: "5px",
                            })}
                          >
                            {argDesc}
                          </span>
                        </div>
                      ))}
                    </>
                  </div>
                );
              case "suggest":
                return (
                  <dl
                    className={classes.suggestContent}
                    style={suggestContentStyle({
                      margin: 0,
                    })}
                  >
                    {results.map(({ type, items }, groupIndex) => (
                      <Fragment key={["suggestion", "group", type].join("-")}>
                        <dt
                          className={classes.listGroup}
                          style={listGroupStyle({
                            fontWeight:
                              groupIndex === highlight[0] ? "bold" : undefined,
                            padding: "0 6px",
                            color: "gray",
                          })}
                        >
                          {type}
                        </dt>
                        {items.map(({ title, description }, itemIndex) => (
                          <dd
                            data-id={[type, title].join("-")}
                            className={classes.listItem}
                            key={[
                              "suggestion",
                              "group",
                              type,
                              "item",
                              title,
                            ].join("-")}
                            style={listItemStyle(
                              {
                                marginLeft: 0,
                                padding: "5px 6px",
                                backgroundColor:
                                  groupIndex === highlight[0] &&
                                  itemIndex === last(highlight)
                                    ? "gainsboro"
                                    : "white",
                                cursor: "pointer",
                              },
                              {
                                groupIndex,
                                itemIndex,
                                highlight,
                                suggestions,
                              }
                            )}
                            onMouseDown={partial(
                              this.onClickSuggestion,
                              groupIndex,
                              itemIndex
                            )}
                            onMouseOver={partial(
                              this.onMouseOver,
                              groupIndex,
                              itemIndex
                            )}
                            onFocus={partial(
                              this.onMouseOver,
                              groupIndex,
                              itemIndex
                            )}
                          >
                            <label
                              className={classes.listItemLabel}
                              style={listItemLabelStyle(
                                {
                                  fontWeight:
                                    groupIndex === highlight[0] &&
                                    itemIndex === last(highlight)
                                      ? "bold"
                                      : undefined,
                                },
                                {
                                  groupIndex,
                                  itemIndex,
                                  highlight,
                                  suggestions,
                                }
                              )}
                            >
                              {title}
                            </label>
                            <i
                              className={classes.listItemDescription}
                              style={listItemDescriptionStyle({
                                paddingLeft: "14px",
                                margin: 0,
                                color: "gray",
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
                return "";
            }
          })()}
        </Dropdown>
      </div>
    );
  }
}
