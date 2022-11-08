import React, { forwardRef, memo, HTMLAttributes, ReactElement } from 'react';
import styleProps, { styledTags } from '@ps/ui/types/styles';
import variants from './styles';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import styled from 'styled-components';

export type Props = {
  /**
   * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged.
   */
  as?: styledTags;
} & styleProps &
  HTMLAttributes<HTMLDivElement>;

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

export const withBlock = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "div" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled.div`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      componentName: 'Block',
      variants,
    })}
`;
