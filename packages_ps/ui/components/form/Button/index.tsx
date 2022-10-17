import Box from '@ps/ui/components/content/Box';
import {
  ButtonHTMLAttributes,
  FC,
  forwardRef,
  memo,
  ReactElement,
} from 'react';
import variants from '@ps/ui/components/form/Button/variants';
import useComponentWithProps12 from '@ps/ui/hooks/useComponentWithProps12';
import ssComponentPropsType from '@ps/ui/types/component';
import useStyleProps from '@ps/ui/styles/useStyleProps';

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
export const Component: (
  props: Props,
  ref?: ReactForwardedRef
) => ReactElement = ({ children, ...props }, ref) => {
  const [Styled, otherProps] = useStyleProps(
    props,
    'button',
    'Button',
    variants
  );
  return (
    <Styled {...otherProps} ref={ref}>
      <Box variant="centered">
        <span>{children}</span>
      </Box>
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withButton } from 'components/content/Button';
 * const Button = withButton({ ...thesePropsWillApplyToAllInstances });
 * <Button {...optionalUniquePropsForCurrentInstance} />
 */
export const withButton = (props1: Props) => (props2: Props) => {
  return useComponentWithProps12(Button, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Button" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Button = memo(forwardRef(Component));
export default Button;
