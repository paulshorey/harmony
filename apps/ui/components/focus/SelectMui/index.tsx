import React, { forwardRef, memo, ReactElement, useState } from 'react';
import withAddPropsToComponent from '@ps/ui/hooks/withAddPropsToComponent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMuiImport from '@mui/material/Select';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import variants from '@ps/ui/components/focus/SelectMui/variants';

export type Props = any;

/**
 * Select
 */
export const Component: (props: Props, ref?: any) => ReactElement = ({
  label,
  value,
  onChange,
  ...props
}) => {
  /*
   * Styles
   */
  const styledProps = useStyledProps({
    props,
    componentName: 'Select',
    variants,
  });
  /*
   * State
   */
  return (
    <FormControl fullWidth {...styledProps}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <SelectMuiImport
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        value={value}
        onChange={onChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </SelectMuiImport>
    </FormControl>
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
