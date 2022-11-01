import { FC, forwardRef, memo, ReactElement } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import MuiButton from '@mui/material/Button';
import variants from '@ps/ui/components/focus/Button/variants';
import classes from '@ps/ui/components/focus/Button/index.module.css';
import useStyledProps from '@ps/ui/styles/useStyledProps';

export type Props = any;

/**
 * IMPORTANT:
 * title, text, and image must each contain exactly one React JSX child. DO NOT USE the React.Fragment <></>
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  { ...props }: any,
  ref?: any
) => {
  const styledProps = useStyledProps({
    props,
    componentName: 'Button',
    variants,
    classes,
  });
  return <MuiButton {...styledProps} ref={ref} />;
};

/*
 * Like StyledComponents' styled.div`` but with added functionality.
 * import { withButton } from 'components/content/Button';
 * const Button = withButton({ ...thesePropsWillApplyToAllInstances });
 * <Button {...optionalUniquePropsForCurrentInstance} />
 */
export const withButton = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Button, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Button" is same ad default export. But IDEs like VSCode can read a named import better.
 */
export const Button = memo(forwardRef(Component));
export default Button;
