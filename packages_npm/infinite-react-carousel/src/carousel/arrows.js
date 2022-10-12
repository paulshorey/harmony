import React from 'react';
import classnames from 'classnames';
import { arrowsDefaultProps as defaultProps, arrowsPropTypes as propTypes } from './types';

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
    'className': `carousel-arrow carousel-arrow-${type === 'prev' ? 'left' : 'right'}`,
    'onClick': (e) => ClickHandler(arrowOptions, e),
  };
  // const customProps = {
  //   currentSlide,
  //   slideCount,
  // };
  return (
    <span {...arrowProps}>
      <span>
        <span className={`icon icon-angle-${type === 'prev' ? 'left' : 'right'}`} />
      </span>
    </span>
  );
};

Arrow.propTypes = propTypes;
Arrow.defaultProps = defaultProps;

const PrevArrow = (props) => <Arrow key="prevArrow" type="prev" {...props} />;
const NextArrow = (props) => <Arrow key="nextArrow" type="next" {...props} />;

export { PrevArrow, NextArrow };
