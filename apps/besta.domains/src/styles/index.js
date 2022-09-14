import { Global, css } from '@emotion/react';
import html from 'src/styles/global/html';
import classes from 'src/styles/global/classes';
import fonts from 'src/styles/global/fonts';
import layout from 'src/styles/global/layout';

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
