import React, {
  ReactNode,
  SelectHTMLAttributes,
  forwardRef,
  memo,
  ReactElement,
} from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import ssComponentPropsType from '@ps/ui/types/component';
import useStyledClassNames from '@ps/ui/styles/useStyledClassNames';
import variants from '@ps/ui/components/focus/Select/variants';
import classes from '@ps/ui/components/focus/Select/index.module.css';
import AntSelect from 'antd/lib/select';
// const { Search } = Select;

export type Props = SelectHTMLAttributes<HTMLElement & HTMLSelectElement> &
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
     * The prefix icon for the Select
     */
    prefix?: ReactNode;
    /**
     * The suffix icon for the Select
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
  } & ssComponentPropsType);

/**
 * Select. Pass variant such as "primary", "outlined", "cancel", or "disabled"
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  { status, ...props },
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
    props,
    componentName: 'Select',
    variants,
    classes,
  });
  /*
   * State
   */
  const [value, set_value] = React.useState('');
  return (
    <AntSelect
      value={value}
      onChange={(e) => {
        console.log('onChange', e);
        set_value(e.target.value);
      }}
      onFocus={(e) => {
        console.log('onFocus', e);
      }}
      data-hasvalue={!!value}
      {...styledProps}
      ref={ref}
    />
  );
};

/*
 * Like StyledComponents' styled.div`` but with added functionality:
 * import { withSelect } from 'components/focus/Select';
 * const Select = withSelect({ ...thesePropsWillApplyToAllInstances });
 * <Select {...optionalUniquePropsForCurrentInstance} />
 */
export const withSelect = (props1: Props) => (props2: Props) => {
  return withAddPropsToComponent(Select, props1, props2);
};

/*
 * Default export is a ready-to-use component:
 * Named "Component" export is for Storybook only because Storybook can not read props/docs if wrapped in HOC.
 * Named "Select" is same as default export. But IDEs like VSCode can read a named import better.
 */
export const Select = memo(forwardRef(Component));
export default Select;
