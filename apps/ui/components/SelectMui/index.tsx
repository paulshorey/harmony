import React, { forwardRef, memo } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SelectMuiImport from '@mui/material/Select';
import variants from '@ps/ui/components/SelectMui/styles';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import withStyles from '@ps/ui/hooks/withStyles';

export type Props = any;

/**
 * SelectMui
 */
export const Component: React.FC<Props> = withStyles(
  forwardRef(
    (
      {
        label = undefined,
        value,
        onChange,
        children,
        helperText,
        ...props
      }: Props,
      ref: any
    ) => {
      return (
        <FormControl fullWidth {...props} size="small" ref={ref}>
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
    }
  ),
  'SelectMui',
  variants
);

/*
 * (1) default export is normal component ready to use (2) withSelectMui is HOC used to predefine common props
 */

export default memo(Component);

export const withSelectMui = (props: Props) =>
  memo(withCombinedProps(Component, props));
