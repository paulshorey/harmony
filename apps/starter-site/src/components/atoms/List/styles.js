import { css } from '@emotion/react';
import vars from 'src/styles/vars';

const mixins = {
  ulGraphic: css`
    padding: 0;
    margin: 0 0 25px;
    list-style: none;

    ${vars.mq.phone} {
      li {
        background-position: left 5.5px !important;
      }
    }
  `,
  liGraphic: css`
    padding: 5px 0 5px 48px;
    margin: 15px 0;
    list-style-type: none;
    text-align: left;

    ${vars.mq.mobile} {
      ${vars.mq.notPhone} {
        padding: 5px 0 5px 40px;
        margin: 15px 0 15px 0;
      }
    }

    ${vars.mq.sm} {
      //padding-left: 40px;
    }

    ${vars.mq.phone} {
      padding: 5px 15px 5px 38px;
      margin: 15px 0 15px 16px;
    }
  `,
};

export default {
  default: css`
    padding: 0;
    margin: 30px 0 0 20px;
    list-style-type: disc;

    ${vars.mq.sm} {
      margin-left: 25px;
    }

    li {
      padding: 5px 0 5px 8px;
      margin: 10px 0;
      list-style-type: disc;
      text-align: left;
    }
  `,
  check: css`
    ${mixins.ulGraphic};
    margin-top: 10px;

    li {
      ${mixins.liGraphic};
      padding-top: 10px;
      margin: 10px 0;
      background: url('https://res.cloudinary.com/spiral/image/upload/v1621616068/icons/pink/check.svg')
        no-repeat left center;
      background-size: 22px 22px;
      top: 8px;
    }
  `,
  heart: css`
    ${mixins.ulGraphic};

    li {
      ${mixins.liGraphic};
      background: url('https://res.cloudinary.com/spiral/image/upload/v1621616068/icons/pink/heart.svg')
        no-repeat left center;
      background-size: 17px 17px;
    }
  `,
  shield: css`
    ${mixins.ulGraphic};
    margin-left: 10px;

    li {
      ${mixins.liGraphic};
      background: url('https://res.cloudinary.com/spiral/image/upload/v1621873403/icons/pink/shield.svg')
        no-repeat left center;
      background-size: 20px 20px;
    }
  `,
  disclaimer: css`
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
  `,
  center: css`
    text-align: center;
  `,
  thicker: css`
    font-weight: 400;

    ${vars.mq.sm} {
      font-weight: 500;
    }
  `,
  larger: css`
    letter-spacing: 0.67px;
    font-size: 22px;

    ${vars.mq.sm} {
      font-size: 20px;
    }
  `,
  large: css`
    letter-spacing: 0;
    font-size: 26px;
    line-height: 38px;

    ${vars.mq.sm} {
      font-size: 22px;
      line-height: 32px;
    }
  `,
};
