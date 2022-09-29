// import { css, jsx, useTheme } from '@emotion/react';
import useCustomCSSFromProps from '@ps/ui/hooks/useCustomCSSFromProps';
import useVariants from '@ps/ui/hooks/useVariants';
import {
  CustomCSSProps,
  ReactFCProps,
  VariantProps,
} from '@ps/ui/types/component';
import { HtmlContainerTags } from '@ps/ui/types/html';
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
      (CustomCSSProps & {
        /**
         * <input value="ThisValue" />
         */
        value: string | number;
        /**
         * HTML element tag to render instead of the default "input".
         */
        as?: HtmlContainerTags;
        /**
         * Just the HTML attribute disabled
         */
        disabled?: boolean;
      })));

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css).
 * Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    { value, className = '', variant, variants = [], disabled, ...props },
    refFromParent
  ) => {
    const { cssFromProps, otherProps } = useCustomCSSFromProps(props);
    return (
      <input
        {...otherProps}
        value={value}
        disabled={disabled}
        ref={refFromParent}
        className={`Input ${className ? ' ' + className : ''}`} // className "Block" refers to this dir name, not tag name
        css={[
          cssFromProps,
          useVariants({
            label: 'Input',
            styles,
            variant,
            variants,
          }),
        ]}
      />
    );
  }
);

export default memo(Input);
