import React from 'react';
import { css, useTheme } from '@emotion/react';
import { pictureFromSrc } from 'src/functions/pictureFromSrc';

import styles from './styles';
import Div from 'src/components/layout/atoms/Div';

/**
 * Renders an optimized HTML5 <picture> tag with <img> inside.
 *    If height or heightWidthRatio provided, then will not affect CLS (cumulative layout shift), for better SEO!
 *    IMPORTANT: Right now, the component relized primarily on width. You can define width and not height, no problem.
 *    But, you can not define height and not width. That will break your image.
 *    Of course, it's best to define both, because only then this component will prevent CLS.
 *
 * @param props.src {string} - (required) original size, original type
 * @param props.width {number} - (required) number of pixels
 *    width and height values should not consider retina display resolution or pixel density. Use 1 to 1 pixel density.
 *    Retina display and pixel density will be automatically configured.
 *    The img will usually be rendered 2x larger than the provided width or height
 * @param props.height {number} - number of pixels
 *
 * @param props.srcSm {string} - alternative file to render for mobile browsers
 *    If not set, src will be used.
 * @param props.widthSm {number} - number of pixels to use for mobile image (optional. Alternatively, use css)
 *    If not set, will be determined from width.
 * @param props.heightSm {number} - number of pixels to use for mobile image (optional. Alternatively, use css)
 *    If not set, will be determined from height.
 *
 * @param props.alt {string} - img alt attribute
 * @param props.notLazy {boolean} - if true, loading="lazy" will NOT be added to img
 * @param props.className {string} - dangerously style this component from a parent, or globally
 * @param props.css {string} - EmotionCSS or inline CSS string. Control the width/height, max-width/max-height
 * @param props.widthMobileBreakpoint {number} - width in pixels - when to switch to smaller resolution image
 * @param props.crop {boolean} - by default, 100% of the picture height and width will be fitted inside the bounding box, with padding around the sides
 *    Pass true to fill 100% of the bounding box, and crop the image height/width, whichever dimension does not fit into the bounding box.
 */
const Picture = ({
  src,
  width,
  height,
  heightWidthRatio,

  srcSm,
  widthSm,
  heightSm,
  heightWidthRatioSm,

  alt,
  notLazy,
  className = '',
  widthMobileBreakpoint = 736,
  heightMobileBreakpoint = 500,
  crop = false,

  ...props
}) => {
  // missing required props
  if (!src || (!width && !height && !heightWidthRatio)) {
    return null;
  }
  // img element attributes
  let imgAttributes = {};
  if (alt) {
    imgAttributes.alt = alt;
  }
  // calculate unspecified dimension, mobile size:
  let picture = pictureFromSrc({
    src,
    srcSm,
    width,
    widthSm,
    height,
    heightSm,
    heightWidthRatio,
    heightWidthRatioSm,
    crop,
  });
  const theme = useTheme();
  return (
    <Div
      {...props}
      className={'Picture' + (className ? ' ' + className : '')}
      css={css`
        ${styles[width ? 'setWidth' : 'setHeight'](theme, {
          width: picture.width,
          height: picture.height,
          widthSm: picture.width_sm,
          heightSm: picture.height_sm,
          widthMobileBreakpoint,
          heightMobileBreakpoint,
          preview: picture.src_preview,
          previewSm: picture.src_preview_sm,
        })}
      `}
    >
      <picture>
        {!!picture.src && <source media={`(min-width:931px)`} srcSet={picture.src} />}
        {!!picture.src_webp && picture.type !== 'image/svg' && (
          <source media={`(min-width:931px)`} srcSet={picture.src_webp} type="image/webp" />
        )}
        {!!picture.src_webp_sm && picture.type !== 'image/svg' && (
          <source srcSet={picture.src_webp_sm} type="image/webp" />
        )}
        <img
          loading={!notLazy ? 'lazy' : ''}
          width={picture.width ? picture.width : undefined}
          height={picture.height ? picture.height : undefined}
          src={picture.src_sm + ''}
          {...imgAttributes}
        />
      </picture>
    </Div>
  );
};

export default Picture;
