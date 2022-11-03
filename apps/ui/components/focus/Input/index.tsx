import React, {
  ReactNode,
  InputHTMLAttributes,
  forwardRef,
  memo,
  ReactElement,
} from 'react';
import styleProps from '@ps/ui/types/styles';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import variants from '@ps/ui/components/focus/Input/styles';
import classes from '@ps/ui/components/focus/Input/index.module.css';
import AntInput from 'antd/lib/input';
import withProps from '@ps/ui/hooks/withProps';

export type Props = {
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
} & styleProps &
  InputHTMLAttributes<HTMLElement & HTMLInputElement>;

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

export default memo(forwardRef(Component));

export const withInput = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
