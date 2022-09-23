import { Global, css } from '@emotion/react';
import html from 'styles/global/html';
import classes from '@ps/ui/styles/global/classes';
import fonts from 'styles/global/fonts';
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
