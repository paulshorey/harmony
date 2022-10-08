import Box from "@/components/content/atoms/Box";
import { ButtonHTMLAttributes, FC, forwardRef, memo, ReactElement } from "react";
import variants from "components/form/atoms/Button/variants";
import useComponentWithProps12 from "hooks/useComponentWithProps12";
import ssComponentPropsType from "types/component";
import useStyledVariants from "styles/useStyledVariants";

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
export const Component: (props: Props, ref?: ReactForwardedRef) => ReactElement = ({ children, ...props }, ref) => {
  const Styled = useStyledVariants(props, "button", "Button", variants);
  return (
    <Styled {...props} ref={ref}>
      <Box variant="centered">
        <span>{children}</span>
      </Box>
    </Styled>
  );
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withButton } from 'components/content/molecules/Button';
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
