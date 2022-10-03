import Center from '@ps/ui/components/content/molecules/Centered';
import { ReactFCProps, StyleProps } from '@ps/ui/types/component';
import { HtmlContainerTags } from '@ps/ui/types/html';
import withStyles from 'styles/withStyles';
import React, { ButtonHTMLAttributes, FC, forwardRef, memo } from 'react';
import { tsFix } from 'types/typescript';
import variants from './variants';
import objects_add_values from '@ps/fn/io/objects/objects_add_values';
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
    }));

/**
 * Button. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
export const Component: FC<ButtonProps> = forwardRef(
  ({ as = 'button', children, disabled, ...props }, ref) => {
    const TagName = `${as}` as tsFix;
    return (
      <TagName {...props} disabled={disabled} ref={ref}>
        <Center>
          <span>{children}</span>
        </Center>
      </TagName>
    );
  }
);

/**
 * "Component" export is only for Storybook Stories. Because SB docgen doesn't work when wrapped in HOC.
 */
const WrappedInHOC = memo(withStyles(Component, 'Button', variants));

/**
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 */
export const ButtonHOC = (props1: ButtonProps) => (props2: ButtonProps) => {
  const props = objects_add_values(props1, props2, ';', ['children']);
  return <WrappedInHOC {...props} children={props2.children} />;
};

/**
 * Default export wrapped in useful HOC. Ready to use in your JSX. Usage: <Button {...yourProps} />
 */
export default WrappedInHOC;
