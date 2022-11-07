import React, { forwardRef, memo } from 'react';
import { Select as SelectAnt, SelectProps } from 'antd';
import styleProps from '@ps/ui/types/styles';
import useStyledProps from '@ps/ui/hooks/useStyledProps';
import variants from '@ps/ui/components/Select/styles';
import cssModule from './index.module.css';
import withProps from '@ps/ui/hooks/withProps';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';

const { Option: OptionAnt } = SelectAnt;
export type OptionProps = {
  value: string;
  /**
   * What to show in the select box instead of the real value. Useful if capitalization is different.
   */
  label?: string;
  /**
   * What to show for each dropdown result item.
   */
  children?: React.ReactNode;
  /**
   * Used to set padding/fontSize/height/line-height.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Option = (props: OptionProps) => {
  const styledProps = useStyledProps({
    props,
    componentName: 'SelectOption',
  });
  // @ts-ignore
  return <OptionAnt {...styledProps} />;
};

export type Props = styleProps & SelectProps;

export const Component = ({ ...props }: Props, ref?: any) => {
  return <StyledComponent {...props} ref={ref} />;
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withSelect = (props: Props) =>
  memo(withProps(forwardRef(Component), props));

// styled "SelectAnt" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled(SelectAnt)`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      componentName: 'Select',
      variants,
      cssModule,
    })}
`;
