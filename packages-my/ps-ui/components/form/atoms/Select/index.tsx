// import { css, jsx, useTheme } from '@emotion/react';
import {
  CustomCSSProps,
  ReactElementProps,
  VariantsCSSType,
} from '@ps/ui/components/types';
import useCustomCSSFromProps from '@ps/ui/hooks/useCustomCSSFromProps';
import useVariants from '@ps/ui/hooks/useVariants';
import React, { FC, forwardRef, memo, SelectHTMLAttributes } from 'react';

import styles from './styles';
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
  (ReactElementProps &
    (VariantsCSSType &
      (CustomCSSProps & {
        /**
         * <Select value="ThisValue" />
         */
        value: string | number;
        /**
         * HTML element tag to render instead of the component's default. Same as styled-system.
         */
        as?: string;
        /**
         * Just the HTML attribute disabled
         */
        disabled?: boolean;
      })));

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css).
 * Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Select: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { value, className = '', variant, variants = [], disabled, ...props },
    refFromParent
  ) => {
    const { mqFromProps, otherProps } = useCustomCSSFromProps(props);
    return (
      <select
        {...otherProps}
        value={value}
        disabled={disabled}
        ref={refFromParent}
        className={`Select ${className ? ' ' + className : ''}`} // className "Div" refers to this dir name, not tag name
        css={[
          mqFromProps,
          useVariants({
            label: 'Select',
            styles,
            variant,
            variants,
          }),
        ]}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    );
  }
);

export default memo(Select);
