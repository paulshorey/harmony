import React, { forwardRef, memo, ReactElement, HTMLAttributes } from 'react';
import variants from './styles';
import { Props as BlockProps } from '@ps/ui/components/Block';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import styleProps from '@ps/ui/types/styles';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';
import style_data_set from '@ps/ui/helpers/style_data_set';

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
export const Component: (props: Props, ref?: any) => ReactElement = (
  { image, text, title, ...props },
  ref
) => {
  const styleDataSet = style_data_set('Grid4TitleTextImage', props);
  return (
    // @ts-ignore - see typeof props.as for allowable HTML tags
    <StyledComponent ref={ref} {...props} {...styleDataSet}>
      <div className="Grid4TitleTextImage-title">{title}</div>
      <div className="Grid4TitleTextImage-text">{text}</div>
      <div className="Grid4TitleTextImage-image">{image}</div>
    </StyledComponent>
  );
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withGrid4TitleTextImage = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "div" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled.div`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      variants,
    })}
`;
