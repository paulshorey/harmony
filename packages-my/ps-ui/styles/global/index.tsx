import { css, Global, useTheme } from '@emotion/react';

import classes from './classes';
// import fonts from './fonts';
// import layout from './layout';
import html from './html';

const styles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${html(theme)}
        ${classes(theme)}
      `}
    />
  );
};
export default styles;
