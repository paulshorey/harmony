// import CenterChildrenX from '@ps/ui/components/content/CenterChildrenX';
// import CenterChildrenY from '@ps/ui/components/content/CenterChildrenY';
import {
  ButtonHTMLAttributes,
  createRef,
  forwardRef,
  memo,
  ReactElement,
} from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import ssComponentPropsType from '@ps/ui/types/component';
import Box from '@ps/ui/components/content/Box';
import variants from '@ps/ui/components/focus/Button/variants';
import classes from '@ps/ui/components/focus/Button/index.module.css';
import IconLoading from '@ant-design/icons/LoadingOutlined';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import MuiButton from '@mui/material/Button';

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
    loading?: boolean | ReactElement;
    /**
     * React component to displayed to the left of the text.
     */
    icon?: ReactElement;
    /**
     * React component to displayed to the right of the text.
     */
    suffix?: ReactElement;
    /**
     * Alternative to `props.children`, will overwrite `props.children`.
     */
    value?: string;
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
  // icon on the left
  if (props.icon) {
    Children.push(<span className="Button--icon">{props.icon}</span>);
  }
  if (props.icon && props.children) {
    Children.push(<span className="Button--spacer"> </span>);
  }
  // content
  if (props.children || props.value) {
    Children.push(
      <span className="Button--text">{props.value || props.children}</span>
    );
  }
  if (loading) {
    Children.push(
      <span className="Button--loading Button--icon">{loading}</span>
    );
  }
  // icon on the right
  if (props.suffix && props.children) {
    Children.push(<span className="Button--spacer"> </span>);
  }
  if (props.suffix) {
    Children.push(<span className="Button--icon">{props.suffix}</span>);
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
  const styledProps = useStyledProps({
    props,
    componentName: 'Button',
    variants,
    classes,
  });
  return (
    <MuiButton
      {...styledProps}
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
    </MuiButton>
  );
};

/*
 * Like StyledComponents' styled.div`` but with added functionality:
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
