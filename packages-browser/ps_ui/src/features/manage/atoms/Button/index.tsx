import React from 'react';
import withCSS from 'src/helpers/withCSS';

import Center from '../../../ui/atoms/Center';
import styles from './styles';

type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
  label?: string | React.ReactNode;
  onClick?: () => void;
  pretendDisabled?: boolean;
  type?: string;
  variant?: string;
  variants?: Array<string>;
};
const Button: React.FC<Props> = ({
  disabled,
  pretendDisabled,
  label,
  children,
  variants = [],
  onClick = () => {},
  ...props
}) => {
  /*
   * CSS
   */
  if (disabled || pretendDisabled) {
    variants.push('disabled');
  }
  /*
   * HTML
   */
  return (
    <button
      {...props}
      css={withCSS({ label: 'Button', styles })}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <Center>
        <span>{label || children}</span>
      </Center>
    </button>
  );
};

export default Button;
