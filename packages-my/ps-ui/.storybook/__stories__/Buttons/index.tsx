import Block from '../../../components/content/atoms/Block';
import withStyles from '../../../styles/withStyles';
import React, { ButtonHTMLAttributes, FC, forwardRef, memo } from 'react';
import { tsFix } from '../../../types/typescript';
import variants from '../../../components/form/atoms/Button/variants';
import useComponentWithProps12 from '../../../hooks/useComponentWithProps12';
import ssComponentPropsType from '../../../types/component';

export type Props = ButtonHTMLAttributes<HTMLElement & HTMLButtonElement> &
  (ssComponentPropsType & {
    /**
     * Disable the functionality and style of the button as disabled?
     */
    disabled?: boolean;
  });

/**
 * Button. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
export const Component: FC<Props> = forwardRef(
  ({ as = 'button', children, disabled, ...props }, ref) => {
    const TagName = `${as}` as tsFix;
    return (
      <TagName {...props} disabled={disabled} ref={ref}>
        <Block variant="centered">
          <span>{children}</span>
        </Block>
      </TagName>
    );
  }
);

/*
 * Copy/paste everything below to sync code between components. Then change the name of the variables.
 */
const Default = memo(withStyles(Component, 'Button', variants));

/*
 * This is an HOC, like Styled in @emotion/styled or Styled-Components, to help with styling, and managing props.
 * First you must call it with an object of props which will be used by all instances.
 * Then, you can use the returned value as a normal component. Pass to it props that only the specific instance will use.
 * Can not abstract this to a separate file, because Typescript does not support passing props as args.
 */
export const withButton = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Default, props1, props2);
};

/**
 * Default export is ready to use: <Button {...yourProps} />
 */
export default Default;
