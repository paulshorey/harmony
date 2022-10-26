const layout = (theme) => ` 

  /*
   * VERY USEFUL
   */

  .noWrap {
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
   * Don't look down
   */
  
  /* This is for the Modal component, but this overlay must be outside the component, at the bottom of the page <body> */
  .reactModalOverlay {
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

export default layout;
