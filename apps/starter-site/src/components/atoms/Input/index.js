import React, { useEffect, useRef } from 'react';
import { css, useTheme } from '@emotion/react';
import styles from './styles';

const Input = ({ isInFocus = false, className, ...attrs }) => {
  const inputRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (isInFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <input
      css={styles.input(attrs.width)}
      className={'Input' + (className ? ' ' + className : '')}
      onChange={(e) => attrs.onChange(e.target.value)}
      ref={inputRef}
      {...attrs}
    />
  );
};

export default Input;
