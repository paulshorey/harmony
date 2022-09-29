import { css, useTheme } from '@emotion/react';
import Button from '@ps/ui/components/content/molecules/Button';
import AppLoginLink from '@ps/ui/components/molecules/AppLoginLink';
import AppSignupLink from '@ps/ui/components/molecules/AppSignupLink';
import PageContext from '@ps/ui/context/Page';
import React, { useContext } from 'react';

const styles = {
  loginButton: css`
    margin-left: 20px;
  `,
  signupButton: (theme) => css`
    display: inline-block;
    ${theme.mq.sm} {
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
        'HDesktopButtons ' + (pageContext.hideNav ? 'show-if-scrolledVH70' : '')
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
