import React, { useState, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';

const style = (theme, color) => css``;

export default ({ children }) => {
  const theme = useTheme();
  if (!children) return null;

  return (
    <a className="notionLink" css={style(theme)} href="#">
      {children}
    </a>
  );
};
