import React, { forwardRef, memo, ReactElement, HTMLAttributes } from 'react';
import variants from './styles';
import styleProps, { styledTags } from '@ps/ui/types/styles';
import withProps from '@ps/ui/hooks/withProps';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';

export type Props = {
  /**
   * The string to display. Special characters will be automatically escaped when rendered to HTML.
   */
  code?: string;
  /**
   * HTML element tag name to render. All other aspects of the component (all CSS) will be unchanged. Default: 'span'
   */
  as?: styledTags;
} & styleProps &
  HTMLAttributes<HTMLDivElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { code, children, ...props },
  ref
) => {
  return (
    <StyledComponent ref={ref} {...props}>
      <span>{code || children}</span>
    </StyledComponent>
  );
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withCodeInline = (props: Props) =>
  memo(withProps(forwardRef(Component), props));

// styled "code" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled.code`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      componentName: 'CodeInline',
      variants,
    })}
`;
