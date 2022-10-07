import theme from 'styles/theme'; // fixTheme

const overlayStyle = ({
  inWhitePage,
  isAbsolute,
  isAlwaysOverlay,
  isFixed,
  isScrolled,
}) => {
  if (isAlwaysOverlay) {
    return 'background:rgba(0, 0, 0, 0.45);';
  }
  if (isScrolled) {
    if (inWhitePage) {
      return 'background:rgba(0, 0, 0, 0.55);';
    }
    return 'background:rgba(0, 0, 0, 0.45);';
  }
  return '';
};
const shadowStyle = ({
  inWhitePage,
  isAbsolute,
  isAlwaysOverlay,
  isFixed,
  isScrolled,
}) => {
  if (inWhitePage && isScrolled) {
    return 'box-shadow: 0 0 5px 0 rgb(0 0 0 / 50%);';
  }
  return '';
};
const positionStyle = ({
  inWhitePage,
  isAbsolute,
  isAlwaysOverlay,
  isFixed,
  isScrolled,
}) => {
  if (isAlwaysOverlay || isFixed) {
    return 'position:fixed;';
  }
  if (isAbsolute) {
    return `
    ${theme.mq.sm} {
      position:absolute;
    }
    ${theme.mq.lg} {
      position: fixed;
    }
    `;
  }
  return 'position: sticky;';
};

export default ({
  inWhitePage,
  isAbsolute,
  isAlwaysOverlay,
  isFixed,
  isScrolled,
}) => `
  top: 0;
  width: 100vw;
  z-index: 101;
  background: white;
  pointer-events: none;
  z-index: 111;
  box-shadow: none;
  background: transparent;
  width: 100%;

  ${positionStyle({
    isAlwaysOverlay,
    isAbsolute,
    isFixed,
    inWhitePage,
    isScrolled,
  })};
  ${shadowStyle({
    isAlwaysOverlay,
    isAbsolute,
    isFixed,
    inWhitePage,
    isScrolled,
  })};
  ${overlayStyle({
    isAlwaysOverlay,
    isAbsolute,
    isFixed,
    inWhitePage,
    isScrolled,
  })};

  .pageWidth {
    position: relative;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 5px 18px 5px;

    > * {
      pointer-events: all;
    }

    ${theme.mq.sm} {
      padding: 11px 10px 10px 10px;
    }
  }

  .logo {
    box-sizing: border-box;
    margin: 5px 7.5px 0 0;
    padding: 0;
    ${theme.mq.sm} {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      width: 25%;
    }
    ${theme.mq.lg} {
      margin-left: 0;
    }
    ${theme.mq.desktop} {
      margin-left: -5px;
    }

    img {
      width: auto;
      height: 35px;

      ${theme.mq.sm} {
        margin: 5px 0 0 0;
        height: 24px;
      }
    }
  }

  .HDesktopLinks {
    ${theme.mq.sm} {
      display: none;
    }
    font-size: 14px;
    position: relative;
    top: -1px;
    padding: 0;

    .NavDesktopButtons {
      position: relative;
      top: -1px;
      right: -5px;
      a {
        margin-right: 0 !important;
      }
    }

    a {
      &:not(.is-active) {
        ${isScrolled ? `color: white;` : `color: black;`}
      }
      text-shadow: 0 0 25px rgb(0 0 0 / 25%);
      margin: 0 13px 0 13px;

      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0px;
      }
    }
  }
`;
