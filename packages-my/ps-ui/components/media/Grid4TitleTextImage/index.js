import Block from '@ps/ui/components/content/atoms/Block';
import useVariants from '@ps/ui/hooks/useVariants';
import React from 'react';

import styles from './styles';

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
function Grid4TitleTextImage({
  className,
  image,
  mqSm,
  text,
  title,
  variant,
  variants,
  ...props
}) {
  return (
    <Block
      {...props}
      className={'Grid4TitleTextImage ' + (className ? ` ${className}` : '')}
      css={useVariants({
        styleSm: mqSm,
        styles,
        variant,
        variants,
      })}
    >
      <div className="Grid4TitleTextImage-title">{title}</div>
      <div className="Grid4TitleTextImage-text">{text}</div>
      <div className="Grid4TitleTextImage-image">{image}</div>
    </Block>
  );
}

export default Grid4TitleTextImage;
