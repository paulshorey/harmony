import React from 'react';
import { css, useTheme } from '@emotion/react';
import { makeLinkPaths } from 'src/components/layout/organisms/Header';
import Link from 'src/components/atoms/Link';

const HDesktopLinks = ({ paths, currentPath, pageContext, className, ...props }) => {
  const theme = useTheme();
  const navLinkPaths = pageContext?.hideNav ? [] : makeLinkPaths({ paths, currentPath });
  return (
    <div {...props} className={'HDesktopLinks ' + (className ? ' ' + className : '')}>
      {/* DESKTOP nav links */}
      {navLinkPaths.map((path, i) => (
        <Link
          data-qa={`header-desktop-nav-link-${path[0].replace(/[^\d\w]/g, '').toLowerCase()}`}
          key={path + i}
          href={path[1]}
          className={path.active ? 'is-active' : ''}
        >
          {path[0]}
        </Link>
      ))}
    </div>
  );
};

export default HDesktopLinks;
