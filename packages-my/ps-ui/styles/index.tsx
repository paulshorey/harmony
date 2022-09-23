import { css, Global } from '@emotion/react';
import classes from 'styles/global/classes';
import fonts from 'styles/global/fonts';
import html from 'styles/global/html';
import layout from 'styles/global/layout';

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
