import React, { forwardRef, memo, ReactElement } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SelectMuiImport from '@mui/material/Select';
import variants from '@ps/ui/components/SelectMui/styles';
import withProps from '@ps/ui/hooks/withProps';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import styled from 'styled-components';

export type Props = any;

/**
 * SelectMui
 */
export const Component: (props: Props, ref?: any) => ReactElement = (
  { label = undefined, value, onChange, children, helperText, ...props },
  ref
) => {
  return (
    <StyledComponent fullWidth {...props} size="small" ref={ref}>
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
    </StyledComponent>
  );
};

/*
 * Under the hood: (1) default export ready to use (2) named export HOC (3) styled component
 */
export default memo(forwardRef(Component));

export const withSelectMui = (props: Props) =>
  memo(withProps(forwardRef(Component), props));

// styled "FormControl" can be overriden by passing props.as="article" or any HTML tag
const StyledComponent = styled(FormControl)`
  ${(props) =>
    style_string_from_props_and_variants({
      props,
      componentName: 'SelectMui',
      variants,
    })}
`;
