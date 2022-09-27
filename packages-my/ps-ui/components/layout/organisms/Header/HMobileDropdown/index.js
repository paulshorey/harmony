import { css, useTheme } from '@emotion/react';
import Link from '@ps/ui/components/atoms/Link';
import Button from '@ps/ui/components/layout/molecules/Button';
import Center from '@ps/ui/components/layout/molecules/Centered';
import { makeLinkPaths } from '@ps/ui/components/layout/organisms/Header';
import AppLoginLink from '@ps/ui/components/molecules/AppLoginLink';
import AppSignupLink from '@ps/ui/components/molecules/AppSignupLink';
import React from 'react';

import styles from './styles';

const HMobileDropdown = ({
  paths,
  currentPath,
  opened,
  onClose = () => {},
  showLogin,
  className,
  inWhitePage,
  ...props
}) => {
  const theme = useTheme();
  const navLinkPaths = makeLinkPaths({ paths, currentPath });
  return (
    <>
      {!!opened && <div css={styles.overlay} onClick={onClose} />}
      <div
        {...props}
        css={styles.wrapper(opened)}
        className={'HMobileDropdown ' + (className ? ' ' + className : '')}
      >
        <section>
          {/* MOBILE nav links */}
          {navLinkPaths.map((path, i) => (
            <Link
              data-qa={`mobile-dropdown-nav-link-${path[0]
                .replace(/[^\d\w]/g, '')
                .toLowerCase()}`}
              key={path + i}
              href={path[1]}
              className={path.active ? 'is-active' : ''}
            >
              {path[0]}
            </Link>
          ))}
          {/* MOBILE dropdown buttons */}
          <Center css={styles.buttonsBottom(theme)}>
            {!!showLogin && (
              <>
                <label>Already a customer?</label>
                <AppLoginLink
                  from="MobileNav"
                  {...{ 'data-qa': 'mobile-dropdown-nav-button-login' }}
                >
                  <Button variants={['whiteBlueText']}>Log in</Button>
                </AppLoginLink>
                <hr />
              </>
            )}
            <label>Not a customer yet?</label>
            <AppSignupLink
              from="MobileNav"
              data-qa="mobile-dropdown-nav-button-signup"
            >
              <Button variants={['causeCTA']} className="CTA_primaryButton">
                Sign up
              </Button>
            </AppSignupLink>
          </Center>
        </section>
      </div>
    </>
  );
};

export default HMobileDropdown;
