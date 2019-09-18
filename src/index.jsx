import React, { useState, Fragment } from 'react';
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

export default function RegularBar() {
  const [value, setValue] = useState('');
  const [display, toggleDisplay] = useState('none');
  const [results, setResults] = useState(suggestions);
  const [highlight, setHighlight] = useState([0, 0]);
  const onChange = (event) => {
    const { target: { value: inputValue } } = event;
    const matchValue = first(inputValue.match(/[A-Za-z0-9]+$/));
    if (isEmpty(matchValue)) {
      toggleDisplay('none');
      setHighlight([0, 0]);
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
        toggleDisplay('none');
        setHighlight([0, 0]);
      } else {
        toggleDisplay('block');
      }
      setResults(matchedGroups);
    }
    setValue(inputValue);
  };
  const onKeyDown = (event) => {
    const { key } = event;
    const currentGroupIndex = first(highlight);
    const currentItemIndex = last(highlight);
    switch (key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!isEmpty(results)) {
          if (has(results, [currentGroupIndex, 'items', currentItemIndex + 1])) {
            setHighlight([currentGroupIndex, currentItemIndex + 1]);
          } else if (has(results, [currentGroupIndex + 1])) {
            setHighlight([currentGroupIndex + 1, 0]);
          }
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isEmpty(results)) {
          if (gt(currentItemIndex, 0)) {
            setHighlight([currentGroupIndex, currentItemIndex - 1]);
          } else if (gt(currentGroupIndex, 0)) {
            setHighlight([currentGroupIndex - 1, size(get(results, [currentGroupIndex - 1, 'items'])) - 1]);
          }
        }
        break;
      case 'Enter':
        event.preventDefault();
        if (!isEmpty(first(value.match(/[A-Za-z0-9]+$/)))) {
          if (eq(display, 'block')) {
            setValue(`${replace(value, /[A-Za-z0-9]+$/, '')}${get(results, [currentGroupIndex, 'items', currentItemIndex, 'title'])}`);
          } else {
            setValue(value);
          }
          toggleDisplay('none');
        }
        break;
      case 'Tab':
        event.preventDefault();
        if (!isEmpty(first(value.match(/[A-Za-z0-9]+$/)))) {
          if (eq(display, 'block')) {
            setValue(`${replace(value, /[A-Za-z0-9]+$/, '')}${get(results, [currentGroupIndex, 'items', currentItemIndex, 'title'])}`);
          } else {
            setValue(value);
          }
          toggleDisplay('none');
        }
        break;
      case 'Backspace':
        toggleDisplay('none');
        break;
      case 'Escape':
        toggleDisplay('none');
        break;
      default:
        break;
    }
  };
  const onClick = (groupIndex, itemIndex) => {
    setValue(`${replace(value, /[A-Za-z0-9]+$/, '')}${get(results, [groupIndex, 'items', itemIndex, 'title'])}`);
    toggleDisplay('none');
  };
  const onMouseOver = (groupIndex, itemIndex) => {
    setHighlight([groupIndex, itemIndex]);
  };

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
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
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
                onClick={partial(onClick, groupIndex, itemIndex)}
                onMouseOver={partial(onMouseOver, groupIndex, itemIndex)}
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
