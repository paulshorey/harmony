import { css } from '@emotion/react';
import vars from 'src/styles/vars';

/**
 * There is a good reason why this image is so complicated. It is same as next/image, but even better!
 *    To prevent Cumulative Layout Shift - https://www.debugbear.com/docs/metrics/cumulative-layout-shift
 *    The <picture> is loaded as position:absolute, inside a container div which is the same aspect ratio as the picture.
 *    Initial page load, the image has not loaded, but the width/height of the image takes up space in the page
 *    When image loaded, it fills the void. The displacement of the image (width/height) is not changed.
 */
export default {
  setHeight: (
    theme,
    {
      width,
      height,
      widthSm,
      heightSm,
      widthMobileBreakpoint,
      heightMobileBreakpoint,
      preview,
      previewSm,
    }
  ) => css`
    position: relative;
    display: inline-block;
    height: ${height}px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-height: ${heightMobileBreakpoint}px), (max-width: ${widthMobileBreakpoint}px) {
      height: ${heightSm}px;
    }
    picture {
      position: relative;
      > img {
        position: relative;
        height: 100%;
        width: auto;
      }
    }
  `,
  setWidth: (
    theme,
    { width, height, widthSm, heightSm, widthMobileBreakpoint, preview, previewSm }
  ) => css`
    position: relative;
    display: inline-block;
    width: ${width}px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: ${widthMobileBreakpoint}px) {
      width: ${widthSm}px;
    }
    picture {
      position: relative;
      display: block;
      margin-left: auto;
      margin-right: auto;
      > img {
        position: relative;
        width: 100%;
        height: auto;
      }
    }
  `,
};
