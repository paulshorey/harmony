import Block from '@ps/ui/components/content/atoms/Block';
import withStyles from '@ps/ui/styles/withStyles';
import React, { ButtonHTMLAttributes, FC, forwardRef, memo } from 'react';

import styles from './styles';

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
function Grid4TitleTextImage({ image, text, title, ...props }: any) {
  return (
    <Block {...props}>
      <div className="Grid4TitleTextImage-title">{title}</div>
      <div className="Grid4TitleTextImage-text">{text}</div>
      <div className="Grid4TitleTextImage-image">{image}</div>
    </Block>
  );
}

export default memo(
  withStyles(Grid4TitleTextImage, 'Grid4TitleTextImage', styles)
);
