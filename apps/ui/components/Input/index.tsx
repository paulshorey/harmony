import React, {
  ReactNode,
  InputHTMLAttributes,
  forwardRef,
  memo,
  ReactElement,
} from 'react';
import styleProps from '@ps/ui/types/styles';
import variants from '@ps/ui/components/Input/styles';
import cssModule from '@ps/ui/components/Input/index.module.css';
import AntInput from 'antd/es/input';
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
  const [value, set_value] = React.useState(props.value || '');
  return (
    <StyledComponent
      {...props}
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
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withInput = (props: Props) =>
  memo(withCombinedProps(forwardRef(Component), props));

// styled "AntInput" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled(AntInput)`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      componentName: 'Input',
      variants,
      cssModule,
    })}
`;
