import React from 'react';
import { css, useTheme } from '@emotion/react';

const styles = css``;

const ErrorTemplate = () => {
  const theme = useTheme();
  return (
    <>
      <div className="articleWidth" css={styles}>
        <h1>Page not found</h1>
        <p>
          <a href="/">Go to homepage</a>
        </p>
      </div>
    </>
  );
};
export default ErrorTemplate;
