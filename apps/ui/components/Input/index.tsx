import React, { ReactNode, InputHTMLAttributes, forwardRef, memo } from 'react';
import styleProps from '@ps/ui/types/styles';
import variants from '@ps/ui/components/Input/styles';
import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps } from 'antd';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

export type Props = {
  /**
   * Used to set padding/fontSize/height/line-height.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * If true, will have very rounded corners like a "pill" or "circle".
   */
  round?: boolean;
  /**
   * The prefix icon for the Input
   */
  prefix?: ReactNode;
  /**
   * The suffix icon for the Input
   */
  suffix?: ReactNode;
  /**
   * The max length
   */
  maxLength?: number;
  /**
   * Array of validations to run on the input value. Example: ['required', 'email']. You can also pass RegExp as a string. For example: ['required', '/^\\d+$/']
   */
  validations?: string[];
  /**
   * The callback function that is triggered when Enter key is pressed
   */
  onPressEnter?: (e) => void;
  /**
   * If allow to remove input content with clear icon
   */
  allowClear?: boolean | { clearIcon: ReactNode };
} & AntInputProps &
  styleProps &
  InputHTMLAttributes<HTMLElement & HTMLInputElement>;

/**
 * Input. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
export const Component: React.FC<Props> = withStyles(
  forwardRef((props: Props, ref: any) => {
    const [value, set_value] = React.useState(props.value || '');
    return (
      <Styled
        {...props}
        value={value}
        onChange={(e) => {
          console.log('onChange', e);
          set_value(e.target.value);
        }}
        onFocus={(e) => {
          console.log('onFocus', e);
        }}
        data-hasvalue={!!value}
        ref={ref}
      />
    );
  }),
  'Input',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withInput is HOC used to predefine common props
 */

export default memo(Component);

export const withInput = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled(AntInput)``;
