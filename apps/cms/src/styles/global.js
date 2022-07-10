import { css, Global } from '@emotion/react';

const styles = () => {
  return (
    <Global
      styles={css`
        @import url('/css/reset.css');
      `}
    />
  );
};
export default styles;
