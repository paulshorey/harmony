import React from 'react';
import { css, useTheme } from '@emotion/react';
import styles from './styles';
import Input from 'src/components/atoms/Input';
import Label from 'src/components/atoms/Label';

const FieldsetText = ({
  className = '',
  name,
  label,
  type = 'text',
  value,
  placeholder,
  onChange,
  error,
  ...props
}) => {
  const theme = useTheme();
  return (
    <div
      {...props}
      css={styles.wrapper}
      className={'InputFieldset' + (className ? ' ' + className : '')}
    >
      <Label label={label} error={error} />
      <Input
        css={styles.input}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FieldsetText;
