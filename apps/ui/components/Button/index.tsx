import React, {
  createRef,
  forwardRef,
  memo,
  ButtonHTMLAttributes,
  ReactElement,
} from 'react';
import styleProps from '@ps/ui/types/styles';
import Block from '@ps/ui/components/Block';
import variants from '@ps/ui/components/Button/styles';
import cssModule from '@ps/ui/components/Button/index.module.css';
import IconLoading from '@ant-design/icons/LoadingOutlined';
import MuiButton from '@mui/material/Button';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';

export type Props = {
  /**
   * Used to set padding/fontSize/height/line-height.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
} & styleProps &
  ButtonHTMLAttributes<HTMLElement & HTMLButtonElement>;

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
  return (
    <StyledComponent
      {...props}
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
        <Block as="span" textgradient={props.textgradient}>
          {Children}
        </Block>
      ) : (
        Children
      )}
    </StyledComponent>
  );
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withButton = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "MuiButton" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled(MuiButton)`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      componentName: 'Button',
      variants,
      cssModule,
    })}
`;
