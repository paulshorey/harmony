import { css, useTheme } from '@emotion/react';
// import { css } from '@emotion/css';
import useVariants from '@ps/ui/hooks/useVariants';
import Center from '@ps/ui/components/layout/molecules/Center';
import styles from './styles';
import Div from '@ps/ui/components/layout/atoms/Div';

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
    <button
      onClick={onClick}
      disabled={!!disabled}
      css={css`
        background: orange;
        padding: 20px;
      `}
    >
      <Center tag="span">
        <span>{label || children}asdfdfd</span>
      </Center>
    </button>
  );
};

export default Button;
