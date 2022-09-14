import { css } from '@emotion/react';
import vars from 'src/styles/vars';

const layout = css`
  .preventOverflow {
    max-width: 100vw;
    overflow: hidden;
  }

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

    ${vars.break.xsmall.max} {
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

    ${vars.break.xsmall.max} {
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

  // .pagePartnerLogo must be styled globally, because it relies on the <body> tag className (scrolledVH70).
  // NOTE: it appears twice in the codebase. Once in the header, and again in the partner landing page template.
  .partnerPageLogo {
    display: block;
    height: 39px;
    img {
      height: 100%;
      width: auto;
      display: inline-block;
    }
    ${vars.mq.sm} {
      text-align: center;
      img {
        height: 80%;
      }
    }
  }
  body.scrolledVH70 {
    .partnerPageLogo {
      ${vars.mq.lg} {
        // cursor: pointer;
        // position: fixed;
        // top: 28.5px;
        // z-index: 200;
        zoom: 0.8;
        padding-top: -8px;
      }
    }
  }
`;

export default layout;
