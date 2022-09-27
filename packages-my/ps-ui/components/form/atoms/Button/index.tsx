// import { css, jsx, useTheme } from '@emotion/react';
import {
  CustomCSSProps,
  ReactElementProps,
  VariantsCSSType,
} from '@ps/ui/components/types';
import useCustomCSSFromProps from '@ps/ui/hooks/useCustomCSSFromProps';
import useVariants from '@ps/ui/hooks/useVariants';
import React, { ButtonHTMLAttributes, FC, forwardRef, memo } from 'react';

import Center from '../../../layout/molecules/Centered';
import styles from './styles';
/**
 * This is to mimic the disabled state using CSS, but it is still an active button for some reason.
 */
//  pretendDisabled?: boolean;
/**
 * This is to render simple non-interactive read-only elements like span/div/p/h1/sup/a/center.
 * For interactive form elements, use something more specific like components/form/atoms/Input.
 */
export type ButtonProps = ButtonHTMLAttributes<
  HTMLElement & HTMLButtonElement
> &
  (ReactElementProps &
    (VariantsCSSType &
      (CustomCSSProps & {
        /**
         * Just the HTML attribute disabled
         */
        disabled?: boolean;
      })));

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css).
 * Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      as,
      className = '',
      variant,
      variants = [],
      disabled,
      ...props
    },
    refFromParent
  ) => {
    const TagName = `${as}` as any;
    const { cssFromProps, otherProps } = useCustomCSSFromProps(props);
    return (
      <TagName
        {...otherProps}
        disabled={disabled}
        ref={refFromParent}
        className={`Button ${className ? ' ' + className : ''}`} // className "Div" refers to this dir name, not tag name
        css={[
          cssFromProps,
          useVariants({
            label: 'Button',
            styles,
            variant,
            variants,
          }),
        ]}
      >
        <Center>
          <span>
            {children} - {new Date().getHours()}:{new Date().getMinutes()}::
            {new Date().getSeconds()}
          </span>
        </Center>
      </TagName>
    );
  }
);

export default memo(Button);
