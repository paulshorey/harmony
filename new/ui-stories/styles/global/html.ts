const html = (theme: theme) => `
  :root {
    --onDark: ${theme.colorShadeDefault === "onDark" ? "" : "initial"}; /* initial means NO */
    --onLight: ${theme.colorShadeDefault === "onLight" ? "" : "initial"}; /* initial means NO */
  }
  // Maybe implement CSS variables for dark/light - cascading down to child components - would be great, but very limiting, so idk.
  // https://twitter.com/paulshoreytech/status/1577905462934134784
  /*
  body {
    :root {
      --onDark: initial;
      --onLight: ;
    }
  }
  .onLight {
    --onDark: initial;
    --onLight: ;
  }
  .onDark {
    --onDark: ;
    --onLight: initial;
  }
  div {
    padding: 1rem; margin: 0;
    
    --color-onDark: var(--onDark) orange;
    --color-onLight: var(--onLight) blue;
    color: var(--color-onDark, var(--color-onLight));
    
    --bg-onDark: var(--onDark) #333;
    --bg-onLight: var(--onLight) #ccc;
    background: var(--bg-onDark, var(--bg-onLight));
  }
  */

  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    text-decoration: underline;
  }
  h2 {
    color: orange !important;
  }

  html {
    -webkit-overflow-scrolling: none;
    overscroll-behavior: none;

    /*
     * Using responsive "rem" units to more easily style for all devices.
     */
    font-size: 18px;
    ${theme.mq.veryLargeDesktop} {
      font-size: 20px;
    }
    ${theme.mq.largeDesktop} {
      font-size: 19px;
    }
    ${theme.mq.desktop} {
      font-size: 18px;
    }
    ${theme.mq.tablet} {
      font-size: 17px;
    }
    ${theme.mq.phone} {
      font-size: 16px;
    }
    ${theme.mq.smallPhone} {
      font-size: 16px;
    }
    ${theme.mq.tinyPhone} {
      font-size: 14px;
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
  h6,
  blockquote {
    font-family: "HelveticaNeue", Helvetica, sans-serif;
    line-height: 1.33;
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
  }

  article {
    a {
      text-decoration: underline;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
export default html;
