import { css } from '@emotion/react';
import theme from '@ps/ui/styles/theme'; // fixTheme

const classes = css`
  .ReactModalOverlay {
    background: rgba(0, 0, 0, 0.4) !important;
    position: fixed;
    inset: 0px;
    z-index: 1000;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  body.overflowHidden {
    overflow: hidden !important;
  }
  body.overflowHiddenFixed {
    overflow: hidden !important;
    // fix mobile Safari, where overflow hidden on body is ignored!
    position: fixed;
    top: 0;
    width: 100%;
  }

  /*
   * .supDisclosure is deprecated. Style inside DisclosureNumber component
   */
  .sup,
  .supDisclosure,
  .supDisclosureFooter {
    display: inline-block;
    vertical-align: top;
    font-weight: inherit;
    font-size: 0.95em;
    margin: 0;
    padding: 0;
    font-family: system-ui, helvetica, 'HelveticaNeue', sans-serif !important;
    opacity: 0.9;
    padding-left: 0.05em;
  }

  .supDisclosureFooter {
    font-size: 0.85em;
    top: -0.15em;
    opacity: 1;
    padding-left: 0;
  }

  .supSmaller {
    font-size: 75%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    .sup {
      font-size: 0.7em;
      ${theme.mq.sm} {
        top: unset;
      }
    }
  }

  .nowrap {
    white-space: nowrap;
  }

  body:not(.scrolled) .show-if-scrolled {
    display: none !important;
  }

  body.scrolled .hide-if-scrolled {
    display: none !important;
  }

  body:not(.scrolledBelowTheFold) .show-if-scrolledBelowTheFold {
    display: none !important;
  }

  body.scrolledBelowTheFold .hide-if-scrolledBelowTheFold {
    display: none !important;
  }

  body:not(.scrolledVH70) .show-if-scrolledVH70 {
    display: none !important;
  }
  body.scrolledVH70 .hide-if-scrolledVH70 {
    display: none !important;
  }

  body:not(.scrolledVH70) .show-background-only-when-scrolledVH70 {
    background: none !important;
    box-shadow: none !important;
  }

  .hide-largeDesktop {
    ${theme.mq.largeDesktop} {
      display: none !important;
    }
  }

  .hide-desktop {
    ${theme.mq.desktop} {
      display: none !important;
    }
  }

  .hide-mobile {
    ${theme.mq.mobile} {
      display: none !important;
    }
  }

  .hide-phone {
    ${theme.mq.phone} {
      display: none !important;
    }
  }

  .hide-gt-phone {
    ${theme.mq.tablet} {
      display: none !important;
    }
    ${theme.mq.desktop} {
      display: none !important;
    }
  }

  .hide-sm {
    ${theme.mq.sm} {
      display: none !important;
    }
  }

  .hide-lg {
    ${theme.mq.lg} {
      display: none !important;
    }
  }

  .color-grey {
    color: #75868b;
  }

  .color-black {
    color: black;
  }

  .color-white {
    color: #ffffff;
  }

  .color-white-M {
    ${theme.mq.sm} {
      color: #ffffff;
    }
  }

  .aname {
    position: absolute;
    top: -133px;

    ${theme.mq.sm} {
      top: -118px;
    }

    ${theme.mq.smallPhone} {
      top: -98px;
    }
  }
`;

export default classes;
