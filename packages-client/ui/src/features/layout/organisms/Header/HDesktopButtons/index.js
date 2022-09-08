import React, { useContext } from 'react';
import { css, useTheme } from '@emotion/react';
import Button from 'src/features/layout/molecules/Button';
import AppSignupLink from 'src/components/molecules/AppSignupLink';
import AppLoginLink from 'src/components/molecules/AppLoginLink';
import PageContext from 'src/context/Page';
import vars from 'src/styles/vars';

const styles = {
  loginButton: css`
    margin-left: 20px;
  `,
  signupButton: css`
    display: inline-block;
    ${vars.mq.sm} {
      display: none !important;
    }
    margin-left: 20px;
    > a {
      display: inline-block;
      margin: 0;

      button {
        width: 100%;
        max-width: 360px;
        font-weight: 400;
      }
    }
  `,
};

const HDesktopButtons = ({ ...props }) => {
  const pageContext = useContext(PageContext) || {};
  return (
    <span className={'HDesktopButtons ' + (!!pageContext.hideNav ? 'show-if-scrolledVH70' : '')}>
      {!!pageContext?.showLogin && (
        <span css={styles.loginButton}>
          <AppLoginLink data-qa="header-desktop-button-login">
            <Button variants={['xsmall', 'square', 'black', 'blueGradient']}>Log in</Button>
          </AppLoginLink>
        </span>
      )}
      <span css={styles.signupButton}>
        <AppSignupLink from="primary_header" {...{ 'data-qa': 'header-desktop-button-signup' }}>
          <Button variants={['small']}>Sign up</Button>
        </AppSignupLink>
      </span>
    </span>
  );
};

export default HDesktopButtons;
