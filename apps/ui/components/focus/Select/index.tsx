import React, { forwardRef, memo } from 'react';
import { Select as SelectAnt, SelectProps } from 'antd';
import styleProps from '@ps/ui/types/styles';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import variants from '@ps/ui/components/focus/Select/variants';
import classes from '@ps/ui/components/focus/Select/index.module.css';

const { Option: OptionAnt } = SelectAnt;

export const Option = OptionAnt;

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
