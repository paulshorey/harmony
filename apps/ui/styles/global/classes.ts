import { css } from '@emotion/react';

const classes = (theme) => css`
  .noWrap {
    white-space: nowrap;
  }

  /*
   * RESPONSIVE MARKUP
   */

  .hideLargeDesktop {
    ${theme.mq.largeDesktop} {
      display: none !important;
    }
  }

  .hideDesktop {
    ${theme.mq.desktop} {
      display: none !important;
    }
  }

  .hideMobile {
    ${theme.mq.mobile} {
      display: none !important;
    }
  }

  .hidePhone {
    ${theme.mq.phone} {
      display: none !important;
    }
  }

  .hideGt-phone {
    ${theme.mq.notPhone} {
      display: none !important;
    }
  }

  .hideSm {
    ${theme.mq.sm} {
      display: none !important;
    }
  }

  .hideLg {
    ${theme.mq.lg} {
      display: none !important;
    }
  }

  /*
   * Scrolling
   */

  .aTarget {
    position: absolute;
    top: -133px;

    ${theme.mq.sm} {
      top: -118px;
    }

    ${theme.mq.smallPhone} {
      top: -98px;
    }
  }

  body:not(.isScrolled) .showIfScrolled {
    display: none !important;
  }

  body.isScrolled .hideIfScrolled {
    display: none !important;
  }

  body:not(.isScrolledBelowTheFold) .showIfScrolledBelowTheFold {
    display: none !important;
  }

  body.isScrolledBelowTheFold .hideIfScrolledBelowTheFold {
    display: none !important;
  }

  body:not(.isScrolledVH70) .showIfScrolledVH70 {
    display: none !important;
  }
  body.isScrolledVH70 .hideIfScrolledVH70 {
    display: none !important;
  }

  body:not(.isScrolledVH70) .showBackgroundOnlyWhenScrolledVH70 {
    background: none !important;
    box-shadow: none !important;
  }

  /*
   * Font Awesome
   */
  svg:not(:root).svg-inline--fa,
  svg:not(:host).svg-inline--fa {
    overflow: visible;
    box-sizing: content-box;
  }
  .svg-inline--fa {
    display: var(--fa-display, inline-block);
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
    cursor: pointer;
  }
`;

export default classes;
