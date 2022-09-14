import React from 'react';
import { css, useTheme } from '@emotion/react';
import styles from './styles';

const Label = ({ label, error, className, ...props }) => {
  const theme = useTheme();
  return (
    <label {...props} css={styles.label} className={'Label' + (className ? ' ' + className : '')}>
      {label}
      <span css={styles.labelError}>{!!error && <span>{error}</span>}</span>
    </label>
  );
};
export default Label;
