import Center from '@ps/ui/components/content/molecules/Centered';
import { ReactFCProps, StyleProps, VariantProps } from '@ps/ui/types/component';
import { HtmlContainerTags } from '@ps/ui/types/html';
import withStyles from 'hooks/withStyles';
import React, { ButtonHTMLAttributes, FC, forwardRef, memo } from 'react';
import { tsFixMe } from 'types/typescript';
import variants from './variants';
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
      (StyleProps & {
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
 * Button. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as = 'button', children, disabled, ...props }, ref) => {
    const TagName = `${as}` as tsFixMe;
    return (
      <TagName {...props} disabled={disabled} ref={ref}>
        <Center>
          <span>{children}</span>
        </Center>
      </TagName>
    );
  }
);

export default memo(withStyles(Button, 'Button', variants));
