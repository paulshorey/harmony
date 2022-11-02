import React, {
  ReactNode,
  InputHTMLAttributes,
  forwardRef,
  memo,
  ReactElement,
} from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import styleProps from '@ps/ui/types/styles';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import variants from '@ps/ui/components/focus/Input/variants';
import classes from '@ps/ui/components/focus/Input/index.module.css';
import AntInput from 'antd/lib/input';

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
     * The prefix icon for the Input
     */
    prefix?: ReactNode;
    /**
     * The suffix icon for the Input
     */
    suffix?: ReactNode;
    /**
     * The max length
     */
    maxLength?: number;
    /**
     * Array of validations to run on the input value. Example: ['required', 'email']. You can also pass RegExp as a string. For example: ['required', '/^\\d+$/']
     */
    validations?: string[];
    /**
     * The callback function that is triggered when Enter key is pressed
     */
    onPressEnter?: (e) => void;
    /**
     * If allow to remove input content with clear icon
     */
    allowClear?: boolean | { clearIcon: ReactNode };
  } & styleProps);

/**
 * Input. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  props,
  ref
) => {
  /*
   * Styles
   */
  const styledProps = useStyledProps({
    props,
    componentName: 'Input',
    variants,
    classes,
  });
  /*
   * State
   */
  const [value, set_value] = React.useState(props.value || '');
  return (
    <AntInput
      {...styledProps}
      value={value}
      onChange={(e) => {
        console.log('onChange', e);
        set_value(e.target.value);
      }}
      onFocus={(e) => {
        console.log('onFocus', e);
      }}
      data-hasvalue={!!value}
      ref={ref}
    />
  );
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
