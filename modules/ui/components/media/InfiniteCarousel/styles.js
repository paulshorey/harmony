import { css } from '@emotion/react';
import vars from 'src/styles/vars';

export default {
  slideshow: () => css`
    position: relative;
  `,
  swipeable: () => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
  `,

  white: () =>
    css`
      .carousel-dots > .carousel-dot button::before {
        color: white !important;
      }

      .carousel-dots-active button::before {
        color: white !important;
        opacity: 1 !important;
      }
    `,

  container: (smallerDots = false, showArrows = true) =>
    css`
      margin-left: -15px;
      margin-right: -15px;
      overflow: hidden;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
      padding-bottom: 50px;
      user-select: none;
      -webkit-user-select: none;

      ${vars.mq.sm} {
        padding-bottom: 25px;
      }

      &:hover .carousel-dots {
        z-index: 2000;
      }

      * {
        outline: none !important;
        user-select: none !important;
      }

      .carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        outline: none !important;

        * {
          outline: none !important;
        }
      }

      .Carousel {
        width: 100%;
      }

      .carousel-initialized {
        overflow: hidden;
        position: relative;
      }

      .carousel-arrow.carousel-hidden {
        display: none;
      }

      .carousel-track {
        width: 100%;
        display: flex;
        position: relative;
      }

      /* Arrows */

      span.carousel-arrow {
        display: ${!!showArrows ? 'inline-block' : 'none'};
        position: relative;
        vertical-align: middle;
        width: 0;
        height: ${!!smallerDots ? '13' : '20'}px;
        line-height: ${!!smallerDots ? '13' : '20'}px;
        overflow: visible;
        cursor: pointer;

        > span {
          position: absolute;
          color: currentColor;
        }

        opacity: 0.4;

        &:hover {
          opacity: 1;
        }

        &:first-child > span {
          right: ${!!smallerDots ? '11' : '15'}px;
        }

        &:last-child > span {
          left: ${!!smallerDots ? '11' : '15'}px;
        }
      }

      /* Dots */

      .carousel-dots {
        position: relative;
        display: block;
        width: 100%;
        padding: 20px 0 0 0;
        list-style: none;
        text-align: center;
      }

      .carousel-dots .carousel-dot {
        position: relative;

        display: inline-block;
        vertical-align: middle;

        width: ${!!smallerDots ? '13' : '20'}px;
        height: ${!!smallerDots ? '13' : '20'}px;
        margin: 0 5px;
        padding: 0;

        cursor: pointer;
      }

      .carousel-dots .carousel-dot button {
        font-size: 0;
        line-height: 0;

        display: block;

        width: ${!!smallerDots ? '13' : '20'}px;
        height: ${!!smallerDots ? '13' : '20'}px;
        padding: 5px;

        cursor: pointer;

        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
      }

      .carousel-dots .carousel-dot button:hover,
      .carousel-dots .carousel-dot button:focus {
        outline: none;
      }

      .carousel-dots .carousel-dot button:hover:before,
      .carousel-dots .carousel-dot button:focus:before {
        opacity: 1;
      }

      .carousel-dots .carousel-dot button:before {
        font-family: 'slick';
        font-size: ${!!smallerDots ? '40' : '50'}px;
        line-height: 20px;

        position: absolute;
        top: 0;
        left: 0;

        width: ${!!smallerDots ? '13' : '20'}px;
        height: ${!!smallerDots ? '13' : '20'}px;

        content: '•';
        text-align: center;

        opacity: 0.25;
        color: black;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .carousel-dots li.carousel-dots-active button:before {
        opacity: 0.75;
        color: ${vars.colors.pink};
      }

      .Carousel .carousel-initialized.scrolling .CustomArrow {
        display: none;
      }
    `,
};