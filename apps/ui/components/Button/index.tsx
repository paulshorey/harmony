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
import IconLoading from '@ant-design/icons/LoadingOutlined';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
// import withRipple from './withRipple';
import withStyles from '@ps/ui/hooks/withStyles';
import styled from '@emotion/styled';

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
  value?: ReactElement | string | number;
} & styleProps &
  ButtonHTMLAttributes<HTMLElement & HTMLButtonElement>;

/**
 * Button. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
export const Component: React.FC<Props> = withStyles(
  forwardRef(({ onClick, loading, ...props }: Props, ref: any) => {
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
      Children.push(
        <span key="iconLeft" className="Button--icon">
          {props.icon}
        </span>
      );
    }
    if (props.icon && props.children) {
      Children.push(
        <span key="iconLeftSpacer" className="Button--spacer">
          {' '}
        </span>
      );
    }
    // content
    if (props.value || props.children) {
      Children.push(
        <span key="children" className="Button--text">
          {props.value || props.children}
        </span>
      );
    }
    if (loading) {
      Children.push(
        <span key="loading" className="Button--loading Button--icon">
          {loading}
        </span>
      );
    }
    // icon on the right
    if (props.suffix && props.children) {
      Children.push(
        <span key="iconRightSpacer" className="Button--spacer">
          {' '}
        </span>
      );
    }
    if (props.suffix) {
      Children.push(
        <span key="iconRight" className="Button--icon">
          {props.suffix}
        </span>
      );
    }
    if (!ref) {
      ref = createRef();
    }
    // const ChildrenWithRipple = withRipple({ children: Children });
    return (
      <Styled
        tabIndex={0}
        {...props}
        ref={ref}
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          }
          // remove the blue outline
          // ref?.current?.blur();
        }}
      >
        {props.textgradient ? (
          <Block textgradient={props.textgradient}>{Children}</Block>
        ) : (
          Children
        )}
      </Styled>
    );
  }),
  'Button',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withButton is HOC used to predefine common props
 */

export default memo(Component);

export const withButton = (props: Props) =>
  memo(withCombinedProps(Component, props));

const Styled = styled('button')``;
