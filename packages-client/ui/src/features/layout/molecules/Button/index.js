import { css, useTheme } from '@emotion/react';
import useVariants from 'src/hooks/useVariants';
import Center from 'src/features/layout/molecules/Center';
import styles from './styles';
import Div from '../../atoms/Div';

const Button = ({
  disabled,
  pretendDisabled,
  className = '',
  label,
  children,
  variant,
  variants = [],
  onClick = () => {},
  ...props
}) => {
  const theme = useTheme();
  if (disabled || pretendDisabled) {
    variants.push('disabled');
  }
  /*
   * Combine styles defined by {variants, variant, css}, in this order
   */
  return (
    <Div
      as="button"
      {...props}
      css={useVariants({
        styles,
        variant,
        variants,
        component: 'Button',
      })}
      onClick={onClick}
      disabled={!!disabled}
      className={className + ' Button'}
    >
      <Center tag="span">
        <span>{label || children}</span>
      </Center>
    </Div>
  );
};

export default Button;
