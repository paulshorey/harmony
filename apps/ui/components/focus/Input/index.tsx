import React, {
  ReactNode,
  InputHTMLAttributes,
  forwardRef,
  memo,
  ReactElement,
} from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import ssComponentPropsType from '@ps/ui/types/component';
import useStyledClassNames from '@ps/ui/styles/useStyledClassNames';
import variants from '@ps/ui/components/focus/Input/variants';
import classes from '@ps/ui/components/focus/Input/index.module.css';
import AntInput from 'antd/lib/input';
// const { Search } = Input;

export type Props = InputHTMLAttributes<HTMLElement & HTMLInputElement> &
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
 * Input. Pass variant such as "primary", "outlined", "cancel", or "disabled"
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
  const styledProps = useStyledClassNames({
    // component: AntInput,
    props,
    componentName: 'Input',
    variants,
    classes,
  });
  /*
   * State
   */
  const [value, set_value] = React.useState('');
  return (
    <AntInput
      value={value}
      onChange={(e) => {
        console.log('onChange', e);
        set_value(e.target.value);
      }}
      onFocus={(e) => {
        console.log('onFocus', e);
      }}
      {...styledProps}
    />
  );

  // const [Styled, otherProps] = useStyledClassNames({
  //   component: Input,
  //   props,
  //   tagName: 'input',
  //   componentName: 'Input',
  //   variants,
  //   classes,
  // });
  // return <Styled {...otherProps} />;
};

/*
 * Like StyledComponents' styled.div`` but with added functionality:
 * import { withInput } from 'components/focus/Input';
 * const Input = withInput({ ...thesePropsWillApplyToAllInstances });
 * <Input {...optionalUniquePropsForCurrentInstance} />
 */
export const withInput = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Input, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Input" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Input = memo(forwardRef(Component));
export default Input;
