import React, {
  ReactNode,
  ButtonHTMLAttributes,
  forwardRef,
  memo,
  ReactElement,
} from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import ssComponentPropsType from '@ps/ui/types/component';
import useStyledComponent from '@ps/ui/styles/useStyledComponent';
import variants from '@ps/ui/components/focus/Button/variants';
import classes from '@ps/ui/components/focus/Button/index.module.css';
import Input from 'antd/lib/input';
// const { Search } = Input;

export type Props = ButtonHTMLAttributes<HTMLElement & HTMLInputElement> &
  ({
    /**
     * Default is regular size. Pass option to render small or large buton instead.
     */
    size?: 'small' | 'large' | string;
    /**
     * If true, will have very rounded corners like a "pill" or "circle".
     */
    round?: boolean;
    /**
     * The label text displayed after (on the right side of) the input field
     */
    addonAfter?: ReactNode;
    /**
     * The label text displayed before (on the left side of) the input field
     */
    addonBefore?: ReactNode;
    /**
     * If allow to remove input content with clear icon
     */
    allowClear?: boolean | { clearIcon: ReactNode };
    /**
     * Whether has border style
     */
    bordered?: boolean;
    /**
     * The initial input content	string
     */
    defaultValue?: string;
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * The ID for input
     */
    id?: string;
    /**
     * The max length
     */
    maxLength?: number;
    /**
     * Set validation status
     */
    status?: 'error' | 'warning';
    /**
     * The prefix icon for the Input
     */
    prefix?: ReactNode;
    /**
     * The suffix icon for the Input
     */
    suffix?: ReactNode;
    /**
     * The callback function that is triggered when Enter key is pressed
     */
    onPressEnter?: (e) => void;
  } & ssComponentPropsType);

/**
 * Button. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  { onClick, ...props },
  ref
) => {
  /*
   * Variants
   */
  if (props.round) {
    props.variant += ' round';
  }
  if (props.size) {
    props.variant += ' size_' + props.size;
  }
  /*
   * Styles
   */
  const [Styled, otherProps] = useStyledComponent(
    props,
    'button',
    'Button',
    variants,
    classes
  );
  return <Input {...props} />;
};

/*
 * Like StyledComponents' div`` but with added functionality:
 * import { withButton } from 'components/focus/Button';
 * const Button = withButton({ ...thesePropsWillApplyToAllInstances });
 * <Button {...optionalUniquePropsForCurrentInstance} />
 */
export const withButton = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Button, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Button" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Button = memo(forwardRef(Component));
export default Button;
