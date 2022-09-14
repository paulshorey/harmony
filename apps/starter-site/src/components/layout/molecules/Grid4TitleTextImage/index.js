import React from 'react';
import styles from './styles';
import useVariants from 'src/hooks/useVariants';
import Div from 'src/components/layout/atoms/Div';

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
function Grid4TitleTextImage({
  className,
  variant,
  variants,
  title,
  text,
  image,
  cssSm,
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
