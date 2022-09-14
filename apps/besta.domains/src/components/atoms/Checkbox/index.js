import { createRef } from 'react';
import propTypes from 'prop-types';
import { css, useTheme } from '@emotion/react';
import vars from 'src/styles/vars';

const styles = (theme) => css`
  color: ${vars.colors.gray};
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
    content: url('/images/icons-pink/check.svg');
    width: 16px;
    height: 16px;
    position: absolute;
    top: -3px;
    left: 1px;
  }
`;

/**
 * IMPORTANT: Too keep things consistent with other form field types, instead of passing variable "checked", pass "value"
 * @param value {boolean} - this is value for "checked" attribute passed to <input type="checkbox" checked={value} />
 * @param name {string}
 * @param onChange {function}
 */
const Checkbox = ({ name, value = false, onChange, className, ...props }) => {
  const elRef = createRef();
  return (
    <input
      {...props}
      name={name}
      ref={elRef}
      type="checkbox"
      css={styles}
      checked={!!value}
      value={name}
      onChange={() => {
        // send mock event (for consistency, pass "value", not "checked", theyre the same thing)
        onChange({ target: { name, value: !value } });
      }}
      onKeyDown={(event) => {
        // for accessibility, allow toggle by pressing Enter key when focused on this element
        if (event?.code === 'Enter' && elRef.current) {
          // send mock event (for consistency, pass "value", not "checked", theyre the same thing)
          onChange({ target: { name, value: !value } });
        }
      }}
      className={'Checkbox' + (className ? ' ' + className : '')}
    />
  );
};

Checkbox.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.bool,
};
Checkbox.defaultProps = {
  value: false,
};

export default Checkbox;
