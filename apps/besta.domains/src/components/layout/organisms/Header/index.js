import React, { useEffect, useState, useContext } from 'react';
import Link from 'src/components/atoms/Link';
import { css, useTheme } from '@emotion/react';
import PageContext from 'src/context/Page';
import HamburgerButton from 'src/components/layout/organisms/Header/HamburgerButton';
import HDesktopLinks from 'src/components/layout/organisms/Header/HDesktopLinks';
import HMobileDropdown from 'src/components/layout/organisms/Header/HMobileDropdown';
import style from './style';
import Meta from 'src/components/atoms/Meta';

const Header = ({
  isAbsolute = false,
  isFixed = false,
  inWhitePage = false,
  isAlwaysOverlay = false,
  className = '',
}) => {
  const homePath = '/';
  const pageContext = useContext(PageContext) || {};
  const location = pageContext.path || '/';
  const [isScrolled, set_isScrolled] = useState(false);
  const [showMobileDropdown, set_showMobileDropdown] = useState(false);
  const toggle_showMobileDropdown = () => {
    set_showMobileDropdown(!showMobileDropdown);
  };
  /*
   * on Scroll
   */
  const handleScroll = () => {
    if (window.scrollY > 0) {
      set_isScrolled(true);
    } else {
      set_isScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
  useEffect(() => {
    if (showMobileDropdown) {
      window.document.body.classList.add('overflowHiddenFixed');
    } else {
      window.document.body.classList.remove('overflowHiddenFixed');
    }
  }, [showMobileDropdown]);

  let paths = [
    ['home', '/'],
    ['about us', '/about'],
    ['blog', '/blog', '/blog'],
  ];

  const logoImg =
    inWhitePage && !isScrolled && !showMobileDropdown
      ? '/images/icons-pink/spiral-logo.png'
      : '/images/icons-white/spiral-logo.png';
  return (
    <>
      <Meta />

      {/* The MOBILE dropdown nav */}
      <HMobileDropdown
        paths={paths}
        currentPath={location}
        opened={showMobileDropdown}
        onClose={toggle_showMobileDropdown}
        showLogin={pageContext.showLogin}
      />

      {/* The header (LINKS and BUTTONS) for BOTH mobile and desktop */}
      <header
        css={style({ isAlwaysOverlay, inWhitePage, isScrolled, isAbsolute, isFixed })}
        className={
          'Header' +
          (className ? ' ' + className : '') +
          (!!pageContext.hideNav ? ' show-background-only-when-scrolledVH70' : '')
        }
      >
        <div className="pageWidth">
          {!pageContext.hideNav && (
            <HamburgerButton
              isScrolled={isScrolled}
              inWhitePage={inWhitePage}
              opened={showMobileDropdown}
              onClick={toggle_showMobileDropdown}
              data-qa={'header-mobile-hamburger-button'}
            />
          )}
          <div className="logo">
            {/*
             * NOTE: The Partner Logo is in the codebase twice (2x). Once also in the template.
             * Here in the header, it is hidden until user scrolls page below 70% of viewport height.
             * In the template, it is shown at first, then hidden after page is scrolled 70%.
             */}
            {pageContext?.partnerPage?.logoInHeader ? (
              <Link
                data-qa="header-logo-link"
                className="partnerPageLogo show-if-scrolledVH70"
                href={homePath}
              >
                <img
                  data-qa="header-logo-img"
                  src={pageContext?.partnerPage?.logoInHeader}
                  alt="Spiral Financial"
                  css={css`
                    margin: 0 24px 0 0;
                  `}
                />
                <img
                  src={logoImg}
                  alt="Spiral Financial"
                  css={css`
                    margin: 0;
                  `}
                />
              </Link>
            ) : (
              <Link data-qa="header-logo-link" href={homePath}>
                <picture>
                  <source type="image/svg+xml" srcSet={logoImg} />
                  <img
                    data-qa="header-logo-img"
                    src={logoImg}
                    alt="Spiral Financial"
                    width={116}
                    height={35}
                    css={css`
                      margin: 0;
                    `}
                  />
                </picture>
              </Link>
            )}
          </div>
          <HDesktopLinks currentPath={location} paths={paths} pageContext={pageContext} />
        </div>
      </header>
    </>
  );
};
export default Header;

export const makeLinkPaths = function ({ paths, currentPath }) {
  // remove junk from url (query string, anchor name)
  let junkIndex = currentPath.indexOf(/\?|#/);
  if (junkIndex > 1) {
    currentPath = currentPath.substring(0, junkIndex);
  }
  // path[0] = label (link text)
  // path[1] = href (link url)
  // path[2] = starts with (optional, url will be marked active if starts with this url)
  return paths.map((path, i) => {
    // compare only path[2] (preferred) or path[1], not both!
    path.active = false;
    if (path.isActive) {
      path.active = true;
    } else if (path[2]) {
      if (path[2] === currentPath.substring(0, path[2].length)) {
        path.active = true;
      }
    } else if (path[1] === currentPath || path[1] + '/' === currentPath) {
      path.active = true;
    }
    return path;
  });
};
