import { css } from '@emotion/react';
import React from 'react';
import { HELP_CENTER_HREF } from 'src/constants/index';
import { useAuth } from 'src/context/auth';
import { useToast } from 'src/context/toast';
import { pageWidth } from 'src/styles/layout';

import Link from '../../atoms/Link';

const styles = {
  buttonsWrapper: css`
    display: flex;
    align-items: center;
  `,
  content: css`
    ${pageWidth};
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 15px;
  `,
  helpButton: css`
    margin-left: 15px;
  `,
  loginLink: css`
    color: #d83275;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  logoImage: css`
    width: 128px;
    height: 39px;
  `,
  logoWrapper: css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  `,
  wrapper: css`
    box-shadow: 0 1px 2px -2px rgba(141, 149, 157, 0.2),
      0 2px 4px 0 rgba(216, 50, 117, 0.04), 0 2px 4px 0 rgba(216, 50, 117, 0.04);
  `,
};

const Header = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = true;

  const { Toasts } = useToast();

  return (
    <>
      <header css={styles.wrapper}>
        <div css={styles.content}>
          <div css={styles.logoWrapper}>
            <Link
              anchorProps={{ 'aria-current': 'page' }}
              href={isLoggedIn ? '/home' : '/'}
            >
              <img
                alt="Spiral Financial"
                css={styles.logoImage}
                src="/images/logo.svg"
              />
            </Link>
          </div>

          <div css={styles.buttonsWrapper}>
            <span>
              {isLoggedIn ? (
                <Link href="/auth/logout">
                  {/* <>
              <AccountSettingsMenu />
            </> */}
                  <span
                    css={css`
                      color: #d83275;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                    `}
                  >
                    Log out
                  </span>
                </Link>
              ) : (
                <Link href="/auth/login">
                  <span css={styles.loginLink}>Login</span>
                </Link>
              )}
            </span>
            &emsp;•&emsp;
            <Link href={HELP_CENTER_HREF}>
              <span css={styles.loginLink}>Knowledgebase</span>
            </Link>
          </div>
        </div>
      </header>
      <Toasts />
    </>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
