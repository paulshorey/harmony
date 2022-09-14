import React from 'react';
import { css, useTheme } from '@emotion/react';
import Link from 'src/components/atoms/Link';
import Picture from 'src/components/atoms/Picture';
import vars from 'src/styles/vars';

const styles = {
  wrapper: css`
    --tagsOffsetRight: 4.5%;

    position: relative;
    overflow: hidden;
    width: 100%;

    .PictureAtom {
      display: block;
    }

    img {
      border-radius: 8.5px;
      background: #efefef;
      object-fit: cover !important;
    }

    span {
      display: block;
    }

    .categoryTags {
      position: absolute;
      top: 7%;
      right: 2.5%;

      a {
        margin: 0 0 0 9px;
        background: #d92e76;
        border-radius: 9.5px;
        color: white;
        font-size: 19.5px;
        font-weight: 300;
        padding: 7.5px 19px 8.5px;
        cursor: pointer;

        &:hover {
          color: white;
        }
      }

      &.isSmall {
        right: var(--tagsOffsetRight);

        a {
          font-size: 12px;
          font-weight: 500;
          padding: 5.5px 14px 6.5px;
          border-radius: 5.5px;
        }
      }
    }

    ${vars.break.xsmall.max} {
      .categoryTags {
        right: var(--tagsOffsetRight);

        a {
          font-size: 12px;
        }
      }
    }
  `,
};

/**
 * Renders the specified image, with category "tags" overlayed in the top right corner
 * @param categoryList {array<Object>} - aLL categories from Wordpress
 * @param categoryIds {array<String>} - display only these categories
 *
 * Which image to use:
 * @param post {object} - blog post object
 *
 * How big to render the image:
 * @param width {number} - number of pixels wide
 * @param height {number} - number of pixels high
 * @param cssWidth {string} - optional - to use in CSS (ex: '100%')
 * @param cssHeight {string} - optional - to use in CSS (ex: '33.33%')
 *
 * Miscellaneous:
 * @param alt {string} - optional
 * @param href {string} - optional - to wrap image in <a> link with this href
 * @param isSmall {boolean} - optional - if true, will render this image and tags/text smaller
 * @param notLazy {boolean} - optional - if true, will render image right away.
 *    By default, all images on site use "lazy loading", will render after page loaded.
 */
const ImageWithCategory = ({
  alt,
  width,
  height,
  href,
  cssWidth,
  cssHeight,
  isSmall,
  post,
  notLazy,
  className,
  ...props
}) => {
  const src = post.featuredImage;
  // console.log('post', post);
  return (
    <div
      {...props}
      css={styles.wrapper}
      className={'ImageWithCategory' + (className ? ' ' + className : '')}
    >
      {href ? (
        <Link href={href}>
          <Picture
            src={src}
            alt={alt || 'image'}
            width={width}
            height={height}
            notLazy={notLazy}
            crop={true}
          />
        </Link>
      ) : (
        <Picture
          src={src}
          alt={alt || 'image'}
          width={width}
          height={height}
          cssWidth={cssWidth}
          cssHeight={cssHeight}
          notLazy={notLazy}
          crop={true}
        />
      )}
      <div className={'categoryTags' + (isSmall ? ' isSmall' : '')}>
        {post.categories?.map((cat, ci) => (
          <Link key={cat.name + ci} href={`/blog/category/${cat.slug}`}>
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

ImageWithCategory.propTypes = {
  /*
   * Read JS Docs and comments above, also see Picture component.
   */
};

ImageWithCategory.defaultProps = {
  cssWidth: '',
  cssHeight: '',
};

export default ImageWithCategory;
