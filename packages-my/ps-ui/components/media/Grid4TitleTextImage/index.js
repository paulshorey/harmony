import Div from '@ps/ui/components/layout/atoms/Div';
import useVariants from '@ps/ui/hooks/useVariants';
import React from 'react';

import styles from './styles';

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
function Grid4TitleTextImage({
  className,
  cssSm,
  image,
  text,
  title,
  variant,
  variants,
  ...props
}) {
  return (
    <Div
      {...props}
      className={'Grid4TitleTextImage ' + (className ? ` ${className}` : '')}
      css={useVariants({
        styleSm: cssSm,
        styles,
        variant,
        variants,
      })}
    >
      <div className="Grid4TitleTextImage-title">{title}</div>
      <div className="Grid4TitleTextImage-text">{text}</div>
      <div className="Grid4TitleTextImage-image">{image}</div>
    </Div>
  );
}

export default Grid4TitleTextImage;
