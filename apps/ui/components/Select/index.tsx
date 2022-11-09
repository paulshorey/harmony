import React, { forwardRef, memo } from 'react';
import styleProps from '@ps/ui/types/styles';
import variants from '@ps/ui/components/Select/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';
import SelectAnt, {
  SelectProps as AntSelectProps,
  OptionProps as AntOptionProps,
} from 'antd/es/select';
import style_data_set from '@ps/ui/helpers/style_data_set';

type OptionProps = {
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
} & AntOptionProps;

export type Props = styleProps & AntSelectProps;

export const Component = ({ ...props }: Props, ref?: any) => {
  const styleDataSet = style_data_set('Select', props);
  return <StyledComponent {...props} {...styleDataSet} ref={ref} />;
};

// for convenience, export antd option and props, so user does not have to import from antd
const { Option: OptionAnt } = SelectAnt;
export const Option = OptionAnt;
export { OptionProps, AntSelectProps as SelectProps };

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withSelect = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "SelectAnt" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled(SelectAnt)`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      variants,
    })}
`;
