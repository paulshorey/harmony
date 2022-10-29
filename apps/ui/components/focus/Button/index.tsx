// import CenterChildrenX from '@ps/ui/components/content/CenterChildrenX';
// import CenterChildrenY from '@ps/ui/components/content/CenterChildrenY';
import {
  ButtonHTMLAttributes,
  createRef,
  FC,
  forwardRef,
  memo,
  ReactElement,
} from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import ssComponentPropsType from '@ps/ui/types/component';
import useStyledOriginal from '@ps/ui/styles/useStyledOriginal';
import Box from '@ps/ui/components/content/Box';
import variants from '@ps/ui/components/focus/Button/variants';
import classes from '@ps/ui/components/focus/Button/index.module.css';
import IconLoading from '@ant-design/icons/LoadingOutlined';

export type Props = ButtonHTMLAttributes<HTMLElement & HTMLButtonElement> &
  ({
    /**
     * Disable the functionality and style of the button as disabled?
     */
    disabled?: boolean;
    /**
     * Default is regular size. Pass option to render small or large buton instead.
     */
    size?: 'small' | 'large' | string;
    /**
     * If true, will have very rounded corners like a "pill" or "circle".
     */
    round?: boolean;
    /**
     * Pass true to use default loading animation. Or pass a custom loading animation component.
     * If button has children, loading animation will play on top of the children.
     * This way, if loading prop is dynamic (after user clicked submit), button size will not change.
     */
    loading?: boolean | ReactElement /**
    /**
     * React component to display as an icon. Ex: import X from '@ant-design/icons/X';
     */;
    icon?: ReactElement;
  } & ssComponentPropsType);

/**
 * Button. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  { onClick, loading = null, ...props },
  ref
) => {
  /*
   * Props logic
   */
  if (loading) {
    if (loading === true) {
      loading = <IconLoading />;
    }
  }
  const Children: any = [];
  if (props.icon) {
    Children.push(<span className="Button--icon">{props.icon}</span>);
  }
  if (props.icon && props.children) {
    Children.push(<span className="Button--spacer"> </span>);
  }
  if (props.children) {
    Children.push(<span className="Button--text">{props.children}</span>);
  }
  if (loading) {
    Children.push(
      <span className="Button--loading Button--icon">{loading}</span>
    );
  }
  if (!ref) {
    ref = createRef();
  }
  /*
   * Variants
   */
  if (loading) {
    props.variant += ' loading';
  }
  if (props.round) {
    props.variant += ' round';
  }
  if (props.size) {
    props.variant += ' size_' + props.size;
  }
  if (props.icon && !props.children) {
    props.variant += ' icon';
  }
  /*
   * Styles
   */
  const [Styled, otherProps] = useStyledOriginal(
    props,
    'button',
    'Button',
    variants,
    classes
  );
  return (
    <Styled
      {...otherProps}
      ref={ref}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
        // remove the blue outline
        ref?.current?.blur();
      }}
    >
      {props.textgradient ? (
        <Box as="span" textgradient={props.textgradient}>
          {Children}
        </Box>
      ) : (
        Children
      )}
    </Styled>
  );
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