import React, { useContext } from 'react';
import { css, useTheme } from '@emotion/react';
import Button from '@ps/ui/components/layout/molecules/Button';
import AppSignupLink from '@ps/ui/components/molecules/AppSignupLink';
import AppLoginLink from '@ps/ui/components/molecules/AppLoginLink';
import PageContext from '@ps/ui/context/Page';
import vars from '@ps/ui/styles/vars';

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
    <span
      className={
        'HDesktopButtons ' +
        (!!pageContext.hideNav ? 'show-if-scrolledVH70' : '')
      }
    >
      {!!pageContext?.showLogin && (
        <span css={styles.loginButton}>
          <AppLoginLink data-qa="header-desktop-button-login">
            <Button variants={['xsmall', 'square', 'black', 'blueGradient']}>
              Log in
            </Button>
          </AppLoginLink>
        </span>
      )}
      <span css={styles.signupButton}>
        <AppSignupLink
          from="primary_header"
          {...{ 'data-qa': 'header-desktop-button-signup' }}
        >
          <Button variants={['small']}>Sign up</Button>
        </AppSignupLink>
      </span>
    </span>
  );
};

export default HDesktopButtons;
