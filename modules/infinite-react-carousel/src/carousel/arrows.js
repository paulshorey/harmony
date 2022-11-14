import React from 'react';
import {
  arrowsDefaultProps as defaultProps,
  arrowsPropTypes as propTypes,
} from './types';

const Arrow = ({
  arrowsScroll,
  // currentSlide,
  clickHandler,
  // slideCount,
  type,
  prevArrow,
  nextArrow,
  arrowsdiv,
}) => {
  const ClickHandler = (options, e) => {
    e.preventDefault();
    clickHandler(options, e);
  };
  const classes = {
    'carousel-arrow': true,
    'block': arrowsdiv,
  };
  const arrowOptions = {
    arrowsScroll,
  };
  if (type === 'prev') {
    Object.assign(classes, {
      'carousel-prev': true,
    });
    if (prevArrow) {
      Object.assign(classes, {
        custom: true,
      });
    }
    Object.assign(arrowOptions, { message: 'previous' });
  } else {
    Object.assign(classes, {
      'carousel-next': true,
    });
    if (nextArrow) {
      Object.assign(classes, {
        custom: true,
      });
    }
    Object.assign(arrowOptions, { message: 'next' });
  }

  const arrowProps = {
    'key': type === 'prev' ? 'carousel-arrow-left' : 'carousel-arrow-right',
    'data-qa': type === 'prev' ? 'carousel-arrow-left' : 'carousel-arrow-right',
    'className': `carousel-arrow carousel-arrow-${
      type === 'prev' ? 'left' : 'right'
    }`,
    'onClick': (e) => ClickHandler(arrowOptions, e),
  };
  // const customProps = {
  //   currentSlide,
  //   slideCount,
  // };
  if (type === 'prev') {
    return (
      <span {...arrowProps}>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </span>
    );
  }
  return (
    <span {...arrowProps}>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
      </svg>
    </span>
  );
};

Arrow.propTypes = propTypes;
Arrow.defaultProps = defaultProps;

const PrevArrow = (props) => <Arrow key="prevArrow" type="prev" {...props} />;
const NextArrow = (props) => <Arrow key="nextArrow" type="next" {...props} />;

export { PrevArrow, NextArrow };
