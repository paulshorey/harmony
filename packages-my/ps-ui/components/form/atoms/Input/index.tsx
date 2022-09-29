// import { css, jsx, useTheme } from '@emotion/react';
import { ReactFCProps, StyleProps, VariantProps } from '@ps/ui/types/component';
import withStyles from 'hooks/withStyles';
import React, { FC, forwardRef, InputHTMLAttributes, memo } from 'react';

import styles from './styles';
/**
 * This is to mimic the disabled state using CSS, but it is still an active button for some reason.
 */
//  pretendDisabled?: boolean;
/**
 * This is to render simple non-interactive read-only elements like span/div/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
export type InputProps = InputHTMLAttributes<HTMLElement & HTMLInputElement> &
  (ReactFCProps &
    (VariantProps &
      (StyleProps & {
        /**
         * <input value="ThisValue" />
         */
        value: string | number;
        /**
         * Just the HTML attribute disabled
         */
        disabled?: boolean;
      })));

/**
 * Form input field. Any type that can be rendered as inline text. Specify type="password" for password, type="number" for numeric.
 */
const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ disabled, value, ...props }, ref) => {
    return <input {...props} value={value} disabled={disabled} ref={ref} />;
  }
);

export default memo(withStyles(Input, 'Input', styles));
