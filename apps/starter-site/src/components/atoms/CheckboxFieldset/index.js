import React from 'react';
import { css, useTheme } from '@emotion/react';

import styles from './styles';
import Checkbox from 'src/components/atoms/Checkbox';
import Label from 'src/components/atoms/Label';

const FieldsetCheckbox = ({
  name,
  label,
  type = 'text',
  value,
  placeholder,
  onChange,
  error,
  className,
  ...props
}) => {
  const theme = useTheme();
  return (
    <div
      {...props}
      css={styles.wrapper}
      className={'CheckboxFieldset' + (className ? ' ' + className : '')}
    >
      <span css={styles.input}>
        <Checkbox
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </span>
      <Label label={label} error={error} css={styles.label} />
    </div>
  );
};

export default FieldsetCheckbox;
