import React from 'react';
import { css, useTheme } from '@emotion/react';

const styles = css``;

const HomeTemplate = () => {
  const theme = useTheme();
  return (
    <>
      <div className="articleWidth" css={styles}>
        <h1>Homepage</h1>
        <p>Hello world!</p>
      </div>
    </>
  );
};
export default HomeTemplate;
