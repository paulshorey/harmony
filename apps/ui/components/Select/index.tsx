import React, { forwardRef, memo } from 'react';
import styleProps from '@ps/ui/types/styles';
import variants from '@ps/ui/components/Select/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import SelectAnt, { OptionProps as AntOptionProps } from 'antd/es/select';
import type { SelectProps as AntSelectProps } from 'antd/es/select';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

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

// for convenience, export antd option and props, so user does not have to import from antd
const { Option: OptionAnt } = SelectAnt;
export const Option = OptionAnt;
export { OptionProps, AntSelectProps as SelectProps };

export type Props = styleProps & AntSelectProps;

/**
 * Select component (includes multi-select and type tags functionality) powered by Ant Design component.
 */
export const Component: React.FC<Props> = withStyles(
  forwardRef((props: Props, ref: any) => {
    // @ts-ignore // tsFix make sure this is sending correct props and options to Antd select
    return <Styled {...props} ref={ref} />;
  }),
  'Select',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withSelect is HOC used to predefine common props
 */

export default memo(Component);

export const withSelect = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled(SelectAnt)``;
