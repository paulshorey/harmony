import React, { useContext } from 'react';
import { css, useTheme } from '@emotion/react';
import Button from '@ps/ui/components/layout/molecules/Button';
import AppLoginLink from '@ps/ui/components/molecules/AppLoginLink';
import PageContext from '@ps/ui/context/Page';
import vars from '@ps/ui/styles/vars';

const HMobileButtons = ({ hidden, className }) => {
  const pageContext = useContext(PageContext) || {};
  const style = css`
    visibility: ${hidden ? 'hidden' : 'visible'};
    ${vars.mq.lg} {
      display: none !important;
    }
    width: 25%;
    text-align: right;
  `;
  if (!pageContext.showLogin) return null;
  return (
    <div className={'HMobileButtons ' + (className || '')} css={style}>
      {/* MOBILE view signup button is not here, but in the dropdown nav */}
      {/* This button floats in the top-right-corner of the MOBILE view */}
      <AppLoginLink {...{ 'data-qa': 'header-mobile-button-login' }}>
        <Button variants={['xsmall', 'square', 'blueGradient']}>Log in</Button>
      </AppLoginLink>
    </div>
  );
};

export default HMobileButtons;
