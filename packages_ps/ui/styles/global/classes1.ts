const classes = (theme: theme) => ` 

  /*
   * VERY USEFUL
   */

  .nowrap {
    white-space: nowrap;
  }

  /*
   * LAYOUT
   */
  
  .pagePadding {
    position: relative;
    padding: 10px 20px;
  }

  .pageWidth {
    position: relative;
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 100%;

    max-width: ${1170}px;
    @media (max-width: ${1170 + 30 + 30}px) {
      width: calc(100% - 60px);
      padding-left: 5px !important;
      padding-right: 5px !important;
    }

    ${theme.mq.phone} {
      width: calc(100% - 30px);
    }
  }

  .articleWidth {
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: auto;
    padding-right: auto;
    width: 100%;

    max-width: ${932}px;
    @media (max-width: ${932 + 28 + 30}px) {
      width: calc(100% - 60px);
    }

    ${theme.mq.phone} {
      width: calc(100% - 40px);
      p {
        padding-left: 1px;
      }
    }
  }

  .pagePaddingBottom {
    padding-bottom: 90px;
    @media (max-width: ${1170 + 30 + 30}px) {
      padding-bottom: 60px;
    }
  }

  .articlePaddingBottom {
    padding-bottom: 90px;
    @media (max-width: ${1170 + 30 + 30}px) {
      padding-bottom: 60px;
    }
  }

  /*
   * RESPONSIVE MARKUP
   */

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
    ${theme.mq.notPhone} {
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

  /*
   * Scrolling
   */

  .a-target {
    position: absolute;
    top: -133px;

    ${theme.mq.sm} {
      top: -118px;
    }

    ${theme.mq.smallPhone} {
      top: -98px;
    }
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

  /*
   * Don't look down
   */
  
  /* This is for the Modal component, but this overlay must be outside the component, at the bottom of the page <body> */
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
`;

export default classes;
