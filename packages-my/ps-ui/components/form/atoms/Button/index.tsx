import Center from '@ps/ui/components/content/molecules/Centered';
import useCustomCSSFromProps from '@ps/ui/hooks/useCustomCSSFromProps';
import useVariants from '@ps/ui/hooks/useVariants';
import {
  CustomCSSProps,
  ReactFCProps,
  VariantProps,
} from '@ps/ui/types/component';
import { HtmlContainerTags } from '@ps/ui/types/html';
import React, { ButtonHTMLAttributes, FC, forwardRef, memo } from 'react';
import { tsFixMe } from 'types/typescript';

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
  (ReactFCProps &
    (VariantProps &
      (CustomCSSProps & {
        /**
         * HTML element tag to render instead of the default "button".
         */
        as?: HtmlContainerTags;
        /**
         * Disable the functionality and style of the button as disabled?
         */
        disabled?: boolean;
        /**
         * This will be shown on a dark background?
         */
        onDark?: boolean;
      })));

/**
 * This is an alternative to styled-system (which is not good for apps/sites that uses a lot of css).
 * Styled-system only supports a subset of CSS, and it pollutes the props namespace, making it difficult to see which props are for styling and which are for logic.
 */
const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      as = 'button',
      className = '',
      variant,
      variants = [],
      disabled,
      onDark,
      ...props
    },
    refFromParent
  ) => {
    const TagName = `${as}` as tsFixMe;
    const { cssFromProps, otherProps } = useCustomCSSFromProps(props);
    return (
      <TagName
        {...otherProps}
        disabled={disabled}
        ref={refFromParent}
        className={`Button ${className ? ' ' + className : ''}`} // className "Block" refers to this dir name, not tag name
        css={[
          cssFromProps,
          useVariants({
            label: 'Button',
            styles,
            variant,
            variants,
            options: {
              onDark,
            },
          }),
        ]}
      >
        <Center>
          <span>{children}</span>
        </Center>
      </TagName>
    );
  }
);

export default memo(Button);
