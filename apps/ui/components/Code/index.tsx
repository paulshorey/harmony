import React, { memo, HTMLAttributes, forwardRef, ReactElement } from 'react';
import variants from './styles';
import CodeComponent, { Props as CodeProps } from './Code';
import styleProps from '@ps/ui/types/styles';
import withProps from '@ps/ui/hooks/withProps';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';

export type Props = CodeProps & styleProps & HTMLAttributes<HTMLDivElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { code, collapsed, showNumbers, language, prismTheme, ...props },
  ref
) => {
  return (
    <StyledComponent ref={ref} {...props}>
      <CodeComponent
        code={code}
        variant={props.variant}
        language={language}
        prismTheme={prismTheme}
        showNumbers={showNumbers}
        collapsed={collapsed}
      />
    </StyledComponent>
  );
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withCode = (props: Props) =>
  memo(withProps(forwardRef(Component), props));

// styled "div" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled.div`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      componentName: 'Code',
      variants,
    })}
`;
