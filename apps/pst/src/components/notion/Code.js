import React, { useState, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';

const style = (theme, color) => css`
  background: #f9f9f9;
  padding: 5px;
  border: solid 1px #999;
`;

export default ({ children }) => {
  const theme = useTheme();
  if (!children) return null

  return (
    <code className="notionCode" css={style(theme)}>{children}</code>
  );
}
