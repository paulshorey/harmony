const classes = (theme: theme) => `
  .bg {
    color: var(--color-text);
    background: var(--color-bg);
  }

  .text {
    color: var(--color-text);  
  }

  .bgGradient {
    box-decoration-break: clone;
    color: var(--color-bg-text);
    background: var(--color-bg);
    background-image: linear-gradient(
      333deg,
      var(--color-bg-to) 0%,
      var(--color-bg-from) 75%
    );
  }

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

  .sup {
    font-size: 0.7em;
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

  .atarget {
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
