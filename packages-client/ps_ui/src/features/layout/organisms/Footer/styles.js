import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  wrapper: () => css`
    background: #282828;
  `,
  content: () => css`
    color: #ffffff;
    padding: 44px 0 33px 0;

    a {
      color: white;
      font-weight: 300;
      font-size: 16px;
    }

    p {
      margin: 0;
      font-size: 16px;
    }

    .pciDSSCompliantBadge {
      width: 137px;
      height: auto;
    }
  `,

  hr: css`
    display: block;
    height: 1px;
    background-color: rgba(117, 134, 139, 0.5);
  `,

  devTest: css`
    opacity: 0.15;
  `,
  sectionFinePrint: css`
    margin: 16px 0 80px;
    font-size: 15px;
    color: hsl(194deg 9% 60%);
    overflow: auto;
    overflow-x: hidden;

    ${vars.mq.sm} {
      margin: 15px 0 80px;
    }

    p {
      line-height: 1.67;
      font-weight: 300;
      font-size: 15px;
      margin: 15px 0 25px;
    }

    a {
      color: currentColor !important; /* Limitation of EmotionCSS flat list of classNames */
      text-decoration: underline;

      &:hover {
        color: #da387c;
        text-decoration: none;
      }
    }
  `,
  sectionSocial: css`
    margin: 33px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${vars.mq.sm} {
      margin: 40px 0 0 0;
    }

    .title {
      color: white;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 300;
      text-align: center;
      margin: 25px 0;

      ${vars.mq.sm} {
        width: 100%;
      }
    }
  `,
  subSectionSupport: css`
    margin: 35px 0;
    grid-template-columns: 1.5fr 2fr 3fr 10fr;

    ${vars.break.medium.max} {
      grid-template-columns: 1fr 2fr 3fr 8fr;
    }

    ${vars.mq.sm} {
      text-align: center;
    }
  `,
  sectionSupport: css`
    margin: 55px 0 66px 0;

    p {
      margin: 0;
    }

    ${vars.mq.sm} {
      p {
        margin: 7px 0;
      }

      .title {
        margin: 7px 0 14px;
      }
    }
  `,
  sectionLinks: css`
    margin: 44px 0 77px;
    display: flex;

    ${vars.mq.sm} {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 20px 0 30px;
    }

    div {
      flex: 1.6;

      ${vars.mq.sm} {
        margin-top: 30px;
      }
    }

    div:first-of-type {
      flex: 0.75;

      ${vars.mq.sm} {
        margin-top: unset;
        margin-bottom: 13px;
      }
    }

    .logo {
      width: 50px;

      ${vars.mq.sm} {
        width: 55px;
        height: 44px;
      }
    }
  `,
  linksColumn: css`
    .FooterColumnTitle {
      margin-top: 8px;
      text-transform: uppercase;
      font-size: 16px;
    }

    &:last-of-type > .FooterColumnTitle {
      text-transform: unset;

      ${vars.mq.sm} {
        margin-top: 40px;
      }
    }

    a {
      display: block;
      padding-top: 3px;
      line-height: 1.75em;

      ${vars.mq.sm} {
        padding-top: 0px;
      }
    }
  `,
  linksColumnAppStoreButtons: css`
    display: flex;
    align-items: flex-start;
    margin-top: 30px;

    ${vars.mq.sm} {
      margin-top: 24px;
    }

    > a:last-of-type {
      margin-left: 30px;

      ${vars.mq.sm} {
        margin-left: 10px;
      }
    }

    a {
      ${vars.mq.sm} {
        margin-left: 10px;
      }
    }
  `,
};
