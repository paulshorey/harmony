const html = (theme) => `
  html {
    -webkit-overflow-scrolling: none;
    overscroll-behavior: none;

    /*
     * Using responsive "rem" units to more easily style for all devices.
     */
    font-size: 16.5px;
    ${theme.mq.veryLargeDesktop} {
      font-size: 18.5px;
    }
    ${theme.mq.largeDesktop} {
      font-size: 17.5px;
    }
    ${theme.mq.desktop} {
      font-size: 16.5px;
    }
    ${theme.mq.tablet} {
      font-size: 15.5px;
    }
    ${theme.mq.phone} {
      font-size: 15.5px;
    }
    ${theme.mq.smallPhone} {
      font-size: 14.5px;
    }
    ${theme.mq.tinyPhone} {
      font-size: 14.5px;
    }
  }

  body {
    overflow-x: hidden;
    font-family: "HelveticaNeue", Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    color: #000;
    font-size: 18px;
    line-height: 1.33rem;
    min-height: 100vh;
    font-weight: 400;

    ${theme.mq.phone} {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
  }

  style {
    display: none !important;
  }

  button {
    font-family: "HelveticaNeue", Helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-decoration:none;
    border:none;
    font-family: "HelveticaNeue", Helvetica, sans-serif;
    line-height: 1.5;
    padding: 0;
    ${theme.mq.sm} {
      margin-left: auto;
      margin-right: auto;
    }

    &,
    a {
      color: inherit;
    }
  }

  a {
    cursor:pointer;
    text-decoration:underline;
    &:hover {
      text-decoration:none;
    }
  }

  b,
  strong {
    font-weight: 500;
  }

  blockquote {
    border-left: solid 4px #ccc;
    padding: 8px 0 8px 16px;
    font-size: 22px;
    ${theme.mq.phone} {
      font-size: 18px;
    }
  }

  figure {
    margin: 0;
  }

  p {
    font-weight: 400;
    line-height: 1.5;
    margin: 1.25rem;
  }
`;
export default html;
