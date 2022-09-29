import { css, useTheme } from '@emotion/react';
import Link from '@ps/ui/components/atoms/Link';
import { makeLinkPaths } from '@ps/ui/components/content/organisms/Header';
import DesktopButtons from '@ps/ui/components/content/organisms/Header/HDesktopButtons';

import React from 'react';

const HDesktopLinks = ({
  className,
  currentPath,
  pageContext,
  paths,
  ...props
}) => {
  const theme = useTheme();
  const navLinkPaths = pageContext?.hideNav
    ? []
    : makeLinkPaths({ paths, currentPath });
  return (
    <div
      {...props}
      className={'HDesktopLinks ' + (className ? ' ' + className : '')}
    >
      {/* DESKTOP nav links */}
      {navLinkPaths.map((path, i) => (
        <Link
          data-qa={`header-desktop-nav-link-${path[0]
            .replace(/[^\d\w]/g, '')
            .toLowerCase()}`}
          key={path + i}
          href={path[1]}
          className={path.active ? 'is-active' : ''}
        >
          {path[0]}
        </Link>
      ))}
      {/* DESKTOP buttons */}
      <DesktopButtons />
    </div>
  );
};

export default HDesktopLinks;
