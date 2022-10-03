// import { css, jsx, useTheme } from '@emotion/react';
import { ReactFCProps, StyleProps } from '@ps/ui/types/component';
import withStyles from 'styles/withStyles';
import React, { FC, forwardRef, memo, SelectHTMLAttributes } from 'react';

import styles from './variants';
/**
 * This is to mimic the disabled state using CSS, but it is still an active button for some reason.
 */
//  pretendDisabled?: boolean;
/**
 * This is to render simple non-interactive read-only elements like span/div/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Select.
 */
export type SelectProps = SelectHTMLAttributes<
  HTMLElement & HTMLSelectElement
> &
  (ReactFCProps &
    (StyleProps & {
      /**
       * <Select value="ThisValue" />
       */
      value: string | number;
      /**
       * Just the HTML attribute disabled
       */
      disabled?: boolean;
    }));

/**
 * select element
 */
const Select: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  ({ disabled, value, ...props }, ref) => {
    return (
      <select {...props} value={value} disabled={disabled} ref={ref}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    );
  }
);

export default memo(withStyles(Select, 'Select', styles));
