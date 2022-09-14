import React, { useEffect, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import Link from 'src/components/atoms/Link';
import vars from 'src/styles/vars';

const styles = {
  nav: () => css`
    font-size: 16px;
    margin: 20px auto 15px;
  `,
  navItem: css`
    font-family: ${vars.fonts.sfproRouneded};
    margin: 0;

    &:first-of-type {
      margin-left: 0;
    }

    &.is-active a {
      color: ${vars.colors.pink};
    }

    .icon {
      font-size: 12px;
      vertical-align: middle;
      margin-left: 10px;
      margin-right: 10px;
      color: ${vars.colors.pink};
    }

    &:last-child .icon {
      display: none;
    }
  `,
  a: () => css`
    color: inherit;
  `,
};

const Nav = ({ category, className, ...props }) => {
  const theme = useTheme();

  /*
   * Which landing page?
   */
  const [homePath, set_homePath] = useState('/');
  useEffect(() => {
    if (window.homePath) {
      set_homePath(window.homePath);
    }
  }, [typeof window === 'object' && window.homePath]);

  // Always show blog and home pages
  let paths = [
    ['Spiral Home', homePath],
    [
      <span>
        <span className="hide-sm pre">Blog - </span>
        <span>All Articles</span>
      </span>,
      '/blog',
    ],
  ];
  // Category link
  if (category) {
    paths.push([category.name, `/blog/category/${category.slug}`]);
  }
  // Last link should alway be highlighted
  paths[paths.length - 1].isActive = true;

  //
  return (
    <div
      {...props}
      css={styles.nav}
      className={'BlogBreadcrumbs' + (className ? ' ' + className : '')}
    >
      {paths.map((path, i) => {
        return (
          <span key={path + i} className={path.isActive ? 'is-active' : ''} css={styles.navItem}>
            <Link href={path[1]} css={styles.a}>
              {path[0]}
            </Link>
            <span className="icon icon-angle-right" />
          </span>
        );
      })}
    </div>
  );
};

export default Nav;
