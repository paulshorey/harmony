import { css } from '@emotion/react';
import React from 'react';
import withCSS from 'src/helpers/withCSS';
import theme from 'src/styles/theme';
import { fieldPropsType } from 'src/types';

const styles = {
  default: css`
    color: ${theme.colors.gray};
    min-width: 30px;
    min-height: 30px;
    appearance: none;
    border: 1px solid #8fa2aa;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    position: relative;
    vertical-align: middle;
    margin: 0;

    :checked::before {
      content: url('/icons/pink-check.svg');
      width: 16px;
      height: 16px;
      position: absolute;
      top: -3px;
      left: 1px;
    }
  `,
};
export type CheckboxProps = fieldPropsType;

/**
 * Checkbox expects props.checked: boolean instead of props.value: string.
 * However, all other components do not use props.checked, only props.value.
 * So, to make things more consistent, and not have to check if type checkbox every time...
 * Checkbox onChange event passes target.value instead of target.checked
 * so Form and FieldSet will receive value instead of checked.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  name,
  onChange,
  value,
  ...props
}) => {
  return (
    <input
      checked={value}
      name={name}
      onChange={() => {
        onChange && onChange({ target: { name, value: !value } });
      }}
      // onKeyDown={(event) => {
      //   // for accessibility, allow toggle by pressing Space key when focused on this element
      //   if (event?.code === 'Space') {
      //     onChange && onChange({ target: { name, value: !value } });
      //   }
      // }}
      type="checkbox"
      value={name}
      {...props}
      css={withCSS({ label: 'Checkbox', styles })}
    />
  );
};

export default Checkbox;
