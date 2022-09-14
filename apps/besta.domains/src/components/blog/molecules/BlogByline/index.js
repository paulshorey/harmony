import dateFormat from 'dateformat';
import { css, useTheme } from '@emotion/react';
import vars from 'src/styles/vars';
import Picture from 'src/components/atoms/Picture';

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    color: #75868b;
    margin: 25px 0 50px;
    font-size: 24px;

    ${vars.break.xsmall.max} {
      font-size: 15px;
      margin: 20px 0 20px;
    }

    > * {
      display: inline-block;
      vertical-align: middle;
      margin: 0;
    }

    .Picture {
      height: 50px !important;
      width: 50px;
      margin: 0 17px 0 0;
      img {
        background: #ccc;
        border-radius: 50%;
      }
    }

    .text {
      .author {
        display: inline-block;
        padding: 0 10px 0 0;
        margin: 0 9px 0 0;
        font-size: 18px;
        color: #000;
      }

      .date {
        display: block;
        font-size: 15px;
        color: hsl(0deg 0% 49%);
      }
    }
  `,
};
const BlogByline = ({ post, className, ...props }) => {
  let author = post.author;
  let image_src = author.photo;
  return (
    <div
      {...props}
      css={styles.wrapper}
      className={'BlogByline' + (className ? ' ' + className : '')}
    >
      <Picture
        src={image_src}
        alt={'user'}
        width={50}
        height={50}
        crop={true}
        css={css`
          font-size: 0.9rem;
        `}
      />{' '}
      <div className="text">
        {!!author && <span className="author">By {author.name}</span>}
        <span className="date">{dateFormat(post.publishDate, 'mmmm d, yyyy')}</span>
      </div>
    </div>
  );
};

export default BlogByline;
