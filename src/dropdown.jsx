import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const INPUT_MARGIN = 4;
const MARGIN = 5;
const MAX_HEIGHT = 300;
const MAX_WIDTH = 700;

function Dropdown({
  container,
  inputContainer,
  children,
  className,
  styles,
  isOpen,
  forwardedRef,
}) {
  if (!inputContainer) {
    return '';
  }

  const { left, bottom } = inputContainer.getBoundingClientRect();
  const pageWidthMax = document.documentElement.clientWidth;
  const pageHeightMax = document.documentElement.clientHeight;
  const maxContainerWidth = Math.min(pageWidthMax - left - MARGIN, MAX_WIDTH);
  const maxContainerHeight = Math.min(MAX_HEIGHT, pageHeightMax - bottom - INPUT_MARGIN - MARGIN);

  if (container && inputContainer) {
    const dropdown = (
      <div
        ref={forwardedRef}
        className={className}
        style={styles({
          display: isOpen ? 'block' : 'none',
          top: bottom + INPUT_MARGIN,
          left,
          position: 'absolute',
          maxHeight: maxContainerHeight,
          maxWidth: maxContainerWidth,
          width: '100%',
          margin: 0,
          backgroundColor: 'white',
          borderRadius: '5px',
          borderColor: 'dimgray',
          borderWidth: '1px',
          borderStyle: 'solid',
          overflowX: 'hidden',
        })}
      >
        {children}
      </div>
    );

    return createPortal(dropdown, container);
  }

  return (
    <div
      ref={forwardedRef}
      className={className}
      style={styles({
        display: isOpen ? 'block' : 'none',
        top: '38px',
        left: '0px',
        position: 'absolute',
        maxHeight: maxContainerHeight,
        maxWidth: maxContainerWidth,
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
        borderRadius: '5px',
        borderColor: 'dimgray',
        borderWidth: '1px',
        borderStyle: 'solid',
        overflowX: 'hidden',
      })}
    >
      {children}
    </div>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node,
  container: PropTypes.instanceOf(Element),
  inputContainer: PropTypes.instanceOf(Element),
  styles: PropTypes.func,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  forwardedRef: PropTypes.shape({
    current: PropTypes.any,
  }),
};

Dropdown.defaultProps = {
  children: undefined,
  container: undefined,
  inputContainer: undefined,
  styles: (styles) => styles,
  className: undefined,
  forwardedRef: undefined,
};

export default forwardRef((props, ref) => (
  <Dropdown {...props} forwardedRef={ref} />
));
