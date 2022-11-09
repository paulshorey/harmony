import React, { forwardRef, memo, ReactElement, HTMLAttributes } from 'react';
import variants from './styles';
// import { Props as ButtonProps } from '@ps/ui/components/Button';
// import { Props as InputProps } from '@ps/ui/components/Input';
import styleProps from '@ps/ui/types/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';
import style_data_set from '@ps/ui/helpers/style_data_set';

export type Props = styleProps & // ButtonProps & // InputProps & // TODO: would be nice to figure out how to forward props to children elements!
  HTMLAttributes<HTMLDivElement>;

export const Component: (props: Props, ref?: any) => ReactElement = (
  { children, ...props },
  ref
) => {
  const styleDataSet = style_data_set('InputGroup', props);
  return (
    <StyledComponent ref={ref} {...props} {...styleDataSet}>
      {children}
    </StyledComponent>
  );
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withInputGroup = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "div" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled.div`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      variants,
    })}
`;
