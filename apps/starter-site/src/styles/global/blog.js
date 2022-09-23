import { css, useTheme } from '@emotion/react';
import vars from 'src/styles/vars';

export const shareButton = () => css`
  width: 45px;
  height: 48px;
  padding-right: 3px;
  border: none;
  background: pink;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 0 60px;
`;

export const wordpressArticle = css`
  word-break: break-word;
  overflow: visible;
  font-size: 20px;

  .wp-blog-body-image {
    width: auto !important;
    height: auto !important;
  }

  .has-small-font-size {
    font-size: 18px;
  }

  img {
    max-width: 100% !important;
    height: auto !important;
  }

  img {
    max-width: 100% !important;
    height: auto !important;
  }

  p {
    font-size: 20px;
    margin: 30px 0;

    ${vars.mq.phone} {
      margin: 25px 0;
    }

    ${vars.mq.phone} {
      font-size: 17px;
    }

    &:after {
      content: ' ';
      display: inline-block;
    }
  }

  ${vars.mq.phone} {
    font-size: 17px;
  }

  p {
    line-height: 1.5 !important;
  }

  figure {
    text-align: center;
    margin-top: 45px;
    margin-bottom: 55px;
  }

  figcaption {
    font-size: 14px;
  }

  h2,
  h2 b,
  h2 strong {
    font-weight: 400;
    font-size: 33px;
    margin: 60px 0 10px;
  }

  h3,
  h3 b,
  h3 strong {
    font-weight: 400;
    font-size: 28px;
    margin: 50px 0 10px;
  }

  h4,
  h4 b,
  h4 strong,
  h5,
  h5 b,
  h5 strong,
  h6,
  h6 b,
  h6 strong {
    font-weight: 500;
    font-size: 24px;
    margin: 40px 0 10px;
  }

  ul {
    padding-left: 22px;
  }

  ul,
  ol {
    line-height: 1.75 !important;
  }

  .is-style-none {
    padding-left: 0;

    ul,
    ol {
      padding-left: 22px;
    }
  }

  .is-style-none,
  .is-style-none ul,
  .is-style-none ol {
    list-style: none;
  }

  blockquote.wp-block-coblocks-click-to-tweet {
    margin-top: 36px;
    margin-bottom: 50px;
    position: relative;
    background: url('/icons/quote.svg') 10px 14px no-repeat;
    background-size: 39px;
    border: solid 1px #bac2c5;
    padding-top: 29px;
    padding-bottom: 38px;
    display: block;
    border-left: none;
    border-right: none;
    font-weight: 200;
    text-align: center;

    p {
      letter-spacing: 0.5px;
      font-weight: 200;
      margin: 4px 40px 24px;
      text-shadow: 0 0 0 #bac2c5;
    }

    b,
    strong {
      font-weight: 300;
    }

    a.tweetButton {
      background: #f1f1f1;
      padding: 10px 30px;
      border-radius: 20px;
      text-decoration: none;
      text-align: center;
      font-size: 14px;
      font-weight: 400;

      &:hover {
        text-decoration: underline;
      }

      &::before {
        content: 'Click to ';
      }

      &::after {
        content: '';
        display: inline-block;
        position: relative;
        top: 2px;
        width: 19px;
        height: 14px;
        margin-left: 8px;
        background: url('/images/icons-color/twitter.svg') right no-repeat;
        background-size: contain;
      }
    }

    .icon-tweet {
      display: inline-block;
      padding-left: 2px;
      position: relative;
      top: 1px;
      left: 3px;
      color: #4ba0ec;
    }

    ${vars.mq.sm} {
      background: url('/icons/quote.svg') 5px 14px no-repeat;
      background-size: 30px;

      p {
        margin: 4px 30px 24px;
      }
    }
  }

  .wp-block-buttons {
    display: block;
    border: none;
    text-align: center;
    margin: 20px 0;
  }
  .wp-block-button {
    display: inline-block;
    border-radius: 5rem;
  }
  .wp-block-button__link {
    display: inline-block;
    border-radius: 5rem;
    padding: 10px 35px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.33px;
  }

  hr {
    border: none;
    border-bottom: solid 1px #ccc;
    margin: 60px 0 68px;
  }
  hr.wp-block-separator.is-style-dots {
    text-align: center;
    border: none;
    color: #ccc;
    padding: 0;
    margin: 40px 0 48px;
    &::before {
      content: ' ';
      font-family: serif;
      width: 250px;
      height: 1px;
      display: inline-block;
      border-top: solid 1px ${vars.colors.hrGray};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      color: ${vars.colors.pink};
    }
  }
`;
