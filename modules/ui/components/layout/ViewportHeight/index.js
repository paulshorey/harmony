import React from 'react';
import { css, useTheme } from '@emotion/react';
import vars from 'src/styles/vars';

let style = (height, heightMinus) => css`
  ${vars.mq.lg} {
    @media (max-height: 1200px) {
      min-height: calc(${height ? height + 'vh' : '100vh'} - ${heightMinus ? heightMinus : '0'});
    }
    @media (min-height: 1201px) {
      height: calc(${height ? height + 'vh' : '100vh'} - ${heightMinus ? heightMinus : '0'});
    }
    max-height: 1200px;
  }
`;

/**
 * All props are optional! By default, this will make a <div> which will fill 100% of `window?.document?.documentElement?.clientHeight`.
 *    Now DISABLED in mobile browsers. Too buggy with address bar and popups, and all the different small devices.
 * @param tag {string} - specify which HTML tag to use (default = div)
 * @param heightPercent {number} - 0-100 % of the available viewport height (default = 100)
 * @param heightMinus {string} - subtract this CSS value from rendered height (px, %, vh, etc)
 * @param children {any} - JSX or string
 */
const ViewportHeight = ({
  tag = 'div',
  heightMinus,
  heightPercent = 100,
  children,
  className,
  ...props
}) => {
  const TagName = `${tag}`;

  return (
    <TagName
      {...props}
      css={style(heightPercent, heightMinus)}
      className={'ViewportHeight' + (className ? ' ' + className : '')}
    >
      {children}
    </TagName>
  );
};

export default ViewportHeight;
