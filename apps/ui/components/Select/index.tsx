import React, { forwardRef, memo } from 'react';
import styleProps from '@ps/ui/types/styles';
import variants from '@ps/ui/components/Select/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import { OptionProps as AntOptionProps } from 'antd/es/select';
import { Select as SelectAnt } from 'antd';
import type { SelectProps as AntSelectProps } from 'antd';
import withStyles from '@ps/ui/hooks/withStyles';

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
} & AntOptionProps;

// for convenience, export antd option and props, so user does not have to import from antd
const { Option: OptionAnt } = SelectAnt;
export const Option = OptionAnt;
export { AntSelectProps as SelectProps };
export type Props = styleProps & AntSelectProps;

/**
 * Select component (includes multi-select and type tags functionality) powered by Ant Design component.
 */
export const Component = (props: Props, ref: any) => {
  return <SelectAnt {...props} ref={ref} />;
};

/*
 * (1) default export is normal component ready to use (2) withSelect is HOC used to predefine common props
 */
const Styled: React.FC<Props> = withStyles(
  forwardRef(Component),
  'Select',
  variants
);

export default memo(Styled);

export const withSelect = (props: Props) =>
  memo(withCombinedProps(Styled, props));
