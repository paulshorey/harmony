// import CenterChildrenH from '@ps/ui/components/layout/CenterChildrenH';
// import CenterChildrenV from '@ps/ui/components/layout/CenterChildrenV';
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
import useStyledComponent from '@ps/ui/styles/useStyledComponent';
import variants from '@ps/ui/components/form/Button/variants';
import classes from '@ps/ui/components/form/Button/index.module.css';
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
    loading?: boolean | any /**
    /**
     * React component to display as an icon. Ex: import X from '@ant-design/icons/X';
     */;
    icon?: any;
  } & ssComponentPropsType);

/**
 * Button. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  { onClick, ...props },
  ref
) => {
  /*
   * Props logic
   */
  if (props.loading) {
    if (props.loading === true) {
      props.icon = <IconLoading />;
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
  if (!ref) {
    ref = createRef();
  }
  /*
   * Variants
   */
  if (props.loading) {
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
  const [Styled, otherProps] = useStyledComponent(
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
      {Children}
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
  return withAddPropsToComponent(Button, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Button" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Button = memo(forwardRef(Component));
export default Button;
