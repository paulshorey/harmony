import React, { forwardRef, memo, HTMLAttributes, ReactElement } from 'react';
import variants from './styles';
import { Props as BlockProps } from '@ps/ui/components/Block';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import styleProps from '@ps/ui/types/styles';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

export type Props = {
  image: ReactElement;
  title: ReactElement;
  text: ReactElement;
  as?: BlockProps['as'];
} & styleProps &
  HTMLAttributes<HTMLDivElement>;

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
export const Component: React.FC<Props> = withStyles(
  forwardRef(({ image, text, title, ...props }: Props, ref: any) => {
    return (
      <Styled ref={ref} {...props}>
        <div className="Grid4TitleTextImage-title">{title}</div>
        <div className="Grid4TitleTextImage-text">{text}</div>
        <div className="Grid4TitleTextImage-image">{image}</div>
      </Styled>
    );
  }),
  'Grid4TitleTextImage',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withGrid4TitleTextImage is HOC used to predefine common props
 */

export default memo(Component);

export const withGrid4TitleTextImage = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('div')``;
