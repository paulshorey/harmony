import { css, useTheme } from '@emotion/react';
import Button from 'components/content/molecules/Button';
import AppLoginLink from 'components/molecules/AppLoginLink';
import PageContext from 'context/Page';
import theme from 'styles/theme'; // fixTheme
import React, { useContext } from 'react';

const HMobileButtons = ({ className, hidden }) => {
  const pageContext = useContext(PageContext) || {};
  const style = `
    visibility: ${hidden ? 'hidden' : 'visible'};
    ${theme.mq.lg} {
      display: none !important;
    }
    width: 25%;
    text-align: right;
  `;
  if (!pageContext.showLogin) {
    return null;
  }
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
