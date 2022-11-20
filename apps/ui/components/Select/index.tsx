import React, { forwardRef, memo } from 'react';
import styleProps from '@ps/ui/types/styles';
import variants from '@ps/ui/components/Select/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import { OptionProps as AntOptionProps } from 'antd/es/select';
import { Select as SelectAnt } from 'antd';
import type { SelectProps as AntSelectProps } from 'antd';
import withStyles from '@ps/ui/hooks/withStyles';

// for convenience, export Option, so user doesn't have to import from antd
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
} & AntOptionProps;
const { Option: OptionAnt } = SelectAnt;
export const Option = OptionAnt;

// Select props
export type Props = styleProps & {
  /**
   * Used to set padding/fontSize/height/line-height.
   * Used only in styles. Not passed to Ant component.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & Omit<AntSelectProps, 'size'>;

/**
 * Select component (includes multi-select and type tags functionality) powered by Ant Design component.
 */
export const Component = (props: Props, ref: any) => {
  // eslint-disable-next-line
  const { size, ...rest } = props;
  return <SelectAnt {...rest} ref={ref} />;
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
