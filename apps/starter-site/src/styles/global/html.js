import { css } from '@emotion/react';
import vars from 'src/styles/vars';

const html = css`
  html {
    -webkit-overflow-scrolling: none;
    overscroll-behavior: none;

    /*
     * Using responsive "rem" units to more easily style for all devices.
     */
    font-size: 22px;
    ${vars.mq.veryLargeDesktop} {
      font-size: 24px;
    }
    ${vars.mq.largeDesktop} {
      font-size: 23px;
    }
    ${vars.mq.desktop} {
      font-size: 22px;
    }
    ${vars.mq.tablet} {
      font-size: 21px;
    }
    ${vars.mq.phone} {
      font-size: 20px;
    }
    ${vars.mq.smallPhone} {
      font-size: 18.5px;
    }
    ${vars.mq.tinyPhone} {
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

    ${vars.mq.phone} {
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
    ${vars.mq.sm} {
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

    ${vars.mq.phone} {
      font-size: 30px;
    }
  }

  h3,
  h4 {
    font-size: 24px;
    font-weight: 300;

    ${vars.mq.phone} {
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

    ${vars.mq.phone} {
      font-size: 18px;
    }
  }

  figure {
    margin: 0;
  }

  p {
    font-weight: 400;
  }

  a {
    color: ${vars.colors.pink};
    text-decoration: none;

    &:hover {
      color: ${vars.colors.pinkDark};
      text-decoration: underline;
    }
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
