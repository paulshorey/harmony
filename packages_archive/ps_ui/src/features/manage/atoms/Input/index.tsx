import React from 'react';
import withCSS from 'src/helpers/withCSS';
import { fieldPropsType } from 'src/types';

import styles from './styles';

export type InputProps = fieldPropsType;

const Input: React.FC<InputProps> = ({ onChange = () => {}, ...props }) => {
  return (
    <input
      {...props}
      css={withCSS({ label: 'Input', styles })}
      onChange={(e) => {
        onChange({ target: { name: e.target.name, value: e.target.value } });
      }}
    />
  );
};

export default Input;
