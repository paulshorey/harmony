import React, { forwardRef, memo, ReactElement } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SelectMuiImport from '@mui/material/Select';
import useStyledProps from '@ps/ui/styles/useStyledProps';
import variants from '@ps/ui/components/focus/SelectMui/styles';
import withProps from '@ps/ui/hooks/withProps';

export type Props = any;

/**
 * Select
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  { label = undefined, value, onChange, children, helperText, ...props },
  ref
) => {
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
    <FormControl fullWidth {...styledProps} size="small" ref={ref}>
      {label && (
        <InputLabel
        // id="demo-simple-select-label"
        >
          {label}
        </InputLabel>
      )}
      <SelectMuiImport
        // labelId="demo-simple-select-label"
        label={label}
        value={value}
        onChange={onChange}
      >
        {children}
      </SelectMuiImport>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default memo(forwardRef(Component));

export const withSelectMui = (props: Props) =>
  memo(withProps(forwardRef(Component), props));
