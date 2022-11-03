import React, { forwardRef, memo } from 'react';
import { Select as SelectAnt, SelectProps } from 'antd';
import styleProps from '@ps/ui/types/styles';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import variants from '@ps/ui/components/focus/Select/styles';
import classes from '@ps/ui/components/focus/Select/index.module.css';
import withProps from '@ps/ui/hooks/withProps';

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
  const styledProps = useStyledProps({
    props,
    componentName: 'Select',
    variants,
    classes,
  });
  return <SelectAnt {...styledProps} ref={ref} />;
};

export default memo(forwardRef(Component));

export const withSelect = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
