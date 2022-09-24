// import { css, jsx, useTheme } from '@emotion/react';
import Div from '@ps/ui/components/layout/atoms/Div';
import Center from '@ps/ui/components/layout/molecules/Center';
// import { css } from '@emotion/css';
import useVariants from '@ps/ui/hooks/useVariants';
import React from 'react';

import styles from './styles';

/**
 * Pass one or multiple `props.variants` which will determine which `styles` properties (CSS) to include.
 */
const Button = ({
  disabled,
  pretendDisabled,
  label,
  children,
  variant,
  variants = [],
  onClick = () => {},
  ...props
}) => {
  // const theme = useTheme();
  if (disabled || pretendDisabled) {
    variants.push('disabled');
  }
  /*
   * Combine styles defined by {variants, variant, css}, in this order
   */
  return (
    <Div
      as="button"
      onClick={onClick}
      disabled={!!disabled}
      css={useVariants({
        styles,
        variant,
        variants,
      })}
      {...props}
    >
      <Center as="span">
        <span>
          {label || children} - {new Date().getHours()}:
          {new Date().getMinutes()}::{new Date().getSeconds()}
        </span>
      </Center>
    </Div>
  );
};

export default Button;
