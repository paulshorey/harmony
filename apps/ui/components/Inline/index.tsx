import React, { forwardRef, memo, HTMLAttributes, ReactElement } from 'react';
import styleProps, { styledTags } from '@ps/ui/types/styles';
import variants from './styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';

export type Props = {
  /**
   * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged. Default: 'span'
   */
  as?: styledTags;
} & styleProps &
  HTMLAttributes<HTMLSpanElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  props,
  ref
) => {
  return <StyledComponent ref={ref} {...props} />;
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withInline = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "span" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled.span`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      componentName: 'Inline',
      variants,
    })}
`;
