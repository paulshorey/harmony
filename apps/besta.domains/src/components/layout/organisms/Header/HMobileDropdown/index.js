import React from 'react';
import { css, useTheme } from '@emotion/react';
import styles from './styles';
import Link from 'src/components/atoms/Link';
import { makeLinkPaths } from 'src/components/layout/organisms/Header';

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
              data-qa={`mobile-dropdown-nav-link-${path[0].replace(/[^\d\w]/g, '').toLowerCase()}`}
              key={path + i}
              href={path[1]}
              className={path.active ? 'is-active' : ''}
            >
              {path[0]}
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default HMobileDropdown;
