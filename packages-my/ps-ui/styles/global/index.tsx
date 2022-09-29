import { css, Global } from '@emotion/react';

import classes from './classes';
import fonts from './fonts';
import html from './html';
import layout from './layout';

const styles = () => {
  return (
    <Global
      styles={css`
        ${html}
        ${classes}
        ${fonts}
        ${layout}
      `}
    />
  );
};
export default styles;
