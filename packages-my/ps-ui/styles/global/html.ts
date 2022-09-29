import { css } from '@emotion/react';
import theme from '@ps/ui/styles/theme'; // fixTheme

const html = css`
  html {
    -webkit-overflow-scrolling: none;
    overscroll-behavior: none;

    /*
     * Using responsive "rem" units to more easily style for all devices.
     */
    font-size: 22px;
    ${theme.mq.veryLargeDesktop} {
      font-size: 24px;
    }
    ${theme.mq.largeDesktop} {
      font-size: 23px;
    }
    ${theme.mq.desktop} {
      font-size: 22px;
    }
    ${theme.mq.tablet} {
      font-size: 21px;
    }
    ${theme.mq.phone} {
      font-size: 20px;
    }
    ${theme.mq.smallPhone} {
      font-size: 18.5px;
    }
    ${theme.mq.tinyPhone} {
      font-size: 17px;
    }
  }

  body {
    overflow-x: hidden;
    font-family: 'HelveticaNeue', Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    color: #000;
    font-size: 18px;
    line-height: 1.33;
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
    font-family: 'HelveticaNeue', Helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote {
    font-family: 'HelveticaNeue', Helvetica, sans-serif;
    margin-top: 1.125em;
    margin-bottom: 0.675em;
    line-height: 1.33;
    padding: 0;
    ${theme.mq.sm} {
      margin-left: auto;
      margin-right: auto;
    }

    &,
    a {
      color: #333;
    }
  }

  b,
  strong {
    font-weight: 500;
  }

  h1,
  h2 {
    font-size: 44px;
    font-weight: 300;

    ${theme.mq.phone} {
      font-size: 30px;
    }
  }

  h3,
  h4 {
    font-size: 24px;
    font-weight: 300;

    ${theme.mq.phone} {
    }
  }

  h5,
  h6 {
    font-size: inherit;
    font-weight: 300;
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

  sup {
    font-size: 50%;
    padding: 0 0 0 4px;
  }

  table {
    border-spacing: 0;
    border-collapse: separate;

    td:not(:last-child),
    th:not(:last-child) {
      border-right: none !important;
    }

    tr:not(:last-child) td,
    tr:not(:last-child) th {
      border-bottom: none !important;
    }
  }

  .table {
    display: flex;
    flex-direction: column;

    .tr {
      display: flex;
      width: 100%;
      justify-content: center;

      .td,
      .th {
        width: 100%;
      }
    }

    .td:not(:last-child),
    .th:not(:last-child) {
      border-right: none !important;
    }

    .tr:not(:last-child) .td,
    .tr:not(:last-child) .th {
      border-bottom: none !important;
    }

    .td:first-of-type,
    .th:first-of-type {
      border-left: none !important;
    }

    .td:last-child,
    .th:last-child {
      border-right: none !important;
    }

    .tr:first-of-type .td,
    .tr:first-of-type .th {
      border-top: none !important;
    }

    .tr:last-child .td,
    .tr:last-child .th {
      border-bottom: none !important;
    }
  }
`;
export default html;
