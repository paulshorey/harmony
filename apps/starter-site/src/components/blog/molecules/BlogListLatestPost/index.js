import { css, useTheme } from '@emotion/react';
import Link from 'src/components/atoms/Link';
import ImageWithCategory from 'src/components/blog/molecules/ImageWithCategory';
import HtmlToReact from 'src/components/atoms/HtmlToReact';

const styles = {
  post: () => css`
    width: 100%;

    h3 {
      font-weight: 500;
    }

    p {
      margin: 14px 0;
      color: #000;
      font-weight: 400;

      &.more {
        margin-bottom: 0;
      }

      .more-link {
        display: none;
      }
    }
  `,
  image: () => css`
    margin: 0 0 14px 0;

    .Picture {
      width: 100%;
    }

    span {
      display: block;
    }
  `,
};

const BlogListLatestPost = ({ post, className, ...props }) => {
  let postExcerpt = post.summary;
  if (postExcerpt) {
    postExcerpt = postExcerpt.replace(/,?<a class="more-link/, '...<a class="more-link');
  }
  return (
    <div
      {...props}
      css={styles.post}
      className={'BlogListLatestPost' + (className ? ' ' + className : '')}
    >
      <div css={styles.image}>
        <ImageWithCategory
          post={post}
          alt="image"
          href={`/blog/${post.slug}`}
          width={357}
          height={238}
          css={css`
            width: 100%;
          `}
          isSmall={true}
        />
      </div>
      <h3
        css={css`
          margin-top: 14px;
        `}
      >
        <Link href={`/blog/${post.slug}`} data-qa="blog-list-item-link-title">
          <span dangerouslySetInnerHTML={{ __html: post.title }} />
        </Link>
      </h3>
      <div className="excerpt">
        <HtmlToReact html={postExcerpt} />
      </div>
      <p className="more">
        <Link
          href={`/blog/${post.slug}`}
          className="color-primary"
          data-qa="blog-list-item-link-continue"
        >
          Continue reading...
        </Link>
      </p>
    </div>
  );
};

export default BlogListLatestPost;
